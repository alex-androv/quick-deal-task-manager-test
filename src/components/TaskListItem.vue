<script setup>
import { ref } from 'vue';

const props = defineProps({
    task: {
        type: Object,
        required: true,
    }
});

const emit = defineEmits(['delete-task', 'toggle-complete', 'edit-task']);

const isEditing = ref(false);
const editText = ref(props.task.todo);

const deleteTask = () => {
    emit('delete-task', props.task.id)
};

const toggleComplete = () => {
    emit('toggle-complete', props.task.id)
};

const enableEdit = () => {
    isEditing.value = true;
};

const saveEdit = () => {
    emit('edit-task', {id: props.task.id, todo: editText.value});
    isEditing.value = false;
};

const cancelEdit = () => {
    editText.value = props.task.todo;
    isEditing.value = false;
};
</script>

<template>
    <div>
        <div v-if="isEditing" class="edit">
            <input v-model="editText" @keyup.enter="saveEdit">
            <button @click="saveEdit">Save</button>
            <button @click="cancelEdit">Cancel</button>
        </div>
        <div v-else class="task-list-item">
            <p :class="{done: task.isComplete}"><span>{{ task.id }}</span> {{ task.todo }}</p>
            <input type="checkbox" @change="toggleComplete">
            <button @click="enableEdit">Edit</button>
            <button @click="deleteTask">Delete</button>
        </div>
    </div>
</template>

<style scoped>
.task-list-item,
.edit {
    border:1px solid #000000;
    width: 200px;
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    padding: 12px;
}
.done {
    text-decoration: line-through;
}
</style>