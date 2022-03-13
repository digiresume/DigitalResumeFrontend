import React from 'react';
import "./EducationalData.css"
import { useParams } from 'react-router-dom';








function EducationalData({ formData, setFormData }) {
  const { templateNum } = useParams();

  async function handleSubmit(event) {
    event.preventDefault();
    const isadmin = false;
    const degreeug = formData.degreeug;
    const universityug = formData.universityug;
    const yearsug = formData.yearsug;
    const achievementsug = formData.achievementsug;
    const schoolXII = formData.schoolXII;
    const boardXII = formData.boardXII;
    const yearsXII = formData.yearsXII;
    const achievementsXII = formData.achievementsXII;
    const schoolX = formData.schoolX;
    const boardX = formData.boardX;
    const yearsX = formData.yearsX;
    const achievementsX = formData.achievementsX;
    // console.log(firstname, lastname, email)


    const response = await fetch(`/api/user/resume/${templateNum}`, {
      method: 'post',
      body: JSON.stringify({ degreeug, universityug, yearsug, achievementsug, schoolXII, boardXII, yearsXII, achievementsXII, schoolX, boardX, yearsX, achievementsX }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const body = await response.json();
    console.log(body)
    alert(body.msg)
  }


  return (

    <div className="container">
      <form method="post" onSubmit={handleSubmit}>

        {/* UG*/}
        <div>
          <div className='formInline'>
            <label htmlFor="fname" className='labelFname'>Degree Title</label>
            <input type="text" name="degreeug" placeholder="Enter your degree.." value={formData.degreeug} onChange={(event) => { setFormData({ ...formData, degreeug: event.target.value }) }} required />

            <label htmlFor="lname" className='labelUname'>University Name</label>
            <input type="text" id="lname" name="universityug" placeholder="Your University name.." value={formData.universityug} onChange={(event) => { setFormData({ ...formData, universityug: event.target.value }) }} required />
          </div>

          <label htmlFor="lname">Course Duration</label>
          <input type="text" id="lname" name="yearsug" placeholder="Years attended.." value={formData.yearsug} onChange={(event) => { setFormData({ ...formData, yearsug: event.target.value }) }} required />

          <label htmlFor="achievementsug">Course Details/Achievements</label>
          <textarea name="achievementsug" placeholder="Write your course details.."
            style={{ "height": '100px' }}
            value={formData.achievementsug}
            onChange={(event) => { setFormData({ ...formData, achievementsug: event.target.value }) }} />

          {/* XII details */}
          <div className='formInline'>
            <label htmlFor="schoolXII" className='labelSname'>Class XII School Name</label>
            <input type="text" name="schoolXII" placeholder="Enter your school name.." value={formData.schoolXII} onChange={(event) => { setFormData({ ...formData, schoolXII: event.target.value }) }} required />

            <label htmlFor="lname" className='labelBname'>Board Name</label>
            <input type="text" id="lname" name="boardXII" placeholder="Enter your board name.." value={formData.boardXII} onChange={(event) => { setFormData({ ...formData, boardXII: event.target.value }) }} required />
          </div>

          <label htmlFor="lname">Course Duration</label>
          <input type="text" id="lname" name="yearsXII" placeholder="Years attended.." value={formData.yearsXII} onChange={(event) => { setFormData({ ...formData, yearsXII: event.target.value }) }} required />

          <label htmlFor="subject">Course Details/Achievements</label>
          <textarea name="achievementsXII" placeholder="Write your course details.."
            style={{ "height": '100px' }}
            value={formData.achievementsXII}
            onChange={(event) => { setFormData({ ...formData, achievementsXII: event.target.value }) }} />


          {/* X details */}

          <div className='formInline'>
            <label htmlFor="Sname" className='labelSname'>Class X School Name</label>
            <input type="text" name="schoolX" placeholder="Enter your school name.." value={formData.schoolX} onChange={(event) => { setFormData({ ...formData, schoolX: event.target.value }) }} required />

            <label htmlFor="lname" className='labelBname'>Board Name</label>
            <input type="text" id="lname" name="boardX" placeholder="Enter your board name.." value={formData.boardX} onChange={(event) => { setFormData({ ...formData, boardX: event.target.value }) }} required />
          </div>

          <label htmlFor="lname">Course Duration</label>
          <input type="text" id="lname" name="yearsX" placeholder="Years attended.." value={formData.yearsX} onChange={(event) => { setFormData({ ...formData, yearsX: event.target.value }) }} required />

          <label htmlFor="subject">Course Details/Achievements</label>
          <textarea name="achievementsX" placeholder="Write your course details.."
            style={{ "height": '100px' }}
            value={formData.achievementsX}
            onChange={(event) => { setFormData({ ...formData, achievementsX: event.target.value }) }} />

        </div>
        <button style={{ "color": "blue", "backgroundColor": "grey" }} type='submit'>Save Your data</button>

      </form>
    </div>
  );
}

export default EducationalData;