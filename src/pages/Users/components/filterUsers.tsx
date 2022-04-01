import React from 'react'
import RadioButton from '../../../components/radioButton'
import { genderType } from '../../../core';

type IProps = {
  onChangeFilter: any; filterBy: string;
};
export function FilterUsers(props: IProps) {
  const { onChangeFilter, filterBy } = props;
  return (
    <>
      <label className='me-3'>Filter by:</label>
      <div onChange={onChangeFilter}>
        <RadioButton className="form-check form-check-inline" id="inlineCheckbox1" value={genderType.All} label="All" checked={filterBy === genderType.All} />
        <RadioButton className="form-check form-check-inline" id="inlineCheckbox1" value={genderType.Male} label="Male" checked={filterBy === genderType.Male} />
        <RadioButton className="form-check form-check-inline" id="inlineCheckbox1" value={genderType.Female} label="Female" checked={filterBy === genderType.Female} />

      </div>
    </>
  )
}
