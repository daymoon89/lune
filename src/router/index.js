import Vue from 'vue'
import router from 'vue-router'
import main from '@/components/main'

Vue.use(router);

export default new router({
    routes: [
        { 
            path: '/',
            name: 'main',
            component: main
        }
    ]
});