import React from 'react';

type StatementListProps = {
    heading: FoodClass;
    list: DirectionalStatement[];
}

export const StatementList: React.FC<StatementListProps> = (props) => (
    <div>
        <h5>{props.heading}:</h5>
        <ul>
            {props.list.map((item, index: number) => (
                <li key={index}>{item['directional-statement']}</li>
            ))}
        </ul>
    </div>
);
