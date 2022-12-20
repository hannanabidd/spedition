import React from 'react'
import DatePicker from '../datePicker/DatePicker'
import Checkbox from '../Checkbox'
const ApptForm1 = () => {
  return (
    <div className="outsideRef">
    <form className="outRef">
      <div className="neuroFirstRow">
        <div className="nextNeuroRef">
          <div className="neuroLableRef">
            <label>Next Ortho appt</label>
            <div className="imgeCircle">
                <img src="/images/arrowCircle.svg" alt="circular arrow"/>
                <p>
                   clear Next Neuro
                </p>
                </div>
          </div>
          <DatePicker className="iconHeightformsedit" mainClass='widthOrthoDatePicker'/>

        </div>
        <div className="neuroCheckBoxRef">
          <div> <label>Ortho PRN</label>
         <Checkbox id='orthoPRN' for='orthoPRN' />
         </div>
         
        </div>
      </div>
      <div className="neuroFirstRow">
        <div className="nextNeuroRef">
          
            <label>Orhto</label>
           
          
            <DatePicker className="iconHeightformsedit" mainClass='widthOrthoDatePicker'
            />

        </div>
        <div className="neuroCheckBoxRef">
          <div>
          <label>Surgery RX</label>
          <Checkbox id='surgery' for='surgery' />

          </div>
          <div>
          <label>Surgery Performed</label>
          <Checkbox id='surgeryPer' for='surgeryPer' />

          </div>
        </div>
      </div>
      <div className="firstEditPatientRow">
        <div>
          <label>Ortho FU1</label>
          <DatePicker className="iconHeightformsedit" />

        </div>
        <div>
          <label>Surgery Date</label>
          <DatePicker className="iconHeightformsedit" />

        </div>
      </div>
      <div className="neuroFirstRow">
        <div className="nextNeuroRef">
          
            <label>Orhto FU2</label>
           
          
            <DatePicker className="iconHeightformsedit"  mainClass='widthOrthoDatePicker'/>

        </div>
        <div className="neuroCheckBoxRef">
          <div>
          <label>Second Surgery</label>
          <Checkbox id='surgery1' for='surgery1' />

          </div>
          <div>
          <label>Surgery Performed</label>
          <Checkbox id='surgeryPer1' for='surgeryPer1' />

          </div>
        </div>
      </div>
      <div className="firstEditPatientRow">
        <div>
          <label>Ortho FU3</label>
          <DatePicker className="iconHeightformsedit" />

        </div>
        <div>
          <label>Surgery Date</label>
          <DatePicker className="iconHeightformsedit" />

        </div>
      </div>
      <div className="neuroFirstRow">
        <div className="nextNeuroRef">
          
            <label>Orhto FU4</label>
           
          
                        <DatePicker className="iconHeightformsedit"  mainClass='widthOrthoDatePicker' />


        </div>
        <div className="neuroCheckBoxRef">
          <div>
          <label>Third Surgery</label>
          <Checkbox id='surgery2' for='surgery2' />

          </div>
          <div>
          <label>Surgery Performed</label>
          <Checkbox id='surgeryPer2' for='surgeryPer2' />

          </div>
        </div>
      </div>
      <div className="firstEditPatientRow">
        <div>
          <label>Ortho FU5</label>
          <DatePicker className="iconHeightformsedit" />

        </div>
        <div>
          <label>Surgery Date</label>
          <DatePicker className="iconHeightformsedit" />

        </div>
      </div>
     
      <div className="firstEditPatientRow">
        <div>
          <label>Ortho FU7</label>
          <DatePicker className="iconHeightformsedit" />

        </div>
        <div>
          <label>Surgery Date</label>
          <DatePicker className="iconHeightformsedit" />

        </div>
      </div>
      <div className="firstEditPatientRow">
        <div>
          <label>Ortho FU8</label>
          <DatePicker className="iconHeightformsedit" />

        </div>
        <div>
          <label>Surgery Date</label>
          <DatePicker className="iconHeightformsedit" />

        </div>
      </div>
      <div className="firstEditPatientRow">
        <div>
          <label>Ortho FU9</label>
          <DatePicker className="iconHeightformsedit" />

        </div>
        <div>
          <label>Surgery Date</label>
          <DatePicker className="iconHeightformsedit" />

        </div>
      </div>
      <div className="clearLastNeuro">
        <img src='/images/arrowCircle.svg' alt='circular arrow'/>
          <h2>Clear Last ortho</h2>
        </div>
        <div className="mdBtnSave" type="button">
          <button> Update & Save</button>
        </div>
    </form>
  </div>
  )
}

export default ApptForm1