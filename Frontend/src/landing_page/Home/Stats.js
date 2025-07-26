import React from "react";

function Stats(){
    return (
        <div className="container p-3">
            <div className="row p-5">
                <div className="col-6 p-5">
                  <h1 className="fs-2">Trust with confidence</h1>
                  <br/>
                  <h3 className="fs-5">Customer-first always</h3>
                  <p className="text-muted">That's why 1.3+ crores customers trust Zerodha with &#8377;3.5+lakh crores worth of equity investments.</p>
                   <br/>

                   <h3 className="fs-5">No spam or gimmicks</h3>
                   <p className="text-muted">No gimmicks,spam,"gammification",or annoying push notifications.High quality apps that you use at your pace, yhe way you like.</p>
                   <br/>

                   <h3 className="fs-5">The Zerodha universe</h3>
                   <p className="text-muted">Not just an app,but a whole ecosystem.Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                   <br/>

                   <h3 className="fs-5">Do better with money</h3>
                   <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions,but actively help you do better with your money. </p>
                </div>
                <div className="col-6 p-5">
                    <img src="media/images/ecosystem.png" style={{width:"95%"}}/>
                    <div className="text-center">
                        <a href="" className="mx-5" style={{textDecoration:"none"}}>Explore our Products <i class="fa-solid fa-arrow-right"></i></a>
                        <a href="" style={{textDecoration:"none"}}>Try Kite demo<i class="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Stats;