<template>
    <div class="border">
        <h1 class="border border-bottom">TODO</h1>
        <div>
            <TodoList v-for="(todo, index) in todos" :key="index" :data="todo" ></TodoList>
        </div>
    </div>
    <div  class="">
        <Todoform >

        </Todoform>
    </div>
    <div class="d-flex justify-content-evenly">
            <h4>Completed: {{ completedTodo }}</h4>
            <h4>Pending: {{ pendingTodo }}</h4>
        </div>
</template>
<script >

import TodoList from './TodoList.vue'
import Todoform from './Todoform.vue'

export default {
    name: 'Todo',
    components: {
        TodoList,
        Todoform,
    },
    data() {
        return {

        }
    },
    computed: {
        todos() {
            return this.$store.state.todos
        },
        completedTodo(){
            return this.$store.getters.completedTodo;
        },
        pendingTodo(){
            return this.$store.getters.pendingTodo;
        }
    },


}
</script>
<style scoped>

</style>