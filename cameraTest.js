if (Meteor.isClient) {


  Template.hello.helpers({

  });

  Template.hello.events({
    'click button': function () {
    MeteorCamera.getPicture({width: 100, height: 100, quality: 80}
      , function(err, data){
        if(err){
          console.log(err)
        }
        else {
          console.log(data);
        }
      })
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
