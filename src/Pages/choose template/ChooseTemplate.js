import { useState } from 'react';
// import Form from '../../components/forms/Form';
import './ChooseTemplate.css';
import { useNavigate } from 'react-router-dom';

function ChooseTemplate() {
  let navigate = useNavigate();
  const [templateNum, setTemplateNum] = useState(0);

  // console.log(templateNum);



  // function handleTemplate(num) {
  // console.log(templateNum);

  //   setTemplateNum(num);
  // navigate('/form', { state: { templateNum } })
  //   navigate('/form', { state: { templateNum } })

  // }

  return (
    <div className='chooseTemp'>
      <div className="slider">
        <div className="chooseHeader">
          <h1>Choose Your Template</h1>
        </div>
        <br /><br />

        <a href="#slide-1" className='slideButton'>1</a>
        <a href="#slide-2" className='slideButton'>2</a>
        <a href="#slide-3" className='slideButton'>3</a>



        <div className="slides">
          <div id="slide-1">
            <img src="https://www.linkpicture.com/q/photo_2022-03-08_13-37-04.jpg" alt="" />
          </div>
          <div id="slide-2">
            <img src="https://www.linkpicture.com/q/photo_2022-03-08_13-37-04.jpg" alt="" />
          </div>
          <div id="slide-3">
            <img src="https://www.linkpicture.com/q/photo_2022-03-08_13-37-04.jpg" alt="" />
          </div>
        </div>


        <div className='resumeButtons'>
          <div className='tempButtonOne'>
            <button onClick={(e) => {
              setTemplateNum(1);
              navigate('/form', { state: { templateNum } });

            }}>Click here for Template 1</button>
          </div>

          <div className='tempButtonTwo'>
            <button onClick={(e) => {
              setTemplateNum(2);
              navigate('/form', { state: { templateNum } });
            }}>Click here for Template 2</button>
          </div>

          <div className='tempButtonThree'>
            <button onClick={(e) => {
              setTemplateNum(3);
              navigate('/form', { state: { templateNum } });
            }}>Click here for Template 3</button>
          </div>
        </div>

        <br /><br />
      </div>
    </div>

  );
}

export default ChooseTemplate;
