import React from 'react'
import FunderMetaData from './metaData/funderMeta';

const Funder = (props) => {
    return ( 
        <div className="">
            <h1>Funder</h1>
            <button className="btn btn-success" onClick={() => props.history.push("/funder/home")}>GET STARTED</button>
            <FunderMetaData />
        </div>
    );
}

export default Funder;