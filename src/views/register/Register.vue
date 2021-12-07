<template>
  <div class="wrapper">
    <img src="../../assets/dummy_56x56_000000_e8968b.png" alt="" class="wrapper__img">
    <div class="wrapper__input">
      <input type="text" placeholder="请输入手机号" class="wrapper__input__content"/>
    </div>
    <div class="wrapper__input">
      <input type="password" placeholder="请输入密码" class="wrapper__input__content"/>
    </div>
    <div class="wrapper__input">
      <input type="password" placeholder="确认密码" class="wrapper__input__content"/>
    </div>
    <div class="wrapper__register-button" @click="handleRegister">注册</div>
    <div class="wrapper__register-link" @click="handleLoginClick">立即登录</div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'Register',
  setup () {
    const router = useRouter()

    const handleRegister = () => {
      // localStorage.isregister = true
      // router.push({ name: 'Home' })
    }

    const handleLoginClick = () => {
      router.push({ name: 'Login' })
    }

    return { handleRegister, handleLoginClick }
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

  &__register-button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    font-size: .16rem;
    text-align: center;
    background: #0091FF;
    box-shadow: 0 .04rem .08rem 0 rgba(0, 145, 225, 0.32);
    border-radius: .04rem;
    color: #fff;
  }

  &__register-link {
    font-size: .14rem;
    color: $content-notice-fontcolor;
    text-align: center;
  }
}

</style>
