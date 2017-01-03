rabbitRoutes.route('/table', {
    name: "table",
    action: function (params, queryParams) {
        if (Roles.userIsInRole(Meteor.userId(), ['Setting'])) {
            BlazeLayout.render('mainLayout', {
                content: "table"
            });
        }
        else{
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: "Table",
        parent: "home"
    }
});
