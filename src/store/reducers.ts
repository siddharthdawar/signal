import {actionTypes} from './action-types';

const initialState = {
    directionalStatements: {
        gr: [],
        me: [],
        mi: [],
        vf: []
    }
};

const reducer = (state: State = initialState, action: any) => {
    switch (action.type) {
        case actionTypes.UPDATE_DIRECTIONAL_STATEMENTS:
            const {sortedDirectionalStatements} = action;

            return {
                ...state,
                directionalStatements: {
                    gr: sortedDirectionalStatements.gr,
                    me: sortedDirectionalStatements.me,
                    mi: sortedDirectionalStatements.mi,
                    vf: sortedDirectionalStatements.vf
                }
            }
    }

    return state;
}

export default reducer;
