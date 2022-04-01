import React from 'react'

export default function RadioButton({ className, label, ...rest }: any) {
    return (
        <div className={`${className}`}>
            <input className="form-check-input" type="radio"  {...rest} />
            <label className="form-check-label" >{label}</label>
        </div>
    )
}
