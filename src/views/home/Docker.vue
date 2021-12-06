<template>
  <div class="docker">
    <div
      v-for="(item,index) in dockerList"
      :class="{'docker__item':true, 'docker__item--active':index===0}"
      class="docker__item"
      :key="item.icon"
    >
      <div class="iconfont" v-html="item.icon"/>
      <div class="docker__item__title">{{ item.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Docker",
  setup() {
    const dockerList = [
      {icon: '&#xe626;', text: '首页'},
      {icon: '&#xe62b;', text: '购物车'},
      {icon: '&#xe610;', text: '订单'},
      {icon: '&#xe611;', text: '我的'},
    ]

    return {dockerList}
  }
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
