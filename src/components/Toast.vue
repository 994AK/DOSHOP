<template>
  <div class="toast"> {{ message }} </div>
</template>

<script>
import { reactive } from 'vue'

export default {
  name: 'Toast',
  props: ['message']
}

export const useToastEffect = () => {
  const toastData = reactive({
    showToast: false,
    toastMessage: ''
  })

  const showToast = (message) => {
    toastData.showToast = true
    toastData.toastMessage = message
    setTimeout(() => {
      toastData.showToast = false
      toastData.toastMessage = ''
    }, 2000)
  }

  return { toastData, showToast }
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
