import  React from 'react'

export default props => {
    if(props.team) {
        if(props.conf === 'east')
            return (
                <div className='cell'>
                    {props.team}
                    <img src={props.pic+'.png'} alt={props.alt} className='logos'/>
                    {props.record}
                </div>
            )
        else
            return(
                <div className='cell'>
                    {props.record}
                    <img src={props.pic+'.png'} alt={props.alt} className='logos'/>
                    {props.team}
                </div>
            )
    }

    return (
        <div className='cell' id='empty'>
            .
        </div>
    )
}