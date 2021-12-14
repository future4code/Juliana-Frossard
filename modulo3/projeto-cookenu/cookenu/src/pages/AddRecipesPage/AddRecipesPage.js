import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const AddRecepiesPage = () => {
    useProtectedPage()
    return(
        <div>
            <h1>AddRecepiesPage</h1>
        </div>
    )
}

export default AddRecepiesPage;