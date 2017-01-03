//onRendered------------------------------------------------------------------------------------------------------------------------------------
Template.tags.onRendered(function () {
    // Create new  alertify
    createNewAlertify('tags'); //table is name of alertify
});
//events-----------------------------------------------------------------------------------------------------------------------------------------
Template.tags.events({
    'click #js-insert': function (error, result) {

        alertify.tags(renderTemplate(Template.tagsInsert))
            .set({
                title: fa('plus', ' Tags')
            }).maximize();
    }
});
//Action------------------------------------------------------------------------------------------------------------------------------------------
Template.tagsAction.events({
    'click #js-show': function () {
        Meteor.call('findOne', 'Collection.Tags', {_id: this._id}, {}, function (error, result) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.tags(renderTemplate(Template.tagsShow, result))
                    .set({
                        title: fa('eye', ' Table')
                    });
            }
        });
    },
    'click #js-update': function (error, result) {
        Meteor.call('findOne', 'Collection.Tags', {_id: this._id}, {}, function (error, result) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.tags(renderTemplate(Template.tagsUpdate, result))
                    .set({
                        title: fa('edit', ' Tags')
                    }).maximize();
            }
        });
    },
    'click .jsRemove': function (error, result) {
        var self = this;
        alertify.confirm('Are you sure want to remove?',
            function () {
                Collection.Tags.remove(self._id);
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
    tagsInsert: { //id autoform
        onSuccess(formType, result) {
            Bert.alert('Successfully Inserted', 'success', 'growl-bottom-right');
        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    },
    tagsUpdate: {
        onSuccess(formType, result) {
            Bert.alert('Successfully Updated', 'success', 'growl-bottom-right');
            alertify.tags().close();
        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    }
});
