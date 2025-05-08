import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import { processFile } from "../../services/protectedFileUpload.jsx";


import EducationForm from "../EducationForm";
import ExperienceForm from "../ExperienceForm";
import UpdateEducationButton from "../UpdateEducationButton";
import DeleteEducationButton from "../DeleteEducationButton";
import UpdateExperienceButton from "../UpdateExperienceButton";
import DeleteExperienceButton from "../DeleteExperienceButton";



import { useSelector } from "react-redux";


const ResumeForm = () => {
  const [ file, setFile ] = useState(null);

  const currentEducationInFo = useSelector(store => store.educationsReducer.educations);
  const currentExperienceInFo = useSelector(store => store.experiencesReducer.experiences);


  const updateFile = event => {
    const result = processFile(event.target.files);
    if (result) {
      setFile(result);
    } else {
      setFile(null);
    }
  }




  const onSubmit = event => {
    event.preventDefault();
    // dispatch to upload resume thunk here
    console.log(file, "here <---------");
  }



  return (
    <>
    {/* show current education information */}
      <Container>
        <h2> current education info </h2>
      </Container>

      {currentEducationInFo !== null ?
        Object.values(currentEducationInFo).map(each => (
          <>
            <Container>
              <h3> {each.instution_name} </h3>
              <h4> {each.title} </h4>
              <p>{each.start_year}</p>
              <p>{each.end_year}</p>
            </Container>
            <UpdateEducationButton educationId={each.id} />
            <DeleteEducationButton educationId={each.id} />
          </>
        ))
      :
      <></>
      }

      <EducationForm />


      <Container>
        <h2> current experience info </h2>
      </Container>

      {currentExperienceInFo !== null ?
        Object.values(currentExperienceInFo).map(each => (
          <>
          <Container>
              <h3>{each.title}</h3>
              <h4>{each.company_name}</h4>
              <p>{each.start_date}</p>
              <p>{each.end_date}</p>
          </Container>
            <UpdateExperienceButton experienceId={each.id} />
            <DeleteExperienceButton experienceId={each.id} />
          </>
        ))
        :
        <></>
      }

      <ExperienceForm />


      <h1>Upload a Resume Here</h1>
      <form onSubmit={onSubmit}>

      <label>
        Select a file
          <input id='file' className="" type="file" accept="image/*" onChange={updateFile} />
      </label>

      <button> Submit Resume </button>
      </form>
    </>
  )
};

export default ResumeForm;
