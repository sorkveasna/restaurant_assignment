TabularTables.Tags = new Tabular.Table({
    name: 'Tags',
    collection: Collection.Tags,
    responsive: true,
    autoWidth: false,
    columnDefs: [{
        'width': '1px',
        'targets': 0
    }],
    columns: [
        {
            title: fa('bars'), //custom columns
            tmpl: Meteor.isClient && Template.tagsAction
        },
        {data: '_id', title: 'ID'},
        {data: 'tags', title: 'Food Tags'},
        {data: 'type', title: 'Food Type'},
        {data: 'des', title: 'Description'}
    ]
});