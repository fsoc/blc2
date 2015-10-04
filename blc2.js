Bookings = new Mongo.Collection("bookings");

if (Meteor.isClient) {
  Template.body.helpers({
    bookings: function() {
      return Bookings.find({});
    },
    count: function() {
      return Bookings.find({}).count();
    },
    settings: function() {
      return {
        fields: [
  { key: 'text', label:'Data' },
    { key: 'createdAt', label:'Date', fn: function(date) {
                                                           return moment(date).format("YYYY-MM-DD");
                                                         }}

  ],
    showRowCount: true,
    rowsPerPage: 5
      };
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // Generate some data
    if (Bookings.find({}).count() === 0) {
      var randomDate = function(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
      }

      for (var i = 0; i< 50; i++) {

        var data = Math.random().toString(36).replace(/[^a-z]+/g, '');
        var date = randomDate(new Date(1999,1,1), new Date());
        Bookings.insert({text: data, createdAt: date});
      }
    }
    // code to run on server at startup
  });
}
