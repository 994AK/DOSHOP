<template>
  <div class="wrapper">
    <!-- 顶部 -->
    <StaticPart/>
    <!-- 中间-->
    <Nearby/>
  </div>
  <!-- 底部 -->
  <Docker/>
</template>

<script>
import StaticPart from "./StaticPart";
import Nearby from "./Nearby";
import Docker from "./Docker";

export default {
  name: "Home",
  components: {StaticPart, Nearby, Docker}
}
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import "../../style/mixins.scss";

.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  bottom: .5rem;
  right: 0;
  padding: 0 .18rem .13rem .18rem;


}


</style>
