
import React, { Component } from "react";
import FormComponent from "./FormComponent";
import "./App.css";

class App extends Component {
    constructor() {
        super();

        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            nutsFree: false,
            lactoseFree: false,
            vegan: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const { name, value, type, checked } = event.target;

        const newValue = type === "checkbox"
            ? checked
            : value;

        this.setState({
            [name]: newValue
        });
    }

    render() {
        return (
            <FormComponent
                data={this.state}
                handleChange={this.handleChange}
            />
        );
    }
}

export default App;