import React, { useEffect, useState } from 'react'
 

import "./Users.css";
import AccordionComponent from './AccordionComponent/AccordionComponent';
import { useDispatch, useSelector } from 'react-redux';
import { getAllRegionsIncludingUsers } from '../../redux/actions/RegionAction';

const Users = ({user}) => {
         const dispatch = useDispatch();
          //   const data = useSelector((state) => state.authReducer.authData);

  const { regionsUsers } = useSelector((state) => state.regionsReducer);

useEffect(() => {
   dispatch(getAllRegionsIncludingUsers(user.jwt));
  
}, []);

return (
  <div className="usersBody">
    <div className="container ">
      {regionsUsers.map((item, index) => (
        <AccordionComponent key={item.id} index={index} region={item} />
      ))}
    </div>
  </div>
);
}

export default Users
