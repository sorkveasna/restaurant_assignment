Collection.Tags = new Mongo.Collection('tags');
Schema.Tags = new SimpleSchema({
    tags: {
        type: String,
        label: 'Food Tags',
        unique: true
    },
    type: {
        type: [String],
        label: "Food Type",
        autoform: {
            type: "select-multiple",
            multiple: true,
            options() {
                return [
                    {label: "Breakfast", value: "Breakfast"},
                    {label: "Lunch", value: "Lunch"},
                    {label: "Dinner", value: "Dinner"},
                    {label: "Dessert", value: "Dessert"},
                    {label: "Coffee", value: "Coffee"},
                    {label: "Drink", value: "Drink"}
                ]
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
        optional: true
    }
});
Collection.Tags.attachSchema(Schema.Tags);