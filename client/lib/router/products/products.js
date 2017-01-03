rabbitRoutes.route('/products', {
    name: "products",
    action: function (params, queryParams) {
        if (Roles.userIsInRole(Meteor.userId(), ['Setting'])) {
            BlazeLayout.render('mainLayout', {
                content: "products"
            });
        }
        else{
            FlowRouter.go('home');
        }
    },
    breadcrumb: {
        title: "Products",
        parent: "home"
    }
});
