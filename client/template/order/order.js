//onRendered------------------------------------------------------------------------------------------------------------------------------------
Template.order.onRendered(function () {
    // Create new  alertify
    createNewAlertify('order'); //table is name of alertify
});
//events-----------------------------------------------------------------------------------------------------------------------------------------
Template.order.events({
    'click #js-insert': function (error, result) {

        alertify.order(renderTemplate(Template.orderInsert))
            .set({
                title: fa('plus', ' Order')
            }).maximize();
    }
});
//Action------------------------------------------------------------------------------------------------------------------------------------------
Template.orderAction.events({
    'click #js-show': function () {
        Meteor.call('findOne', 'Collection.Order', {_id: this._id}, {}, function (error, result) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.order(renderTemplate(Template.orderShow, result))
                    .set({
                        title: fa('eye', ' Order')
                    });
            }
        });
    },
    'click #js-update': function (error, result) {
        Meteor.call('findOne', 'Collection.Order', {_id: this._id}, {}, function (error, result) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.order(renderTemplate(Template.orderUpdate, result))
                    .set({
                        title: fa('edit', ' Order')
                    }).maximize();
            }
        });
    },
    'click .jsRemove': function (error, result) {
        var self = this;
        alertify.confirm('Are you sure want to remove?',
            function () {
                Collection.Order.remove(self._id);
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
    orderInsert: { //id autoform
        onSuccess(formType, result) {
            Bert.alert('Successfully Inserted', 'success', 'growl-bottom-right');
        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    },
    orderUpdate: {
        onSuccess(formType, result) {
            Bert.alert('Successfully Updated', 'success', 'growl-bottom-right');
            alertify.order().close();
        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    }
});

Template.orderInsert.onCreated(function () {
    this.subscribe('table');
});

Template.orderInsert.helpers({
    tagsId: function () {
        var data = Collection.Table.find();
        var list = [{label: '(Select One)', value: ''}];
        console.log(data.fetch());

        data.forEach(function (obj) {
            list.push({
                label: obj._id + ' | ' + obj.table,
                value: obj._id
            })
        });
        return list;
    },
});

