import React from "react";

export const Page = ({ results, columnList, onDelete }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {columnList.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr className="table-striped" key={result.id}>
              {columnList.map((column) => (
                <td key={column}>{result[column.toLowerCase()]}</td>
              ))}
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => onDelete(result.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
