Collection.Order = new Mongo.Collection('order');
Schema.Order = new SimpleSchema({
    orderDate: {
        type: Date,
        label: 'Order Date',
        defaultValue: moment().toDate(),
        autoform: {
            type: 'bootstrap-datetimepicker',
            afFieldInput: {
                dateTimePickerOptions: {
                    pickTime: false,
                    format: 'MMM/DD/YYYY'
                }
            }
        }
    },
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
    qty: {
        type: Number,
        label: "Qty",
    },
    price: {
        type: Number,
        label: "Price",
        decimal: true,
        autoform: {
            type: "inputmask",
            afFieldInput: {
                inputmaskOptions: inputmaskOptions.currency()
            }
        }
    },
    table: {
        type: String,
        label: "Table",
        autoform: {
            type: 'select2'
        }
    },
});
Collection.Order.attachSchema(Schema.Order);