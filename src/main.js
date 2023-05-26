import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueNumberInput from '@chenfengyuan/vue-number-input';
import useVuelidate from '@vuelidate/core'
import VueSlickCarousel from 'vue-slick-carousel'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./assets/fonts/cfastystd-bold-webfont/cfastystd-bold.css"
import "./assets/fonts/cfastystd-light-webfont/cfastystd-light.css"
import "./assets/fonts/free-script/FreeScript-Bold.css"
// import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


import './assets/css/main.css'



const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(useVuelidate())
app.component(VueNumberInput.name, VueNumberInput);

app.mount('#app')
