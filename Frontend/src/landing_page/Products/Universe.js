import React from "react";

function Universe(){
    return(
       <div className="container">
         <div className="row p-5 text-center">
                <p className="fl-5 text-center text-muted">Want to know more about our technology stack? Check out the Zerodha.tech blog. </p>
                <br/>
              <h1 className="text-center fl-3 p-4">The Zerodha Universe</h1>
              <br/>
              <p className="text-muted fl-5 text-center">Extend your trading and investment experience even further with our partner platforms.</p>
              

                <div className="col-4 p-3 mt-5">
                   <img src="media/images/smallcaseLogo.png" style={{width:"45%"}}/>
                   <br/>
                   <p>Thematic investment platform</p>
                   <br/>
                   <br/>
                   <img src="media/images/zerodhaFundhouse.png" style={{width:"48%"}}/>
                   <br/>
                   <p>Asset management</p> 
                </div>
                  
                <div className="col-4 p-3 mt-5">
                   <img src="media/images/streakLogo.png" style={{width:"45%"}}/>
                   <br/>
                   <p>Algo & strategy platform</p>
                   <br/>
                   <br/>
                   <img src="media/images/goldenpiLogo.png" style={{width:"45%"}}/>
                   <br/>
                   <p>Bonds trading platform</p>  
                </div>

                <div className="col-4 p-3 mt-5">
                   <img src="media/images/sensibullLogo.svg" style={{width:"45%"}}/>
                   <br/>
                   <p>Options trading platform</p>
                   <br/>
                   <br/>
                   <img src="media/images/dittoLogo.png" style={{width:"45%"}}/>
                   <br/>
                   <p>Insurance</p>  
                </div>
             <br/>
            <button 
              className="p-2 btn btn-primary fs-5 mb-5 mt-5" style={{width:"15%", margin: "0 auto"}}>Sign up Now</button>
            </div>
        </div>
       
    )
}

export default Universe;