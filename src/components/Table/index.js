import React, { useState } from 'react';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';

import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Table = (props) => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);

    function onGridReady(params) {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
        params.api.sizeColumnsToFit(); 
    }
 
      let defaultColDef = {
        resizable: true,
        sortable: true,
        wrapText: true,
        autoHeight: true
      }


    let rowData = []
    props.results.map((ele, i) => rowData.push( 
      {Address: ele.formattedAddress, 
      daysOnMarket: ele.daysOnMarket, 
      price:  ele.price,
      squareFootage: ele.squareFootage }
      ))


    let columnDefs = [
      {
        field: 'Address',
        headerName: 'Address',
        cellRenderer: function(params) {
          return params.data.Address;
        },
        flex: 2,
      },
      {
        field: 'daysOnMarket',
        headerName: 'daysOnMarket',
        cellRenderer: function(params) {
          return params.data.daysOnMarket;
        },
        flex: 1,
      },
      {
        field: 'price',
        headerName: 'price',
        cellRenderer: function(params) {
          return params.data.price;
        },
        flex: 1,
      },{
        field: 'squareFootage',
        headerName: 'squareFootage',
        cellRenderer: function(params) {
          return params.data.squareFootage;
        },
        flex: 1,
      }]

    return (
        <div className="ag-theme-alpine" style={ { height: 500, width: "100%" } }>
            <AgGridReact
                onGridReady={onGridReady}
                rowData={rowData}
                defaultColDef={defaultColDef}
                columnDefs={columnDefs}
                > 
                <AgGridColumn field="Address"></AgGridColumn>
                <AgGridColumn field="daysOnMarket" sortable={true}></AgGridColumn>
                <AgGridColumn field="price" sortable={true}></AgGridColumn>
                <AgGridColumn field="squareFootage" sortable={true}></AgGridColumn>
            </AgGridReact>
        </div>
    );
};

export default Table;

