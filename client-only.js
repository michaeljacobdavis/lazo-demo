define(function () {
    'use strict';

    return {
        load: function (name, req, onload) {
            // Need undefined check for r.js bundling. LAZO won't exist,
            // but it's bundled for the client, so we want it included.
            if (typeof LAZO === 'undefined' || LAZO.app.isClient) {

                req([name], function (value) {
                    onload(value);
                });

            } else {
                onload(null);
            }
        }
    };

});
