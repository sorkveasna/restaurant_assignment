// rabbitRoutes.route('/subjectListRpt', {
//     name: "subjectListRpt",
//     action: function (params, queryParams) {
//         if (Roles.userIsInRole(Meteor.userId(), ['Report'])) {
//             BlazeLayout.render('mainLayout', {
//                 content: "subjectListRpt"
//             });
//         }
//         else{
//             FlowRouter.go('home');
//         }
//     },
//     breadcrumb: {
//         title: "SubjectList Report",
//         parent: "home"
//     }
// });

rabbitRoutes.route('/subjectListRptGen', {
    name: "subjectListRptGen",
    action: function (params, queryParams) {
        BlazeLayout.render('reportLayout', {
            content: "subjectListRptGen"
        });
    }
});
