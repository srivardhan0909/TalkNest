import React from 'react'

function GenderCheckbox() {
  return (
    <div className="flex items-center mb-4">
      <input id="male" type="radio" value="male" name="gender" className="mr-2" />
      <label htmlFor="male" className="text-sm text-gray-700">
        Male
      </label>
      <input id="female" type="radio" value="female" name="gender" className="ml-4 mr-2" />
      <label htmlFor="female" className="text-sm text-gray-700">
        Female
      </label>
    </div>
  )
}

export default GenderCheckbox

