import React from 'react';
import FaceRecognition from '../faceRecognition/faceRecognition';
import './imgaeLinkForm.css';


class ImgaeLinkForm extends React.Component {
    constructor() {
        super()
        this.state = {
            input: '',
            imageUrl: '',
            box: {}
        }
    }

    onInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    getFaceBoxCoordinates = (resp) => {
        const faceBoxCoordinates = resp.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('uploadimage');
        const width = image.width;
        const height = image.height;
        return {
            topRow: faceBoxCoordinates.top_row * height,
            leftCol: faceBoxCoordinates.left_col * width,
            bottomRow: height - (faceBoxCoordinates.bottom_row * height),
            rightCol: width - (faceBoxCoordinates.right_col * width)
        }
    }

    drawFaceBox = (box) => {
        this.setState({ box: box })
    }

    onImageSubmit = () => {
        const { user } = this.props;
        this.setState({ imageUrl: this.state.input });
            fetch('https://facefinderapi.herokuapp.com/imageUrl', {
                method: 'put',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    input : this.state.input
                })
            })
            .then(response => response.json())
            .then(response => {
                if (response) {
                    fetch('https://facefinderapi.herokuapp.com/image', {
                        method: 'put',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({
                            id: user.id
                        })
                    })
                        .then(response => response.json())
                        .then(count => {
                            this.props.updateEntries(count);
                        })
                }
                this.drawFaceBox(this.getFaceBoxCoordinates(response))
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <p className='f3 black'>
                    {'Magic Brain will find the faces in the picture you select!!!!!'}
                </p>
                <div className='form pa4 br2 shadow-5 center'>
                    <input type='text' className='f4 w-70 pa2' onChange={this.onInputChange} name="input" />
                    <button className='f4 w-30 grow ph3 pv2 white'
                        style={{ backgroundColor: '#185a9d' }}
                        onClick={this.onImageSubmit}>Detect</button>
                </div>
                <div className="center">
                    <FaceRecognition source={this.state.imageUrl} box={this.state.box} />
                </div>
            </div>
        )
    }
}

export default ImgaeLinkForm;