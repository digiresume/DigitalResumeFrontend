import React from 'react';
import './TemplateOne.css';
// import { Page, Document } from '@react-pdf/renderer';

function TemplateOne(props) {

    let { formData } = props;

    // console.log(formData.firstname);
    // console.log(formData.photo);

    return (

        <div className='templateOne'>

            {/* <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/2.7.0/build/reset-fonts-grids/reset-fonts-grids.css" media="all" /> */}
            <div id="doc2" className="yui-t7">
                <div id="inner" className='innerOne'>

                    <div id="hd">
                        <div className="yui-gc">
                            <div className='resumeHeader'>
                                <div className="yui-u first">
                                    <h1>{formData.firstname}</h1><h1>{formData.lastname}</h1>
                                    <h2>{formData.jobtitle}</h2>
                                </div>
                                <div className='resumeImage'>
                                    <img src={formData.photo} alt="profile pic" />
                                </div>
                            </div>

                            <div className="yui-u">
                                <div className="contact-info">
                                    {/* <h3><a id="pdf" href="/">Download PDF</a></h3> */}
                                    <h3><a href={formData.email}>{formData.email}</a></h3>
                                    <h3>{formData.phone}</h3>
                                    <div className='socialLinks'>
                                        <a href={formData.linkedin}><h3>{formData.linkedin ? <i className="fab fa-linkedin fa-2x" /> : ''}</h3></a>
                                        <a href={formData.github}><h3>{formData.github ? <i className="fab fa-github fa-2x" /> : ''}</h3></a>
                                    </div>


                                </div>
                            </div>


                        </div>
                    </div>

                    <div id="bd">
                        <div id="yui-main">
                            <div className="yui-b">

                                <div className="yui-gf lineBottom   ">
                                    <div className="yui-u first ">
                                        <h2>Objective</h2>
                                    </div>
                                    <div className="yui-u objectivePara">
                                        <p className="enlarge bottomLine">
                                            {formData.objective}
                                        </p>
                                    </div>
                                </div>
                                <div className='skillBorder'>

                                    <div className="yui-gf  ">
                                        <div className="yui-u first">
                                            <h2>Skills</h2>
                                        </div>

                                        <div className="yui-u ">
                                            <ul className="talent">
                                                {formData.skill.map((i, key) => (
                                                    <li key={key}>{i.skill}</li>
                                                ))}
                                            </ul>
                                        </div>

                                    </div>
                                </div>


                                <div className="yui-gf">

                                    <div className="yui-u first">
                                        <h2>Experience</h2>
                                    </div>

                                    <div className="yui-u ">

                                        <div className="job">
                                            <h2>{formData.fdjob}</h2>
                                            <h3>{formData.fdcompany}</h3>
                                            <h4>{formData.fdduration}</h4>
                                            <p>{formData.fddescription}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='bottomExperience'></div>



                                <div className="yui-gf bottomExperience">
                                    <div className="yui-u first">
                                        <h2>Project</h2>
                                    </div>
                                    <div className="yui-u">

                                        <div className="project">
                                            <h2>Facebook</h2>
                                            <h3>Senior Interface Designer</h3>
                                            <h4>2005-2007</h4>
                                            <p>Intrinsicly enable optimal core competencies through corporate relationships. Phosfluorescently implement worldwide vortals and client-focused imperatives. Conveniently initiate virtual paradigms and top-line convergence. </p>
                                        </div>


                                        {/* <h6>{formData.title.map((i, key) => (
                                                    <div key={key}>{i.title}</div>
                                                ))}</h6>
                                                <br /><br />
                                                <h6>{formData.domain.map((i, key) => (
                                                    <div key={key}>{i.domain}</div>
                                                ))}</h6><br /><br />
                                                <h6>{formData.duration.map((i, key) => (
                                                    <div key={key}>{i.duration}</div>
                                                ))}</h6><br /><br />
                                                <h6>{formData.description.map((i, key) => (
                                                    <div key={key}>{i.description}</div>
                                                ))}</h6> */}
                                    </div>
                                </div>

                                <div className="yui-gf last">
                                    <div className="yui-u first">
                                        <h2>Education</h2>
                                    </div>
                                    <div className="project">
                                        <h2>{formData.degreeug}</h2>
                                        <h3>{formData.universityug}</h3>
                                        <h4>{formData.yearsug}</h4>
                                        <p>{formData.achievementsug}</p>
                                    </div>

                                    <div className="project">
                                        <h2>{formData.schoolXII}</h2>
                                        <h3>{formData.boardXII}</h3>
                                        <h4>{formData.yearsXII}</h4>
                                        <p>{formData.achievementsXII}</p>
                                    </div>

                                    <div className="project">
                                        <h2>{formData.schoolX}</h2>
                                        <h3>{formData.boardX}</h3>
                                        <h4>{formData.yearsX}</h4>
                                        <p>{formData.achievementsX}</p>
                                    </div>
                                </div>


                                <div className="yui-gf last">
                                    <div className="yui-u first">
                                        <h2>Honours & Certifications</h2>
                                    </div>
                                    <div className="honors">
                                        <div><h3>Title</h3><h3>{formData.certificationTitle.map((i, key) => (
                                            <div key={key}>{i.certificationTitle}</div>
                                        ))}</h3></div>
                                        <div><h3>Authority</h3><h3>{formData.authorityOfCertification.map((i, key) => (
                                            <div key={key}>{i.authorityOfCertification}</div>
                                        ))}</h3></div>
                                        <div><h3>Date</h3><h3>{formData.date.map((i, key) => (
                                            <div key={key}>{i.date}</div>
                                        ))}</h3></div>


                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div id="ft">
                        <p>{formData.firstname} {formData.lastname} &mdash; <a href={formData.email}>{formData.email}</a> &mdash; {formData.phone}</p>
                    </div>

                </div>


            </div>

        </div>
    );
}

export default TemplateOne;