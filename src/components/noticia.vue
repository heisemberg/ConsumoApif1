<template>
    <div>
        
    <v-row>
        <v-col
          v-for="(item, index) in paginatedItems" 
          :key="index"
          class="ma-2 d-flex"
        >
        <v-card
      class="mx-auto d-flex flex-column"
      max-width="400"
      hover
    >
    
    <v-img
      class="align-end text-white"
      height="200px"
      :src="item.images[0].url"
      cover
    >
      <v-card-title class="white--text ">{{item.images[0].credit}}</v-card-title>
    </v-img>

    <v-card-subtitle  class="pt-4 text-subtitle-2">
      {{item.images[0].alt}}
    </v-card-subtitle>

 
      <v-card-item>
        <v-card-title>
            {{item.headline}}
        </v-card-title>
  
        <v-card-subtitle>
            <a :href="item.link" target="_blank">Leer más</a>
        </v-card-subtitle>
      </v-card-item>
  
      <v-card-text>
        {{item.description}}
      </v-card-text>
    </v-card>
    </v-col>
    </v-row>
    <div class="text-center">
    <v-pagination
      v-model="page"
      :length="4"
      rounded="circle"
    ></v-pagination>
  </div>
    </div>
    
  </template>

<script>
export default {
  props: ['items'],
  data() {
    return {
      page: 1,
      itemsPerPage: 8
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.items.length / this.itemsPerPage);
    },
    paginatedItems() {
      const start = (this.page - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.items.slice(start, end);
    }
  }
};
</script>
 