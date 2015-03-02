define(['lazoView', "client-only!jquery", "client-only!jqxcore", "client-only!jqxdata", "client-only!jqxdata.export", "client-only!jqxgrid", "client-only!jqxgrid.columnsresize", "client-only!jqxgrid.edit", "client-only!jqxgrid.export", "client-only!jqxgrid.selection", "client-only!jqxbuttons", "client-only!jqxscrollbar", "client-only!jqxmenu"], function (View) {

    'use strict';

    return View.extend({

        initialize: function () {
        },

        afterRender: function () {
            var source =
                {
                localdata: data,
                datatype: "array"
            };

            var dataAdapter = new $.jqx.dataAdapter(source, {
                loadComplete: function (data) { },
                loadError: function (xhr, status, error) { }      
            });

            $("#jqxgrid").jqxGrid(
                {
                source: dataAdapter,
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
