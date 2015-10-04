Bookings = new Mongo.Collection("bookings");

if (Meteor.isClient) {
  Template.body.helpers({
    bookings: function() {
      return Bookings.find({});
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
