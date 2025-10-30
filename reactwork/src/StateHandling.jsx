import React, {useState} from "react";
export default function StateHandling(){
    const [width, setWidth] = useState(200); 
    return (
        <div>
            <div className="image-container">
                <img src="" alt="" style={{width: `${width}`}}/>
            </div>
            <div className="button-container">
                <button onClick={increaseWidth}>Increase width</button>
                <button>Increase Height</button>
            </div>
        </div>
    )
}