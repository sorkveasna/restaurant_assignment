rabbitRoutes.route('/userToRole', {
    name: "userToRole",
    action: function (params, queryParams) {
        if (Roles.userIsInRole(Meteor.userId(), ['Setting'])) {
            BlazeLayout.render('mainLayout', {
                content: "userToRole"
            });
        }
        else {
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: "userToRole",
        parent: "home"
    }
});
