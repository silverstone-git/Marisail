import React from "react";
// import './style/main.css'

export default function TransportQuotes({props, setProps}) {
    const handleChange = input => e => {
        setProps({ ...props, [input]: e.target.value });
    };

  return (
    <div>
      <h2>Transport Quotes</h2>
      <form className='form'>
        <div className="set">
            <label>Quote:</label>
            <input type="text" name="quote" onChange={handleChange("quote")} value={props.quote} />
        </div>

        <div className="set">
            <label>Quote Description:</label>
            <input type="text" name="quoteDescription" onChange={handleChange("quoteDescription")} value={props.quoteDescription} />
        </div>

        <div className="set">
            <label>Quote Date:</label>
            <input type="text" name="quoteDate" onChange={handleChange("quoteDate")} value={props.quoteDate} />
        </div>

        <div className="set">
            <label>Decline Date:</label>
            <input type="text" name="declineDate" onChange={handleChange("declineDate")} value={props.declineDate} />
        </div>

        <div className="set">
            <label>Withdraw Date:</label>
            <input type="text" name="withdrawDate" onChange={handleChange("withdrawDate")} value={props.withdrawDate} />
        </div>

        <div className="set">
            <label>Withdrawn:</label>
            <input type="text" name="withdrawn" onChange={handleChange("withdrawn")} value={props.withdrawn} />
        </div>

        <div className="set">
            <label>Decline Quote:</label>
            <input type="text" name="declineQuote" onChange={handleChange("declineQuote")} value={props.declineQuote} />
        </div>

        <div className="set">
            <label>Withdraw Quote:</label>
            <input type="text" name="withdrawQuote" onChange={handleChange("withdrawQuote")} value={props.withdrawQuote} />
        </div>
      </form>
 
    </div>
  );
}
