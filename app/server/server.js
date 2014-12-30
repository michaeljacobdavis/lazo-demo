define(['lazoServer'], function (LazoServer) {

    'use strict';

    return LazoServer.extend({

        setup: function (hapi, pack, servers, options) {
            console.log('Access to Hapi makes me happy!');
            options.success();
        }
    });
});
