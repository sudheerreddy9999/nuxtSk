export const useMessage = ()=>{
    const myMessage=()=>{
        const name = "sudheer From Use Composables Component ";
        return name;
    }
    const mySecond =(prop)=>{
        console.log(prop)
        return `Hello I am from 2nd Component from reusable${prop}`
    }
    return {
        myMessage,
        mySecond,
    }
}