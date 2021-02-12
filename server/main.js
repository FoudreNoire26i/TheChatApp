import { MeteorData } from 'vue-meteor-tracker'
import '../imports/api/fixtures'
import '../imports/api/methods'
import '../imports/api/publications'

if (Roles.getAllRoles().count()==0){
    Roles.createRole('admin')
    Roles.createRole('user')
}

if (Meteor.isServer) {
    Accounts.onCreateUser(function(options, user) {
        Roles.addUsersToRoles(user._id, 'user')
        console.log(user);
        return user;
    });
}