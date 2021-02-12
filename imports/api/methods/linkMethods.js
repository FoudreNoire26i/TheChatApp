import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Links from '../collections/Links.js';

Meteor.methods({
  createLink(title, url) {
    check(url, String);
    check(title, String);
    if (this.userId){
      return Links.insert({
        ownerId: this.userId,
        url,
        title,
        createdAt: new Date(),
      });
    } else {
      console.log("Not already sign, can't insert")
      return
    }
  },
  removeLink(id){
    if (Roles.userIsInRole(this.userId, 'admin') || Links.find({_id: id, ownerId:this.userId}).fetch().length>0){
      return Links.remove({
        _id:id
      })
    } else {
      console.log("can't sup"+id)
    }
  }
});
