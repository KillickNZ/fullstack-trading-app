import React, { useState } from 'react'
import ItemCard from './ItemCard'

import { connect } from 'react-redux'



function ItemDisplay(props) {
    const [display, setDisplay] = useState('crypto')

    function renderCryptos(props){
        return  props.data.map((card, i) => {
        return (
            <ItemCard key={i} activeCoin={props.activeCoin} clickHandler={props.clickHandler} coin={card} />
            )
        })       
    }

    function renderStonks(props) {
        return <h2>Stonky</h2>
    }

    return (
        <div className="minorColumn">
            <div className="optionsContainer">
                <div>
                    <ul className='display-nav'>
                        <li><button className="button">Stonks</button></li>
                        <li><button className="button">CrypYos</button></li>
                    </ul>
                </div>
                <div>
                    <span className="options__text">Sort by</span>
                    <button className="button" onClick={() => props.filterChanger(0)}>Market Cap</button>
                    {/* <button className="button" onClick={() => props.filterChanger(1)}>Price</button> */}
                    <button className="button" onClick={() => props.filterChanger(2)}>Rating</button>
                </div>

            </div>
            {(display == 'crypto') ? renderCryptos(props) : renderStonks(props)}
           
        </div>
    )
}


const mapStateToProps = (globalState) => {
    return {

    }
}

export default connect(mapStateToProps)(ItemDisplay)
