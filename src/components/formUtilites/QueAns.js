import React from "react";

export default function QueAns({props, setProps}) {
    const handleChange = input => e => {
        setProps({ ...props, [input]: e.target.value });
    };
  return (
    <div>
      <h2>Question and Answers</h2>
      <form className="form">
                <div className="set">
                    <label>Question Date:</label>
                    <input type="text" name="questionDate" onChange={handleChange("questionDate")} value={props.questionDate} />
                </div>

                <div className="set">
                    <label>Answer Date:</label>
                    <input type="text" name="answerDate" onChange={handleChange("answerDate")} value={props.answerDate} />
                </div>

                <div className="set">
                    <label>Transport Provider Questions:</label>
                    <input type="text" name="transportProviderQuestions" onChange={handleChange("transportProviderQuestions")} value={props.transportProviderQuestions} />
                </div>

                <div className="set">
                    <label>Customer Answers:</label>
                    <input type="text" name="customerAnswers" onChange={handleChange("customerAnswers")} value={props.customerAnswers} />
                </div>

                <div className="set">
                    <label>Write Question:</label>
                    <input type="text" name="writeQuestion" onChange={handleChange("writeQuestion")} value={props.writeQuestion} />
                </div>

                <div className="set">
                    <label>Answer Question:</label>
                    <input type="text" name="answerQuestion" onChange={handleChange("answerQuestion")} value={props.answerQuestion} />
                </div>

                <div className="set">
                    <label>Customer Confirms Completion:</label>
                    <input type="text" name="customerConfirmsCompletion" onChange={handleChange("customerConfirmsCompletion")} value={props.customerConfirmsCompletion} />
                </div>

                <div className="set">
                    <label>Add Item:</label>
                    <input type="text" name="addItem" onChange={handleChange("addItem")} value={props.addItem} />
                </div> 
      </form>
    </div>
  );
}
