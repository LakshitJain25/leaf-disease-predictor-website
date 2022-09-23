import React, { useState } from 'react'
import './ProductInputModal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross, faPhone, faX } from '@fortawesome/free-solid-svg-icons';
const ProductInputModal = ({ setShow }) => {
  const [image, setImage] = useState(null)


  const readImage = (file) => {
    return new Promise((rs, rj) => {
      const fileReader = new FileReader()
      fileReader.onload = () => rs(fileReader.result)
      fileReader.onerror = () => rj(fileReader.error)
      fileReader.readAsDataURL(file)
    })
  }

  const processImage = async (img) => {
    if (!img) return
    const read_image = await readImage(img)
    setImage(read_image)
  }

  return (
    <div className='product-modal-container'>
      <div className="close-button" onClick={() => { setShow(false) }}><FontAwesomeIcon icon={faX} /></div>
      <div className="product-image-input">
        <div className="product-image-container">
          {image ? <img src={image} alt="" /> : <p>Please Upload Image</p>}
        </div>
        <label htmlFor="imageInput">
          <div className='image-upload-button'>Upload</div>
          <input id='imageInput' type="file" className='image-input'
            accept="image/png, image/jpg, image/jpeg"
            onChange={(e) => { processImage(e.target.files[0]) }}
          />
        </label>
      </div>
      <div className="product-input-container">
        <form action="" className="input-form" onSubmit={(e) => { console.log(e.target.value) }}>
          <div className="producer-name input-area">
            <label htmlFor="producer-name">Your Name </label>
            <input type="text" placeholder='your name..' id='producer-name' required />
          </div>
          <div className="producer-number input-area">
            <label htmlFor="producer-number">Phone number</label>
            <input type="number" placeholder='phone number..' id='producer-number' maxLength={10} required
              onInput={(e) => {
                if (e.target.value.length > 10) {
                  e.target.value = e.target.value.slice(0, 10)
                }
              }} />
          </div>

          <div className="product-name input-area">
            <label htmlFor="product-name">Product Name</label>
            <input type="text" placeholder='product name..' id='product-name' required />
          </div>

          <div className="product-date input-area">
            <label htmlFor="product-date">Available Till</label>
            <input type="text" placeholder='date..' id='product-date' required />
          </div>

          <div className="product-location input-area">
            <label htmlFor="product-location">Location</label>
            <input type="text" placeholder='new delhi..' id='product-location' required />
          </div>

          <button className='form-btn' type='submit'>Submit</button>
        </form>
      </div>
      <div className="bottom-bar"></div>
    </div>
  )
}

export default ProductInputModal