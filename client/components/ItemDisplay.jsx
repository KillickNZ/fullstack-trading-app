import React, { useState } from 'react'
import ItemCard from './ItemCard'

import { connect } from 'react-redux'
import { setType } from '../actions/stockActions'



function ItemDisplay(props) {

    function renderCards(props){
        return  props.data.map((card, i) => {
        return (
            <ItemCard key={i} activeCoin={props.activeCoin} clickHandler={props.clickHandler} coin={card} />
            )
        })       
    }

    function renderStonks(props){
        return <h1>Hi</h1>
    }

    console.log('active cry:' , props.activeCryptyo);

    return (
        <div className="minorColumn">
            <div className="optionsContainer">
                <div className='toggle-container'>
                    <ul className='display-nav'>
                        <li><button type="button" className="button" onClick={() => props.dispatch(setType('stonks'))}>Stonks</button></li>
                        <li><button type="button" className="button" onClick={() => props.dispatch(setType('cryptyo'))}>CrypYos</button></li>
                    </ul>
                </div>
                <div>
                    {/* <span className="options__text">Sort by</span> */}
                    <button className="button" onClick={() => props.filterChanger(0)}>Market Cap</button>
                    <button className="button" onClick={() => props.filterChanger(2)}>Rating</button>
                </div>

            </div>
            {(props.category == 'cryptyo') ? renderCards(props) : renderStonks(props)}

{/* 
            {props[type].map(card =>{
                return type == 'stonks' 
                    ?
                    <ItemCard stockstuff='yup' />
                    :
                    <ItemCard cryptoStuff='cool' />
            })} */}
           
        </div>
    )
}


const mapStateToProps = (globalState) => {
    return {
        category: globalState.category,
        activeCryptyo: globalState.activeCryptyo
    }
}

export default connect(mapStateToProps)(ItemDisplay)
