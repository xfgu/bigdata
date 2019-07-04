import http from '../utils/http'
//获取数据容器下拉框的值
export function getCatalogs() {
    return http.get('/meta-store/metaStore/getCatalogs')
}
//很据catalog获取数据库
export function getSchemas(params) {
    //参数 catalog
    return http.get('/meta-store/metaStore/getSchemas', {
        params: params
    })
}

//很据Schema获取table
export function getTables(params) {
    //参数 Schema
    return http.get('/meta-store/metaStore/getTables', {
        params: params
    })
}

//根据table 获取所有的column
export function descTable(params) {
    //参数 table
    return http.get('/meta-store/metaStore/descTable', {
        params: params
    })
}

//新建任务
export function createTask(data) {
    let headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return http.post('/manager/taskManager/createTask',data,headers)
}
//查询任务
export function listTask() {
    return http.post("/manager/taskManager/listTask")
}
//删除任务
export function deleteTask(taskId) {
    return http.post("/manager/taskManager/deleteTask", `taskId=${taskId}`)
}
//修改任务
export function updateTask(data) {
    let headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return http.post('/manager/taskManager/updateTask',data,headers)
}
//任务运行详情
export function getRunningMsg(taskId) {
    return http.post("/excuter/taskManager/getRunningMsg", `taskId=${taskId}`)
}
//创建schema
// 获取schema信息
export function getSchemaProperty(schemaType) {
    return http.post("/meta-store/metaStore/getSchemaProperty", `schemaType=${schemaType}`)
}
export function creatSchema(data) {
    let headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return http.post("/meta-store/metaStore/creatSchema",data,headers)
}
//测试schema是否创建成功
export function testSchema(schema) {
    return http.post("/meta-store/metaStore/testSchema", `schema=${schema}`)
}
//删除schema

export function dropSchema(schema) {
    return http.post("/meta-store/metaStore/dropSchema", `schema=${schema}`)
}
//创建表
//获取映射表信息
export function getTableProperty(tableType) {
    return http.post("/meta-store/metaStore/getTableProperty",`tableType=${tableType}`)
}
export function creatStream(data) {
    let headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return http.post("/meta-store/metaStore/creatStream",data,headers)
}