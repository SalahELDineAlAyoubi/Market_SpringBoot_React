import { useRadioGroup } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getManagement } from '../../redux/api/CategoryRequest';

const Categories = () => {
      const [htmlContent, setHtmlContent] = useState("dfsdf");

const dispatch = useDispatch()


     useEffect(() => {
       dispatch(getManagement)
         .then((response) => {
           console.log("res", response.data);
           setHtmlContent(response.data);
         })
         .catch((error) => {
           console.error("Error:", error);
         });
     }, [dispatch]);


  return (
    <div className="mt-5">
      <br></br>
      <br></br>
      
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default Categories
