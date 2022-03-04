import React from 'react';
import './PersonInfo.css';
// import '../mdb.min.css';


function PersonInfo(props) {


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
                                        alt="Sample pic"
                                        className="img-fluid"
                                        style={{ borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem" }}
                                    />
                                </div>
                                <div className="col-xl-6">
                                    <div className="card-body p-md-5 text-black">
                                        <h3 className="mb-5 text-uppercase">Personal Information</h3>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example1m" className="form-control form-control-lg inputOutline" required />
                                                    <label className="form-label" htmlFor="form3Example1m">First name*</label>
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example1n" className="form-control form-control-lg inputOutline" />
                                                    <label className="form-label" htmlfor="form3Example1n">Last name*</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <input type="text" id="form3Example1m1" className="form-control form-control-lg inputOutline" required />
                                                    <label class="form-label" htmlFor="form3Example1m1">Job Title*</label>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="form-outline mb-4 profField">
                                            <input type="text" id="form3Example8" className="form-control form-control-lg inputOutline " required />
                                            <label className="form-label" htmlFor="form3Example8">Objective* </label>
                                        </div>

                                        <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                                            <h6 className="mb-0 me-4">Gender: </h6>

                                            <div className="form-check form-check-inline mb-0 me-4">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="inlineRadioOptions"
                                                    id="femaleGender"
                                                    value="option1"
                                                />
                                                <label className="form-check-label" htmlFor="femaleGender">Female</label>
                                            </div>

                                            <div className="form-check form-check-inline mb-0 me-4">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="inlineRadioOptions"
                                                    id="maleGender"
                                                    value="option2"
                                                />
                                                <label className="form-check-label" htmlFor="maleGender">Male</label>
                                            </div>

                                            <div className="form-check form-check-inline mb-0">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="inlineRadioOptions"
                                                    id="otherGender"
                                                    value="option3"
                                                />
                                                <label class="form-check-label" htmlFor="otherGender">Other</label>
                                            </div>

                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">

                                                <select className="select">
                                                    <option value="1">State</option>
                                                    <option value="2">Kerala</option>
                                                    <option value="3">Karnataka</option>
                                                    <option value="4">Tamilnadu</option>
                                                </select>

                                            </div>
                                            <div className="col-md-6 mb-4">

                                                <select className="select">
                                                    <option value="1">City</option>
                                                    <option value="2">Kochi</option>
                                                    <option value="3">Bangalore</option>
                                                    <option value="4">Chennai</option>
                                                </select>

                                            </div>
                                        </div>

                                        {/* Image upload */}

                                        <label htmlFor="uploadImage">Upload your photo</label><br />
                                        <div className="btn btn-light btn-lg">

                                            <input type="file" name="filename" />

                                        </div>

                                        <br /><br />

                                        <div className="form-outline mb-4">
                                            <input type="date" name="date" id="form3Example9" className='form-control form-control-lg inputOutline' />
                                            <label className="form-label" htmlFor="form3Example9">DOB</label>
                                        </div>



                                        <div className="form-outline mb-4">
                                            <input type="url" id="form3Example99" className="form-control form-control-lg inputOutline" />
                                            <label className="form-label" htmlFor="form3Example99">LinkedIn URL</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="url" id="form3Example99" className="form-control form-control-lg inputOutline" />
                                            <label className="form-label" htmlFor="form3Example99">GitHub URL</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="email" id="form3Example97" className="form-control form-control-lg inputOutline" required />
                                            <label class="form-label" htmlFor="form3Example97">Email ID*</label>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <input type="text" id="form3Example97" className="form-control form-control-lg inputOutline" required />
                                            <label class="form-label" htmlFor="form3Example97">Mobile*</label>
                                        </div>

                                        {/* 
                                        <div className="d-flex justify-content-end pt-3">
                                            <button type="button" className="btn btn-light btn-lg">Back</button>
                                            <button type="button" className="btn btn-warning btn-lg ms-2">Continue</button>
                                        </div> */}

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

export default PersonInfo;