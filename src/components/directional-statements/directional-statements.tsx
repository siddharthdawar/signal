import React from 'react';
import {useSelector} from 'react-redux';
import './directional-statements.css'
import {StatementList} from './statement-list';

export const DirectionalStatements: React.FC = () => {
    const directionalStatements = useSelector((state: any) => state.directionalStatements);

    return (
        <div className="directional-statements">
            <div className="statements-group">
                <StatementList heading="Grains" list={directionalStatements.gr}/>
                <StatementList heading="Meat and Alternatives" list={directionalStatements.me}/>
            </div>
            <div>
                <StatementList heading="Milk and Alternatives" list={directionalStatements.mi}/>
                <StatementList heading="Vegetables and Fruit" list={directionalStatements.vf}/>
            </div>
        </div>
    )
}
