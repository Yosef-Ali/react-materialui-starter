import React, { Fragment } from 'react'
import axios from 'axios'

class ImageUpload extends React.Component {
  state = {
    selectedFile: null
  }

  handleFileSelected = e => {
    this.setState({ selectedFile: e.target.files[0] })
  }

  handleUpload = () => {
    const url =
      'https://us-central1-material-ui-mobx-starter.cloudfunctions.net/uploadFile'
    const formData = new FormData()
    formData.append(
      'image',
      this.state.selectedFile,
      this.state.selectedFile.name
    )

    axios
      .post(url, formData, {
        onUploadProgress: progressEvent => {
          console.log(
            'Upload Progress: ' +
              Math.floor((progressEvent.loaded / progressEvent.total) * 100) +
              '%'
          )
        }
      })
      .then(res => {
        console.log(res)
      })
  }

  render() {
    return (
      <Fragment>
        <input type="file" onChange={this.handleFileSelected} />
        <button onClick={this.handleUpload}>Upload</button>
      </Fragment>
    )
  }
}

export default ImageUpload
