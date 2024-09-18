export const typeDef = {
    shopDetails: {
        marisailProductId: { value: "", type: "radio", mandatory: false },
        itemName: { value: "", type: "radio", mandatory: true },
        description: { value: "", type: "radio", mandatory: true },
        condition: { value: "", type: "radio", mandatory: true },
        usedCondition: { value: "", type: "radio", mandatory: true },
        size: { value: "", type: "radio", mandatory: false },
        quantity: { value: "", type: "radio", mandatory: false },
        numberAvailable: { value: "", type: "radio", mandatory: true },
        currency: { value: "", type: "radio", mandatory: true },
        price: { value: "", type: "radio", mandatory: true },
        priceLabel: { value: "", type: "radio", mandatory: false },
        priceDrop: { value: "", type: "radio", mandatory: false },
        postage: { value: "", type: "radio", mandatory: true },
        delivery: { value: "", type: "radio", mandatory: true },
        returnsAccepted: { value: "", type: "radio", mandatory: true },
        returnsDetails: { value: "", type: "radio", mandatory: true },
    },
    sellerDetails: {
        sellerContactDetails: { value: "", type: "radio", mandatory: false },
        marisailSellerId: { value: "", type: "radio", mandatory: false },
        sellerName: { value: "", type: "radio", mandatory: false },
        sellerAddress: { value: "", type: "radio", mandatory: false },
        sellerDistance: { value: "", type: "radio", mandatory: false },

        contactSeller: { value: "", type: "radio", mandatory: false },
        visitShop: { value: "", type: "radio", mandatory: true },
        uploadPictures: { value: "", type: "radio", mandatory: true },
    },
    paymentTerms: {
        paymentTerms: { value: "", type: "radio", mandatory: true },
        preferredPaymentMethods: { value: "", type: "radio", mandatory: true },
        invoiceAndReceiptProcedures: { value: "", type: "radio", mandatory: true },

        calculatePriceAndPay: { value: "", type: "radio", mandatory: false },
        vat: { value: "", type: "radio", mandatory: false },
        totalPrice: { value: "", type: "radio", mandatory: false },
    },
};

export const keyToExpectedValueMap = {
    vat: "VAT",
};
