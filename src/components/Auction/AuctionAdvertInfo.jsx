export const keyToExpectedValueMap = {
  descriptionOfItemProperty: "Description of Item/Property",
  reservePriceBuyItNow: "Reserve Price (Buy It Now)",
  sellersReserveStatus: "Seller's Reserve Status",
  buyersPremium: "Buyer's Premium",
  vat: "VAT"
};

export const typeDef = {
  boatDetails: {
    boatDetails: { value: "", type: "radio", mandatory: false },
    lotNumber: { value: "", type: "radio", mandatory: false },
    descriptionOfItemProperty: { value: "", type: "radio", mandatory: false },
    auctionStatus: { value: "", type: "radio", mandatory: false },
    conditionsOfSale: { value: "", type: "radio", mandatory: true },
    auctioneerContactInformation: {
      value: "",
      type: "radio",
      mandatory: false,
    },
    resultsOrOutcome: { value: "", type: "radio", mandatory: true },
    sellerInformation: { value: "", type: "radio", mandatory: true },
  },
  auctionDetails: {
    auctionDetails: { value: "", type: "radio", mandatory: false },
    marisailAuctionId: { value: "", type: "radio", mandatory: false },
    auctionDate: { value: "", type: "date", mandatory: false },
    auctionVenue: { value: "", type: "radio", mandatory: false },
    startTime: { value: "", type: "time", mandatory: false },
    closingTime: { value: "", type: "time", mandatory: false },
    biddingPeriod: { value: "", type: "radio", mandatory: false },
  },
  inspectionPeriod: {
    inspection: { value: "", type: "radio", mandatory: false },
    withdrawalDeadline: { value: "", type: "radio", mandatory: false },
    inspectionPeriod: { value: "", type: "radio", mandatory: false },
    postAuctionSettlementPeriod: { value: "", type: "radio", mandatory: false },
  },
  biddingDetails: {
    bids: { value: "", type: "radio", mandatory: false },
    bidPrice: { value: "", type: "radio", mandatory: false },
    bidTimestamp: { value: "", type: "radio", mandatory: false },
    startingBid: { value: "", type: "radio", mandatory: true },
    bidIncrement: { value: "", type: "radio", mandatory: true },
    openingBid: { value: "", type: "radio", mandatory: false },
    minimumBid: { value: "", type: "radio", mandatory: true },
    winningBid: { value: "", type: "radio", mandatory: true },
    reservePriceBuyItNow: { value: "", type: "radio", mandatory: true },
    sellersReserveStatus: { value: "", type: "radio", mandatory: true },
  },
  bidderDetails: {
    bidderDetails: { value: "", type: "radio", mandatory: false },
    highestBidder: { value: "", type: "radio", mandatory: true },
    bidderRegistrationRequirements: {
      value: "",
      type: "radio",
      mandatory: true,
    },
    marisailBidderId: { value: "", type: "radio", mandatory: false },
    numberBidders: { value: "", type: "radio", mandatory: true },
    buyersPremium: { value: "", type: "radio", mandatory: true },
  },
  paymentTerms: {
    paymentTermsTitle: { value: "", type: "radio", mandatory: false },
    paymentTerms: { value: "", type: "radio", mandatory: true },
    currency: { value: "", type: "radio", mandatory: true },
    preferredPaymentMethods: { value: "", type: "radio", mandatory: true },
    invoiceReceiptProcedures: { value: "", type: "radio", mandatory: true },

    calculatePricePay: { value: "", type: "radio", mandatory: false },
    priceLabel: { value: "", type: "radio", mandatory: false },
    priceDrop: { value: "", type: "radio", mandatory: false },
    vat: { value: "", type: "radio", mandatory: false },
    totalPrice: { value: "", type: "radio", mandatory: false },
  },
};
