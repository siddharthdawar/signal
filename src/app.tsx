import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './app.css';
import {
    getDirectionalStatements,
    getFoodGroups, getFoods,
    getServingsPerDay,
    updateUserType
} from './store/action-creators';
import {Dropdown} from './components/dropdown';
import {userTypeOptions} from './utils';
import {Individual} from './components/individual';
import {Family} from './components/family';

export const App = () => {
    const dispatch = useDispatch();
    const userType = useSelector((state: State) => state.userType);

    useEffect(() => {
        getDirectionalStatements()(dispatch);
        getFoodGroups()(dispatch);
        getServingsPerDay()(dispatch);
        getFoods()(dispatch);
    }, [dispatch]);

    return (
        <div className="app">
            <header className="header">Food Guide: Get started by selecting whether to get suggestions for you or for
                your family
            </header>
            <Dropdown
                label="Food Guide for"
                onChange={(userType) => {
                    dispatch(updateUserType(userType));
                }}
                options={userTypeOptions}
                value={userType}
            />
            {userType === 'Individual' && <Individual/>}
            {userType === 'Family' && <Family/>}
        </div>
    );
}
