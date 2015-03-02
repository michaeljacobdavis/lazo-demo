define(['lazoView', "client-only!jquery", "client-only!jqx"], function (View, $) {

    'use strict';

    return View.extend({
        events: {
            'click .refresh': 'refresh'
        },

        initialize: function () {
        },

        afterRender: function () {
            var view = this;
            var source =
            {
                datatype: 'json',
                url: 'hack'
            };
            var dataAdapter = new $.jqx.dataAdapter(source, {
                loadServerData: function (serverdata, source, callback) {
                    console.info(serverdata);
                    view.ctl.ctx.collections.widgets.fetch({
                        success: function(data){
                            callback({
                                records: data.toJSON(),
                                totalrecords: 10000
                            });
                        },
                        error: callback
                    });
                },
                filter: function () {
                    // update the grid and send a request to the server.
                    $("#jqxgrid").jqxGrid('updatebounddata');
                }
            });

            this.$grid = $("#jqxgrid");
            this.$grid.jqxGrid({
                source: dataAdapter,
                filterable: true,
                pageable: true,
                rowdetails: true,
                showrowdetailscolumn:true,
                showfilterrow: true,
                virtualmode: true,
                rendergridrows: function (obj) {
                    return obj.data;
                },
                rowdetailstemplate: {
                    rowdetailsheight: 20
                },
                initrowdetails: function (index, parentElement, gridElement, datarecord) {
                    $(parentElement).text('Details about ' + datarecord.firstname + ' and a ' + datarecord.productname);
                },
                columns: [
                    { text: 'First Name', datafield: 'firstname', width: 100 },
                    { text: 'Last Name', datafield: 'lastname', width: 100 },
                    { text: 'Product', datafield: 'productname', width: 180 },
                    { text: 'Quantity', datafield: 'quantity', width: 80, cellsalign: 'right' },
                    { text: 'Unit Price', datafield: 'price', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                    { text: 'Total', datafield: 'total', width: 100, cellsalign: 'right', cellsformat: 'c2' }
                ]
            });
        }
    });
});
