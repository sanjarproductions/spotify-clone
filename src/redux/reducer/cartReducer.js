const initialState = {
    cardProduct : []
}

const cartReducer = (state = initialState, action) => {
    switch(action.type){
        case "@ADD_TO_CARD":
            return {
                cardProduct : [...state.cardProduct, action.item],
            }
        default:
            return state
    }
}

export {cartReducer}