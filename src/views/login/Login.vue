<template>
  <div class="wrapper">
    <img src="../../assets/dummy_56x56_000000_e8968b.png" alt="" class="wrapper__img">
    <div class="wrapper__input">
      <input
        type="text"
        placeholder="用户名"
        class="wrapper__input__content"
        v-model="data.username"
      />
    </div>
    <div class="wrapper__input">
      <input
        type="password"
        placeholder="请输入密码"
        class="wrapper__input__content"
        v-model="data.password"
      />
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登录</div>
    <div class="wrapper__login-link" @click="handleRegister">立即注册</div>
    <Toast v-if="toastData.showToast" :message="toastData.toastMessage"/>
  </div>

</template>

<script>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/Toast'

export default {
  name: 'Login',
  components: { Toast },
  setup () {
    const router = useRouter()
    const data = reactive({ username: '', password: '' })
    const { toastData, showToast } = useToastEffect()

    /* 登录逻辑 */
    const handleLogin = async () => {
      try {
        const result = await post('/api/user/login', {
          username: data.username,
          password: data.password
        })

        console.log(result)
        if (result?.errno === 0) {
          localStorage.isLogin = true
          await router.push({ name: 'Home' })
        } else {
          showToast('登录失败')
          // alert('登录失败')
        }
      } catch (e) {
        showToast('请求失败')
      }
    }
    const handleRegister = () => {
      router.push({ name: 'Register' })
    }
    return { data, handleLogin, handleRegister, toastData }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';

.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);

  &__img {
    display: block;
    margin: 0 auto .4rem auto;
    width: .66rem;
    height: .66rem;
    border-radius: 50%;
  }

  &__input {
    box-sizing: border-box;
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    padding: 0 .16rem;
    background: #f9f9f9;
    border-radius: .06rem;

    &__content {
      line-height: .48rem;
      border: none;
      outline: none;
      background: none;
      width: 100%;
      font-size: .16rem;
      color: $content-notice-fontcolor;

      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }

  &__login-button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    font-size: .16rem;
    text-align: center;
    background: #0091FF;
    box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 225, 0.32);
    border-radius: .04rem;
    color: #fff;
  }

  &__login-link {
    font-size: .14rem;
    color: $content-notice-fontcolor;
    text-align: center;
  }
}

</style>
