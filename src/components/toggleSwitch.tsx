import React from 'react'

type IProps = {
    label: string;
    onToggle: (e: any) => void;
    checked: boolean;
};

export function ToggleSwitch(props: IProps) {
    const { label, onToggle, checked } = props;
    return (
        <div className="form-check form-switch">
            <label className="form-check-label">{label} </label>
            <input
                className="form-check-input"
                type="checkbox"
                checked={checked}
                onChange={(e: any) => onToggle(e)}
            />
        </div>

    )
}
