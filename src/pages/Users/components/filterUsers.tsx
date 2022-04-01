import React from 'react'
import RadioButton from '../../../components/radioButton'

export function FilterUsers() {
  return (
    <>
      <label className='me-3'>Filter by:</label>
      <RadioButton className="form-check form-check-inline" id="inlineCheckbox1" value="All" label="All" />
      <RadioButton className="form-check form-check-inline" id="inlineCheckbox1" value="Male" label="Male" />
      <RadioButton className="form-check form-check-inline" id="inlineCheckbox1" value="Female" label="Female" />
    </>
  )
}
