<template>
    <div class="d-flex my-2 justify-content-between">
        <h3 class="my-auto ms-3">
            <span :class="{ completed: data.completed }"> {{ data.title }} </span>
        </h3>
        <div class="d-flex justify-content-evenly sideOflist">
            <input type="checkbox" class="checkbox" @click="todoCompleted">
            <button @click="deleteTodo" class="btn btn-danger" style="padding: 2px 6px;">
                <i class="bi bi-trash3"></i>
            </button>
        </div>
        

    </div>
</template>
<script>
export default {
    name: 'TodoList',
    props: {
        data: Object
    },
    methods: {
        deleteTodo() {
            this.$store.dispatch('deleteTodo', this.data);
        },
        todoCompleted() {
            this.$store.dispatch('todoCompleted', this.data);
        }
    }
}


</script>
<style>
.completed {
    text-decoration: line-through;
    
}
.sideOflist{
    width: 100px;
}
@media (max-width: 480px){
    .sideOflist{
    width: 70px;
}
}
</style>