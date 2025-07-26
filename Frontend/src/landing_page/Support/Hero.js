import React from "react";

function Hero(){
    return(
        <div className="container p-4 mt-5" style={{backgroundColor:"#1e90ff",color:"white"}}>
            <div className="row p-5">
                <div className="col-5 p-2">
                   <p className="fl-4">Support Portal</p>
                   
                   <p className="fs-5 mt-5">Search for an answer or browse help topics to create a ticket</p>
                   <div className="p-2" style={{backgroundColor:"white"}}>
                     <p className="p-2 fl-1 text-muted text-center">Eg. how do i activate F&O, why is my order getting rejected...</p>
                   </div>
                    <br/>
                   <a href="" style={{color:"white"}}>Track account opening</a>&nbsp;&nbsp;
                   <a href="" style={{color:"white"}}>Track segment activation</a>&nbsp;&nbsp;
                   <a href="" style={{color:"white"}}>Intraday margins</a>&nbsp;&nbsp;
                   &nbsp;&nbsp;
                   <a href="" style={{color:"white"}}>Kite user manual</a>
                </div>
                <div className="col-2"></div>

                <div className="col-5 p-2">
                   <p className="fl-5 p-2" style={{color:"white",textAlign:"center",textDecoration:"underline"}} >Track Tickets</p>
                   <p className="mt-5 fs-5" style={{color:"white"}}>Featured</p>
                   <a href="" style={{color:"white"}} className="fl-5">1. Current Takeovers and Delisting- January 2024</a>
                   <br/><br/>
                   <a href="" style={{color:"white"}} className="fl-3">2.Latest Intraday leverages- MIS & CO</a>
                </div>
            </div>
        </div>
    )
}

export default Hero;