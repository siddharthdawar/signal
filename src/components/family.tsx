import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './family.css';
import {addMember, removeMember} from '../store/action-creators';
import {Dropdown} from './dropdown';
import {FamilyMembersDropdown} from './family-members-dropdown';
import {Servings} from './servings';

export const Family = () => {
    const dispatch = useDispatch();
    const ageOptions = useSelector((state: State) => state.ageOptions);
    const genderOptions = useSelector((state: State) => state.genderOptions);
    const family = useSelector((state: State) => state.family);

    const [gender, setGender] = useState('placeholder');
    const [age, setAge] = useState('placeholder');
    const [name, setName] = useState('');
    const [selectedMember, setSelectedMember] = useState<Individual>();

    return (
        <div>
            <p>Add your family members:</p>
            <div className="dropdowns">
                <Dropdown
                    className="gender-dropdown"
                    label="Gender"
                    onChange={(gender: string) => {
                        setGender(gender);
                    }}
                    options={genderOptions}
                    value={gender}
                />
                <Dropdown
                    className="age-dropdown"
                    label="Age"
                    onChange={(age: string) => {
                        setAge(age);
                    }}
                    options={ageOptions}
                    value={age}
                />
                <div className="input">
                    <label className="label">Name</label>
                    <input
                        className="name-input"
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                        type="text"
                        value={name}
                    />
                </div>
                <button
                    disabled={gender === 'placeholder' || age === 'placeholder' || !name}
                    onClick={() => {
                        if (name) {
                            dispatch(addMember(age, gender, name));
                            setGender('placeholder');
                            setAge('placeholder');
                            setName('');
                        }
                    }}
                >
                    Add Member
                </button>
            </div>
            {family.length > 0 &&
                <div>
                    <FamilyMembersDropdown
                        onChange={(id) => {
                            const selectedMember = family.find((item) => item.id === id);

                            setSelectedMember(selectedMember);
                        }}
                        options={family}
                        value={selectedMember?.id || ''}
                    />
                    {selectedMember?.id && selectedMember.dataToDisplay &&
                        <div>
                            <div className='family-member-details'>
                                <div>Food guide for: {selectedMember.name}, {selectedMember.age}, {selectedMember.gender}</div>
                                <button
                                    className='remove-member-button'
                                    onClick={() => {
                                        dispatch(removeMember(selectedMember.id));
                                        setSelectedMember(undefined);
                                    }}
                                >
                                    Remove member from list
                                </button>
                            </div>
                            <Servings servings={selectedMember.dataToDisplay.servings}/>
                        </div>
                    }
                </div>
            }

        </div>
    )
};
