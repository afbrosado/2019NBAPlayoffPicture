import React from 'react'
export default props => {
    var style = {
        paddingTop: '10px',
        paddingBottom: '10px',
    }

    return(
        <div style={style}>
            {props.children}
        </div>
    )
}