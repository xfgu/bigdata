import http from '../utils/http'
//审计查询操作日志
export function getOperationLog(params) {
    return http.get('/audit/audit/getOperationLog',{
        params:params
    })
}
//审计查询调度日志
export function getTaskScheduleLog(params) {
    return http.get('/audit/audit/getTaskScheduleLog',{
        params:params
    })
}
//查询调度执行情况
export function getScheduleLog(params) {
    return http.get('/audit/audit/getScheduleLog',{
        params:params
    })
}