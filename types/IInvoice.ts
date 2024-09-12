interface IInvoiceItem {
    invoicenumber: number;
    status: string;
    customer: string;
    elements: [
        {units: number;
        product: string;
        unitcost: number;

        }
    ];
}

export default IInvoiceItem