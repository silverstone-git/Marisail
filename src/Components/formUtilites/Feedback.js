import React from "react";

export default function Feedback({props, setProps}) {
    const handleChange = input => e => {
        setProps({ ...props, [input]: e.target.value });
    };
  return (
    <div>
      <h1>Feedback</h1>
      <form>
        <label>Customer Feedback Notes:</label>
        <input type="text" name="customerFeedbackNotes" onChange={handleChange("customerFeedbackNotes")} value={props.customerFeedbackNotes}/>
        <label>Customer Feedback Score:</label>
        <input type="text" name="customerFeedbackScore" onChange={handleChange("customerFeedbackScore")} value={props.customerFeedbackScore}/>
        <label>Positive:</label>
        <input type="text" name="positive" onChange={handleChange("positive")} value={props.positive}/>
        <label>Neutral:</label>
        <input type="text" name="neutral" onChange={handleChange("neutral")} value={props.neutral}/>
        <label>Negative:</label>
        <input type="text" name="negative" onChange={handleChange("negative")} value={props.negative}/>
        <label>Reviews:</label>
        <input type="text" name="reviews" onChange={handleChange("reviews")} value={props.reviews}/>
        <label>Rating:</label>
        <input type="text" name="rating" onChange={handleChange("rating")} value={props.rating}/>
        <label>Item Title:</label>
        <input type="text" name="itemTitle" onChange={handleChange("itemTitle")} value={props.itemTitle}/>
        <label>Left By:</label>
        <input type="text" name="leftBy" onChange={handleChange("leftBy")} value={props.leftBy}/>
        <label>Comments:</label>
        <input type="text" name="comments" onChange={handleChange("comments")} value={props.comments}/>
        <label>Date:</label>
        <input type="text" name="date" onChange={handleChange("date")} value={props.date}/>
        <label>Customer Gives Feedback Notes:</label>
        <input type="text" name="customerGivesFeedbackNotes" onChange={handleChange("customerGivesFeedbackNotes")} value={props.customerGivesFeedbackNotes}/>
        <label>Customer Gives Feedback Score:</label>
        <input type="text" name="customerGivesFeedbackScore" onChange={handleChange("customerGivesFeedbackScore")} value={props.customerGivesFeedbackScore}/>
        <label>See My Quotes:</label>
        <input type="text" name="seeMyQuotes" onChange={handleChange("seeMyQuotes")} value={props.seeMyQuotes}/>
       
      </form>
    </div>
  );
}

// const [feedback, setFeedback] = useState({
//     customerFeedbackNotes: "",
//     customerFeedbackScore: "",
//     positive: "",
//     neutral: "",
//     negative: "",
//     reviews: "",
//     rating: "",
//     itemTitle: "",
//     leftBy: "",
//     comments: "",
//     date: "",
//     customerGivesFeedbackNotes: "",
//     customerGivesFeedbackScore: "",
//     seeMyQuotes: "",
// });
