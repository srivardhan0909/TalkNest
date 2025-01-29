import React from 'react'

function GenderCheckbox({ onCheckboxChange, selectedGender }) {
  return (
    <div className="flex items-center mb-4">
      <input
        id="Male"
        type="radio"
        value="Male"
        name="gender"
        className="mr-2"
        checked={selectedGender === 'Male'}
        onChange={() => onCheckboxChange('Male')}
      />
      <label htmlFor="male" className="text-sm text-gray-700">
        Male
      </label>
      <input
        id="Female"
        type="radio"
        value="Female"
        name="gender"
        className="ml-4 mr-2"
        checked={selectedGender === 'Female'}
        onChange={() => onCheckboxChange('Female')}
      />
      <label htmlFor="female" className="text-sm text-gray-700">
        Female
      </label>
    </div>
  )
}

export default GenderCheckbox
