import React from "react";

function Awards(){
    return (
        <div className="container mt-5">
            <div className="row ">
                <div className="col-6">
                  <img src="media/images/largestBroker.svg" alt="Award Image"/>
                </div>
                <div className="col-6">
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                  <div className="row p-4">
                    <div className="col-6">
                        <ul>
                        <li>Future and Options</li>
                        <br/>
                        <li>Commodity derivatives</li>
                        <br/>
                        <li>Currency dervatives</li>
                        <br/>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul>
                        <li>Stocks & IPOs</li>
                        <br/>
                        <li>Direct Mutual funds</li>
                        <br/>
                        <li>Bonds and Government</li>
                        <br/>
                        </ul>
                    </div>
                    <img src="media/images/pressLogos.png" alt="PressLogos" style={{width:"90%"}}/>
                  </div>
                </div>
            </div>
        </div>
    );
}

export default Awards;