import React from "react";

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}){
    return(
        <div className="container border-top p-5">
           <div className="row p-5">
              <div className="col-5 p-2">
                 <img src={imageURL} style={{width:"85%"}}/>
              </div>
              <div className="col-1"></div>
              <div className="col-6">
                <h1>{productName}</h1>
                <p className="text-muted fl-2">{productDescription}</p>
                <br/>
                <p><a href={tryDemo} style={{textDecoration:"none"}}>Try demo <i class="fa-solid fa-arrow-right"></i> </a>
                &nbsp; &nbsp; &nbsp; <a href={learnMore} style={{textDecoration:"none"}}> Learn More <i class="fa-solid fa-arrow-right"></i> </a>
                </p>
                <br/>
                <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"/></a> &nbsp; &nbsp; 
                <a href={appStore}> <img src="media/images/appstoreBadge.svg"/> </a>
              </div>
           </div>
        </div>
    )
}

export default LeftSection;