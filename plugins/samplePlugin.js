export default defineNuxtPlugin((nuxtApp)=>{
    return{
        provide:{
            printMe:(n)=>{
                return `number is ${n}`
            }
        }
    }
})