////--static
Meteor.publish('table', function (id) {
    // Waiting
    // Meteor._sleepForMs(1000);

    let data = Collection.table.find({_id: id});
    return data;
});

Meteor.publish('class', function () {
    return Collection.Table.find();
});