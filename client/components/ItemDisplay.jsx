import React from 'react'
import ItemCard from './ItemCard'

import { connect } from 'react-redux'

function ItemDisplay(props) {

    return (
        <div className="minorColumn">
            <div className="optionsContainer">
                <span className="options__text">Sort by</span>
                <button className="button" onClick={() => props.filterChanger(0)}>Market Cap</button>
                {/* <button className="button" onClick={() => props.filterChanger(1)}>Price</button> */}
                <button className="button" onClick={() => props.filterChanger(2)}>Rating</button>
            </div>
            {props.data.map((card, i) => {
                return (
                    <ItemCard key={i} activeCoin={props.activeCoin} clickHandler={props.clickHandler} coin={card} />
                )
            })}
        </div>
    )
}


const mapStateToProps = (globalState) => {
    return {

    }
  }  

export default connect(mapStateToProps)(ItemDisplay)
