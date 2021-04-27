import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import InvoicesDataGrid from './InvoicesDataGrid';
import InvoiceDetailsController from '../../actions/InvoiceDetailsController';


/*Shows the user's reservation in the datagrid in first step and 
then details of the selected reservaiton in the second step.*/

export class ViewInvoiceStepper extends Component {

  render() {
    const { step, columns, rows, invoiceData } = this.props;
    const { prevStep, } = this.props;
    const { handleRowSelected, handleDelete } = this.props;
    

    switch (step) {
      case 1:
        return (
            <div>
              <InvoicesDataGrid
                handleRowSelected={handleRowSelected}
                handleDelete={handleDelete}
                columns={columns}
                rows={rows}
              />
            </div>
          
        );
      case 2:
        return (
            <div>
              <InvoiceDetailsController
                invoiceData = {invoiceData}
              />
              <Button onClick={prevStep}>Back</Button>
            </div>
          
        )
    }
  }
}

export default ViewInvoiceStepper;