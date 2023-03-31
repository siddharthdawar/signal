import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import './app.css';
import {DirectionalStatements} from './components/directional-statements/directional-statements';
import {getDirectionalStatements} from './store/action-creators';

export const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getDirectionalStatements()(dispatch);
    }, [dispatch]);

    return (
        <div className="app">
            <header>Food Guide</header>
            <DirectionalStatements/>
        </div>
    );
}
