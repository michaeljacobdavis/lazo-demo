define(['lazoCtl'], function (LazoCtl) {

    'use strict';

    return LazoCtl.extend({
        index: function (options) {
            var ctl = this;

            this.loadCollection('widgets', {
                success: function (widgets) {
                    ctl.ctx.collections.widgets = widgets;
                    options.success('index');
                },
                error: function (error) {
                    options.error(error);
                }
            });
        }
    });

});
