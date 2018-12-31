import { COOKIE_CLICK } from '../types';

export const cookie_click = (state = {}) => {
    const clicks = (state.clicks || 0) + 1;

    return {
        ...state,
        clicks
    }
}

export default (state = {}, action) => {
    switch (action.type) {
        case COOKIE_CLICK:
            return cookie_click(state)

        default:
            return state
    }
}