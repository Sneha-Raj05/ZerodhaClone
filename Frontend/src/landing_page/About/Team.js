import React from "react";

function Team(){
    return(
        <div className="container border-top">
           <div className="row p-5">
            <h1 className="text-center p-4">People</h1>
            <div className="col p-4 text-center">
                <img src="media/images/nithinKamath.jpg" style={{width:"65%",borderRadius:"100%"}}/>
                <p className= "text-muted mt-3"> Nithin Kamath
                    <br/>Founder,CEO
                </p>
            </div>
            <div className="col p-5">
                <p>Nithin bootstraped and founded Zerodha in 2010 to overcome the hurdles faced during his decade long stint as a trader.Today,Zerodha has changed the landscape of the Indian broking industry.</p>
                <br/>
                <p>He is a member of the SEBI Secondary Market Advisor Committee(SMAC) and the Market Data Advisor (MDAC).</p>
                <br/>
                <p>Playing basketball is his zen.</p>
                <br/>
                <p>Connect on&nbsp;
                    <a href="" style={{textDecoration:"none"}}>Homepage</a>/&nbsp;
                    <a href="" style={{textDecoration:"none"}}>TradingQ&A</a>/&nbsp;
                    <a href="" style={{textDecoration:"none"}}>Twitter</a>&nbsp;
                </p>
            </div>
           </div>
        </div>
    )
}

export default Team;