<script setup>
import { ref } from 'vue';
import { useTaskStore } from '@/stores/tasks';
const newTask = ref('');
const store = useTaskStore();
const addNewTask = () => {
    if (newTask.value.trim()) {
        store.addTask(newTask.value);
        newTask.value = '';
    }
}
</script>

<template>
    <div class="new-task">
        <input type="text" placeholder="Add new task" v-model="newTask" @keyup.enter="addNewTask">
        <button @click="addNewTask">Add</button>
    </div>
</template>

<style scoped>
.new-task {
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.new-task input {
    margin-bottom: 12px;
}
</style>
