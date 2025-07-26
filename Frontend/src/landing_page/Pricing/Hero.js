import React from "react";

function Hero(){
    return(
        <div className="container mt-3 p-5">
            <div className="row text-center">
                <div className="col-4 p-4">
                    <img src="media/images/pricingMF.svg" style={{width:"70%"}}/>
                    <br/>
                    <h1 className="fs-3">Free equity delivery</h1>
                    <br/>
                    <p>All equity delievery investments(NSE,BSE), are absolutely free -&#8377; 0 brokerage.</p>
                </div>

                <div className="col-4 p-4">
                    <img src="media/images/intradayTrades.svg" style={{width:"70%"}}/>
                    <br/>
                    <h1 className="fs-3">Intraday and F&O trades</h1>
                    <br/>
                    <p>Flat Rs. 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity,currency, and commodity trades.</p>
                </div>

                <div className="col-4 p-4">
                    <img src="media/images/pricingEquity.svg" style={{width:"70%"}}/>
                    <br/>
                    <h1 className="fs-3">Free directory</h1>
                    <br/>
                    <p >All direct mutual fund investments are absolutely free - &#8377; commissions & DP charges.</p>
                </div>

                <h1 className="mt-5 fs-2 pt-5 ">Open a Zerodha account</h1>
                <br/>
                <p className="text-muted fl-2 p-3">Modern platforms and apps, &#8377;0 investments, and flat &#8377;20 intraday and F&O trades.</p>
                <br/>
                <button className="p-2 btn btn-primary fs-5 mb-5" style={{width:"20%", margin:"0 auto"}}>Signup Now</button>
            </div>
        
        </div>
      
    )
}

export default Hero;