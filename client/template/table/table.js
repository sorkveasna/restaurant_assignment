//onRendered------------------------------------------------------------------------------------------------------------------------------------
Template.table.onRendered(function () {
    // Create new  alertify
    createNewAlertify('table'); //table is name of alertify
});
//events-----------------------------------------------------------------------------------------------------------------------------------------
Template.table.events({
    'click #js-insert': function (error, result) {

        alertify.table(renderTemplate(Template.tableInsert))
            .set({
                title: fa('plus', ' Table')
            }).maximize();
    }
});
//Action------------------------------------------------------------------------------------------------------------------------------------------
Template.tableAction.events({
    'click #js-show': function () {
        Meteor.call('findOne', 'Collection.Table', {_id: this._id}, {}, function (error, result) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.table(renderTemplate(Template.tableShow, result))
                    .set({
                        title: fa('eye', ' Table')
                    });
            }
        });
    },
    'click #js-update': function (error, result) {
        Meteor.call('findOne', 'Collection.Table', {_id: this._id}, {}, function (error, result) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.table(renderTemplate(Template.tableUpdate, result))
                    .set({
                        title: fa('edit', ' Table')
                    }).maximize();
            }
        });
    },
    'click .jsRemove': function (error, result) {
        var self = this;
        alertify.confirm('Are you sure want to remove?',
            function () {
                Collection.Table.remove(self._id);
                Bert.alert('Successfully Removed', 'success', 'growl-bottom-right');
            },
            function () {
                Bert.alert('Cancel', 'danger', 'growl-bottom-right');
            }
        );
    }
});

//hooks------------------------------------------------------------------------------------------------------------------------------------------
AutoForm.hooks({
    tableInsert: { //id autoform
        onSuccess(formType, result) {
            Bert.alert('Successfully Inserted', 'success', 'growl-bottom-right');
        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    },
    tableUpdate: {
        onSuccess(formType, result) {
            Bert.alert('Successfully Updated', 'success', 'growl-bottom-right');
            alertify.table().close();
        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    }
});
