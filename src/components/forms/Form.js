import React, { useState } from 'react';
import PersonInfo from './formComponents/PersonInfo';
import EducationalData from './formComponents/EducationalData';
import Work from './formComponents/Work';
import Skills from './formComponents/Skills';
import Honors from './formComponents/Honors';
import Project from './formComponents/Project';
import './Form.css';


function Form(props) {

    const [page, setPage] = useState(0);

    const [formData, setFormData] = useState({
        firstname: "", lastname: "", uploadphoto: "", email: "", phone: "", jobtitle: "", objective: "",
        location: "", dob: "", linkedin: "", github: "",
        degreeug: "", universityug: "", yearsug: "", achievementsug: "", schoolXII: "", boardXII: "",
        yearsXII: "", achievementsXII: "", schoolX: "", boardX: "", yearsX: "", achievementsX: "",
        fdjob: "", fdcompany: "", fddescription: "", skill: [], title: [], domain: [], duration: [], description: [],
    });






    const FormTitles = ["Personal Information", "Education", "Work Experience", "Projects", "Skills", "Honours & Certifications"];

    // For Switching between pages
    const PageDisplay = () => {
        if (page === 0) {
            return <PersonInfo formData={formData} setFormData={setFormData} />
        } else if (page === 1) {
            return <EducationalData formData={formData} setFormData={setFormData} />
        } else if (page === 2) {
            return <Work formData={formData} setFormData={setFormData} />
        } else if (page === 3) {
            return <Project formData={formData} setFormData={setFormData} />
        } else if (page === 4) {
            return <Skills formData={formData} setFormData={setFormData} />
        } else if (page === 5) {
            return <Honors formData={formData} setFormData={setFormData} />
        }
    }

    return (
        <div className='form'>
            <div className="progressbar">
                <div
                    style={{ width: page === 0 ? "15%" : page === 1 ? "25%" : page === 2 ? "40%" : page === 3 ? "60%" : page === 4 ? "80%" : "100%" }}
                ></div>
            </div>

            <div className='form-container'>
                {/* Form Title */}
                <div className='header'>
                    <h1>{FormTitles[page]}</h1>
                </div>

                {/* Form Body */}
                <div className='body'>{PageDisplay()}</div>
                <br />

                {/* Form Buttons */}
                <div className='footer'>
                    <button
                        disabled={page === 0}
                        onClick={() => { setPage((currPage) => currPage - 1) }}
                    >Back</button>
                    <button
                        disabled={page === FormTitles.length - 1}
                        onClick={() => { setPage((currPage) => currPage + 1) }}>Next</button>
                </div>
            </div>
            <br /><br />

        </div>
    );
}

export default Form;