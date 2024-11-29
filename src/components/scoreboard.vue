<template>
    <v-container>
      <v-data-table
        :headers="headers"
        :items="formattedItems"
        class="elevation-1"
        dark
      >
        <template v-slot:top>
          <v-toolbar flat color="primary">
            <v-toolbar-title>Scoreboard</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
          </v-toolbar>
        </template>
      </v-data-table>
    </v-container>
  </template>
  
  <script>
  export default {
    props: ['items'],
    data() {
      return {
        headers: [
          { text: 'Circuito', value: 'crct' },
          { text: 'Premio', value: 'gPrx' },
          { text: 'Ganador', value: 'winner' },
          { text: 'Fecha Inicio', value: 'startDate' },
          { text: 'Fecha Final', value: 'endDate' }
        ]
      };
    },
    computed: {
      formattedItems() {
        return Object.values(this.items).flat();
      }
    },
    methods: {
      formatDate(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
      }
    }
  };
  </script>