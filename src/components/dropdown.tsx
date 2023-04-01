import React from 'react';
import './dropdown.css';

type DropdownProps = {
    className?: string;
    disabled?: boolean;
    label: string;
    onChange: (value: string) => void;
    options: string[];
    value: string | undefined;
};

export const Dropdown: React.FC<DropdownProps> = (props) => {
    const className = props.className ? `dropdown ${props.className}` : 'dropdown';

    return (
        <div className={className}>
            <label className="label">{props.label}</label>
            <select
                disabled={props.disabled}
                className="select"
                onChange={(e) => {
                    props.onChange(e.target.value)
                }}
                value={props.value}
            >
                <option value='placeholder'>{}</option>
                {props.options.map((item: string, index: number) => (
                    <option key={index} value={item}>{item}</option>
                ))}
            </select>
        </div>
    )
};
