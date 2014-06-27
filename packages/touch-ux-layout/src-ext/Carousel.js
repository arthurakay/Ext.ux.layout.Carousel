Ext.define('Ext.ux.layout.Carousel', {
    extend : 'Ext.layout.container.Container',
    alias  : 'layout.carousel',

    config : {
        /**
         * @cfg {number} portalHeight
         * Height of the carousel, in pixels
         */
        portalHeight : 0,

        /**
         * @cfg {number} portalWidth
         * Width of the carousel, in pixels
         */
        portalWidth : 0,

        /**
         * @cfg {string} direction
         * 'horizontal' or 'vertical'
         */
        direction : 'horizontal' //or 'vertical'
    },

    setOwner : function () {
        var me = this;

        me.callParent(arguments);

        me.rotation = 0;
        me.theta = 0;

        if (me.owner.rendered) { return; }

        switch (Ext.browser.name) {
            case 'IE':
                me.transformProp = 'msTransform';
                break;

            case 'Firefox':
                me.transformProp = 'MozTransform';
                break;

            case 'Safari':
            case 'Chrome':
                me.transformProp = 'WebkitTransform';
                break;

            case 'Opera':
                me.transformProp = 'OTransform';
                break;

            default:
                me.transformProp = 'WebkitTransform';
                break;

        }

        me.owner.addCls('x-layout-carousel');
        me.owner.on('render', me.onRenderHandler, me);
    },

    onRenderHandler : function () {
        var me = this;

        //add the "ready" class to set the CSS transition state
        me.owner.addCls('x-layout-carousel-ready');

        //set the drag handler on the underlying DOM
        me.owner.el.on({
            drag      : 'onDrag',
            dragstart : 'onDragStart',
            dragend   : 'onDragEnd',
            scope     : me
        });

        //revise the item positions after layouts are complete
        me.owner.on('afterlayout', me.modifyItems, me);

        me.modifyItems();
    },

    onAdd : function () {
        this.callParent(arguments);
        this.modifyItems();
    },

    onRemove : function () {
        this.callParent(arguments);
        this.modifyItems();
    },

    modifyItems : function () {
        if (!this.owner.rendered) { return; }

        var me = this,
            isHorizontal = (me.getDirection().toLowerCase() === 'horizontal'),
            ct = me.owner,
            panelCount = ct.items.getCount(),
            panelSize = ct.el.dom[ isHorizontal ? 'offsetWidth' : 'offsetHeight' ],
            i = 0,
            panel, angle;

        me.theta = 360 / panelCount;
        me.rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
        me.radius = Math.round(( panelSize / 2) / Math.tan(Math.PI / panelCount));

        for (i; i < panelCount; i++) {
            panel = ct.items.getAt(i);
            angle = me.theta * i;

            panel.addCls('x-layout-carousel-item');

            if (panel.rendered) {
                // rotate panel, then push it out in 3D space
                panel.el.dom.style[ me.transformProp ] = me.rotateFn + '(' + angle + 'deg) translateZ(' + me.radius + 'px)';
            }
        }

        // adjust rotation so panels are always flat
        me.rotation = Math.round(me.rotation / me.theta) * me.theta;

        me.transform();
    },

    transform : function () {
        if (!this.owner.rendered) { return; }

        var me = this,
            el = me.owner.el,
            h = el.dom.offsetHeight,
            style = el.dom.style;

        // push the carousel back in 3D space, and rotate it
        el.down('.x-panel-body').dom.style[ me.transformProp ] = 'translateZ(-' + me.radius + 'px) ' + me.rotateFn + '(' + me.rotation + 'deg)';

        style.margin = parseInt(h / 2, 10) + 'px auto';
        style.height = me.getPortalHeight() + 'px';
        style.width = me.getPortalWidth() + 'px';
    },

    rotate : function (increment) {
        var me = this;

        me.rotation += me.theta * increment * -1;
        me.transform();
    },

    moveNext : function () {
        this.rotate(1);
    },

    movePrev : function () {
        this.rotate(-1);
    },

    onDragStart : function () {
        this.owner.el.dom.style.webkitTransitionDuration = "0s";
    },

    onDrag : function (e) {
        var me = this,
            isHorizontal = (me.getDirection().toLowerCase() === 'horizontal'),
            delta;

        if (isHorizontal) {
            delta = -(e.deltaX - e.previousDeltaX) / me.getPortalWidth();
        }
        else {
            delta = (e.deltaY - e.previousDeltaY) / me.getPortalHeight();
        }

        me.rotate((delta * 10).toFixed());
    },

    onDragEnd : function () {
        this.owner.el.dom.style.webkitTransitionDuration = "0.4s";
    }
});