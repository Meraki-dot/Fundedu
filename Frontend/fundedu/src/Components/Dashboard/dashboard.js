import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import './css/dashboard.css'
import Receipt from './Receipt';
import FunderFunds from '../Funds/FunderFunds';
import Associates from './Associates/Associates';

const Dashboard = () => {

    const user = useSelector(state => state.auth.currentUser);
    const associateObjects = useSelector(state => state.auth.associateObjects)
    const dispatch = useDispatch();

    const onLogoutClick = e => {
        e.preventDefault();
        dispatch(logoutUser());
    };

    return (
        <div>
            {
                user.userType === 'student' &&
                <div id="dashContainer">
                    <div id="wrapper">
                        <div id="sideColumn">
                            <div id="brandSection">
                                <h1>FundedU</h1>
                            </div>
                            <div id='rowMenu'>
                                <span><h3><button id="studentLogOut" onClick={onLogoutClick}>Logout</button></h3></span>
                            </div>
                            <div>
                                <h4>Share</h4>
                                <br />
                                <div id="socialLogo">
                                    <div>
                                        <span>
                                            <img src={require('./css/images/facebook.png')} />
                                        </span>
                                    </div>
                                    <br />
                                    <div>
                                        <span>
                                            <img src={require('./css/images/instagram-symbol.png')} />
                                        </span>
                                    </div>
                                    <br />
                                    <div>
                                        <span>
                                            <img src={require('./css/images/twitter.png')} />
                                        </span>
                                    </div>
                                    <div>
                                        <Associates />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="mainPage">
                            <h1 id="topMessage">Hey there, <m>{user.name.split(" ")[0]}</m></h1>
                            <div id="userInfo">
                                <span><m>Email</m>example@example.com</span>
                                <span><m>Account ID</m>123123525</span>
                                <span><m>User Type</m>Student</span>
                            </div>
                            <div id="userOverview">
                                <div id="overviewHead">
                                    <h2>Overview</h2>
                                </div>
                                <div id="balanceOverview">
                                    <h4>Current <m>Balance</m></h4>
                                    <h2>$10,000.00</h2>
                                </div>
                                <div id="viewReceipts">
                                    <h4>Upload <m>Receipts</m></h4>
                                    <div id="receiptHolder"><Receipt /></div>
                                </div>
                                <div id="funderList">
                                    <h4>Your <m>Funders</m></h4>
                                    {associateObjects.length > 0 && associateObjects.map(a =>
                                            <div key={a._id}>
                                                <p><strong>Name: </strong>{a.name}</p>
                                                <p><strong>Email: </strong>{a.email}</p>
                                            </div>
                                        )}
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            }
            {
                user.userType === 'funder' &&
                <div>
                    <div id="dashContainer">
                        <div id="wrapper">
                            <div id="sideColumn">
                                <div id="brandSection">
                                    <h1>FundedU</h1>
                                </div>
                                <div id='rowMenu'>
                                    <span><h3><button id="studentLogOut" onClick={onLogoutClick}>Logout</button></h3></span>
                                </div>
                                <div>
                                    <h4>Share</h4>
                                    <br />
                                    <div id="socialLogo">
                                        <div>
                                            <span>
                                                <img src={require('./css/images/facebook.png')} />
                                            </span>
                                        </div>
                                        <br />
                                        <div>
                                            <span>
                                                <img src={require('./css/images/instagram-symbol.png')} />
                                            </span>
                                        </div>
                                        <br />
                                        <div>
                                            <span>
                                                <img src={require('./css/images/twitter.png')} />
                                            </span>
                                        </div>
                                        <div>
                                            <Associates />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="mainPage">
                                <h1 id="topMessage">Hey there, <m>{user.name.split(" ")[0]}</m></h1>
                                <div id="userInfo">
                                    <span><m>Email</m>{user.email}</span>
                                    <span><m>Account ID</m>{user.id}</span>
                                    <span><m>User Type</m>Funder</span>
                                </div>
                                <div id="userOverview">
                                    <div id="overviewHead">
                                        <h2>Overview</h2>
                                    </div>
                                    <div id="balanceOverview">
                                        <h4>Amount <m>Funded</m></h4>
                                        <h2>${user.funds}</h2>
                                    </div>
                                    <div id="viewReceipts">
                                        <h4>Add <m>Funds</m></h4>
                                        <div id="receiptHolder"><FunderFunds /></div>
                                    </div>
                                    <div id="funderList">
                                        <h4>Your <m>Associations</m></h4>
                                        {associateObjects.length > 0 && associateObjects.map(a =>
                                            <div key={a._id}>
                                                <p><strong>Name: </strong>{a.name}</p>
                                                <p><strong>Email: </strong>{a.email}</p>
                                            </div>
                                        )}
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>

                </div>
            }
        </div>
    );
}

export default Dashboard;