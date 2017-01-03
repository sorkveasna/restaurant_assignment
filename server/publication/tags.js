Meteor.publish('tags', function (id) {
    // Waiting
    // Meteor._sleepForMs(1000);

    let data = Collection.Tags.find();
    return data;
});
