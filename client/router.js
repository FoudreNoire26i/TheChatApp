import Home from '../imports/ui/views/Home.vue';
import Account from '../imports/ui/views/UserProfile.vue';
import AdminPage from '../imports/ui/views/AdminPage.vue';

export const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/account', name: 'Account', component: Account },
    { path: '/admin', name: 'AdminPage', component: AdminPage }//,
];