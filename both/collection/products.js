Collection.Products = new Mongo.Collection('products');
Schema.Products = new SimpleSchema({
    foodName: {
        type: String,
        label: 'Food Name',
        unique: true
    },
    type: {
        type: String,
        label: "Type",
        autoform: {
            type: "select",
            options(){
                return [
                    {label: "Breakfast", value: "Breakfast"},
                    {label: "Lunch", value: "Lunch"},
                    {label: "Dinner", value: "Dinner"},
                    {label: "Dessert", value: "Dessert"},
                    {label: "Coffee", value: "Coffee"},
                    {label: "Drink", value: "Drink"},
                ]
            }
        }
    },
    tags: {
        type: String,
        label: 'Tags',
        autoform: {
            type: 'select2',
            options(){
                let getType = AutoForm.getFieldValue("type");
                var data = Collection.Tags.find();

                var list = [];
                list.push({label: "( Select One )", value: ""});
                data.forEach(function (obj) {
                    obj.type.forEach(function (t) {
                        if (t == getType) {
                            list.push({label: obj._id + ' : ' + obj.tags, value: obj._id});
                        }
                    });
                });

                return list;
            }
        }
    },
    price: {
        type: Number,
        label: 'Price',
        decimal: true,
        autoform: {
            type: 'inputmask',
            afFieldInput: {
                inputmaskOptions: inputmaskOptions.currency()
            }
        }
    },
    des: {
        type: String,
        label: 'Description',
        autoform: {
            afFieldInput: {
                type: 'summernote',
                settings: {
                    height: 86,
                    placeholder: 'write description here...'
                }
            }
        },
        optional:true
    },
    photo: {
        type: String,
        autoform: {
            afFieldInput: {
                type: 'fileUpload',
                collection: 'Files',
                accept: 'image/*'
            }
        },
        optional: true
    }
});
Collection.Products.attachSchema(Schema.Products);