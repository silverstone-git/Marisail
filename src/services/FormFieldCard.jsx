import React, { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list'
import "rsuite/dist/rsuite.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PhotoUpload from "./PhotoUpload";
import VideoUploader from './VideoUpload';


// date picker module
function DatePickerModule() {
    
    const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
}

// country selector module
function CountrySelector() {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
  
    const changeHandler = value => {
      setValue(value)
    }
  
    return <Select placeholder={'Select Country...'} options={options} value={value} onChange={changeHandler} />
}

export default function FormFieldCard() {

    return (
        <div className='mt-2 col-md-6'>
            <PhotoUpload />
            <VideoUploader />
            <div className="mt-2 w-50 pr-5">
                {CountrySelector()}
            </div>
            <div className="mt-2 w-50 pr-5">
                {DatePickerModule()}
            </div>
        </div>
    )
}