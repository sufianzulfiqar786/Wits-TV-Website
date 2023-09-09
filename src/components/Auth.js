import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  return function WithAuth(props) {

    
    // If the user is not authenticated, redirect to login page
    if (!localStorage.getItem("count")) {
      return <Navigate to="/signin" />;
    }

    // If the user is authenticated, render the wrapped component
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
