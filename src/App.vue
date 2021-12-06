<template>
  <Home/>
</template>

<script>
import Home from './views/home/Home'

export default {
  name: 'App',
  components: {Home}
}
</script>

<style lang="scss">
@import "./style/viriables.scss";
@import "./style/mixins.scss";

.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem .13rem .18rem;

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

  &__search {
    margin-bottom: .12rem;
    line-height: .32rem;
    background: #F5F5F5;
    color: #b7b7b7;
    border-radius: .16rem;

    .iconfont {
      display: inline-block;
      padding: 0 .08rem 0 .16rem;
      font-size: .16rem;
    }

    &__text {
      display: inline-block;
      font-size: .14rem;
    }
  }

  &__banner {
    &__img {
      width: 100%;
      height: 0.86rem;
    }
  }

  &__icons {
    display: flex;
    flex-wrap: wrap;
    margin-top: .16rem;

    &__item {
      width: 20%;

      &__img {
        display: block;
        width: .4rem;
        height: .4rem;
        margin: 0 auto;
      }

      &__desc {
        margin: .06rem 0 .16rem 0;
        text-align: center;
        color: $content-fontcolor;
      }
    }
  }

  &__gap {
    margin: 0 -.18rem;
    height: .1rem;
    background: $content-bgColor;
  }

  &__nearby {
    &__title {
      margin: .16rem 0 .02rem 0;
      font-size: .18rem;
      font-weight: normal;
      color: $content-fontcolor;
    }

    &__item {
      display: flex;
      padding-top: .12rem;

      &__img {
        margin-right: .16rem;
        width: .56rem;
        height: .56rem;
      }

      &__content {
        flex: 1;
        padding-bottom: .12rem;
        border-bottom: 3px solid $content-bgColor;

        &__title {
          line-height: .22rem;
          font-size: .16rem;
          color: $content-fontcolor;
        }

        &__tags {
          margin-top: .08rem;
          line-height: .18rem;
          font-size: .13rem;
          color: $content-fontcolor;

          &__tag {
            margin-right: .16rem;

          }
        }

        &__highlight {
          margin-top: .08rem;
          line-height: .18rem;
          font-size: .13rem;
          color: #E93B3B;
        }
      }
    }
  }
}

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
