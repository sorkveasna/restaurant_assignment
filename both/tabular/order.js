TabularTables.Order = new Tabular.Table({
    name: 'Order',
    collection: Collection.Order,
    responsive: true,
    autoWidth: false,
    columnDefs: [{
        'width': '1px',
        'targets': 0
    }],
    columns: [
        {
            title: fa('bars'), //custom columns
            tmpl: Meteor.isClient && Template.orderAction
        },
        {data: '_id', title: 'ID'},
        {
            data: 'orderDate',
            title: 'Order Date',
            render: function (val, type, doc) {
                if (val instanceof Date) {
                    return moment(val).format('MMM/DD/YYYY');
                } else {
                    return 'Never';
                }
            }
        },
        {data: 'foodName', title: 'Food Name'},
        {data: 'type', title: 'Food Type'},
        {data: 'qty', title: 'Qty'},
        {
            data: 'price',
            title: 'Price',
            render: function (val, type, doc) {
                return numeral(val).format('$ 0,0.00');
            }
        },
        {data: "table", title: "Table"},
    ]
});
