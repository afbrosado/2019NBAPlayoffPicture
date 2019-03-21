import React from 'react'
export default props => {
    var style = {
        paddingTop: '50px'
    }

    return(
        <div style={style}>
            {props.children}
        </div>
    )
}