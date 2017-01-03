//Collection.Student.before.insert((userId, doc) => {
//    doc._id = idGenerator.gen(Collection.Student, 3);
//});
//
//Collection.Subject.before.insert((userId, doc) => {
//    doc._id = idGenerator.gen(Collection.Subject, 3);
//});
//
//Collection.Teacher.before.insert((userId, doc) => {
//    doc._id = idGenerator.gen(Collection.Teacher, 3);
//});
//
//Collection.Register.before.insert((userId, doc) => {
//    doc._id = idGenerator.gen(Collection.Register, 3);
//});
//
//Collection.Payment.before.insert((userId, doc) => {
//    doc._id = idGenerator.gen(Collection.Payment, 3);
//});
//
//Collection.RegisterStatus.before.insert((userId, doc) => {
//    doc._id = idGenerator.gen(Collection.RegisterStatus, 3);
//});
//
//Collection.Company.before.insert((userId, doc) => {
//    doc._id = idGenerator.gen(Collection.Company, 3);
//});

Collection.Table.before.insert((userId, doc) => {
    doc._id = idGenerator.gen(Collection.Table, 3);
});
Collection.Tags.before.insert((userId, doc) => {
    doc._id = idGenerator.gen(Collection.Tags, 3);
});
Collection.Products.before.insert((userId, doc) => {
    doc._id = idGenerator.gen(Collection.Products, 3);
});