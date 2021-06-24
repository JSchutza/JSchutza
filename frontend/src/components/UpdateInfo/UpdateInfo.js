import React from 'react';
import { useHistory } from 'react-router';





const UpdateInfo = ({ the_type }) => {
  const history = useHistory();


  const goBack = event => {
    event.preventDefault();
    history.push('/');
  }




  return (
    <>
    <div>
        <a href='/' onClick={event => goBack(event)}> Back </a>
    </div>

    <div>
      
    </div>
    </>
  )
};



export default UpdateInfo;
