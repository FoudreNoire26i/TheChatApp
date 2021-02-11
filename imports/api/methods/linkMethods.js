import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Links from '../collections/Links.js';

Meteor.methods({
  createLink(title, url) {
    check(url, String);
    check(title, String);

    return Links.insert({
      ownerId: this.userId,
      url,
      title,
      createdAt: new Date(),
    });
  },
  removeLink(id){
    if (Links.find({_id: id, ownerId:this.userId}).fetch().length>0){
      return Links.remove({
        _id:id,
        ownerId:this.userId
      })
    } else {
      console.log("can't sup"+id)
    }
  }
});
