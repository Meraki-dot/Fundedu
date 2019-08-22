import React from 'react';

const funderMeta = () => {

    return (
        <div id="funderMetaContainer">
            <div class="item" id="balance-info" data-aos="fade-up-right" data-aos-anchor-placement="bottom">
                <h5><m>Payment</m></h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis reiciendis accusantium obcaecati blanditiis nobis nesciunt dignissimos quos iusto, tempore at aperiam, quas hic suscipit voluptate eos debitis. Consequatur, sint! Mollitia.</p>
                <div className="funderBalanceImage" data-aos="fade-down"> 
                    <img src={require("../css/images/payment.jpg")} alt="" />
                </div>
            </div>
            <div class="item" id="share-info" data-aos="fade-up-left">
                <h5><m>Share</m></h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sapiente cupiditate accusantium ipsum maxime id nisi maiores rem illo dolorum quo eligendi beatae ipsam aperiam voluptas ab rerum, debitis sunt.</p>
                <div className="funderShareImage">
                    <img data-aos="fade-down" src={require("../css/images/friendsmiling.jpg")} alt="" />
                </div>
            </div>
            <div class="item" id="spend-info" data-aos="fade-up-right">
                <h5>How it&nbsp;<m>Works</m></h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eos nam tenetur dolore recusandae soluta deleniti nisi expedita optio reiciendis illo iusto, at adipisci. Pariatur temporibus assumenda iure rem quos.</p>
                <div className="funderSpendImage" data-aos="fade-down">
                    <img src={require("../css/images/usingcomputer.jpg")} alt="" />
                </div>
            </div>
        </div>
    );
}

export default funderMeta;