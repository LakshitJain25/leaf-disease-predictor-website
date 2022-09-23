import React, { useState } from 'react'
import './MarketPage.css'
import Select from 'react-dropdown-select';
import Navbar from './../../Components/Navbar/Navbar';
import Card from './../../Components/Card/Card';
import ProductInputModal from './../../Components/ProductInputModal/ProductInputModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPlusCircle, faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
const MarketPage = () => {
    const options = [
        { value: 'manure', label: 'manure' },
        { value: 'crops', label: 'crops' }
    ]
    const dropdownStyles = {
        background: "white",
        letterSpacing: "2px",
        width: "400px",
        border: "2px solid #314e2e"
    }
    const [showInput, setShowInput] = useState(false)

    return (
        <>
            <div className="productInputToggle" onClick={() => { setShowInput(!showInput) }}>
                {showInput ? <FontAwesomeIcon icon={faXmarkCircle}/>:<FontAwesomeIcon icon={faPlusCircle} />}
            </div>
            <div className='market-mega-container'>
                <Navbar />
                {showInput && <ProductInputModal setShow={setShowInput} />}
                <div className="market-container">

                    <div className="dropdown-container">
                        Filters
                        <Select options={options} style={dropdownStyles} searchable={false} color="#314e2e" />
                    </div>
                    <div className="cards-container">
                        {
                            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((r) => {
                                return (<Card />)
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default MarketPage