import React from 'react'
import FunderMetaData from './metaData/funderMeta';

const Funder = () => {
    return ( 
        <div className="">
            <h1>Funder</h1>
            <button className="btn btn-success">GET STARTED</button>
            <FunderMetaData />
        </div>
    );
}

export default Funder;