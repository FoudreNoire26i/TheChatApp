import { Meteor } from 'meteor/meteor';
import Links from '../collections/Links.js';

Meteor.publish('links', function () {
  if (Roles.userIsInRole(this.userId, 'admin'))
    return Links.find();
  else
    return Links.find({ownerId : this.userId});
});
