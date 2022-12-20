import React from 'react'
import TopSearchBar from '../TopSearchBar'

const UtilityTop = (props) => {
  return (
    <>
    {/* <TopSearchBar /> */}
    <div className='reportHeadingMain'>
        <div className='reportHeading'>
        <img src='/images/arrowLeft.svg' alt='arrow Left' />
            <h1>Utilities</h1>
            
        </div>
        <div className='reportAppointUrl'>
           <div>
            <p>Utilities /
                <span> {props.name}</span>
                </p>
                <input type='text' 
                style={{display:props.showInput}}
                placeholder={props.placeholder}
                onChange={props.onChange}
                
                />
                </div>
                <button style={{display:props.show}} className='btnClass' onClick={props.onClick}>{props.BtnName}</button>
        </div>
        
        
        
    </div>
    </>
  )
}

export default UtilityTop