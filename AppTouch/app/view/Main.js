Ext.define('Foo.view.Main', {
    extend : 'Ext.Container',
    xtype  : 'main',

    requires : [
        'Ext.layout.HBox',
        'Ext.Img',
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.form.Panel',
        'Ext.field.Text',
        'Ext.field.Slider',
        'Ext.field.Checkbox',
        'Ext.field.DatePicker',

        'Ext.ux.layout.Carousel'
    ],

    config : {
        layout : {
            type         : 'carousel',
            portalWidth  : 500,
            portalHeight : 300,
            direction    : 'vertical'
        }
    },

    initialize : function () {
        var items = [

            {
                xtype  : 'image',
                src    : 'resources/photos/Animals/1.jpg',
                width  : 500,
                height : 300
            },

            {
                xtype  : 'formpanel',
                height : 300,
                width  : 500,
                items  : [
                    {
                        xtype : 'textfield',
                        label : 'First Name'
                    },
                    {
                        xtype : 'textfield',
                        label : 'Last Name'
                    }
                ]
            },

            {
                xtype  : 'image',
                src    : 'resources/photos/Animals/2.jpg',
                width  : 500,
                height : 300
            },

            {
                xtype  : 'formpanel',
                height : 300,
                width  : 500,
                items  : [
                    {
                        xtype : 'sliderfield',
                        label : 'Awesome'
                    },
                    {
                        xtype : 'sliderfield',
                        label : 'Lame'
                    }
                ]
            },

            {
                xtype  : 'image',
                src    : 'resources/photos/Animals/2.jpg',
                width  : 500,
                height : 300
            },

            {
                xtype  : 'formpanel',
                height : 300,
                width  : 500,
                items  : [
                    {
                        xtype : 'checkboxfield',
                        label : 'Check'
                    },
                    {
                        xtype : 'datepickerfield',
                        label : 'Date'
                    }
                ]
            }
        ];

        this.add(items);

        this.callParent();
    }
});