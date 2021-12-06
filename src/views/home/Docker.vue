<template>
  <div class="docker">
    <div class="docker__item docker__item--active">
      <div class="iconfont">&#xe626;</div>
      <div class="docker__item__title">首页</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe62b;</div>
      <div class="docker__item__title"> 购物车</div>
    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe610;</div>
      <div class="docker__item__title">订单</div>

    </div>
    <div class="docker__item">
      <div class="iconfont">&#xe611;</div>
      <div class="docker__item__title">我的</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Docker"
}
</script>

<style lang="scss">
@import '../../style/viriables.scss';
@import "../../style/mixins.scss";

.docker {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: .49rem; //49px
  border-top: 1px solid $content-bgColor;
  color: $content-fontcolor;

  //docker__item
  &__item {
    flex: 1;
    text-align: center;
    //图标
    .iconfont {
      margin: 0.07rem 0 .02rem 0;
      font-size: .2rem;
    }

    //docker__item--active
    &--active {
      color: #1fa4fc;
    }

    //docker__item__title
    &__title {
      font-size: 20px;
      transform: scale(0.5, 0.5);
      transform-origin: center top;
    }
  }
}
</style>
