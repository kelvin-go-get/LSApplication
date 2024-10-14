// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Create the app and use the router with proper TypeScript support
createApp(App).use(router).mount('#app')
