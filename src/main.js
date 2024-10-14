import { createApp } from 'vue'
import App from './App.vue'
import { worker } from './api/fakeBackend';
createApp(App).mount('#app')
worker.start();
