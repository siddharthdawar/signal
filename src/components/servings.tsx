import React from 'react';
import './servings.css';
import {useSelector} from 'react-redux';
import {sortItems} from '../utils';
import {ServingsItem} from './servings-item';

export const Servings: React.FC = () => {
    const directionalStatements = useSelector((state: State) => state.directionalStatements);
    const servings = useSelector((state: State) => state.dataToDisplay?.servings);

    if (!servings) {
        return null;
    }

    const sortedItems = sortItems(directionalStatements);

    return (
        <div className='servings'>
            <div className='serving-items first-group'>
                <div className='serving-item'><ServingsItem fgid='gr' heading='Grains' list={sortedItems.gr} servings={servings}/></div>
                <div className='serving-item'><ServingsItem fgid='me' heading='Meat and Alternatives' list={sortedItems.me} servings={servings}/></div>
            </div>
            <div className='serving-items'>
                <div className='serving-item'><ServingsItem fgid='mi' heading='Milk and Alternatives' list={sortedItems.mi} servings={servings}/></div>
                <div className='serving-item'><ServingsItem fgid='vf' heading='Vegetables and Fruit' list={sortedItems.vf} servings={servings}/></div>
            </div>
        </div>
    )
};
