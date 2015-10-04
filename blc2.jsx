if (Meteor.isClient) {
  Meteor.startup(function () {
    React.render(<App />, document.getElementById("render-target"));
  });
//  // counter starts at 0
//  Session.setDefault('counter', 0);
//
//  Template.hello.helpers({
//    counter: function () {
//      return Session.get('counter');
//    }
//  });
//
//  Template.hello.events({
//    'click button': function () {
//      // increment the counter when button is clicked
//      Session.set('counter', Session.get('counter') + 1);
//    }
//  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
// <head>
//   <title>blc2</title>
// </head>
// 
// <body>
//   <div id='render-target' ></div>
//   <h1>Welcome to Meteor!</h1>
// 
//   {{> hello}}
// </body>
// 
// <template name="hello">
//   <button class="btn">Click Me</button>
//   <p>You've pressed the button {{counter}} times.</p>
// </template>
