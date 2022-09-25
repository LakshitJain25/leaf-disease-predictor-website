import React, { useEffect, useState } from 'react'
import './CargoPage.css'
import Navbar from '../../Components/Navbar/Navbar';
import CargoCard from '../../Components/CargoCard/CargoCard';
import CargoInputModal from '../../Components/CargoInputModal/CargoInputModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { Store as NotiStore } from 'react-notifications-component';
import { motion } from 'framer-motion';
import axios from 'axios';
import CargoShowModal from '../../Components/CargoShowModal/CargoShowModal';
const CargoPage = ({ variants, transition }) => {

    const [showInput, setShowInput] = useState(false)
    const [showOutput, setShowOutput] = useState(null)
    const [cargos, setCargos] = useState([])
    const base_url = "https://farmey-server.herokuapp.com/"
    // const base_url = "http://localhost:8080/"

    useEffect(() => {
        const getCargos = async () => {
            try {
                const { data } = await axios.get(base_url + 'api/Cargo/fetch')
                setCargos(data)
            }
            catch (e) {
                console.log(e)
            }
        }
        getCargos()
    }, [])

    return (
        <>
            {showOutput && <CargoShowModal id={showOutput} setShow={setShowOutput} />}
            <div className="productInputToggle" onClick={() => { setShowInput(!showInput) }}>
                {showInput ? <FontAwesomeIcon icon={faXmarkCircle} /> : <FontAwesomeIcon icon={faPlusCircle} />}
            </div>
            <div className='market-mega-container'>
                <Navbar />
                {showInput && <CargoInputModal setShow={setShowInput} setCargos={setCargos} cargos={cargos}/>}
                <motion.div className="market-container"
                    initial="out"
                    animate="in"
                    exit="exit"
                    variants={variants}
                    transition={transition}>
                    <div className="cards-container">
                        {
                            cargos.map((cargo, index) => {
                                return (<CargoCard cargo={cargo} key={cargo._id} setShowOutput={setShowOutput} />)
                            })
                        }
                    </div>
                </motion.div>
            </div>
        </>
    )
}

export default CargoPage