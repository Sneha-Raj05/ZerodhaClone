import React from "react";

function Brokerage(){
    return( 
        <div className="container border-top mt-4">
            <div className="row p-5">
                <div className="col-7 p-5">
                     <h2 style={{Color:"blue"}} className="fs-4 text-center">Brokerage calculator</h2>
                     <br/>
                     <br/>
                    <ul>
                        <li>
                            <p className="text-muted" style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}> Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
                            GST per order.</p>
                        </li>

                        <li>
                           <p className="text-muted" style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}>Digital contract notes will be sent via e-mail.</p> 
                        </li>

                        <li>
                            <p className="text-muted" style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}>Physical copies of contract notes, if required, shall be charged
                             ₹20 per contract note. Courier charges apply.</p>  
                        </li>

                        <li>
                           <p className="text-muted" style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}>For NRI account (non-PIS), 0.5% or ₹100 per executed order for
                             equity (whichever is lower).</p> 
                        </li>

                        <li>
                            <p className="text-muted" style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}>For NRI account (PIS), 0.5% or ₹200 per executed order for equity
                             (whichever is lower).</p> 
                        </li>

                        <li>
                            <p className="text-muted" style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}> If the account is in debit balance, any order placed will be
                          charged ₹40 per executed order instead of ₹20 per executed order.</p>
                         
                        </li>
                    </ul>
                </div>

                <div className="col-5 p-5">
                    <h2 style={{Color:"blue"}} className="fs-4 text-center">List of charges</h2>
                </div>
            </div>
        </div>
    )
}

export default Brokerage;