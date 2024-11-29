import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#0D47A1', // Azul oscuro
        secondary: '#424242', // Gris oscuro
        accent: '#00E676', // Verde brillante
        error: '#FF5252', // Rojo brillante
        info: '#2196F3', // Azul claro
        success: '#4CAF50', // Verde oscuro
        warning: '#FF9800' // Naranja vibrante
      },
      dark: {
        primary: '#1E88E5',
        secondary: '#757575',
        accent: '#FFC107',
        error: '#D32F2F',
        info: '#29B6F6',
        success: '#43A047',
        warning: '#FFB300'
      },
    },
  },
});
