import React from 'react';
import { ScaleLoader } from "react-spinners";

export function renderLoadingSpinner() {
    return (
        <div className="d-flex justify-content-center mt-4">
            <ScaleLoader color={"#FFF"} loading={true}/>
        </div>
    );
}