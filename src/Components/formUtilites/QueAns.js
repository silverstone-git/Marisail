import React from "react";

export default function QueAns({props, setProps}) {
    const handleChange = input => e => {
        setProps({ ...props, [input]: e.target.value });
    };
  return (
    <div>
      <h1>Question and Answers</h1>
      <form>
        <label>Question Date:</label>
        <input type="text" name="questionDate" onChange={handleChange("questionDate")} value={props.questionDate}/>
        <label>Answer Date:</label>
        <input type="text" name="answerDate" onChange={handleChange("answerDate")} value={props.answerDate}/>
        <label>Transport Provider Questions:</label>
        <input type="text" name="transportProviderQuestions" onChange={handleChange("transportProviderQuestions")} value={props.transportProviderQuestions}/>
        <label>Customer Answers:</label>
        <input type="text" name="customerAnswers" onChange={handleChange("customerAnswers")} value={props.customerAnswers}/>
        <label>Write Question:</label>
        <input type="text" name="writeQuestion" onChange={handleChange("writeQuestion")} value={props.writeQuestion}/>
        <label>Answer Question:</label>
        <input type="text" name="answerQuestion" onChange={handleChange("answerQuestion")} value={props.answerQuestion}/>
        <label>Custome Confirms Completion:</label>
        <input type="text" name="customeConfirmsCompletion" onChange={handleChange("customeConfirmsCompletion")} value={props.customeConfirmsCompletion}/>
        <label>Add Item:</label>
        <input type="text" name="addItem" onChange={handleChange("addItem")} value={props.addItem}/>
      </form>
    </div>
  );
}
