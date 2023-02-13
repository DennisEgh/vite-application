import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';

import './assets/main.css'

const app = createApp(App)
axios.get('https://swapi.dev/api/').then(resp => {

    console.log(resp.data);
});


app.use(router)

app.mount('#app')
