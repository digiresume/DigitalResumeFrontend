import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';



function Admin(props) {


    return (
        <div className='"w3-light-grey"'  >
            {/* <!-- !PAGE CONTENT! --> */}
            <div className="w3-main" style={{ "margin-left": "2%", "margin-top": "2%", "margin-right": "2%" }}>

                {/* <!-- Header --> */}
                <header className="w3-container" style={{ "padding-top": "22px", "margin-left": "40%" }}>
                    <h5><b><i className="fa fa-dashboard"></i> Admin Dashboard</b></h5>
                </header>

                <div className="adminProps">
                    <div className="w3-row-padding w3-margin-bottom">
                        <div className="w3-quarter">
                            <div className="w3-container w3-red w3-padding-16">
                                <div className="w3-left"><i className="fa fa-comment w3-xxxlarge"></i></div>
                                <div className="w3-right">
                                    <h3>52</h3>
                                </div>
                                <div className="w3-clear"></div>
                                <h4>Testimonial</h4>
                            </div>
                        </div>

                        <div className="w3-quarter">
                            <div className="w3-container w3-teal w3-padding-16">
                                <div className="w3-left"><i className="fa fa-download w3-xxxlarge"></i></div>
                                <div className="w3-right">
                                    <h3>23</h3>
                                </div>
                                <div className="w3-clear"></div>
                                <h4>Download</h4>
                            </div>
                        </div>
                        <div className="w3-quarter">
                            <div className="w3-container w3-orange w3-text-white w3-padding-16">
                                <div className="w3-left"><i className="fa fa-users w3-xxxlarge"></i></div>
                                <div className="w3-right">
                                    <h3>50</h3>
                                </div>
                                <div className="w3-clear"></div>
                                <h4>Users</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='adminButton'>
                    <button>Add user</button>
                    <button className='w3-red removeUser'>Remove user</button>
                    <button>Users List</button>
                </div>

                <hr />
                <div className="w3-container">
                    <h5>General Stats</h5>
                    <p>New Visitors</p>
                    <div className="w3-grey">
                        <div className="w3-container w3-center w3-padding w3-green" style={{ "width": "25%" }}>+25%</div>
                    </div>

                    <p>New Users</p>
                    <div className="w3-grey">
                        <div className="w3-container w3-center w3-padding w3-orange" style={{ "width": "50%" }}>50%</div>
                    </div>

                    <p>Bounce Rate</p>
                    <div className="w3-grey">
                        <div className="w3-container w3-center w3-padding w3-red" style={{ "width": "75 % " }}>75%</div>
                    </div>
                </div>
                <hr />

                <div className="w3-container">
                    <h5>Users List</h5>
                    <table className="w3-table w3-striped w3-bordered w3-border w3-hoverable w3-white">
                        <tr>
                            <td>United States</td>
                            <td>65%</td>
                        </tr>
                        <tr>
                            <td>UK</td>
                            <td>15.7%</td>
                        </tr>
                        <tr>
                            <td>Russia</td>
                            <td>5.6%</td>
                        </tr>
                        <tr>
                            <td>Spain</td>
                            <td>2.1%</td>
                        </tr>
                        <tr>
                            <td>India</td>
                            <td>1.9%</td>
                        </tr>
                        <tr>
                            <td>France</td>
                            <td>1.5%</td>
                        </tr>
                    </table><br />
                    <button className="w3-button w3-dark-grey">More Users  <i className="fa fa-arrow-right"></i></button>
                </div>
                <hr />
                <div className="w3-container">
                    <h5>Recent Users</h5>
                    <ul className="w3-ul w3-card-4 w3-white">
                        <li className="w3-padding-16">
                            <img src="https://i.pinimg.com/474x/05/c3/59/05c359cd010df3e7f1ea3cb6f6f54fad.jpg" alt="sample pic" className="w3-left w3-circle w3-margin-right" style={{ "width": "60px" }} />
                            <span className="w3-xlarge">Sarag</span><br /><br />
                        </li>
                        <li className="w3-padding-16">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD4m1HgE-AdiW_U9ug9xYMd7Lzf9VKrRH5WEXIvKGEuh0dDdXarKRci6ytQ2abCE9erdA&usqp=CAU" alt="sample pic" className="w3-left w3-circle w3-margin-right" style={{ "width": "60px" }} />
                            <span className="w3-xlarge">Kavya</span><br /><br />
                        </li>
                        <li className="w3-padding-16">
                            <img src="https://i.etsystatic.com/18054961/r/il/082a6a/2659899402/il_340x270.2659899402_65xk.jpg" alt="sample pic" className="w3-left w3-circle w3-margin-right" style={{ "width": "60px" }} />
                            <span className="w3-xlarge">Saranya</span><br /><br />
                        </li>

                    </ul>
                </div>
                <hr />

                <div className="w3-container">
                    <h5>Recent Comments</h5>
                    <div className="w3-row">
                        <div className="w3-col m2 text-center">
                            <img className="w3-circle" src="/w3images/avatar3.png" alt="sample pic" style={{ "width": "96px", "height": "96px" }} />
                        </div>
                        <div className="w3-col m10 w3-container">
                            <h4>John <span className="w3-opacity w3-medium">Sep 29, 2014, 9:12 PM</span></h4>
                            <p>Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><br />
                        </div>
                    </div>

                    <div className="w3-row">
                        <div className="w3-col m2 text-center">
                            <img className="w3-circle" src="/w3images/avatar1.png" alt="sample pic" style={{ "width": "96px", "height": "96px" }} />
                        </div>
                        <div className="w3-col m10 w3-container">
                            <h4>Bo <span className="w3-opacity w3-medium">Sep 28, 2014, 10:15 PM</span></h4>
                            <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p><br />
                        </div>
                    </div>
                </div>
                <br />


                {/* <!-- Footer --> */}
                <footer id="footer">
                    <ul className="icons">
                        <li><Link to="#" className="icon brands fa-twitter"><span className="label">Twitter</span></Link></li>
                        <li><Link to="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></Link></li>
                        <li><Link to="#" className="icon brands fa-instagram"><span className="label">Instagram</span></Link></li>
                        <li><Link to="#" className="icon solid fa-envelope"><span className="label">Email</span></Link></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; ICTAK</li><li>Design: <Link to="/">BATCH 1 - Group 6</Link></li>
                    </ul>
                </footer>


                {/* <!-- End page content --> */}
            </div>
        </div>
    );
}

export default Admin;