define(['lazoApp'], function (LazoApp) {

    'use strict';

    return LazoApp.extend({

        initialize: function (callback) {
            LAZO.logger.setLevel('debug');
            callback();
        }

    });

});
