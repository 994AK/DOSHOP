<template>
  <div class="toast"> {{ message }} </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
  name: 'Toast',
  props: ['message']
}

export const useToastEffect = () => {
  const toastData = reactive({
    show: false,
    toastMessage: ''
  })

  const showToast = (message) => {
    toastData.show = true
    toastData.toastMessage = message
    setTimeout(() => {
      toastData.show = false
      toastData.toastMessage = ''
    }, 2000)
  }
  const { show, toastMessage } = toRefs(toastData)

  return { show, toastMessage, showToast }
}
</script>

<style lang="scss" scoped>
  .toast {
    width: 15%;
    text-align: center;
    position: fixed;
    left: 50%;
    right: 50%;
    transform: translate(-50%,-50%);
    padding: .1rem;
    background: rgba(0,0,0,.35);
    border-radius: .05rem;
    color: #fff;
  }
</style>
