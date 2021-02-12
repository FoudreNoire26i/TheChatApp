import { Meteor } from 'meteor/meteor';

Meteor.publish('roleAssignment' , function () {
    if (this.userId) {
        if (!Roles.userIsInRole(this.userId, 'admin')){
            return Meteor.roleAssignment.find({ 'user._id': this.userId });
        }
        else 
            return Meteor.roleAssignment.find();
    } else {
        this.ready()
    }
});
