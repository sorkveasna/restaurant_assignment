Meteor.publish('products', function (id) {
    // Waiting
    // Meteor._sleepForMs(1000);

    let data = Collection.Products.find();
    return data;
});
