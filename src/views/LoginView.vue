<template>
  <div class="login d-flex justify-center align-center">
    <v-card 
    class="pa-10 max-width-500" 
    hover
    >
      <h1 class="text-center mb-10">Login</h1>
      <v-form @submit.prevent="login">
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
        <v-btn type="submit" color="accent" elevation="4">Login</v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usuario: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch('http://localhost:4000/api/auth/login', {
          method: 'POST', // Cambia a POST
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            usuario: this.usuario,
            password: this.password
          })
        });
        const data = await response.json();
        if (response.ok && !data.error) {
          localStorage.setItem('token', data.body); // Almacena el token desde data.body
          this.$router.push('/noticias'); // Redirige a la página de imágenes
        } else {
          alert(data.error || 'Error en el inicio de sesión');
        }
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>

<style>
.login {
  height: 100vh; 
  background-color: #f5f5f5;
}
</style>