import  React from 'react'

export default props => {
    if(props.team) {
        if(props.conf === 'east')
            return (
                <div id='cell'>
                    {props.team}
                    <img src={props.pic+'.png'} alt={props.alt} className='logos'/>
                    {props.record}
                </div>
            )
        else
            return(
                <div id='cell'>
                    {props.record}
                    <img src={props.pic+'.png'} alt={props.alt} className='logos'/>
                    {props.team}
                </div>
            )
    }

    return (
        <div id='cell'>
            <hr/>
        </div>
    )
}