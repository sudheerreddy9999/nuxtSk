import {defineStore} from "pinia"

export const fromData = defineStore('myData',()=>{
    const loginData = [
        { id: 1,type: 'text',name: 'username',placeholder: 'Username',value: ''},
    ]
    return {loginData}
})