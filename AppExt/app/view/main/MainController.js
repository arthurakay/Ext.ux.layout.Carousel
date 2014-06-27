Ext.define('AppExt.view.main.MainController', {
    extend : 'Ext.app.ViewController',
    alias  : 'controller.mainviewcontroller',

    onAdd : function () {
        var cmp = this.lookupReference('carousel');

        cmp.add({
            xtype  : 'image',
            src    : 'resources/photos/Animals/' + Math.floor(Math.random() * 10 + 1) + '.jpg',
            width  : 500,
            height : 300
        });
    },

    onRemove : function () {
        var cmp = this.lookupReference('carousel');
        cmp.remove(cmp.items.getAt(0));
    },

    onPrev : function () {
        var cmp = this.lookupReference('carousel');
        cmp.getLayout().movePrev();
    },

    onNext : function () {
        var cmp = this.lookupReference('carousel');
        cmp.getLayout().moveNext();
    }
});