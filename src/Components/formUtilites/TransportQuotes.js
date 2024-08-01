import React from "react";

export default function TransportQuotes({props, setProps}) {
    const handleChange = input => e => {
        setProps({ ...props, [input]: e.target.value });
    };

  return (
    <div>
      <h1>Transport Quotes</h1>
      <form>
        <label>Quote:</label>
        <input type="text" name="quote" onChange={handleChange("quote")} value={props.quote}/>
        <label>Quote Description:</label>
        <input type="text" name="quoteDescription" onChange={handleChange("quoteDescription")} value={props.quoteDescription}/>
        <label>Quote Date:</label>
        <input type="text" name="quoteDate" onChange={handleChange("quoteDate")} value={props.quoteDate}/>
        <label>Decline Date:</label>
        <input type="text" name="declineDate" onChange={handleChange("declineDate")} value={props.declineDate}/>
        <label>Withdraw Date:</label>
        <input type="text" name="withdrawDate" onChange={handleChange("withdrawDate")} value={props.withdrawDate}/>
        <label>Withdrwan:</label>
        <input type="text" name="withdrwan" onChange={handleChange("withdrwan")} value={props.withdrwan}/>
        <label>Decline Quote:</label>
        <input type="text" name="declineQuote" onChange={handleChange("declineQuote")} value={props.declineQuote}/>
        <label>Withdraw Quote:</label>
        <input type="text" name="withdrawQuote" onChange={handleChange("withdrawQuote")} value={props.withdrawQuote}/>
      </form>
 
    </div>
  );
}
