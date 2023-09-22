<template>
    <div class="input-group mb-3 ">
        <input type="text" class="form-control" required
         v-model="todo" placeholder="Add New Todo" aria-label="Recipient's username"
            aria-describedby="button-addon2">
        <button class="btn btn-outline-success" style="padding: 0px 6px;" @click="addNewTodo()" type="button" id="button-addon2">
            <i class="bi bi-plus-square-fill fs-3"></i>
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            todo: '',
        }
    },
    methods: {
        addNewTodo() {
            this.$store.dispatch('addNewTodoItem', this.todo);
            this.todo = '';
        }
    }
}
</script>
<style scoped>
.addbtn:hover {
    background-color: rgb(11, 49, 36);
    color: aquamarine;
}
</style>