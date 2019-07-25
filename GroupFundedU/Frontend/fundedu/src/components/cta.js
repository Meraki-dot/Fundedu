import React from 'react'



const callToAction = (props) => {
    return (
        <div className="">
            <h2>Call to Action</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnaero distinctio deleniti numquam nulla unde, veniam fugiat dolorem optio temporibus quia!</p>
            <button
                className="btn btn-primary btn-sm"
                onClick={()=>props.history.push("/student")}
                >Student</button>
            <button
                className="btn btn-primary btn-sm"
                onClick={()=>props.history.push("/funder")}
                >Funder</button>
        </div>
    );
}

export default callToAction;
