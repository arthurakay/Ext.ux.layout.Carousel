Ext.define('AppExt.view.main.Main', {
    extend : 'Ext.container.Container',

    requires : [
        'Ext.layout.container.HBox',
        'Ext.Img',
        'Ext.toolbar.Toolbar',
        'Ext.toolbar.Spacer',
        'Ext.button.Button',
        'Ext.layout.container.Fit',
        'Ext.panel.Panel',

        'Ext.form.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.Checkbox',
        'Ext.form.field.Date',

        'Ext.ux.layout.Carousel'
    ],

    xtype : 'app-main',

    controller : 'mainviewcontroller',

    items : [
        {
            xtype : 'toolbar',
            items : [
                {
                    xtype     : 'button',
                    text      : 'Prev',
                    listeners : {
                        click : 'onPrev'
                    }
                },
                {
                    xtype     : 'button',
                    text      : 'Next',
                    listeners : {
                        click : 'onNext'
                    }
                },
                { xtype : 'tbspacer' },
                {
                    xtype     : 'button',
                    text      : 'Add',
                    listeners : {
                        click : 'onAdd'
                    }
                },
                {
                    xtype     : 'button',
                    text      : 'Remove',
                    listeners : {
                        click : 'onRemove'
                    }
                }
            ]
        },
        {
            xtype     : 'panel',
            reference : 'carousel',

            layout : {
                type         : 'carousel',
                portalWidth  : 500,
                portalHeight : 300,
                direction    : 'vertical'
            },

            items : [
                {
                    xtype  : 'image',
                    src    : 'resources/photos/Animals/1.jpg',
                    width  : 500,
                    height : 300
                },

                {
                    xtype  : 'form',
                    height : 300,
                    width  : 500,
                    frame  : true,

                    items : [
                        {
                            xtype      : 'textfield',
                            fieldLabel : 'First Name'
                        },
                        {
                            xtype      : 'textfield',
                            fieldLabel : 'Last Name'
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
                    xtype  : 'form',
                    height : 300,
                    width  : 500,
                    frame  : true,

                    items : [
                        {
                            xtype      : 'datefield',
                            fieldLabel : 'Date'
                        }
                    ]
                },

                {
                    xtype  : 'image',
                    src    : 'resources/photos/Animals/3.jpg',
                    width  : 500,
                    height : 300
                },

                {
                    xtype  : 'form',
                    height : 300,
                    width  : 500,
                    frame  : true,

                    items : [
                        {
                            xtype      : 'checkboxfield',
                            fieldLabel : 'Check'
                        }
                    ]
                }
            ]
        }
    ]
});
