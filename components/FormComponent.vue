<template>
    {{ loginData }}
    <h1>Hello i am from Form Component</h1>
    <div v-for="data in loginData">
      {{ data.name }}
      <input :type="data.type" class="bg-slate-300" v-model="data.value" @input="updateValue(data.name, $event.target.value)" />
      <button @click="handelClick">Click</button>
    </div>
    <h1>{{ myValue }}</h1>
  </template>
  
  <script setup>
  import { defineProps, defineEmits, ref } from 'vue';
  
  const props = defineProps(['loginData']);
  const emits = defineEmits(['updateValue', 'handelClick']);
  
  const updateValue = (fieldName, value) => {
    emits('updateValue', fieldName, value);
  };
  
  const myValue = ref("sudheerJanga");
  
  const handelClick = () => {
    const formData = {};
    props.loginData.forEach(f => {
      formData[f.name] = f.value;
    });
    emits('handelClick', formData);
  };
  </script>
  