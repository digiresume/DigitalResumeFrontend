// import './PersonInfo.css';
import React, { useState } from 'react';
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";



function Project({ formData, setFormData }) {
    const [projectinfos, setProjectinfos] = useState([{ title: "", domain: "", duration: "", description: "" },]);
    // const [project,setProject]=useState([{title:"",domain:"",duration:"",description:""},]); 

    const handleAddFields = () => {

        setProjectinfos([...projectinfos, { title: "", domain: "", duration: "", description: "" }]);
        // projectinfos.push(project);
        console.log(projectinfos);

    }

    const handleRemoveFields = (index) => {
        const values = [...projectinfos];
        values.splice(index, 1);
        setProjectinfos(values);
    }
    const handleChangeInput = (index, event) => {
        const values = [...projectinfos];
        values[index][event.target.name] = event.target.value;
        setProjectinfos(values);
        const newobj = { ...formData, [event.target.name]: projectinfos };
        setFormData(newobj);

    }


    console.log(projectinfos);

    return (
        <div className="container">
            <form>
                {/* Project details */}

                {
                    projectinfos.map((projectinfo, index) => (
                        <div key={index}>


                            <div className='formInline'>
                                <label htmlFor="title" className='labelFname'>Project Title</label>
                                <input type="text" id="fname" name="title" placeholder="Project title.." value={projectinfo.title} onChange={event => handleChangeInput(index, event)} />

                                <label htmlFor="domain" className='labelLname'>Project Domain</label>
                                <input type="text" id="lname" name="domain" placeholder="Project domain.." value={projectinfo.domain} onChange={event => handleChangeInput(index, event)} />
                            </div>
                            {/* <div className='formInline'> */}
                            <label htmlFor="duration" className='labelFname'>Project duration</label>
                            <input type="text" id="fna" name="duration" placeholder="Project duration.." value={projectinfo.duration} onChange={event => handleChangeInput(index, event)} />
                            <label htmlFor="description" className='labelLname'>Project description</label>
                            {/* <input type="text" id="lname" name="description" placeholder="Project description.." value={formData.description} onChange={(event) => { setFormData({ ...formData, description: event.target.value }) }} />Project description */}
                            <textarea className="review" name="description" rows="4" cols="50" placeholder="Write your project description.." value={projectinfo.description} onChange={event => handleChangeInput(index, event)}>
                            </textarea>

                            {/* </div> */}

                            <AiOutlinePlus onClick={() => handleAddFields()} color="black"></AiOutlinePlus>
                            <AiOutlineMinus onClick={() => handleRemoveFields()} color="black"></AiOutlineMinus>
                        </div>))

                }

            </form>

        </div>

    );


}

export default Project;
