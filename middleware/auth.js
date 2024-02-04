export default defineNuxtRouteMiddleware((to,from)=>{
    console.log("Hello logged In ")
    console.log(to)
    console.log(from)
})