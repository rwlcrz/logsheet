import React from "react";

function Standing() {
  var numerator = 11;
  var denominator = 14;

  var percentage = percent(numerator, denominator);

  function percent(numerator, denominator) {
    // Check if the denominator is 0.
    if (denominator == 0) {
      return 0;
    }

    // Calculate the percentage.
    var percentage = (numerator / denominator) * 100;

    // Return the percentage.
    return percentage;
  }

  return (
    <>
      <div className="sticky-top">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Insights</h5>
            <div className="d-flex justify-content-start flex-row align-items-center">
              <p className="text-target">3</p>
              <p className="ms-2">New builds</p>
            </div>
            <div className="table-responsive">
              <table className="table table-hover mw-auto">
                <thead>
                  <tr>
                    <th>Target</th>
                    <th>BAU</th>
                    <th>Prod Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <p contentEditable>0</p>
                    </td>
                    <td>1</td>
                    <td>{percentage}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Standing;
