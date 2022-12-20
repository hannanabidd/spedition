import React,{useState} from 'react'

const Filters = () => {
  const resetBtn = {
    display:"flex",
    alignItems:'center',
    justifyContent:'center',
    width:'100px',
    height:'35px'
  }
  const [fourthActive,setFourthActive] = useState(true)
const [firstActive,setFirstActive] = useState(false)
const [secondActive,setSecondActive] = useState(false)
const [thirdActive, setThirdActive] = useState(false)
  return (
    <div className='dashBoardFIlters'>
        <h4>Filters by Week </h4>
        <div className='allFilters'>
            <button className={fourthActive ? 'activeFilter btnFilter' : 'btnFilter'}
            onClick={()=>{
              setFirstActive(false)
              setFourthActive(true)
              setThirdActive(false)
              setSecondActive(false)
            }}
            >4th Week</button>
            <button className={thirdActive ? 'activeFilter btnFilter' : 'btnFilter'}
            
            onClick={()=>{
              setFirstActive(false)
              setFourthActive(false)
              setThirdActive(true)
              setSecondActive(false)
            }}
            
            >3rd Week</button>
            <button className={secondActive ? 'activeFilter btnFilter' : 'btnFilter'}
            onClick={()=>{
              setFirstActive(false)
              setFourthActive(false)
              setThirdActive(false)
              setSecondActive(true)
            }}
            
            >2nd Week</button>
            <button className={firstActive ? 'activeFilter btnFilter' : 'btnFilter'}
            onClick={()=>{
              setFirstActive(true)
              setFourthActive(false)
              setThirdActive(false)
              setSecondActive(false)
            }}
            
            
            
            >1st Week</button>
            <p>of</p>
            <select className='optionsFilters'>
                <option>January</option>
                <option>Feburary</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
            </select>
            <div className='resetAll' style={resetBtn}>
            <img src='/images/resetIcon.svg' alt='Reset' />
            <button >
              
              Reset all</button>
            </div>
           
             </div>
    </div>
  )
}

export default Filters