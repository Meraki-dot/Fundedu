import React from 'react'
import StudentMetaData from './metaData/studentMeta';

const Student = (props) => {
    return ( 
        <div className="">
            <h1>Student</h1>
            <button className="btn btn-success" onClick={() => props.history.push("/student/home")}
>GET STARTED</button>
            <StudentMetaData />
        </div>
    );
}

export default Student;