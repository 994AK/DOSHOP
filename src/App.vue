<template>
  <div>
    <div class="wrapper">
      <div class="wrapper__position">
        <span class="iconfont wrapper__position__icon">&#xe600;</span>
        北京理工大学国防科技园2号楼10层
        <span class="iconfont wrapper__position__notice">&#xe716;</span>
      </div>
    </div>
  </div>
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

<style lang="scss">
@import "./style/viriables.scss";
@import "./style/mixins.scss";
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem;

  &__position {
    position: relative;
    padding: .16rem .24rem .16rem 0;
    line-height: .22rem;
    font-size: .16rem;
    //溢出形成 ... 效果
    @include ellipsis;

    .wrapper__position__icon {
      position: relative;
      top: .01rem;
      font-size: .2rem;
    }

    .wrapper__position__notice {
      position: absolute;
      right: 0;
      top: .17rem;
      font-size: .2rem;
    }

    color: $content-fontcolor;
  }

}

.docker {
  display: flex;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: .49rem; //49px
  border-top: 1px solid #F1F1F1;
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
