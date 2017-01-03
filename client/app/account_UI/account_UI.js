// Config Account UI
Accounts.ui.config({
    passwordSignupFields: "USERNAME_AND_OPTIONAL_EMAIL",

    //Custom
    requestPermissions: {}
    // extraSignupFields: [
    //     {
    // fieldName: 'name',
    // fieldLabel: 'Full name',
    // inputType: 'text',
    // visible: true,
    // validate: function (value, errorFunction) {
    //     // var name = s.trim(value);
    //     var name;
    //
    //     if (!name) {
    //         errorFunction("Please write your full name");
    //         return false;
    //     } else {
    //         return true;
    //     }
    // },
    // saveToProfile: true
    // }
    // ]
});

accountsUIBootstrap3.logoutCallback = function (error) {
    console.log("logout");
    if (error) console.log("Error:" + error);
    Bert.alert('You logged out', 'info', 'fixed-bottom');
    // sAlert.success(
    //     {
    //         // sAlertIcon: 'asterisk',
    //         sAlertTitle: 'You logged out',
    //         // message: 'You logged out',
    //         position: 'bottom'
    //     }
    // );
    FlowRouter.go('home');
    
};

// accountsUIBootstrap3.loggingIn = function (error) {
//     if (error) console.log("Error:" + error);
//     console.log('hello')
//     Bert.alert('You logged in', 'info', 'fixed-bottom');
//     FlowRouter.go('home');
// };
