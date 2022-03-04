import React from 'react';
import "./EducationalData.css"

function EducationalData(formData, setFormData) {
    return (
        <div>
            <section className="h-100 bg-dark">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col">
        <div className="card card-registration my-4">
          <div className="row g-0">
            <div className="col-xl-6 d-none d-xl-block">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                alt="Sample photo"
                className="img-fluid"
                 style={{borderTopLeftRadius: ".25rem", borderBottomLeftRadius: ".25rem"}}
              />
            </div>
            <div className="col-xl-6">
              <div className="card-body p-md-5 text-black">
                <h3 className="mb-5 text-uppercase">Education</h3>

                {/* UG Degree details */}

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input  type="text" id="form3Example1m" className="form-control form-control-lg inputOutline"value={formData.degreeug}
                       onChange={(event)=>{setFormData({...formData, degreeug:event.target.value})}}/>
                      <label className="form-label" htmlFor="form3Example1m" >Degree Title</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m1" className="form-control form-control-lg inputOutline" value={formData.universityug}
                      onChange={(event)=>{setFormData({...formData, universityug:event.target.value})}} />
                      <label className="form-label" htmlFor="form3Example1m1">University Name</label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example8" className="form-control form-control-lg inputOutline " value={formData.yearsug}
                   onChange={(event)=>{setFormData({...formData, yearsug:event.target.value})}}  />
                  <label className="form-label" htmlFor="form3Example8">Years Attended</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example8" className="form-control form-control-lg inputOutline" value={formData.achievementsug}
                   onChange={(event)=>{setFormData({...formData, achievementsug:event.target.value})}}  />
                  <label className="form-label" htmlFor="form3Example8">Course Details/Achievements</label>
                </div>
                <br/>

                {/* <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                </div>     */}
              

                {/* XII details */}

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m" className="form-control form-control-lg inputOutline" value={formData.schoolXII} 
                       onChange={(event)=>{setFormData({...formData, schoolXII:event.target.value})}} />
                      <label className="form-label" htmlFor="form3Example1m">Class XII School Name</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m1" className="form-control form-control-lg inputOutline" value={formData.boardXII}
                       onChange={(event)=>{setFormData({...formData, boardXII:event.target.value})}}  />
                      <label className="form-label" htmlFor="form3Example1m1">Board Name</label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example8" className="form-control form-control-lg inputOutline" value={formData.yearsXII}
                   onChange={(event)=>{setFormData({...formData, yearsXII:event.target.value})}} />
                  <label className="form-label" htmlFor="form3Example8">Years Attended</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example8" className="form-control form-control-lg inputOutline" value={formData.achievementsXII}
                   onChange={(event)=>{setFormData({...formData, achievementsXII:event.target.value})}} />
                  <label className="form-label" htmlFor="form3Example8">Course Details/Achievements</label>
                </div>
                <br/>

                 {/* X details */}

                 <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m" className="form-control form-control-lg inputOutline" value={formData.schoolX}
                       onChange={(event)=>{setFormData({...formData, schoolX:event.target.value})}} />
                      <label className="form-label" htmlFor="form3Example1m">Class X School Name</label>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1m1" className="form-control form-control-lg inputOutline"value={formData.boardX}
                       onChange={(event)=>{setFormData({...formData, boardX:event.target.value})}}  />
                      <label className="form-label" htmlFor="form3Example1m1">Board Name</label>
                    </div>
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example8" className="form-control form-control-lg inputOutline" value={formData.yearsX}
                   onChange={(event)=>{setFormData({...formData, yearsX:event.target.value})}} />
                  <label className="form-label" htmlFor="form3Example8">Years Attended</label>
                </div>

                <div className="form-outline mb-4">
                  <input type="text" id="form3Example8" className="form-control form-control-lg inputOutline" value={formData.achievementsX}
                   onChange={(event)=>{setFormData({...formData, achievementsX:event.target.value})}} />
                  <label className="form-label" htmlFor="form3Example8">Course Details/Achievements</label>
                </div>
                <br/>

                <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                </div>    
                
              

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
}

export default EducationalData;