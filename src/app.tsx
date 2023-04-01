import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './app.css';
import {
    getDirectionalStatements,
    getFoodGroups, getFoods,
    getServingsPerDay, updateAge,
    updateGender
} from './store/action-creators';
import {Dropdown} from './components/dropdown';
import {Servings} from './components/servings';

export const App = () => {
    const dispatch = useDispatch();
    const ageOptions = useSelector((state: State) => state.ageOptions);
    const age = useSelector((state: State) => state.age);
    const genderOptions = useSelector((state: State) => state.genderOptions);
    const gender = useSelector((state: State) => state.gender);

    useEffect(() => {
        getDirectionalStatements()(dispatch);
        getFoodGroups()(dispatch);
        getServingsPerDay()(dispatch);
        getFoods()(dispatch);
    }, [dispatch]);

    return (
        <div className="app">
            <header className="header">Food Guide</header>
            <p>Select your gender and age below to see healthy menu options and suggested serving sizes:</p>
            <div className='dropdowns'>
                <Dropdown
                    className='gender-dropdown'
                    label="Gender"
                    onChange={(gender) => {
                        dispatch(updateGender(gender));
                        dispatch(updateAge('placeholder'))
                    }}
                    options={genderOptions}
                    value={gender}
                />
                <Dropdown
                    disabled={gender === 'placeholder'}
                    label="Age"
                    onChange={(age) => {
                        dispatch(updateAge(age))
                    }}
                    options={ageOptions}
                    value={age}
                />
            </div>
            {age !== 'placeholder' && <Servings/>}
        </div>
    );
}
