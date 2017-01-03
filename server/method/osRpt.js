Meteor.methods({
    outStandingRpt(asAt) {
        let data = {};
        let totalOsAmount = 0;

        asAt = moment(asAt).toDate(); //convert to date

        /*title*/
        data.title = Collection.Company.findOne();

        /*header*/
        data.header = {date: moment(asAt).format('MMM/DD/YYYY')};

        /*content*/
        let selector = {
            regDate: {$lte: asAt}
        };
        let option = {
            sort: {regDate: -1}
        };

        let tempContent = Collection.Register.find(selector, option);
        let content = [];
        tempContent.forEach(function (obj) {

            //check last paid
            let lastPaid = Collection.Payment.findOne({registerId :obj._id}, {sort: {_id: -1}});

            if (lastPaid) {
                if (lastPaid.osAmount > 0) {

                    // find subject
                    let registerDoc = Collection.Register.findOne(lastPaid.registerId);
                    let subjectDoc = Collection.Subject.findOne(registerDoc.subjectId);
                    lastPaid._subject = subjectDoc;

                    totalOsAmount += lastPaid.osAmount;
                    content.push(lastPaid);
                }
            }
        });

        data.content = content;

        /*footer*/
        data.footer = totalOsAmount;
        return data;
    }
});
