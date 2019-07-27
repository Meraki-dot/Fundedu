import React from 'react';

const studentLanding = (props) => {
    return (
        <div>
            <div>
                <img src="https://cdn.internationalstudent.com/images/international-student/international-student-sq.jpg" alt="" />
                <h5>Register or login as a Student</h5>

                <button className="btn btn-primary" onClick={() => props.history.push("/student/register")}>Register</button>
                <button className="btn btn-secondary" onClick={() => props.history.push("/student/login")}>Login</button>
            </div>
        </div>
    );
}

export default studentLanding;