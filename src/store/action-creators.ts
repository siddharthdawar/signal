import {actionTypes} from './action-types';
import {fetchDirectionalStatements, fetchFoodGroups, fetchFoods, fetchServingsPerDay} from '../repo';
import {Dispatch} from 'react';

export const getDirectionalStatements = () =>
    async (dispatch: Dispatch<any>) => {
        try {
            const directionalStatements = await fetchDirectionalStatements();

            dispatch({
                directionalStatements,
                type: actionTypes.UPDATE_DIRECTIONAL_STATEMENTS
            });
        } catch (e) {
            console.log(e);
        }
    };

export const getFoodGroups = () =>
    async (dispatch: Dispatch<any>) => {
        try {
            const foodGroups = await fetchFoodGroups();

            dispatch({
                foodGroups,
                type: actionTypes.UPDATE_FOOD_GROUPS
            });
        } catch (e) {
            console.log(e);
        }
    };

export const getServingsPerDay = () =>
    async (dispatch: Dispatch<any>) => {
        try {
            const servingsPerDay = await fetchServingsPerDay();

            dispatch({
                servingsPerDay,
                type: actionTypes.UPDATE_SERVINGS_PER_DAY
            });
        } catch (e) {
            console.log(e);
        }
    };

export const getFoods = () =>
    async (dispatch: Dispatch<any>) => {
        try {
            const foods = await fetchFoods();

            dispatch({
                foods,
                type: actionTypes.UPDATE_FOODS
            });
        } catch (e) {
            console.log(e);
        }
    };

export const updateGender = (gender: string) => ({
    gender,
    type: actionTypes.UPDATE_GENDER
});

export const updateAge = (age: string) => ({
    age,
    type: actionTypes.UPDATE_AGE
});
