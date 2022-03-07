import React from "react";
// import "./Work.css"

function Work({ formData, setFormData }) {
  return (
    <div className="container">
      <form>
        <div className="formInline">
          <label htmlFor="fname" className="labelFname">
            Job Title
          </label>
          <input
            type="text"
            name="jobtitle"
            placeholder="Enter your job title"
            value={formData.fdjob}
            onChange={(event) => { setFormData({ ...formData, fdjob: event.target.value }) }}
            required
          />
        </div>
        <div className="formInline">
          <label htmlFor="fname" className="labelFname">
            Company Name
          </label>
          <input
            type="text"
            name="companyname"
            placeholder="Enter your company name"
            value={formData.fdcompany}
            onChange={(event) => { setFormData({ ...formData, fdcompany: event.target.value }) }}
            required
          />
        </div>
        <div className="formInline">
          <label htmlFor="Sdate" className="labelFname">
            Start-Date & End-Date
          </label>
          <input type="date" id="sdate" name="date" />
          <input type="date" id="edate" name="date" />
        </div>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          placeholder="Write about your responsibilities and achievements"
          style={{ height: "100px" }}
          value={formData.fddescription}
          onChange={(event) => { setFormData({ ...formData, fddescription: event.target.value }) }}
        />
      </form>
    </div>
  );
}

export default Work;
