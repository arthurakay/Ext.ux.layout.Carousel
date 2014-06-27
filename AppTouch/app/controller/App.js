Ext.define('Foo.controller.App', {
    extend : 'Ext.app.Controller',

    config : {

        refs : {
            'carousel' : 'main'
        },

        control : {
            'button#Prev' : {
                'tap' : 'onPrevTap'
            },

            'button#Next' : {
                'tap' : 'onNextTap'
            },

            'button#Add' : {
                'tap' : 'onAddTap'
            },

            'button#Remove' : {
                'tap' : 'onRemoveTap'
            }
        }

    },

    onPrevTap : function () {
        var cmp = this.getCarousel();
        cmp.getLayout().movePrev();
    },

    onNextTap : function () {
        var cmp = this.getCarousel();
        cmp.getLayout().moveNext();
    },

    onAddTap : function () {
        var cmp = this.getCarousel();

        cmp.add({
            xtype  : 'image',
            src    : 'resources/photos/Animals/' + Math.floor(Math.random() * 10 + 1) + '.jpg',
            width  : 500,
            height : 300
        });
    },

    onRemoveTap : function () {
        var cmp = this.getCarousel();
        cmp.remove(cmp.items.getAt(0))
    }
});