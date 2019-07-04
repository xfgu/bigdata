import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index/Index'
import Cluster from '../views/monitor/Cluster'
import TaskMointor from '../views/monitor/TaskMointor'
import BusinessMonitor from '../views/monitor/BusinessMonitor'
import DataSourceIndex from '../views/dataSource/DataSourceIndex'
import DataSourceAdd from '../views/dataSource/DataSourceAdd'
import DataSourceAddSchema from '../views/dataSource/DataSourceAddSchema'
import DataSourceAddStream from '../views/dataSource/DataSourceAddStream'
import Collection from '../views/business/Collection'
import TaskSchedu from '../views/business/TaskSchedu'
import OtherIndex from '../views/other/OtherIndex'
import Quality from '../views/quality/Quality'
import User from '../views/system/User'
import Operate from '../views/audit/Operate'
import Dispatch from '../views/audit/Dispatch'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      redirect:"/monitor/cluster",
      component: Index,
      // meta:{
      //   title:"数据集成交换系统"
      // },
      children:[
        //监控
        {
          path:'monitor/cluster',
          component:Cluster,
          meta:{
            title:"数据集成交换系统"
          },
        },
        {
          path:'monitor/2',
          component:TaskMointor,
          meta:{
            title:"数据集成交换系统"
          },
        },
        {
          path:'monitor/taskMointor',
          component:TaskMointor,
          meta:{
            title:"数据集成交换系统"
          },
        },
        {
          path:'monitor/businessMonitor',
          component:BusinessMonitor,
          meta:{
            title:"数据集成交换系统"
          },
        },
        //监控end
        //数据源管理
        {
          path:'/dataSource',
          redirect:'/dataSource/index'
        },
        {
          path:'/dataSource/index',
          component:DataSourceIndex,
          meta:{
            title:"数据集成交换系统"
          },
        },
        {
          path:'/dataSource/add',
          component:DataSourceAdd,
          meta:{
            title:"数据集成交换系统"
          },
        },
        {
          path:'/dataSource/addSchema',
          component:DataSourceAddSchema,
          meta:{
            title:"数据集成交换系统"
          },
        },
        {
          path:'/dataSource/addStream',
          component:DataSourceAddStream,
          meta:{
            title:"数据集成交换系统"
          },
        },

        //数据源管理end
        //采集业务管理
        {
          path:'business/collection',
          component:Collection,
          meta:{
            title:"数据集成交换系统"
          }
        },
        {
          path:'business/taskSchedu',
          component:TaskSchedu,
          beforeLeave (to, from, next)  {
            console.log(1212121)
            if(window.timer){
              clearInterval(window.timer);
            }
            // next()
          },
          meta:{
            title:"数据集成交换系统"
          }
        },
        //采集业务管理end
        {
          path:'main',
          component:OtherIndex,
          meta:{
            title:"数据集成交换系统"
          },
        },
        //数据质量管理
        {
          path:'quality',
          component:Quality,
          meta:{
            title:"数据集成交换系统"
          },
          beforeLeave(to,from,next){
            console.log(1467)
          }
        },
        //用户管理
        {
          path:'system/user',
          component:User,
          meta:{
            title:"数据集成交换系统"
          },
        },
        //统计审计
        {
          path:'audit/operate',
          component:Operate,
          meta:{
            title:"数据集成交换系统"
          },
        },
        {
          path:'audit/dispatch',
          component:Dispatch,
          meta:{
            title:"数据集成交换系统"
          },
        },
      ]
    }

  ]
})
