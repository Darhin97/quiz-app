const ProgressBar = (props) => {
  const { numQuestions, currentIndex, points, totalPoints, answer } = props;
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={currentIndex + Number(answer !== null)}
      />
      <p>
        Question <strong>{currentIndex + 1}</strong>/{numQuestions}
      </p>
      <p>
        <strong>{points}</strong> / {totalPoints}
      </p>
    </header>
  );
};

export default ProgressBar;
