import React from "react";

function Pricing(){
    return (
        <div className="container p-6">
            <div className="row p-5">
                <div className="col-5 p-5">
                   <h1>Unbeatable pricing</h1>
                   <br/>
                   <p>We pioneered the concept of discount broking and price transparency in India.Flat fees and no hidden charges.</p>
                   <a href="" style={{textDecoration:"none"}}>See pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                
                <div className="col-1"></div>
                
                <div className="col-6 p-5">
                    <div className="row text-center">
                      <div className="col-6 border p-4">
                        <h1 className="text-center">&#8377;0</h1>
                        <br/>
                        <p className="text-muted text-center">Free euity delievery and direct mutual funds</p>
                      </div>
                      <div className="col-6 border p-4">
                        <h1 className="text-center">&#8377;20</h1>
                        <br/>
                        <p className="text-muted text-center">Intraday and F&O</p>
                      </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Pricing;