import React from 'react'


const PateintTop = (props) => {
  return (
    <>
    {/* <TopSearchBar /> */}
    <div className='patientTopHeading'>
              <h1>Patients</h1>
      <div className='addpatientsUrl'>
        <p>
          Patients / 
          <span>{props.address}</span>
        </p>
        <div className='printPlusIcon' style={{display:props.show}}>
          <img src='/images/printBlue.svg' alt='print' />
          <h5>Print</h5>
        </div>
        </div>
    </div>
    </>
  )
}

export default PateintTop