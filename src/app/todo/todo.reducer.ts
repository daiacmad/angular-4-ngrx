import { ActionReducer } from '@ngrx/store';
import { TodoActions } from "./todo.actions";

const initialState:any =[];

export function reducer(state:any = initialState, {type , payload }: any) {
	switch (type) {
        case TodoActions.ADD:
            state = [...state,{
                id: new Date().getTime(),
                description: payload
            }]
			return state;

        case TodoActions.DELETE:
			return state - 1;

        default:
			return state;
	}
}