import React from "react";

function NewTasks() {
  return (
    <>
      <div class="card">
        <div class="card-body border-top border-primary p-1">
          <div class="container task-card">
            <div>
              <div class="row">
                <div class="col-lg-2 col-md-2 col my-auto">
                  <img
                    src="/img/new-profile.png"
                    width="54"
                    height="54"
                    alt=""
                    className="img-task"
                  />
                </div>
                <div class="col-lg-5 col-md-5 col p-3 m-auto">
                  <button type="button" class="btn btn-primary w-100">
                    Post a Project
                  </button>
                </div>
                <div class="col-lg-5 col-md-5 col p-3 m-auto">
                  <button
                    type="button"
                    class="btn btn-primary w-100"
                    data-toggle="modal"
                    data-target="#exampleModalCenter">
                    Post a Task
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewTasks;
