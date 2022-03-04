import React, { useState } from 'react';
import PersonInfo from './formComponents/PersonInfo';
import EducationalData from './formComponents/EducationalData';
import Work from './formComponents/Work';
import Skills from './formComponents/Skills';
import Honors from './formComponents/Honors';
import './Form.css';
// import './mdb.min.css';

function Form(props) {

    const [page, setPage] = useState(0);

    const FormTitles = ["Personal Information", "Education", "Work Experience", "Projects", "Skills", "Honours & Certifications"];

    const PageDisplay = () => {
        if (page === 0) {
            return <PersonInfo />
        } else if (page === 1) {
            return <EducationalData />
        } else if (page === 2) {
            return <Work />
        } else if (page === 3) {
            return <PersonInfo />
        } else if (page === 4) {
            return <Skills />
        } else if (page === 5) {
            return <Honors />
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
                <div className='header'>
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className='body'>{PageDisplay()}</div>
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

        </div>
    );
}

export default Form;