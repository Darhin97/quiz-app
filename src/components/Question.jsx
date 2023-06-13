import Options from "./Options";

const Question = (props) => {
  const { question, dispatch, answer } = props;
  return (
    <div>
      <h4>{question.question}</h4>
      <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  );
};

export default Question;
