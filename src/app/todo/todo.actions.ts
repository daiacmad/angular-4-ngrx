import { Action } from '@ngrx/store';

export class TodoActions {
    static ADD = 'ADD';
    static DELETE = 'DELETE';

    addTodo(todo:any){
        return {
            type: TodoActions.ADD,
            payload:todo
        }
    }
}
