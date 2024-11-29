<template>
    <div class="noticias">
        <h1 class="text-center mt-5 pa-8 text-h3">Noticias F1</h1>
        <noticia :items="Items"/>
    </div>
</template>

<script>
import noticia from '../components/noticia.vue'

export default{
    components: {
        noticia
    },
    created () {
        this.cargarNoticias();
    },
    data () {
        return {
            Items: []
        }
    },
    methods: {
        cargarNoticias: async function(){
            try {
                const setting = {
                    method: 'GET',
                    headers: {
                    'x-rapidapi-key': '32d910df36msh03d2dec612d13a9p105de6jsn9e8b4d22dfb0',
                    'x-rapidapi-host': 'f1-motorsport-data.p.rapidapi.com'
                    }
                }
                const url ='https://f1-motorsport-data.p.rapidapi.com/news'
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
.noticias { 
  background-color: #f5f5f5;
}
