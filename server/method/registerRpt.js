Meteor.methods({
    registerRpt(fromDate, toDate, subjectId, studyDay) {
        let data = {};
        let totalPrice = 0;
        let totalDiscount = 0;
        let totalAmount = 0;

        fromDate = moment(fromDate).toDate(); //convert to date
        toDate = moment(toDate).toDate();

        /*title*/
        data.title = Collection.Company.findOne();
        
        /*header*/
        data.header = {
            date: moment(fromDate).format('MMM/DD/YYYY') + ' to ' +
            moment(toDate).format('MMM/DD/YYYY')
        };
        
        /*content*/
        let selector = {
            regDate: {$gte: fromDate, $lte: toDate}
        };
        let option = {
            sort: {regDate: 1}
        };

        let tempContent = Collection.Register.find(selector, option);
        let content = [];
        tempContent.forEach(function (obj) {

            /*subjectId == true && studyDay == true*/
            if (obj.subjectId == subjectId) {
                if (obj.studyDay == studyDay) {
                    totalPrice += obj.price;
                    totalDiscount += obj.discount;
                    totalAmount += obj.amount;

                    content.push(obj);
                }
                /*subjectId == true && studyDay == false*/
                else if (studyDay == null) {
                    totalPrice += obj.price;
                    totalDiscount += obj.discount;
                    totalAmount += obj.amount;

                    content.push(obj);
                }
            }

            /*subjectId == false && studyDay == true*/
            else if (subjectId == null) {
                if (obj.studyDay == studyDay) {
                    totalPrice += obj.price;
                    totalDiscount += obj.discount;
                    totalAmount += obj.amount;
                    content.push(obj);
                }
                /*subjectId == false && studyDay == false*/
                else if (studyDay == null) {
                    totalPrice += obj.price;
                    totalDiscount += obj.discount;
                    totalAmount += obj.amount;
                    content.push(obj);
                }

            }
        });

        data.content = content;
        
        /*footer*/
        data.footer = {totalPrice, totalDiscount, totalAmount};
        return data;
    }
});
