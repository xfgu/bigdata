<template>
  <section id="menu">
    <div class="collapse" v-model="isCollapse" :class="{active:isCollapse}">
      <span v-show="!isCollapse">全部</span>
      <i class="iconfont icon-caidan text-sub" @click="isCollapse=!isCollapse"></i>
    </div>
    <el-menu
      default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#fff"
      text-color="#3f6e9a"
      active-text-color="#ffa800"
      router
      :collapse="isCollapse"
    >
      <el-submenu :index="index+''" v-for="(item,index) in menu" :key="index">
        <template slot="title">
          <i class="iconfont text-sub" :class="`icon-${item.icon}`"></i>
          <span>{{item.name}}</span>
        </template>
        <el-menu-item :index="`/${i.path}`" v-for="i in item.children" :key="item.path">
          {{i.name}}
        </el-menu-item>
      </el-submenu>

    </el-menu>
  </section>
</template>

<script>
  export default {
    name: 'Menu',
    data () {
      return {
        isCollapse: false,
        menu: [
          {
            name: '系统监控',
            icon: 'xitongjiankong',
            children: [
              {
                name: '集群监控',
                path: 'monitor/cluster',
              },
              {
                name: '网络配置',
                path: 'monitor/net',
              },
              {
                name: '任务监控',
                path: 'monitor/taskMointor',
              },
              {
                name: '业务监控',
                path: 'monitor/businessMonitor',
              },
            ]
          },
          //监控end
          //数据源管理
          {
            name: '数据源管理',
            icon: 'shujuyuanguanli',
            children: [
              {
                name: '创建schema',
                path: 'dataSource/addSchema',
              },
              {
                name: '创建stream',
                path: 'dataSource/addStream',
              }
            ]
          },
          //数据源管理end
          //采集业务管理
          {
            name: '采集业务管理',
            icon: 'caiji',
            children: [
              {
                name: '数据采集',
                path: 'business/collection',
              },
              {
                name: '任务调度',
                path: 'business/taskSchedu',
              }
            ]
          },
          //采集业务管理end
          //用户管理
          {
            name: '系统管理',
            icon: 'xitongguanli',
            children: [
              {
                name: '用户管理',
                path: 'system/user',
              }
            ]
          },

          // 运维管理
          {
            name: '运维管理',
            icon: 'yunwei',
            children: [
              {
                name: '业务日志',
                path: 'maintain/1',
              },
              {
                name: '报警日志',
                path: 'maintain/2',
              },
              {
                name: '数据运维报表',
                path: 'maintain/3',
              }
            ]
          },

          //数据质量管理
          {
            name: '数据质量管理',
            icon: 'shujuzhiliang',
            children: [
              {
                name: '数据质量管理',
                path: 'quality/1',
              }

            ]
          },

          //统计审计
          {
            name: '统计审计',
            icon: 'shujuzhiliang',
            children: [
              {
                name: '操作审计',
                path: 'audit/operate',
              },
              {
                name: '调度审计',
                path: 'audit/dispatch',
              }

            ]
          },

        ]
      }
    },
    methods: {
      handleOpen (key, keyPath) {
        // console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        // console.log(key, keyPath)
      }
    }
  }
</script>

<style scoped lang="stylus">
  #menu
    .collapse
      padding 10px
      display flex
      justify-content space-between
      &.active
        justify-content center


</style>
