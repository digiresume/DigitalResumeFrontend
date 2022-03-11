import React, { useState } from 'react';
import "./Addcomment.css"

function Addcomment(props) {
    const [commentValues, setCommentValues] = useState({ name: "", comment: "" });

    function handlechange(event) {
        // console.log(event.target);
        const { name, value } = event.target;
        setCommentValues({ ...commentValues, [name]: value })

    }


    async function handlesave() {
        const name = commentValues.name;
        const comments = commentValues.comment;
        const response = await fetch(`http://localhost:5000/api/resume/comments`, {
            method: 'post',
            body: JSON.stringify({ name, comments }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        alert(response);
    }

    return (
        <div className='mainone'>

            <label htmlFor="name" className='labelname'>Your name</label>
            <input type="text" id="fname" name="name" placeholder="Name.." value={commentValues.name} onChange={handlechange} />
            <br />

            <label htmlFor="domain" className='labelname'>Your Comments</label>
            <textarea rows="4" cols="50" id='lname' name="comment" placeholder='Comments...' value={commentValues.comment} onChange={handlechange}></textarea>
            <br />

            <button type="submit" onClick={handlesave}> Submit</button>


        </div>
    );
}

export default Addcomment;