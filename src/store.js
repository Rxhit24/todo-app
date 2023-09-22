import { createStore } from "vuex";

const store = createStore({
    state: {
        todos: [
            {
                title: 'title1',
                completed: false
            },
            {
                title: 'title2',
                completed: false
            },
            {
                title: 'title3',
                completed: false
            },
        ]
    },
    mutations: {
        newTODO( state  , todo){
            state.todos.push(
                {
                    title: todo, 
                    completed: false
                });
        },
        removeTODO( state, todo){
            let index = state.todos.indexOf(todo);
            state.todos.splice(index,1);
        },
        toggleTODO( state, todo){
            // let index = state.todos.indexOf(todo);
            // state.todos[index] = {
            //     title : todo.title,
            //     completed: true
            // }
            todo.completed = !todo.completed;
        }
    },
    actions: {
        addNewTodoItem({commit}, todo){
            commit('newTODO', todo);
        },
        deleteTodo({commit}, todo){
            commit('removeTODO', todo);
        },
        todoCompleted({commit}, todo){
            commit('toggleTODO', todo);
        }
    },
    getters: {
        completedTodo(state){
            return state.todos.filter((todo) => {
               return todo.completed === true;
            }).length;
        },
        pendingTodo(state){
            return state.todos.filter((todo) => {
               return todo.completed === false;
            }).length;
        }
    }
})

export default store;