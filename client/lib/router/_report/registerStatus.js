rabbitRoutes.route('/registerStatusRpt', {
    name: "registerStatusRpt",
    action: function (params, queryParams) {
        if (Roles.userIsInRole(Meteor.userId(), ['Report'])) {
            BlazeLayout.render('mainLayout', {
                content: "registerStatusRpt"
            });
        }
        else{
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: "RegisterStatus Report",
        parent: "home"
    }
});

rabbitRoutes.route('/registerStatusRptGen', {
    name: "registerStatusRptGen",
    action: function (params, queryParams) {
        BlazeLayout.render('reportLayout', {
            content: "registerStatusRptGen"
        });
    }
});
