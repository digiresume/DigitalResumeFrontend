import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { BiPlus, BiMinus } from "react-icons/bi";


function Honors({ formData, setFormData }) {

  // console.log(formData)
  const [honourFields, setHonourField] = useState(formData.authorityOfCertification, formData.certificationTitle, formData.date)
  // const [honourFields, setHonourField] = useState(formData.honor[{honor:''}])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Input Fields", honourFields)
  }
  console.log(formData)

  const handleChangeInput = (index, event) => {
    const values = [...honourFields];
    values[index][event.target.name] = event.target.value;
    setHonourField(values);
    const newObj = { ...formData, [event.target.name]: honourFields };
    setFormData(newObj)
  }

  const handleAddFields = () => {
    setHonourField([...honourFields, { certificationTitle: '', authorityOfCertification: '' }])
  }

  const handleRemoveFields = (index) => {
    const values = [...honourFields];
    // At postion index(1) remove 1
    values.splice(index, 1);
    setHonourField(values);
  }
  return (
    <>
      <Container>
        <section className="h-100 bg-dark">
          <BiPlus onClick={() => handleAddFields()} style={{ "color": "black" }} />
          {/* <BiMinus onClick={() => handleRemoveFields()} style={{ "color": "black" }} /> */}

          <div className="col-xl-6">
            <div className="card-body p-md-5 text-black">
              <form onSubmit={handleSubmit}>
                {honourFields.map((inputField, index) => (
                  <div key={index}>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label className="form-label" htmlFor="form3Example1m">Date of Issued Certification</label>
                        <input type="date" id="date" name="date" className='date' value={inputField.date} onChange={event => handleChangeInput(index, event)}  ></input>
                      </div>

                      <div className="col-md-6 mb-4">
                        <BiPlus onClick={() => handleAddFields()} style={{ "color": "black" }} />
                        <BiMinus onClick={() => handleRemoveFields(index)} style={{ "color": "black" }} />
                      </div>

                    </div>

                    <label className="form-label" htmlFor="form3Example1m">Cerification Title</label>
                    <Form.Control type="text" placeholder="Cerification Title" name="certificationTitle" value={inputField.certificationTitle} onChange={event => handleChangeInput(index, event)} />


                    <label className="form-label" htmlFor="form3Example1m">Authority of Certification</label>
                    <Form.Control type="text" placeholder="Authority Of Cerification" name="authorityOfCertification" value={inputField.authorityOfCertification} onChange={event => handleChangeInput(index, event)} />

                  </div>
                ))}

              </form>

            </div>
          </div>

        </section>

      </Container>
    </>
  );
}

export default Honors;