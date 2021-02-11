import Home from '../imports/ui/views/Home.vue';
import Account from '../imports/ui/views/UserProfile.vue';

export const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/account', name: 'Account', component: Account }//,
];