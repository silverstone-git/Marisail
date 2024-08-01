import React from "react";

export default function PaymentInsurance({props, setProps}) {
    const handleChange = input => e => {
        setProps({ ...props, [input]: e.target.value });
    };
  return (
    <div>
      <h1>Payment and Insurance</h1>
      <form>
        <label>Payment Terms:</label>
        <input type="text" name="paymentTerms" onChange={handleChange("paymentTerms")} value={props.paymentTerms}/>
        <label>Service Legal Agreement:</label>
        <input type="text" name="serviceLegalAgreement" onChange={handleChange("serviceLegalAgreement")} value={props.serviceLegalAgreement}/>
        <label>Accepted Payment Methods:</label>
        <input type="text" name="acceptedPaymentMethods" onChange={handleChange("acceptedPaymentMethods")} value={props.acceptedPaymentMethods}/>
        <label>Cancellation Policy:</label>
        <input type="text" name="cancellationPolicy" onChange={handleChange("cancellationPolicy")} value={props.cancellationPolicy}/>
        <label>Currency:</label>
        <input type="text" name="currency" onChange={handleChange("currency")} value={props.currency}/>
        <label>Invoice Time:</label>
        <input type="text" name="invoiceTime" onChange={handleChange("invoiceTime")} value={props.invoiceTime}/>
        <label>Late Payment Fee:</label>
        <input type="text" name="latePaymentFee" onChange={handleChange("latePaymentFee")} value={props.latePaymentFee}/>
        <label>Billing Contact Information:</label> 
        <input type="text" name="billingContactInformation" onChange={handleChange("billingContactInformation")} value={props.billingContactInformation}/>
        <label>Dispute Resolution Terms:</label>
        <input type="text" name="disputeResolutionTerms" onChange={handleChange("disputeResolutionTerms")} value={props.disputeResolutionTerms}/>
        <label>Liability Coverage:</label>
        <input type="text" name="liabilityCoverage" onChange={handleChange("liabilityCoverage")} value={props.liabilityCoverage}/>
        <label>Insurance Policy:</label>    
        <input type="text" name="insurancePolicy" onChange={handleChange("insurancePolicy")} value={props.insurancePolicy}/>
        <label>Insurance Coverage:</label>
        <input type="text" name="insuranceCoverage" onChange={handleChange("insuranceCoverage")} value={props.insuranceCoverage}/>
        <label>Insurance Provider:</label>
        <input type="text" name="insuranceProvider" onChange={handleChange("insuranceProvider")} value={props.insuranceProvider}/>
        <label>Insurance Claim Process:</label>
        <input type="text" name="insuranceClaimProcess" onChange={handleChange("insuranceClaimProcess")} value={props.insuranceClaimProcess}/>
      </form>
    </div>
  );
}

// const [paymentInsurance, setPaymentInsurance] = useState({
//     paymentTerms: "",
//     serviceLegalAgreement: "",
//     acceptedPaymentMethods: "",
//     cancellationPolicy: "",
//     currency: "",
//     invoiceTime: "",
//     latePaymentFee: "",
//     billingContactInformation: "",
//     disputeResolutionTerms: "",
//     liabilityCoverage: "",
//     insurancePolicy: "",
//     insuranceCoverage: "",
//     insuranceProvider: "",
//     insuranceClaimProcess: "",
// });

