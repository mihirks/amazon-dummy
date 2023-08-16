export const initialState = {
    basket: [],
    user: null,
};

const reducer = (state, action) =>{
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket,action.item]
            };
        case 'REMOVE_FROM_BASKET':

            const idx_item =state.basket.findIndex((element) => element.id === action.item.id);
            // console.log(idx_item)
            const test_array=[...state.basket]

            test_array.splice(idx_item,1)
            return{
                ...state,
                basket : [...test_array],
            }

        case 'SET_USER':
            return{
                ...state,
                user: action.user,
            }

        case 'EMPTY_BASKET':
            return{
                ...state,
                basket:[],
            }
        default:
            return state;
    }
}

export default reducer