import { ActionReducer } from '@ngrx/store';
import { TodoActions } from "./todo.actions";

const initialState:any =[];

export function reducer(state:any = initialState, {type , payload }: any) {
	switch (type) {
        //ADD
        case TodoActions.ADD:
            state = [...state,{
                id: new Date().getTime(),
                description: payload,
                status:false
            }]
			return state;

        // DELETE
        case TodoActions.DELETE:
            state = state.filter(res =>{
                return res.id != payload;
            })
            return state;
            
        // UPDATE
        case TodoActions.UPDATE:
            state = state.map(element =>{
               if(element.id == payload){
                   element.status = !element.status;
               }
               return element;
            });
			return state;

        default:
			return state;
	}
}