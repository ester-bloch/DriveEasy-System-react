import { produce } from 'immer';
import { userState } from './userState';

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            state.current = action.payload;
            break;
        default:
            break;
    }
}, userState)

export default reducer