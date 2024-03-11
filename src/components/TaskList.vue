<script setup>
import TaskListItem from '@/components/TaskListItem.vue';
import { useTaskStore } from '@/stores/tasks.js';
import { computed } from 'vue';
    const store = useTaskStore();
    const tasks = computed(()=>store.tasks);

    const deleteTask = (taskId) => {
      store.delTask(taskId);
    };
    const toggleComplete = (taskId) => {
      store.togComplete(taskId);
    };
    const editTask = (payload) => {
      store.updateTask(payload);
    }

</script>

<template>
  <div class="task-list" >
    <task-list-item v-for="task in tasks" :key="task.id" 
    :task="task" @delete-task="deleteTask" @toggle-complete="toggleComplete" @edit-task="editTask"/>
  </div>
</template>

<style scoped>
.task-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  width: 50vw;
  margin: 0 auto;
}
</style>