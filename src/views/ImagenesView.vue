<template>
    <div class="imagenes">
        <h1 class="text-center mt-5 pa-8 text-h3">Imagenes</h1>
        <imagen :items="Items" />
    </div>
</template>

<script>
import imagen from '../components/imagen.vue'
export default {
    components: {
        imagen
    },

    created () {
        this.cargarImagenes();
    },

    data () {
        return {
            Items: []
        }
    },

    methods: {
        cargarImagenes: async function(){
            try {
                const setting = {
                    method: 'GET',
                }
                const url ="https://picsum.photos/v2/list?page=2&limit=100"
                const data = await fetch(url, setting);
                const json = await data.json();
                this.Items = json;
            }
            catch(err){
                console.log(err);
            }
        }
    }


}
</script>

<style>

</style>