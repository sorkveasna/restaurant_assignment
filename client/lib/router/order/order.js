rabbitRoutes.route('/order', {
    name: "order",
    action: function (params, queryParams) {
        if (Roles.userIsInRole(Meteor.userId(), ['Setting'])) {
            BlazeLayout.render('mainLayout', {
                content: "order"
            });
        }
        else{
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: "Order",
        parent: "home"
    }
});
