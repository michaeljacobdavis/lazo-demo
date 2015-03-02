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
            var data = this.ctl.ctx.collections.widgets.toJSON();

            var source = this.source = {
                localdata: data,
                datafields:
                [
                    { name: 'firstname', type: 'string' },
                    { name: 'lastname', type: 'string' },
                    { name: 'productname', type: 'string' },
                    { name: 'quantity', type: 'number' },
                    { name: 'price', type: 'number' },
                    { name: 'total', type: 'number' }
                ],
                datatype: "array"
            };

            var dataAdapter = new $.jqx.dataAdapter(source);

            this.$grid = $("#jqxgrid");
            this.$grid.jqxGrid({
                source: dataAdapter,
                filterable: true,
                rowdetails: true,
                showrowdetailscolumn:true,
                showfilterrow: true,
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

            this.listenTo(this.ctl.ctx.collections.widgets, 'sync', function () {
                view.source.localdata = view.ctl.ctx.collections.widgets.toJSON();
                view.$grid.jqxGrid('updatebounddata', 'cells');
            });

        },

        refresh: function () {
            var view = this;
            this.ctl.ctx.collections.widgets.fetch({
                success: function () {},
                error: function () {}
            });
        }

    });
});
