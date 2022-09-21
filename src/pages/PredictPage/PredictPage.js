import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import './PredictPage.css'
import class_names from './ClassNames';
import * as tf from '@tensorflow/tfjs'

import Navbar from './../../Components/Navbar/Navbar';
import LoadingBar from './../../Components/LoadingBar/LoadingBar';
import { motion } from 'framer-motion';
const PredictPage = ({ variants, transition }) => {
    const [image, setImage] = useState(null)
    const [model, setModel] = useState(null)
    const [prediction, setPrediction] = useState(null)
    const [processing, setProcessing] = useState(false)

    useEffect(() => {
        const loadModel = async () => {
            if (!model) {
                const _model = await tf.loadLayersModel("/model/model.json")
                setModel(_model)
            }
        }
        loadModel()
    }, [model])


    const readImage = (file) => {
        return new Promise((rs, rj) => {
            const fileReader = new FileReader()
            fileReader.onload = () => rs(fileReader.result)
            fileReader.onerror = () => rj(fileReader.error)
            fileReader.readAsDataURL(file)
        })
    }

    const predict = async (e) => {
        e.preventDefault()
        if (!image) return
        setProcessing(true)
        try {
            const read_image = await readImage(image)
            const imageElement = document.createElement('img')
            imageElement.src = read_image
            imageElement.onload = async () => {
                const image_tensor = tf.browser.fromPixels(imageElement).resizeNearestNeighbor([224, 224]).toFloat().expandDims()
                const normalized_tensor = tf.scalar(1.0).sub(image_tensor.div(tf.scalar(255.0)))
                const preds = await model.predict(normalized_tensor).data()
                const maxInd = await tf.argMax(preds, 0).data()
                console.log(preds)
                setPrediction(class_names[maxInd])
            }
        }
        catch (e) {
            console.log(e)
        }
        setProcessing(false)
    }

    return (
        <div
            className="predict-mega-container">
            <Navbar />
            <motion.div className='predict-container'
                initial="out"
                animate="in"
                exit="exit"
                variants={variants}
                transition={transition}>
                {processing && <LoadingBar />}
                <div className="file-upload-container">
                    <h2 className="file-form-heading">Upload Your Image!</h2>
                    <form action="" className="file-form" onSubmit={(e) => { predict(e) }}>
                        <label htmlFor="fileInput">
                            <FontAwesomeIcon icon={faCloudArrowUp} />
                            <input id='fileInput' type="file" className='file-input'
                                accept="image/png, image/jpg, image/jpeg"
                                onChange={(e) => { setImage(e.target.files[0]) }}
                            />
                            <p>click here</p>
                        </label>
                        <p className='filename'>{(image) ? image.name : ""}</p>
                        <p>Upload picture of the leaf</p>
                        {image && <button type='submit' className='predict-btn'>Predict</button>}
                    </form>
                    {prediction && <p>prediction : {prediction}</p>}
                </div>
                <div className="instructions-container">

                </div>
            </motion.div>
        </div>
    )
}

export default PredictPage