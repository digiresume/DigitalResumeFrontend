import React from 'react';
// import { useParams } from 'react-router';
import "./ViewProfile.css";

function ViewProfile(props) {

    const { userData } = props;



    console.log(userData);

    console.log(userData.skill);

    return (
        <div className="viewprofile">
            <div className='vpInline'>
                <div className="vp-left-box">
                    <div className="vp-top-left">
                        <img
                            id="vp-img"
                            src="http://images2.fanpop.com/images/photos/4700000/Codeman-cody-lambert-4776780-500-375.jpg"
                            /*src={formData.photo}*/
                            alt="profile pic"
                        />
                        <div className="vp-name">
                            {/* Code Man */}
                            {userData.firstname}{userData.lastname}
                        </div>
                        <div className="vp-phone">
                            <img
                                className="vp-objective-img"
                                src="http://icons.iconarchive.com/icons/icons8/android/512/Mobile-Phone-2-icon.png"
                                alt="icon"
                            />
                            <div className="vp-phone-text">{userData.phone}</div>
                        </div>
                        <div className="vp-email">
                            <img
                                className="vp-objective-img"
                                src="http://static.wixstatic.com/media/d822a6_af29afe70e1a4e9891f94a627914b6ec.png"
                                alt="icon"
                            />
                            <div className="vp-email-text">{userData.email}</div>
                        </div>
                        <div className="vp-email">
                            <a href={userData.linkedin}><img
                                className="vp-objective-img"
                                src="https://image.similarpng.com/very-thumbnail/2021/01/Illustration-of-Linkedin-icon-on-transparent-background-PNG.png"
                                alt="icon"
                            /></a>
                            <div className="vp-email-text"></div>
                        </div>

                        <div className="vp-email">
                            <a href={userData.github}> <img
                                className="vp-objective-img"
                                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                alt="icon"
                            /></a>
                            <div className="vp-email-text"></div>
                        </div>
                    </div>
                </div>
                <div className='vpResumeBody'>
                    <div className="vp-work-experience">

                        <h1>Work Experience</h1>
                        <div className="vp-job-title">
                            {userData.fdjob} @{userData.fdcompany}
                        </div>
                        <div className="vp-job-date">
                            {userData.fdduration}
                        </div>
                        <div className="vp-job-description">
                            {userData.fddescription}
                        </div>
                    </div>
                    <div className="vp-education">

                        <h1>Education</h1>
                        <div className="vp-education-box">
                            <div className="vp-education-title">
                                {userData.degreeug} @{userData.universityug}
                            </div>
                            <div className="vp-education-date">
                                {userData.yearsug}
                            </div>
                            <div className="vp-education-description">
                                {userData.achievementsug}
                            </div>
                        </div>
                        <div className="vp-education-box">
                            <div className="vp-education-title">
                                {userData.schoolXII} @{userData.boardXII}
                            </div>
                            <div className="vp-education-date">
                                {userData.yearsXII}
                            </div>
                            <div className="vp-education-description">
                                {userData.achievementsXII}
                            </div>
                        </div>
                        <div className="vp-education-box">
                            <div className="vp-education-title">
                                {userData.schoolX} @{userData.boardX}
                            </div>
                            <div className="vp-education-date">
                                {userData.yearsX}
                            </div>
                            <div className="vp-education-description">
                                {userData.achievementsX}
                            </div>
                        </div>
                    </div>
                    <div className="vp-skills">

                        <h1>Skills</h1>
                        <div>
                            {
                                userData?.skill?.map((i, key) => (
                                    <React.Fragment>
                                        <ul className="vp-skill-ul" >
                                            <li className="vp-skill-li" key={key}>{i.skill}</li>
                                        </ul>
                                    </React.Fragment>

                                ))
                            }
                        </div>
                    </div>


                    <div className="vp-skills">

                        <h1>Projects</h1>
                        <div>
                            {
                                userData?.title?.map((i, key) => (
                                    <React.Fragment>
                                        <ul className="vp-skill-ul" >
                                            <li className="vp-project-li" key={key}><h5>{i.title}</h5>{i.description}</li>
                                        </ul>
                                    </React.Fragment>

                                ))
                            }
                        </div>
                    </div>


                    <div className="vp-skills">

                        <h1>Honours & Certifications</h1>
                        <div>
                            {
                                userData?.certificationTitle?.map((i, key) => (
                                    <React.Fragment>
                                        <ul className="vp-skill-ul" >
                                            <li className="vp-project-li" key={key}><h5>{i.certificationTitle}</h5>{i.authorityOfCertification}<br />{i.date}</li>
                                        </ul>
                                    </React.Fragment>

                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewProfile;