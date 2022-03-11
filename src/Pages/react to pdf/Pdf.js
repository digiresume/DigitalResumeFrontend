import React from 'react';
import './Pdf.css';
import Addcomment from '../user comments/Addcomment';

function Pdf(props) {
    return (
        <div className='pdfBody'>
            <h1>Download or Copy Resume Link</h1>
            <br /><br />
            <div className='pdfButtons'>
                <button>Download PDF</button>
                <button>Resume Link</button>
            </div>
            <br /><br />
            <div className='addComment'>
                <Addcomment />
            </div>
            <br /><br />
        </div>
    );
}

export default Pdf;