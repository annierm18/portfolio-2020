import React from 'react';
// import profilePicture from "../../../static/assets/images/bio/headshot1.jpg"

export default function() {
    return (
    
        <div className="content-page-wrapper">
            <div 
                className="left-column" 
                style={{
                    // background: "url(" + profilePicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
            <div className="right-column">
                You may have noticed in the 
                parent example that we can 
                destructure the Component 
                object as we import React in 
                class components. This isn’t 
                necessary for functional components 
                as we won’t be extending the Component 
                class for those.
            </div>
        </div>
    );
}