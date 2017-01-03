Collection.Table = new Mongo.Collection('table');
Schema.Table = new SimpleSchema({
    tableNum: {
        type: String,
        label: 'Table Number',
        unique: true
    },
    chair: {
        type: String,
        label: 'Chair',
        unique: true
    },
    location: {
        type: String,
        label: 'Location',
        autoform: {
            type: 'select',
            options() {
                return [
                    {label: "General", value: "General"},
                    {label: "Right", value: "Right"},
                    {label: "Middle", value: "Middle"},
                    {label: "Left", value: "Left"},
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
        optional:true
    }
});
Collection.Table.attachSchema(Schema.Table);