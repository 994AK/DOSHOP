<template>
  <div class="wrapper__position">
    <span class="iconfont wrapper__position__icon">&#xe600;</span>
    北京理工大学国防科技园2号楼10层
    <span class="iconfont wrapper__position__notice">&#xe716;</span>
  </div>
  <div class="wrapper__search">
    <span class="iconfont">&#xe62f;</span>
    <span class="wrapper__search__text">山姆会员商店优惠商品</span>
  </div>
  <div class="wrapper__banner">
    <img
      class="wrapper__banner__img"
      src="https://img.shuicaimi.com/c2020/12/09/0l5qdagaza1.jpg" alt="图片"/>
  </div>
  <div class="wrapper__icons">
    <div class="wrapper__icons__item">
      <img
        class="wrapper__icons__item__img"
        src="../../assets/超市.png"
        alt=""
      />
      <p class="wrapper__icons__item__desc">超市便利</p>
    </div>
    <div class="wrapper__icons__item">
      <img
        class="wrapper__icons__item__img"
        src="../../assets/超市.png"
        alt=""
      />
      <p class="wrapper__icons__item__desc">超市便利</p>
    </div>
    <div class="wrapper__icons__item">
      <img
        class="wrapper__icons__item__img"
        src="../../assets/超市.png"
        alt=""
      />
      <p class="wrapper__icons__item__desc">超市便利</p>
    </div>
    <div class="wrapper__icons__item">
      <img
        class="wrapper__icons__item__img"
        src="../../assets/超市.png"
        alt=""
      />
      <p class="wrapper__icons__item__desc">超市便利</p>
    </div>
    <div class="wrapper__icons__item">
      <img
        class="wrapper__icons__item__img"
        src="../../assets/超市.png"
        alt=""
      />
      <p class="wrapper__icons__item__desc">超市便利</p>
    </div>
    <div class="wrapper__icons__item">
      <img
        class="wrapper__icons__item__img"
        src="../../assets/超市.png"
        alt=""
      />
      <p class="wrapper__icons__item__desc">超市便利</p>
    </div>
    <div class="wrapper__icons__item">
      <img
        class="wrapper__icons__item__img"
        src="../../assets/超市.png"
        alt=""
      />
      <p class="wrapper__icons__item__desc">超市便利</p>
    </div>
    <div class="wrapper__icons__item">
      <img
        class="wrapper__icons__item__img"
        src="../../assets/超市.png"
        alt=""
      />
      <p class="wrapper__icons__item__desc">超市便利</p>
    </div>
    <div class="wrapper__icons__item">
      <img
        class="wrapper__icons__item__img"
        src="../../assets/超市.png"
        alt=""
      />
      <p class="wrapper__icons__item__desc">超市便利</p>
    </div>
    <div class="wrapper__icons__item">
      <img
        class="wrapper__icons__item__img"
        src="../../assets/超市.png"
        alt=""
      />
      <p class="wrapper__icons__item__desc">超市便利</p>
    </div>
  </div>
  <div class="wrapper__gap"></div>
</template>

<script>
export default {
  name: "StaticPart"
}
</script>

<style lang="scss">
@import '../../style/viriables.scss';
@import "../../style/mixins.scss";

.wrapper__position {
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

.wrapper__search {
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

.wrapper__banner {
  &__img {
    width: 100%;
    height: 0.86rem;
  }
}

.wrapper__icons {
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

.wrapper__gap {
  margin: 0 -.18rem;
  height: .1rem;
  background: $content-bgColor;
}
</style>
