<template>
    <div class="scoreboard">
        <h1 class="text-center mt-5 pa-8 text-h3">Temporada 2023 F1</h1>
        <scoreboard :items="Items"/>
    </div>
</template>

<script>
import scoreboard from '../components/scoreboard.vue'

export default{
    components: {
        scoreboard
    },
    created () {
        this.cargarScoreboard();
    },
    data () {
        return {
            Items: []
        }
    },
    methods: {
        cargarScoreboard: async function(){
            try {
                const setting = {
                    method: 'GET',
                    headers: {
                    'x-rapidapi-key': '32d910df36msh03d2dec612d13a9p105de6jsn9e8b4d22dfb0',
                    'x-rapidapi-host': 'f1-motorsport-data.p.rapidapi.com'
                }
                }
                const url ='https://f1-motorsport-data.p.rapidapi.com/schedule?year=2024'
                const data = await fetch(url, setting);
                const json = await data.json();
                this.Items = json;
                console.log(json);
            }
            catch(err){
                console.log(err);
            }
        }
    }
}
</script>
<style>
.scoreboard { 
  background-color: #f5f5f5;
}