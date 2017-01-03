TabularTables.Products = new Tabular.Table({
    name: 'Products',
    collection: Collection.Products,
    responsive: true,
    autoWidth: false,
    columnDefs: [{
        'width': '1px',
        'targets': 0
    }],
    columns: [
        {
            title: fa('bars'), //custom columns
            tmpl: Meteor.isClient && Template.productsAction
        },
        {data: '_id', title: 'ID'},
        {data: 'foodName', title: 'Food Name'},
        {data: 'type', title: 'Food Type'},
        {data: 'tags', title: 'Food Tags'},
        {
            data: 'price',
            title: 'Price',
            render: function (val, type, doc) {
                return numeral(val).format('$ 0,0.00');
            }
        },
        {data: 'des', title: 'Description'},
        {
            data: "photo",
            title: "Photo",
            render: function (val, type, doc) {
                if (_.isUndefined(val)) {
                    return null;
                } else {
                    let img = Files.findOne(val);

                    return lightbox(img.url(), doc._id, doc.name);
                }
            }
        },
    ]
});
