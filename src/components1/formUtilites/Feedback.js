import React from "react";

export default function Feedback({props, setProps}) {
    const handleChange = input => e => {
        setProps({ ...props, [input]: e.target.value });
    };
  return (
    <div>
      <h2>Feedback</h2>
      <form className="form"> 
                <div className="set">
                    <label>Customer Feedback Notes:</label>
                    <input type="text" name="customerFeedbackNotes" onChange={handleChange("customerFeedbackNotes")} value={props.customerFeedbackNotes} />
                </div>

                <div className="set">
                    <label>Customer Feedback Score:</label>
                    <input type="text" name="customerFeedbackScore" onChange={handleChange("customerFeedbackScore")} value={props.customerFeedbackScore} />
                </div>

                <div className="set">
                    <label>Positive:</label>
                    <input type="text" name="positive" onChange={handleChange("positive")} value={props.positive} />
                </div>

                <div className="set">
                    <label>Neutral:</label>
                    <input type="text" name="neutral" onChange={handleChange("neutral")} value={props.neutral} />
                </div>

                <div className="set">
                    <label>Negative:</label>
                    <input type="text" name="negative" onChange={handleChange("negative")} value={props.negative} />
                </div>

                <div className="set">
                    <label>Reviews:</label>
                    <input type="text" name="reviews" onChange={handleChange("reviews")} value={props.reviews} />
                </div>

                <div className="set">
                    <label>Rating:</label>
                    <input type="text" name="rating" onChange={handleChange("rating")} value={props.rating} />
                </div>

                <div className="set">
                    <label>Item Title:</label>
                    <input type="text" name="itemTitle" onChange={handleChange("itemTitle")} value={props.itemTitle} />
                </div>

                <div className="set">
                    <label>Left By:</label>
                    <input type="text" name="leftBy" onChange={handleChange("leftBy")} value={props.leftBy} />
                </div>

                <div className="set">
                    <label>Comments:</label>
                    <input type="text" name="comments" onChange={handleChange("comments")} value={props.comments} />
                </div>

                <div className="set">
                    <label>Date:</label>
                    <input type="text" name="date" onChange={handleChange("date")} value={props.date} />
                </div>

                <div className="set">
                    <label>Customer Gives Feedback Notes:</label>
                    <input type="text" name="customerGivesFeedbackNotes" onChange={handleChange("customerGivesFeedbackNotes")} value={props.customerGivesFeedbackNotes} />
                </div>

                <div className="set">
                    <label>Customer Gives Feedback Score:</label>
                    <input type="text" name="customerGivesFeedbackScore" onChange={handleChange("customerGivesFeedbackScore")} value={props.customerGivesFeedbackScore} />
                </div>

                <div className="set">
                    <label>See My Quotes:</label>
                    <input type="text" name="seeMyQuotes" onChange={handleChange("seeMyQuotes")} value={props.seeMyQuotes} />
                </div>

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
