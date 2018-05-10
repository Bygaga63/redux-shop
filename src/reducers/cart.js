const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return {
                ...state,
                // добавление объектов
                items: [
                    ...state.items,
                    action.payload
                ]
            };
        case 'REMOVE_BOOK':
            return {
                ...state,
                items: state.items.filter(value => value.id !== action.payload)
            };
        default:
            return state;
    }
}