import React from "react";

function RightSection({imageURL,productName,productDescription,learnMore}){
    return(
       <div className="container mt-3 ">
           <div className="row ">
              <div className="col-5 p-4 mt-5 ">
                <h1>{productName}</h1>
                <p className="text-muted fl-5">{productDescription}</p>
                <br/>
                <p><a href={learnMore} style={{textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right"></i> </a>
                </p>
              </div>
              <div className="col-1"></div>
              <div className="col-6 mb-5 ml-5 p-4">
                 <img src={imageURL} style={{width:"85%"}}/>
              </div>
           </div>
        </div>
    )
}

export default RightSection;


