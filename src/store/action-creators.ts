import {actionTypes} from './action-types';
import {fetchDirectionalStatements} from '../repo';
import {sortDirectionalStatements} from '../utils';

export const getDirectionalStatements = () =>
    async (dispatch: any) => {
        try {
            const directionalStatements: any = await fetchDirectionalStatements();

            dispatch({
                sortedDirectionalStatements: sortDirectionalStatements(directionalStatements),
                type: actionTypes.UPDATE_DIRECTIONAL_STATEMENTS
            });
        } catch (e) {
            console.log(e);
        }
    };
