const initialstate = {
    money: 0,
}
const reducer = (state = initialstate, action: { type: any; payload: number; }) => {
    switch (action.type) {
        case 'ADD_MONEY':
            const addmoney = state.money + action.payload;
            return {addmoney};
        case 'USE_MONEY':
            const usemoney = state.money - action.payload;
            return {usemoney};
        default:
            break;
    }
    return state;
}
export default reducer;
