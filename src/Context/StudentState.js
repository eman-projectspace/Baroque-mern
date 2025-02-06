import React from "react";
import studentContext from "./StudentContext";

const StudentState = (props) => {

  const state ={
    "name" : "Eman",
    "rollno": 1122233,
    "Address" : "LHR"

  }
  return(
    <studentContext.Provider value={state}>
      {props.children}
    </studentContext.Provider>
  )
}

export default StudentState