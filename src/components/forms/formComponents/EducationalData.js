import React from 'react';
import "./EducationalData.css"

function EducationalData({ formData, setFormData }) {
  return (

    <div className="container">
      <form>

        {/* UG*/}
        <div>
          <div className='formInline'>
            <label htmlFor="fname" className='labelFname'>Degree Title</label>
            <input type="text" name="degreetitle" placeholder="Enter your degree.." value={formData.degreeug} onChange={(event) => { setFormData({ ...formData, degreeug: event.target.value }) }} required />

            <label htmlFor="lname" className='labelUname'>University Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your University name.." value={formData.universityug} onChange={(event) => { setFormData({ ...formData, universityug: event.target.value }) }} required />
          </div>

          <label htmlFor="lname">Course Durtion</label>
          <input type="text" id="lname" name="lastname" placeholder="Years attended.." value={formData.yearsug} onChange={(event) => { setFormData({ ...formData, yearsug: event.target.value }) }} required />

          <label htmlFor="subject">Course Details/Achievements</label>
          <textarea name="subject" placeholder="Write your course details.."
            style={{ "height": '100px' }}
            value={formData.achievementsug}
            onChange={(event) => { setFormData({ ...formData, achievementsug: event.target.value }) }} />

          {/* XII details */}
          <div className='formInline'>
            <label htmlFor="Sname" className='labelSname'>Class XII School Name</label>
            <input type="text" name="degreetitle" placeholder="Enter your school name.." value={formData.schoolXII} onChange={(event) => { setFormData({ ...formData, schoolXII: event.target.value }) }} required />

            <label htmlFor="lname" className='labelBname'>Board Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Enter your board name.." value={formData.boardXII} onChange={(event) => { setFormData({ ...formData, boardXII: event.target.value }) }} required />
          </div>

          <label htmlFor="lname">Course Durtion</label>
          <input type="text" id="lname" name="lastname" placeholder="Years attended.." value={formData.yearsXII} onChange={(event) => { setFormData({ ...formData, yearsXII: event.target.value }) }} required />

          <label htmlFor="subject">Course Details/Achievements</label>
          <textarea name="subject" placeholder="Write your course details.."
            style={{ "height": '100px' }}
            value={formData.achievementsXII}
            onChange={(event) => { setFormData({ ...formData, achievementsXII: event.target.value }) }} />


          {/* X details */}

          <div className='formInline'>
            <label htmlFor="Sname" className='labelSname'>Class X School Name</label>
            <input type="text" name="degreetitle" placeholder="Enter your school name.." value={formData.schoolX} onChange={(event) => { setFormData({ ...formData, schoolX: event.target.value }) }} required />

            <label htmlFor="lname" className='labelBname'>Board Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Enter your board name.." value={formData.boardX} onChange={(event) => { setFormData({ ...formData, boardX: event.target.value }) }} required />
          </div>

          <label htmlFor="lname">Course Durtion</label>
          <input type="text" id="lname" name="lastname" placeholder="Years attended.." value={formData.yearsX} onChange={(event) => { setFormData({ ...formData, yearsX: event.target.value }) }} required />

          <label htmlFor="subject">Course Details/Achievements</label>
          <textarea name="subject" placeholder="Write your course details.."
            style={{ "height": '100px' }}
            value={formData.achievementsX}
            onChange={(event) => { setFormData({ ...formData, achievementsX: event.target.value }) }} />

        </div>
      </form>
    </div>
  );
}

export default EducationalData;