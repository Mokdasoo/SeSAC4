const WRITE = 'DAY/WRITE' as const;
const DELETE = 'DAY/DELETE' as const;

type dateState = {
    id: number;
    date: string;
}[];

const initState: dateState = [
    {id: 1, date: '2022-11-29'},
    {id: 2, date: '2022-11-30'},
    {id: 3, date: '2022-12-01'},
    {id: 4, date: '2022-12-02'},
    {id: 5, date: '2022-12-03'}
];

export const writeDate = (newDate: object) => ({
    type: WRITE,
    payload: newDate
});
export const deleteDate = (id: number) => ({
    type: DELETE,
    payload: id
});

type dateAction = ReturnType<typeof writeDate> | ReturnType<typeof deleteDate>

const dateReducer = (state: dateState = initState, action: dateAction) => {
    switch (action.type) {
        case WRITE:
            return [...state, action.payload ];
        case DELETE:
            return state.filter((day) => day.id != action.payload );
        default:
            return state;
    }
}
export default dateReducer;