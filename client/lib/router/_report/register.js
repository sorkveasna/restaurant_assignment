rabbitRoutes.route('/registerRpt', {
    name: "registerRpt",
    action: function(params, queryParams) {
        if (Roles.userIsInRole(Meteor.userId(), ['Setting'])) {
            BlazeLayout.render('mainLayout', {
                content: "registerRpt"
            });
        }
        else{
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: "Register Report",
        parent: "home"
    }
});

rabbitRoutes.route('/registerRptGen', {
    name: "registerRptGen",
    action: function(params, queryParams) {
        BlazeLayout.render('reportLayout', {
            content: "registerRptGen"
        });
    }
});
