import React from "react";

const LocationInfo = ({rickLocation}) => {
    return (
        <div className="card">
            <h2>{rickLocation.name}</h2>
            <div className="location">
                <li><span>Type: </span>{rickLocation.type}</li>
                <li><span>Dimension: </span>{rickLocation.dimension}</li>
                <li><span>Population: </span>{rickLocation.residents?.length}</li>
            </div>
            
        </div>
    )
}

export default LocationInfo;