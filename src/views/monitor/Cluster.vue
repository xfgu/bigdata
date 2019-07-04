<template>
  <section>
    <el-breadcrumb separator="/" class="bg-bread">
      <el-breadcrumb-item >
        <span class="text-sub"> 集群当前状态</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
    <el-table
      :data="tableData"
      :border="false"
      style="width: 100%">
      <el-table-column
        prop="date"
        align="center"
        label="今日已入库"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        align="center"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        align="center"
        label="地址">
      </el-table-column>
    </el-table>
    <el-breadcrumb separator="/" class="bg-bread">
      <el-breadcrumb-item >
        <span class="text-sub">任务状态</span>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </section>
</template>

<script>
  export default {
    name: 'Cluster',
    data () {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
  }
</script>

<style scoped lang="stylus">
@import "../../assets/style/common.styl"
.bg-bread
  height: 48px
  line-height: 48px
  padding-left: 20px

</style>
