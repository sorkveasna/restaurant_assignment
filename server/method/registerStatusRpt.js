Meteor.methods({
    registerStatusRpt(fromDate, toDate, status) {
        let data = {};
        // var data = {
        //     title: {},
        //     header: {},
        //     content: [{index: 'No Result'}],
        //     footer: {}
        // };
        var countActive = 0;
        var countSuspend = 0;
        var countCancel = 0;
        var countClosed = 0;

        /*title*/
        data.title = Collection.Company.findOne();


        fromDate = moment(fromDate).toDate(); //convert to date
        toDate = moment(toDate).toDate(); //convert to date

        /*header*/
        data.header = {
            date: moment(fromDate).format('MMM/DD/YYYY') +
            ' to ' + moment(toDate).format('MMM/DD/YYYY')
        };

        /*content*/
        let selector = {
            statusDate: {$gte: fromDate, $lte: toDate}
        };
        // let option = {
        //     sort: {statusDate: -1}
        // };


        let content = Collection.RegisterStatus.aggregate([
            {$match: selector},
            {
                $group: {
                    _id: {
                        _id:'$_id',
                        statusDate:'$statusDate',
                        status:'$status',
                        des:'$des',
                        studentId:'$studentId',
                        registerId:'$registerId'
                    },
                    // count: {$sum: 1}
                }
            },
            {$sort: {statusDate:-1}}
        ]);
        console.log(content);
// return content;
        /*----------------------------------------------------------------*/
        /*let tempContent = Collection.RegisterStatus.find(selector, option);
         let content = [];
         tempContent.forEach(function (obj) {

         if (obj.status == status) {
         if (obj.status == 'Active') {
         countActive += 1;
         }
         if (obj.status == 'Suspend') {
         countSuspend += 1;
         }
         if (obj.status == 'Cancel') {
         countCancel += 1;
         }
         if (obj.status == 'Closed') {
         countClosed += 1;
         }
         content.push(obj);
         } else if (status == null) {
         if (obj.status == 'Active') {
         countActive += 1;
         }
         if (obj.status == 'Suspend') {
         countSuspend += 1;
         }
         if (obj.status == 'Cancel') {
         countCancel += 1;
         }
         if (obj.status == 'Closed') {
         countClosed += 1;
         }
         content.push(obj);

         }
         });*/
        /*----------------------------------------------------------------*/

        data.content = content;

        /*footer*/
        // data.footer = {countActive, countSuspend, countCancel, countClosed};
        return data;
    }
});
