import React, { Component } from "react";
import Error from "../Error/";

class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    componentDidCatch() {
        console.log(this.state);
        this.setState({ hasError: true })
    }

    render() {
        if (this.state.hasError) {
            return <Error />
        }

        return this.props.children;

    }
}

export default ErrorBoundary;