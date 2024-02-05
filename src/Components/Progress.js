function Progress({ index, numQuestions, points, maxPossiblePoints }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index} />
      <p>
        Question <strong>{index}</strong>/ {numQuestions}
      </p>
      <p>
        {points}/ {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
