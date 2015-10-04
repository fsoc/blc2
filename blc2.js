Bookings = new Mongo.Collection("bookings");

if (Meteor.isClient) {
  Template.body.helpers({
    bookings: function() {
      return Bookings.find({});
    }
  });

  UI.registerHelper('formatTime', function(context, options) {
    if(context) {
      return moment(context).format("YYYY-MMM-DD HH:MM");
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
