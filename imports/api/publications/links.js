import { Meteor } from 'meteor/meteor';
import Links from '../collections/Links.js';

Meteor.publish('links', function () {
  if (Links.find({ownerId : this.userId}).fetch().length==0){
    return Links.find({ownerId : "all"});
  }
  return Links.find({ownerId : this.userId});
});
