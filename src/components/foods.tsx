import React from 'react';
import {useSelector} from 'react-redux';
import './foods.css';

type FoodsProps = {
    type: Fgid;
};

export const Foods: React.FC<FoodsProps> = (props) => {
    const foods = useSelector((state: State) => state.foods);

    return (
        <table>
            <thead><tr><th>Serving Size</th><th>Food</th></tr></thead>
            <tbody>
                {foods[props.type].map((item, index) => {
                    if (item.fgid) {
                        return (<tr key={index}><td>{item.srvg_sz}</td><td>{item.food}</td></tr>)
                    }

                    return null;
                })}
            </tbody>
        </table>
    )
};
