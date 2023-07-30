'use client'
import { makeObservable, observable, action } from 'mobx';

class TaskStore {
  tasks = [
    { id: 1, tarefa: 'Wake up!' },
    { id: 2, tarefa: 'Daily workout' },
    { id: 3, tarefa: 'Briefing with Lokanaka' },
    { id: 4, tarefa: 'Pitching with John' },
    { id: 5, tarefa: 'Design Landing Page' },
  ];

  constructor() {
    makeObservable(this, {
      tasks: observable,
      addTask: action,
      deleteTask: action,
      editTask: action,
    });
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(taskId) {
    this.tasks = this.tasks.filter((task) => task.id !== taskId);
  }

  editTask(editedTarefa) {
    const index = this.tasks.findIndex((task) => task.id === editedTarefa.idTask);
    if (index !== -1) {
      this.tasks[index] = { ...this.tasks[index], tarefa: editedTarefa.tarefa };
    }
  }
}

const store = new TaskStore();
export default store;