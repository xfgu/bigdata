export function getActiveName(name,data){
    let module=""
    data.array.forEach(element => {
        if(element.name==name){
            module=element.module
            break;
        }else{
            if(element.children){

            }
        }
    });
    return module
}