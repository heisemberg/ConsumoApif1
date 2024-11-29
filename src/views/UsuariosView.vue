<template>
    <div class="about">
      <h1 class="text-center mt-5">Usuario: {{$route.params.id}}</h1>
      <div class="text-center mt-5">
        <v-pagination
        v-model="page"
        :length="6"
        ></v-pagination>
      </div>
    </div>
  </template>

  <script>
  export default {
    data () {
      return {
        page: 1
      }
    }
  }
  </script>
  