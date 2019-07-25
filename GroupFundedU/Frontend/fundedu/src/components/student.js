import React from 'react'
import StudentMetaData from './studentMetaData';

const Student = () => {
    return ( 
        <div className="">
            <h1>Student</h1>
            <button className="btn btn-success">GET STARTED</button>
            <StudentMetaData />
        </div>
     );
}

export default Student;