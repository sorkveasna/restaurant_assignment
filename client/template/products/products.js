//onRendered------------------------------------------------------------------------------------------------------------------------------------
Template.products.onRendered(function () {
    // Create new  alertify
    createNewAlertify('products'); //products is name of alertify
});
Template.productsInsert.onCreated(function () {
    this.subscribe('tags');
});
//events-----------------------------------------------------------------------------------------------------------------------------------------
Template.products.events({
    'click #js-insert': function (error, result) {

        alertify.products(renderTemplate(Template.productsInsert))
            .set({
                title: fa('plus', ' Products')
            }).maximize();
    }
});
//Action------------------------------------------------------------------------------------------------------------------------------------------
Template.productsAction.events({
    'click #js-show': function () {
        Meteor.call('findOne', 'Collection.Products', {_id: this._id}, {}, function (error, result) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.products(renderTemplate(Template.productsShow, result))
                    .set({
                        title: fa('eye', ' Table')
                    });
            }
        });
    },
    'click #js-update': function (error, result) {
        Meteor.call('findOne', 'Collection.Products', {_id: this._id}, {}, function (error, result) {
            if (error) {
                Bert.alert(error.message, 'danger', 'growl-bottom-right');
            }
            else {
                alertify.products(renderTemplate(Template.productsUpdate, result))
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
                Collection.Products.remove(self._id);
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
    productsInsert: { //id autoform
        onSuccess(formType, result) {
            Bert.alert('Successfully Inserted', 'success', 'growl-bottom-right');
        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    },
    productsUpdate: {
        onSuccess(formType, result) {
            Bert.alert('Successfully Updated', 'success', 'growl-bottom-right');
            alertify.products().close();
        },
        onError(formType, error) {
            Bert.alert(error.message, 'danger', 'growl-bottom-right');
        }
    }
});
Template.productsShow.onCreated(function () {
    this.subscribe('products');
});

Template.productsInsert.events({
   'change [name=""]'(event){

   }
});
// Helpers-----------------------------------------------------------------------------------------------------------------------------
Template.productsShow.helpers({
    photo () {
        let getProducts;
        getProducts = Collection.Products.findOne(this._id);

        if (getProducts.photo) {
            getProducts.photoUrl = Files.findOne(getProducts.photo).url();
        } else {
            getProducts.photoUrl = null;
        }
        return getProducts;
    }
});
Template.productsInsert.helpers({
    // tagsId: function () {
    //     var data = Collection.Tags.find();
    //     var list = [{label: '(Select One)', value: ''}];
    //     console.log(data.fetch());
    //
    //     data.forEach(function (obj) {
    //         list.push({
    //             label: obj._id + ' | ' + obj.tags,
    //             value: obj._id
    //         })
    //     });
    //     return list;
    // },
})
