import React from "react";

function Churn() {
  return (
    <>
      <div className="sticky-top">
        <div className="card">
          <img
            className="card-img-top"
            src="img/coron.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">Churn Rate</h5>
            <p>Click outside the blue container to select this row.</p>
            <div className="table-responsive">
              <table className="table table-hover mw-auto">
                <thead>
                  <tr>
                    <th>Error</th>
                    <th>Audited</th>
                    <th>Rate</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>0</td>
                    <td>1</td>
                    <td>100%</td>
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

export default Churn;
