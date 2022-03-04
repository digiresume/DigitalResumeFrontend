import React from "react";

function Work() {
  return (
    <section className="h-100 bg-dark">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-none d-xl-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="Sample Pic"
                    className="img-fluid"
                    style={{
                      borderTopLeftRadius: ".25rem",
                      borderBottomLeftRadius: ".25rem"
                    }}
                  />
                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-5 text-uppercase">
                      Previous Work Experience
                    </h3>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1m"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example1m">
                          Job Title
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1m"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example1m">
                          Company Name
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label className="form-label" for="date">
                          Start-Date:
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          className="date"
                        ></input>
                      </div>
                      <div className="col-md-6 mb-4">
                        <label className="form-label" for="date">
                          End Date:{" "}
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          className="date"
                        ></input>
                      </div>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example8"
                        className="form-control form-control-lg"
                      />
                      <label className="form-label" htmlFor="form3Example8">
                        Description
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;