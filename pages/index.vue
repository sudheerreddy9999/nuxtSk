<script setup>
import { fromData } from "../stores/myStore";

const myData = fromData();
console.log(myData.loginData);
definePageMeta({
  middleware: "auth"
});

const { myMessage } = useMessage();
const { mySecond } = useMessage();
const { $printMe } = useNuxtApp();

const newMessage = myMessage();
const second = mySecond("Iafromprop");
const loginData = ref(myData.loginData);

function myNewFunction(fieldName, value) {
  const field = loginData.value.find(f => f.name === fieldName);
  console.log(field);
  console.log(fieldName);
  console.log(value);
}

function handelClick(formData) {
  console.log("I got Clicked", formData);
  console.log(formData)
}
</script>

<template>
  <div>
    <h1>Hello Man</h1>
    <p>Search</p>
    <h1>{{ newMessage }}</h1>
    <h2>{{ second }}</h2>
    {{ $printMe(10) }}
    <FormComponent :loginData="loginData" @updateValue="myNewFunction" @handelClick="handelClick" />
  </div>
</template>
