import {actionTypes} from './action-types';
import {getDropdownOptions, sortItems} from '../utils';

const initialState = {
    age: 'placeholder',
    ageOptions: [],
    dataToDisplay: undefined,
    directionalStatements: [],
    family: [],
    foodGroups: [],
    foods: {
        gr: [],
        me: [],
        mi: [],
        vf: []
    },
    gender: 'placeholder',
    genderOptions: [],
    servingsPerDay: [],
    userType: 'placeholder'
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
        case actionTypes.UPDATE_USER_TYPE:
            return {
                ...state,
                age: 'placeholder',
                userType: action.userType,
                dataToDisplay: undefined,
                family: [],
                gender: 'placeholder'
            }
        case actionTypes.ADD_FAMILY_MEMBER:
            const memberServings = state.servingsPerDay.filter((item) =>
                item.gender === action.gender && item.ages === action.age
            );

            const newFamilyMember = {
                age: action.age,
                dataToDisplay: {
                    servings: memberServings
                },
                gender: action.gender,
                id: `${Date.now()}`,
                name: action.name
            }

            return {
                ...state,
                family: [...state.family, newFamilyMember]
            }
        case actionTypes.REMOVE_FAMILY_MEMBER:
            const newFamilyArray = state.family.filter((item) => item.id !== action.id);

            return {
                ...state,
                family: [...newFamilyArray]
            }
    }

    return state;
};

export default reducer;
