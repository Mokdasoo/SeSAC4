const WRITE = 'DIARY/WRITE' as const;
const DELETE = 'DIARY/DELETE' as const;


type diaryState = {
    id: number;
    date: string;
    title: string;
    content: string;
}[];
const initState:diaryState = [];

export const writeDiary = (newDate: object) => ({
    type: WRITE,
    payload: newDate
});
export const deleteDiary = (id: number) => ({
    type: DELETE,
    payload: id
});

type diaryAction = ReturnType<typeof writeDiary> | ReturnType<typeof deleteDiary>



const diaryReducer = (state:diaryState = initState, action: diaryAction) => {

    switch (action.type) {
        case WRITE:
            return [...state, action.payload ];
        case DELETE:
            return state.filter((diary) => diary.id != action.payload );
        default:
            return state;
    }
}
export default diaryReducer;