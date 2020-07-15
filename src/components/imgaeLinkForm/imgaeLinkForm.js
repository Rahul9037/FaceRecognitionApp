import React from 'react';
import './imgaeLinkForm.css';


const ImgaeLinkForm = () => {
    return (
        <div>
            <p className='f3 black'>
                {'Magic Brain will find the faces in the picture you select!!!!!'}
            </p>
            <div className='form pa4 br2 shadow-5'>
                <input type='text' className='f4 w-70 pa2'/>
                <button className='f4 bg-light-blue w-30 grow ph3 pv2'>Detect</button>
            </div>
        </div>
    )
}

export default ImgaeLinkForm;