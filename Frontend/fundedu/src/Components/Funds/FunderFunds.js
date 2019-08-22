import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDestinationUser, sendFunds, changeFunds, addAssociate } from '../../actions/authActions';
import './css/FunderFunds.css'

const FunderFunds = () => {

    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.currentUser);
    const funds = user.funds;
    const currentId = user._id;
    const fundsDestination = useSelector(state => state.auth.fundsDestination);

    const clickSendFunds = async () => {
        let destinationID = prompt("Enter the ID of the person you wish to send funds to.");
        let fundsToSend = +(prompt("How much money would you like to send?"));

        while (isNaN(fundsToSend)) {
        fundsToSend = +(prompt("Please use numbers when attempting to send funds."));
        }

       await dispatch(getDestinationUser(destinationID, fundsToSend));

    console.log('test')

        // dispatch(sendFunds(currentId, destinationID, newCurrent, newDestination));
    }

    const clickAddFunds = () => {
        let fundsToAdd = +(prompt("How much money would you like to add to your funds?"));

        while (isNaN(fundsToAdd)) {
            fundsToAdd = +(prompt("Please use numbers when attempting to send funds."));
            }

            let newCurrent = {
                id: user.id,
                name: user.name,
                userType: user.userType,
                associates: user.associates,
                funds: user.funds + fundsToAdd
            };
        
        console.log(user.id, newCurrent)
        dispatch(addAssociate(user.id, newCurrent));

    }

    return (
        <div>
            <button className="funderButtons" onClick={clickAddFunds}>Add funds</button>
            <button className="funderButtons" onClick={clickSendFunds}>Send funds</button>
        </div>
    );
}

export default FunderFunds;