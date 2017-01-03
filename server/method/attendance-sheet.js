Meteor.methods({
    attendanceSheet() {
        let data = {};

        /*title*/
        data.title = Collection.Company.findOne();

        /*header*/
        data.header = new Date();

        /*content*/

        let tempContent = Collection.Student.find();
        let content = [];
        tempContent.forEach(function (obj) {
            content.push(obj);
        });

        data.content = content;

        /*footer*/

        return data;
    }
});

