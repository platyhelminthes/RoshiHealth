import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

class Main extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            fullName: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
    }

    render() {
        return (
        <div>

          </div>
        );
    }
}

export default Main;
