<template>
  <div class="registro d-flex justify-center align-center">
    <v-card 
    class="pa-10 max-width-500" 
    hover
    >
      <h1 class="text-center mb-10">Registro</h1>
      <v-form @submit.prevent="registrar">
        <v-text-field
          v-model="nombre"
          label="Nombre"
          dense 
          outlined
          required
        ></v-text-field>
        <v-text-field
          v-model="usuario"
          label="Usuario"
          dense 
          outlined
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          label="Contraseña"
          type="password"
          dense 
          outlined
          required
        ></v-text-field>
        <v-btn type="submit" color="accent" elevation="4">Registrar</v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      usuario: '',
      password: '',
      usuarios: [] // Estado para almacenar la lista de usuarios
    };
  },
  methods: {
    async registrar() {
      try {
        const token = localStorage.getItem('token'); // Obtiene el token del almacenamiento local
        const response = await fetch('http://localhost:4000/api/usuarios', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Envía el token en la cabecera de autorización
          },
          body: JSON.stringify({
            id: 0, // Envía el campo id con el valor 0
            nombre: this.nombre,
            usuario: this.usuario,
            password: this.password
          })
        });
        const data = await response.json();
        if (response.ok) {
          alert('Registro exitoso');
          this.nombre = ''; // Limpia el campo nombre
          this.usuario = ''; // Limpia el campo usuario
          this.password = ''; // Limpia el campo password
          this.obtenerUsuarios(); // Llama a la función para obtener la lista de usuarios después de un registro exitoso
        } else {
          alert(data.error || 'Error en el registro');
        }
      } catch (err) {
        console.error(err);
      }
    },
    async obtenerUsuarios() {
      try {
        const token = localStorage.getItem('token'); // Obtiene el token del almacenamiento local
        const response = await fetch('http://localhost:4000/api/usuarios', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Envía el token en la cabecera de autorización
          }
        });
        const data = await response.json();
        if (response.ok) {
          const usuarios = data.body; // Almacena el cuerpo de la respuesta en una constante
          this.usuarios = usuarios; // Almacena la lista de usuarios en el estado
        } else {
          alert(data.error || 'Error al obtener la lista de usuarios');
        }
      } catch (err) {
        console.error(err);
      }
    }
  },
  created() {
    this.obtenerUsuarios(); // Obtiene la lista de usuarios al cargar el componente
  }
};
</script>

<style>
.registro {
  height: 100vh; 
  background-color: #f5f5f5;
}
</style>