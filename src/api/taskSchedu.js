import http from '../utils/http'
//获取所有任务列表
export function getTaskList() {
    return http.get('/manager/taskSchedule/getTaskList')
}
//添加定时任务
export function addSchedule(data) {
    let headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return http.post('/manager/taskSchedule/addSchedule',data,headers)
}
//删除定时任务
export function removeSchedule(params) {
    return http.get('/manager/taskSchedule/deleteSchedule',{
        params:params
    })
}
//任务运行详情
export function getRunningMsg(taskId) {
    return http.post("/excuter/sqlExcute/getRunningMsg", `taskId=${taskId}`)
}
//修改调度
export function updateSchedule(data) {
    let headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return http.post("/manager/taskSchedule/updateSchedule",data,headers)
}
//暂停
export function pauseSchedule(taskId) {
    return http.post('/manager/taskSchedule/pauseSchedule',`taskId=${taskId}`)
}
//恢复
export function resumeSchedule(taskId) {
    return http.post('/manager/taskSchedule/resumeSchedule',`taskId=${taskId}`)
}