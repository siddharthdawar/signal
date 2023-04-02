import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateAge, updateGender} from '../store/action-creators';
import {Dropdown} from './dropdown';
import {Servings} from './servings';

export const Individual = () => {
    const dispatch = useDispatch();
    const ageOptions = useSelector((state: State) => state.ageOptions);
    const age = useSelector((state: State) => state.age);
    const genderOptions = useSelector((state: State) => state.genderOptions);
    const gender = useSelector((state: State) => state.gender);
    const dataToDisplay = useSelector((state: State) => state.dataToDisplay);

    return (
        <div>
            <p>Select your gender and age below to see healthy menu options and suggested serving sizes:</p>
            <div className="dropdowns">
                <Dropdown
                    className="gender-dropdown"
                    label="Gender"
                    onChange={(gender: string) => {
                        dispatch(updateGender(gender));
                        dispatch(updateAge('placeholder'))
                    }}
                    options={genderOptions}
                    value={gender}
                />
                <Dropdown
                    disabled={gender === 'placeholder'}
                    label="Age"
                    onChange={(age: string) => {
                        dispatch(updateAge(age))
                    }}
                    options={ageOptions}
                    value={age}
                />
            </div>
            {age !== 'placeholder' && dataToDisplay && <Servings servings={dataToDisplay.servings}/>}
        </div>
    )
};
