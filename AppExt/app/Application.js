/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('AppExt.Application', {
    extend: 'Ext.app.Application',
    
    name: 'AppExt',

    views: [
        // TODO: add views here
    ],

    controllers: [
        'Root'
        // TODO: add controllers here
    ],

    stores: [
        // TODO: add stores here
    ],
    
    launch: function () {
        // TODO - Launch the application
    }
});
