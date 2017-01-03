rabbitRoutes.route('/tags', {
    name: "tags",
    action: function (params, queryParams) {
        if (Roles.userIsInRole(Meteor.userId(), ['Setting'])) {
            BlazeLayout.render('mainLayout', {
                content: "tags"
            });
        }
        else{
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: "Tags",
        parent: "home"
    }
});
