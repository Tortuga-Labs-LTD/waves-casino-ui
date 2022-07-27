import React, { Component } from "react";
import "./App.css";
import Routes from "./Components/Navbar/navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./Components/Authentication/Auth";

class App extends Component {
    render() {
        return (
            <div>
                <AuthProvider>
                    <Routes />
                </AuthProvider>
            </div>
        );
    }
}

export default App;
