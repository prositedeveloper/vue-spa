import { createRouter, createWebHistory } from "vue-router";
import ContactList from "../components/ContactList.vue";
import EditContact from "../components/EditContact.vue";
import AddContact from "../components/AddContact.vue";

const routes = [
    {
      path: '/',
      name: 'ContactList',
      component: ContactList
    },
    {
      path: '/add_contact',
      name: 'AddContact',
      component: AddContact
    },
    {
      path: '/contact/edit/:id?',
      name: 'EditContact',
      component: EditContact
    }
  ];
  
  // Создаем маршрутизатор
  const router = createRouter({
    history: createWebHistory(),
    routes
  });
  
  // Экспортируем маршрутизатор, чтобы его можно было использовать в приложении Vue
  export default router;
