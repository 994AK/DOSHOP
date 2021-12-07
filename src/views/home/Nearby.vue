<template>
  <div class="wrapper__nearby">
    <h3 class="wrapper__nearby__title">附近店铺</h3>
    <div
      v-for="item in nearbyList"
      class="wrapper__nearby__item"
      :key="item.id"
    >
      <img class="wrapper__nearby__item__img" :src='item.imgUrl' alt=""/>
      <div class="wrapper__nearby__item__content">
        <div class="wrapper__nearby__item__content__title">{{ item.title }}</div>
        <div class="wrapper__nearby__item__content__tags">
          <span
            v-for="(innerItem,innerIndex) in item.tags"
            :key="innerIndex"
            class="wrapper__nearby__item__content__tags__tag"
          >
            {{ innerItem }}
          </span>
        </div>
        <p class="wrapper__nearby__item__content__highlight">{{ item.desc }}</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Nearby',
  setup () {
    const nearbyList = [
      {
        id: 1,
        imgUrl: 'https://s2.loli.net/2021/12/06/LSgd6pJeTDb1asX.png',
        title: '沃尔玛',
        tags: ['月售1万+', '起送$0', '基础运费$5'],
        desc: 'VIP满89元减4元运费劵'
      }, {
        id: 2,
        imgUrl: 'https://s2.loli.net/2021/12/06/LSgd6pJeTDb1asX.png',
        title: '沃尔玛',
        tags: ['月售1万+', '起送$0', '基础运费$5'],
        desc: 'VIP满89元减4元运费劵'
      },
      {
        id: 3,
        imgUrl: 'https://s2.loli.net/2021/12/06/LSgd6pJeTDb1asX.png',
        title: '沃尔玛',
        tags: ['月售1万+', '起送$0', '基础运费$5'],
        desc: 'VIP满89元减4元运费劵'
      },
      {
        id: 4,
        imgUrl: 'https://s2.loli.net/2021/12/06/LSgd6pJeTDb1asX.png',
        title: '沃尔玛',
        tags: ['月售1万+', '起送$0', '基础运费$5'],
        desc: 'VIP满89元减4元运费劵'
      }]

    return { nearbyList }
  }
}
</script>

<!-- scoped CSS作用域 当前的组件使用-->
<style lang="scss" scoped>
@import '../../style/viriables.scss';

.wrapper__nearby {
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
</style>
