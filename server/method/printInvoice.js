Meteor.methods({
    printInvoice(paymentId) {
        let data = {};
        // var data = {
        //     title: {},
        //     header: {},
        //     content: [{index: 'No Result'}],
        //     footer: {}
        // };

        function toWords(num) {

            var a = ['', 'មួយ ', 'ពីរ', 'បី', 'បួន ', 'ប្រាំ ', 'ប្រាំមួយ ', 'ប្រាំពីរ', 'ប្រាំបី ', 'ប្រាំបួន '];
//, 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
            var b = ['', 'ដប់ ', 'ម្ភៃ', 'សាមសិប', 'សែសិប', 'ហាសិប', 'ហុកសិប', 'ចិតសិប', 'ប៉ែតសិប', 'កៅសិប'];


            if ((num = num.toString()).length > 9) return 'overflow';
            n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
            if (!n) return;
            var str = '';
            str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + a[n[1][1]]) + 'សែន' : '';
            str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + a[n[2][1]]) + 'មឺុន ' : '';
            str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + a[n[3][1]]) + 'ពាន់' : '';
            str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + a[n[4][1]]) + 'រយ' : '';
            str += (n[5] != 0) ? ((str != '') ? '' : '') + (a[Number(n[5])] || b[n[5][0]] + a[n[5][1]]) + "" : '';
            return (str);
        }

        /*title*/
        data.title = Collection.Company.findOne();

        /*header*/

        /*content*/
        let tempContent = Collection.Payment.find({_id: paymentId});
        var paidAmount;
        var subjectName;
        let content = [];
        tempContent.forEach(function (obj) {
            paidAmount = obj.paidAmount;
            content.push(obj);
            let registerDoc = Collection.Register.findOne(obj.registerId);
            subjectName = registerDoc._subject.name;

        });
        // data.footer = {};
        data.paidAmountKh = toWords(paidAmount);
        data.subjectName = subjectName;
        data.content = content;
        return data;
    }
});
