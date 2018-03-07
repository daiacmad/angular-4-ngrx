import { Action } from '@ngrx/store';

export class TodoActions {
    static ADD = 'ADD';
    static DELETE = 'DELETE';
    static UPDATE = 'UPDATE';

    addTodo(todo:any){
        return {
            type: TodoActions.ADD,
            payload:todo
        }
    }

    updateStatus(id:any){
        return {
            type: TodoActions.UPDATE,
            payload:id
        }
    }

    deleteTodo(id:any){
        return {
            type: TodoActions.DELETE,
            payload:id
        }
    }
}
