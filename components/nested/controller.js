define(['lazoCtl'], function (Controller) {

    'use strict';

    return Controller.extend({
        index: function(options){
            this.addChild('nested-container', 'nested/components/sub', {
                success: function(){
                    options.success('index');
                },
                error: function(error){
                    console.log(error);
                }
            });
        }

    });
});
