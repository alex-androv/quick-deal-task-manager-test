import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
    state: () => ({
        tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    }),
    actions: {
          delTask(taskId) {
            this.tasks = this.tasks.filter(task => task.id !== taskId);
            this.updateLocalStorage();
          },
          togComplete(taskId) {
            const task = this.tasks.find(task => task.id == taskId);
            task.isComplete = !task.isComplete;
            this.updateLocalStorage();   
          },
          addTask(todo) {
            const maxId = this.tasks.reduce((max, task) => task.id > max ? task.id : max, 0);
            const newTask = {
                id: maxId + 1,
                todo,
                isComplete: false,
            }
            this.tasks.push(newTask);
            this.updateLocalStorage();
          },
          updateTask(payload) {
            const task = this.tasks.find(t => t.id === payload.id);
            if (task) {
              task.todo = payload.todo;
            };
            this.updateLocalStorage();
          },
          updateLocalStorage() {
            localStorage.setItem('tasks', JSON.stringify(this.tasks));
          },

    }
});