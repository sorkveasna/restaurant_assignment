Meteor.methods({
    paymentRpt(fromDate, toDate) {
        let data = {};
        let totalDueAmount = 0;
        let totalPaidAmount = 0;

        fromDate = moment(fromDate).toDate();
        toDate = moment(toDate).toDate();

        /*title*/
        data.title = Collection.Company.findOne();
        
        /*header*/
        data.header = {
            date: moment(fromDate).format('MMM/DD/YYYY') + " to " + moment(toDate).format('MMM/DD/YYYY')
        };
        
        /*content*/
        let selector = {
            paidDate: {$gte: fromDate, $lte: toDate}
        };
        let option = {
            sort: {paidDate: 1}
        };

        let tempContent = Collection.Payment.find(selector, option);
        let content = [];
        tempContent.forEach(function (obj) {

            // find subject
            let registerDoc = Collection.Register.findOne(obj.registerId);
            let subjectDoc = Collection.Subject.findOne(registerDoc.subjectId);
            obj._subject = subjectDoc;

            totalDueAmount += obj.dueAmount;
            totalPaidAmount += obj.paidAmount;
            content.push(obj);
        });

        
        data.content = content;
        
        /*footer*/
        data.footer = {totalDueAmount, totalPaidAmount};
        return data;
    }
});
