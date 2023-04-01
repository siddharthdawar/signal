import React from 'react';
import {Foods} from './foods';
import {StatementList} from './statement-list';
import './servings-item.css';

type ServingsItemProps = {
    fgid: Fgid;
    heading: FoodClass;
    list: DirectionalStatement[];
    servings: ServingPerDay[];
};

export const ServingsItem: React.FC<ServingsItemProps> = (props) => (
    <div>
        <StatementList heading={props.heading} list={props.list}/>
        {props.servings.filter((item) => item.fgid === props.fgid).map((item, index: number) => (
            <div className='daily-servings' key={index}>Daily servings - {item.servings}</div>
        ))}
        <Foods type={props.fgid}/>
    </div>
);
