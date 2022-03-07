import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { BiPlus, BiMinus } from "react-icons/bi";



function Skills({ formData, setFormData }) {


  console.log(formData);

  const [skillFields, setSkillField] = useState([{ skill: '' }]);

  const handleChangeInput = (index, event) => {
    const values = [...skillFields];
    values[index][event.target.name] = event.target.value;
    setSkillField(values);
    const newObj = { ...formData, [event.target.name]: skillFields };
    setFormData(newObj)

  }

  const handleSubmit = (e) => {
    e.preventDefault();

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

  // var datab = formData.skill.map((i, index) => (console.log(i.skill)));

  const data = (index) => (

    formData.skill.map((i, key) => {
      console.log(formData.skill)
      // console.log(index.i.formData.skill)
      // console.log(i.skill)
      return (i.skill)
    })
  )

  // console.log(data);

  // console.log(formData.skill[0])
  return (
    <>
      <Container>

        <form onSubmit={handleSubmit}>
          {skillFields.map((inputField, index) => (
            < div>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <label className="form-label" htmlFor="form3Example1m">Skills</label>
                  <Form.Control type="text" placeholder="Skill" name="skill" value={data(index)} onChange={event => handleChangeInput(index, event)} />

                </div>



                <div className="col-md-6 mb-4">
                  {/* <Button> */}
                  <BiPlus onClick={() => handleAddFields()} style={{ "color": "black" }} />
                  {/* </Button> */}

                  <BiMinus onClick={() => handleRemoveFields(index)} style={{ "color": "black" }} />
                </div>
              </div>


            </div>
          ))}

        </form>


      </Container>
    </>
  );
}

export default Skills;