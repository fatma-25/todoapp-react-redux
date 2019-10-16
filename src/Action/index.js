import {Add,Complet,Delete,Edit} from '../Const'



 
    export const addtask= payload=>{

     return{
    type:Add,
    payload
//    payload: { 
//                     title: payload.title, id: payload.key
//                 }
}
    }

    export const deletetask= payload=>{
        return{
            type:Delete,
            payload
        }
            }

            export const complettask= payload=>{
                return{
                    type:Complet,
                    payload
                }
                    }
        
                    export const edittask= payload=>{
                        return{
                            type:Edit,
                            payload
                        }
                            }
                
