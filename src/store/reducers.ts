import {actionTypes} from './action-types';
import {getDropdownOptions, sortItems} from '../utils';

const initialState = {
    age: 'placeholder',
    ageOptions: [],
    dataToDisplay: undefined,
    directionalStatements: [],
    foodGroups: [],
    foods: {
        gr: [],
        me: [],
        mi: [],
        vf: []
    },
    gender: 'placeholder',
    genderOptions: [],
    servingsPerDay: []
};

const reducer = (state: State = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.UPDATE_DIRECTIONAL_STATEMENTS:
            return {
                ...state,
                directionalStatements: action.directionalStatements
            }
        case actionTypes.UPDATE_FOOD_GROUPS:
            return {
                ...state,
                foodGroups: action.foodGroups
            }
        case actionTypes.UPDATE_GENDER:
            return {
                ...state,
                gender: action.gender
            }
        case actionTypes.UPDATE_SERVINGS_PER_DAY:
            const {servingsPerDay} = action;
            const dropdownOptions = getDropdownOptions(servingsPerDay);

            return {
                ...state,
                ageOptions: dropdownOptions.ageOptions,
                genderOptions: dropdownOptions.genderOptions,
                servingsPerDay
            }
        case actionTypes.UPDATE_FOODS:
            return {
                ...state,
                foods: sortItems(action.foods)
            }
        case actionTypes.UPDATE_AGE:
            const servings = state.servingsPerDay.filter((item) =>
                item.gender === state.gender && item.ages === action.age
            );

            return {
                ...state,
                age: action.age,
                dataToDisplay: {
                    servings
                }
            }
    }

    return state;
};

export default reducer;
