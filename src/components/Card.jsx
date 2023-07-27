import React from "react";

export default function Card(props) {
  return (
    <>
      <div className="card mb-3">
        <img className="card-img-top w-100" src={props.image} alt="" />
        <div className="card-body">
          <p>{props.shiftDate}</p>
          <h5 className="card-title">
            {props.accountName}
            <span class="badge bg-secondary ms-2">{props.type}</span>
            <span class="badge bg-secondary ms-2">{props.fiCase}</span>
          </h5>
          <p className="card-text">{props.notes}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.vID}</li>
          <li className="list-group-item">{props.eID}</li>
        </ul>
        <div className="card-body">
          <a href={props.previewLink} className="card-link">
            Preview Link
          </a>
        </div>
      </div>
    </>
  );
}
