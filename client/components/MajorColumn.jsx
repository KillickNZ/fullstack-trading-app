import React from 'react'

import SelectedDisplay from './SelectedDisplay'

function MajorColumn(props) {
    return (
        <div className="majorColumn">
            <SelectedDisplay activeCoin={props.activeCoin} />
            <SelectedDisplay activeCoin={props.activeCoin} />
        </div>
    )
}

export default MajorColumn
