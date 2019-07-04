<template>
  <el-container class="container">
    <el-header class="bg-primary text-white">
      <i class="icon-shujujicheng iconfont"></i>
      数据集成交换系统
    </el-header>
    <el-container>
      <el-aside class="aside" width="auto">
        <Menu></Menu>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import Menu from '../../components/menu/Menu'

  export default {
    name: 'Index',
    components: { Menu },
  }
</script>

<style scoped lang="stylus">
  @import "../../assets/style/common.styl"
  .container
    .aside
      height calc(100vh - 60px)
      overflow-x hidden
      background: colorList.white
      box-shadow 0 0 10px 0 rgba(200, 200, 200, 0.5)
      /*overscroll-behavior:contain*/
    .bg-primary
      text-align left
      font-size 22px
      padding 0 20px

      i.icon-shujujicheng
        font-size 22px
        &:hover
          cursor: hand
</style>
