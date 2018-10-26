import React from "react";
import Fader from "../Fader";


export  default function InfoBox({infoKey, successAction, successText, errorText}) {
    let info;
    if (successAction !== undefined && successAction) {
        info =
            (<div key={infoKey} className="alert alert-success" role="alert">
                {successText}
            </div>)
    } else if (successAction !== undefined && !successAction) {
        info =
            (<div key={infoKey} className="alert alert-danger" role="alert">
                {errorText}
            </div>)
    } else {
        info = null;
    }
    return (
        <Fader>
            {info}
        </Fader>
    );
}

