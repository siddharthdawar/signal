import React from 'react';
import './servings.css';
import {useSelector} from 'react-redux';
import {sortItems} from '../utils';
import {ServingsItem} from './servings-item';

type ServingsProps = {
    servings: ServingPerDay[];
};

export const Servings: React.FC<ServingsProps> = (props) => {
    const directionalStatements = useSelector((state: State) => state.directionalStatements);
    const sortedItems = sortItems(directionalStatements);

    return (
        <div className='servings'>
            <div className='serving-items first-group'>
                <ServingsItem fgid='gr' heading='Grains' list={sortedItems.gr} servings={props.servings}/>
                <ServingsItem fgid='me' heading='Meat and Alternatives' list={sortedItems.me} servings={props.servings}/>
            </div>
            <div className='serving-items'>
                <ServingsItem fgid='mi' heading='Milk and Alternatives' list={sortedItems.mi} servings={props.servings}/>
                <ServingsItem fgid='vf' heading='Vegetables and Fruit' list={sortedItems.vf} servings={props.servings}/>
            </div>
        </div>
    )
};
