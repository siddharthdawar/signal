import React from 'react';
import './family-members-dropdown.css';

type DropdownProps = {
    onChange: (value: string) => void;
    options: Individual[];
    value: string;
};

export const FamilyMembersDropdown: React.FC<DropdownProps> = (props) => (
    <div className='family-member-dropdown'>
        <label className="label">Select a family member to see their food guide</label>
        <select
            className="family-select"
            onChange={(e) => {
                props.onChange(e.target.value)
            }}
            value={props.value}
        >
            <option value="placeholder">{}</option>
            {props.options.map((item: Individual) => (
                <option key={item.id} value={item.id}>{item.name}</option>
            ))}
        </select>
    </div>
);
