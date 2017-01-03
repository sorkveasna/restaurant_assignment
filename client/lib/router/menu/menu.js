FlowRouter.route('/menu/:type', {
    name: "menu",
    action: function (params, queryParams) {
        BlazeLayout.render('mainLayout', {content: "menu"});
    },
    breadcrumb:{
        title:'Menu',
        parent:'home'
    }
});
//FlowRouter.route('/productsInsert', {
//    name: "productsInsert",
//    action: function (params, queryParams) {
//        BlazeLayout.render('mainLayout', {content: "productsInsert"});
//    },
//    breadcrumb:{
//        title:'Insert',
//        parent:'products'
//    }
//});
//FlowRouter.route('/productsUpdate/:id', {
//    name: "productsUpdate",
//    action: function (params, queryParams) {
//        BlazeLayout.render('mainLayout', {content: "productsUpdate"});
//    },
//    breadcrumb:{
//        title:'Update',
//        parent:'products'
//    }
//});