//Collection.Student.permit(['update', 'insert', 'remove'])
//    .ifLoggedIn()
//    .ifHasRole('Data')
//    .apply();
//
//Collection.Register.permit(['update', 'insert', 'remove'])
//    .ifLoggedIn()
//    .ifHasRole('Data')
//    .apply();
//
//Collection.Payment.permit(['update', 'insert', 'remove'])
//    .ifLoggedIn()
//    .ifHasRole('Data')
//    .apply();
//
//Collection.Subject.permit(['update', 'insert', 'remove'])
//    .ifLoggedIn()
//    .ifHasRole('Setting')
//    .apply();
//
//Collection.Teacher.permit(['update', 'insert', 'remove'])
//    .ifLoggedIn()
//    .ifHasRole('Setting')
//    .apply();
//
//Collection.RegisterStatus.permit(['update', 'insert', 'remove'])
//    .ifLoggedIn()
//    .ifHasRole('Data')
//    .apply();
//
//Collection.Company.permit(['update', 'insert', 'remove'])
//    .ifLoggedIn()
//    .ifHasRole('super')
//    .apply();

Collection.Table.permit(['update', 'insert', 'remove'])
    .ifLoggedIn()
    .ifHasRole('Setting')
    .apply();

Collection.Tags.permit(['update', 'insert', 'remove'])
    .ifLoggedIn()
    .ifHasRole('Setting')
    .apply();

Collection.Products.permit(['update', 'insert', 'remove'])
    .ifLoggedIn()
    .ifHasRole('Setting')
    .apply();

