import React from "react";

const Results = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <h1 key={result.title}>{result.title}</h1>
      ))}
    </div>
  );
};

export default Results;
