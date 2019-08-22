import React from 'react';

const studentMeta = () => {

    return (
        <div id="studentMetaContainer">
            <div class="item" id="balance-info" data-aos="fade-up-right" data-aos-anchor-placement="bottom">
                <h5>Check&nbsp;<m>Balances</m></h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis reiciendis accusantium obcaecati blanditiis nobis nesciunt dignissimos quos iusto, tempore at aperiam, quas hic suscipit voluptate eos debitis. Consequatur, sint! Mollitia.</p>
                <div className="studentBalanceImage" data-aos="fade-down"> 
                    <img src={require("../css/images/card-transaction.jpg")} alt="" />
                </div>
            </div>
            <div class="item" id="share-info" data-aos="fade-up-left">
                <h5><m>Share</m></h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum sapiente cupiditate accusantium ipsum maxime id nisi maiores rem illo dolorum quo eligendi beatae ipsam aperiam voluptas ab rerum, debitis sunt.</p>
                <div className="studentShareImage">
                    <img data-aos="fade-down" src={require("../css/images/sharing.jpg")} alt="" />
                </div>
            </div>
            <div class="item" id="spend-info" data-aos="fade-up-right">
                <h5>How to&nbsp;<m>Spend</m></h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eos nam tenetur dolore recusandae soluta deleniti nisi expedita optio reiciendis illo iusto, at adipisci. Pariatur temporibus assumenda iure rem quos.</p>
                <div className="studentSpendImage" data-aos="fade-down">
                    <img src={require("../css/images/spending.jpg")} alt="" />
                </div>
            </div>
        </div>
    );
}

export default studentMeta;