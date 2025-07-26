import React from "react";

function Education(){
    return (
        <div className="container p-3">
            <div className="row p-5">
                <div className="col-6 p-5 ml-4">
                   <img src="media/images/education.svg" style={{width:"90%"}}/>
                </div>
                <div className="col-6 p-5">
                    <h1 className="fs-3">Free and open market education</h1>
                    <br/>
                    <p>Varsity,the largest online stock market education book in the world covering everything from the basics to the advance trading.</p>
                    <a href="" style={{textDecoration:"none"}}>Versity <i class="fa-solid fa-arrow-right"></i></a>
                    <br/>
                    <br/>
                    <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href="" style={{textDecoration:"none"}}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;