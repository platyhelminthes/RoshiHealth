import React, { Component } from 'react';
import axios from 'axios';

class FileUpload extends Component {
    state = {
      file: null
    };

  submitFile = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file[0]);
    axios.post(`/api/users/uploadImage`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(response => {
                axios.post('/api/users/saveImage',
            {image: response.data.Location}
        ).then(setTimeout(this.props.resetTruth, 300))
    }).catch(error => {
      // handle your error
    });
  }

  handleFileUpload = (event) => {
    this.setState({file: event.target.files});
  }

  render () {
    return (
      <form className="d-flex flex-row" onSubmit={this.submitFile}>
        <input label='upload file' type='file' onChange={this.handleFileUpload} />
        <p id="filepath">{this.props.picture}</p>
        <button className="btn" type='submit'>Choose</button>
      </form>
    );
  }
}

export default FileUpload;