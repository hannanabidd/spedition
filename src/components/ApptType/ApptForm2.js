import React from 'react'
import DatePicker from '../datePicker/DatePicker'
import Checkbox from '../Checkbox'

const ApptForm2 = () => {
  return (
    <div className="makeMdAppt">
      <div className="nextMdAppt">
        <div>
          <label>Next Md Appt</label>
          <DatePicker className="iconHeightforms" />

        </div>
        <div>
          <label>Next MG2 request</label>
          <DatePicker className="iconHeightforms" />

        </div>
      </div>
      <div className="MdCheckBox">
        <div>
          <label>MD PRN </label>
          <Checkbox id='phyPRN' for='phyPRN' />
        </div>
        <div>
          <label>No MG2 request </label>
          <Checkbox id='phyPRN1' for='phyPRN1' />

        </div>
      </div>
      <form className="formMd">
        <div className="MdDetailInputs">
          <div className="firstRowInputMd">
            <div>
              <label>Intial</label>
              <DatePicker className="iconHeightforms1" />

            </div>
            <div>
              <label>Internist FU5</label>
              <DatePicker className="iconHeightforms1" />

            </div>
            <div>
              <label>MG request </label>
              <DatePicker className="iconHeightforms1" />

            </div>
          </div>
          <div className="firstRowInputMd">
            <div>
              <label>Internist FU2</label>
              <DatePicker className="iconHeightforms1" />

            </div>
            <div>
              <label>Internist FU6</label>
              <DatePicker className="iconHeightforms1" />

            </div>
            <div>
              <label>MG request 2</label>
              <DatePicker className="iconHeightforms1" />

            </div>
          </div>
          <div className="firstRowInputMd">
            <div>
              <label>Internist FU3</label>
              <DatePicker className="iconHeightforms1" />

            </div>
            <div>
              <label>Internist FU6</label>
              <DatePicker className="iconHeightforms1" />

            </div>
            <div>
              <label>MG request 3</label>
              <DatePicker className="iconHeightforms1" />

            </div>
          </div>
          <div className="firstRowInputMd">
            <div>
              <label>Internist FU4</label>
              <DatePicker className="iconHeightforms1" />

            </div>
            <div>
              <label>Internist FU8</label>
              <DatePicker className="iconHeightforms1" />

            </div>
            <div>
              <label>MG request 4</label>
              <DatePicker className="iconHeightforms1" />

            </div>
          </div>
        </div>
        <div className="mdBtnSave" type="button">
            <button> Update & Save</button>
        </div>
      </form>
    </div>
  )
}

export default ApptForm2