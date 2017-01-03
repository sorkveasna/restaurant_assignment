TabularTables.Table = new Tabular.Table({
    name: 'Table',
    collection: Collection.Table,
    responsive: true,
    autoWidth: false,
    columnDefs: [{
        'width': '1px',
        'targets': 0
    }],
    columns: [
        {
            title: fa('bars'), //custom columns
            tmpl: Meteor.isClient && Template.tableAction
        },
        {data: '_id', title: 'ID'},
        {data: 'tableNum', title: 'Table Number'},
        {data: 'chair', title: 'Chair'},
        {data: 'location', title: 'Location'},
        {data: 'des', title: 'Description'}
    ]
});
