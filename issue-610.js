if (Meteor.isClient) {
  Router.configure({
    notFoundTemplate: 'notFound'
  });

  Router.onBeforeAction('dataNotFound');

  // set Session.set('ready', true) to 
  // simulate the subscription being ready.
  var fakeReadyHandle = {
    ready: function () {
      return Session.get('ready');
    }
  };

  Router.map(function () {
    this.route('withData', {
      path: '/',
      template: 'item',
      waitOn: function () {
        return fakeReadyHandle;
      },
      data: function () {
        return {};
      }
    });

    this.route('withDataNotFound', {
      path: '/bogusdata',
      template: 'item',
      waitOn: function () {
        return fakeReadyHandle;
      },
      data: function () {
        return null;
      }
    });
  });
}
