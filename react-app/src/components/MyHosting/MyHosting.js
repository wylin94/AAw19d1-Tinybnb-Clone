import React, { useEffect, useState } from "react";
import CreateSpotFormModal from "../CreateSpotFormModal";

function MyHosing() {
    return (
        <>
            <h1>My Hosting Page</h1>
            <CreateSpotFormModal />
            <div>list out all my current hosting spots</div>
        </>
    )
}

export default MyHosing;