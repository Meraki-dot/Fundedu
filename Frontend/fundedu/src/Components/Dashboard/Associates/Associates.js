import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAssociate, setAssociateObject, addAssociateObject } from '../../../actions/authActions'
import './associates.css';

const Associates = () => {

    const user = useSelector(state => state.auth.currentUser)
    const associateObjects = useSelector(state => state.auth.associateObjects)
    const dispatch = useDispatch();
    
    const [associateId, setAssociateId] = useState("");

    const onChange = e => {
        setAssociateId(e.target.value);
    };

    useEffect(() => {
        console.log(user)
        for (let i = 0; i < user.associates.length; i++)
        {
            dispatch(setAssociateObject(user.associates[i]));
        }
    },[])



    const onAddClick = (id) => {
        let newAssociates = user.associates
        newAssociates.push(id);
        let newUser = {
            id: user.id,
            name: user.name,
            userType: user.userType,
            associates: newAssociates
        };
        dispatch(addAssociate(user.id, newUser));
        dispatch(addAssociateObject(id));
        setAssociateId('');
    }

    return (
        <div id="associatesContainer">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <h5>Associates</h5>
            
            <input type="text" value={associateId} onChange={onChange}/>
            <button id="associateButton" onClick={() => onAddClick(associateId)}>Add Associate</button>
        </div>
    );
}

export default Associates;