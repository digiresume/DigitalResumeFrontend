import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { BiPlus, BiMinus } from "react-icons/bi";
// import Button from 'react-bootstrap/Button';
// import Calendar from 'react-calendar';
// import './Awards.css'

function Skills(props) {
  // navigation
  //   const [page,setPage] = useState(0);
  //   const FormTitles = ["Honors","Skill"]
  const [skillFields, setSkillField] = useState([{ skill: '' }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input Fields", skillFields)
  }

  const handleChangeInput = (index, event) => {
    const values = [...skillFields];
    values[index][event.target.name] = event.target.value;
    setSkillField(values);
  }

  const handleAddFields = () => {
    setSkillField([...skillFields, { skill: '' }])
  }

  const handleRemoveFields = (index) => {
    const values = [...skillFields];
    // At postion index(1) remove 1
    values.splice(index, index - 1);
    setSkillField(values);
  }
  return (
    <>
      <Container>
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
                        <h3 className="mb-5 text-uppercase">SleekCV</h3>
                        <h1>Skills</h1>
                        <form onSubmit={handleSubmit}>
                          {skillFields.map((inputField, index) => (
                            <div key={index}>
                              <div className="row">
                                <div className="col-md-6 mb-4">
                                  <label className="form-label" htmlFor="form3Example1m">Skills</label>
                                  <Form.Control type="text" placeholder="Skill" name="skill" value={inputField.skill} onChange={event => handleChangeInput(index, event)} />
                                </div>

                                <div className="col-md-6 mb-4">
                                  <BiPlus onClick={() => handleAddFields()} />
                                  <BiMinus onClick={() => handleRemoveFields(index)} />
                                </div>
                              </div>


                            </div>
                          ))}
                          {/* <Button variant="primary" type="submit" onClick={handleSubmit}>Submit</Button> */}
                          {/* <div className="d-flex justify-content-end pt-3">
                              <button type="button" className="btn btn-light btn-lg" 
                              disabled={ page == 0 }
                              onClick={()=>{
                                setPage((currPage) => currPage - 1);
                              }}>Back</button>
                              <button type="button" className="btn btn-warning btn-lg ms-2"
                                disabled={ page == FormTitles.length -1 }
                                onClick={()=>{
                                  setPage((currPage) => currPage + 1);
                                }}>Continue</button>
                            </div> */}
                          {/* <div className="d-flex justify-content-end pt-3">
                            <button type="button" className="btn btn-light btn-lg" >Back</button>
                            <button type="button" className="btn btn-warning btn-lg ms-2">Continue</button>
                          </div> */}
                        </form>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </Container>
    </>
  );
}

export default Skills;