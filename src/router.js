import App from './App.vue';
import ChatContainer from './components/ChatContainer.vue';
import VueRouter from 'vue-router'

const routes = [
    { path: '/', component: App },
    { path: '/contacts/:id',
      name: 'chat-container', component: ChatContainer },
];

const mainRoutes = new VueRouter({
  routes: routes // сокращённая запись для `routes: routes`
})

export default mainRoutes;