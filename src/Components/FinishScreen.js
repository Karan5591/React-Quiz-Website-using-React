function FinishScreen({ points, maxPossiblePoints, dispatch }) {
  return (
    <div>
      <p className="result">
        You Scored{" "}
        <strong>
          {points} out of {maxPossiblePoints}
        </strong>
      </p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart
      </button>
    </div>
  );
}

export default FinishScreen;
