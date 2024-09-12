const invoices = [
    // Paid Invoices
    {
        invoicenumber: 1058,
        customer: 'Acmo Co',
        status: 'paid',
        elements: [
            {
                units: 2,
                product: 'Benches',
                unitcost: 10,
            }
        ]
    },
    {
        invoicenumber: 1059,
        customer: 'Beta Ltd',
        status: 'paid',
        elements: [
            {
                units: 5,
                product: 'Chairs',
                unitcost: 15,
            },
            {
                units: 1,
                product: 'Table',
                unitcost: 100,
            }
        ]
    },
    {
        invoicenumber: 1060,
        customer: 'Gamma Inc',
        status: 'paid',
        elements: [
            {
                units: 10,
                product: 'Desks',
                unitcost: 30,
            }
        ]
    },
    {
        invoicenumber: 1061,
        customer: 'Delta Co',
        status: 'paid',
        elements: [
            {
                units: 3,
                product: 'Bookshelves',
                unitcost: 25,
            },
            {
                units: 2,
                product: 'Filing Cabinets',
                unitcost: 40,
            }
        ]
    },
    {
        invoicenumber: 1062,
        customer: 'Epsilon Ltd',
        status: 'paid',
        elements: [
            {
                units: 4,
                product: 'Lamps',
                unitcost: 20,
            }
        ]
    },
    // Unpaid Invoices
    {
        invoicenumber: 1063,
        customer: 'Zeta Co',
        status: 'unpaid',
        elements: [
            {
                units: 6,
                product: 'Sofas',
                unitcost: 200,
            }
        ]
    },
    {
        invoicenumber: 1064,
        customer: 'Eta Inc',
        status: 'unpaid',
        elements: [
            {
                units: 8,
                product: 'Office Chairs',
                unitcost: 50,
            },
            {
                units: 2,
                product: 'Conference Table',
                unitcost: 300,
            }
        ]
    },
    {
        invoicenumber: 1065,
        customer: 'Theta Ltd',
        status: 'unpaid',
        elements: [
            {
                units: 3,
                product: 'Projectors',
                unitcost: 150,
            }
        ]
    },
    {
        invoicenumber: 1066,
        customer: 'Iota Co',
        status: 'unpaid',
        elements: [
            {
                units: 7,
                product: 'Whiteboards',
                unitcost: 75,
            }
        ]
    },
    {
        invoicenumber: 1067,
        customer: 'Kappa Inc',
        status: 'unpaid',
        elements: [
            {
                units: 2,
                product: 'Meeting Tables',
                unitcost: 250,
            },
            {
                units: 5,
                product: 'Office Partitions',
                unitcost: 60,
            }
        ]
    }
];


  export default invoices