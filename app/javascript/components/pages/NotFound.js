import React, { useState } from 'react';


const NotFound = (props) => {


        return (
            <>
            <div className="error-message">

            <h1>Oops! Could not find the address, did you take a wrong turn?</h1>
            <img className="error-img" src="https://images.unsplash.com/photo-1561370654-b14ce4696116?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"/>
            </div>

            </>
        )
}

export default NotFound
