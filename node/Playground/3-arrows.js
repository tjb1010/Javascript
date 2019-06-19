const tasks = {
  tasks: [
    {
      text: 'Grocery Shopping',
      completed: true
    },
    {
      text: 'Clean Yard',
      completed: false
    },
    {
      text: 'Film course',
      completed: false
    }
  ],
  getTasksToDo() {
    return this.tasks.filter(task => task.completed === false);
  }
};

console.log(tasks.getTasksToDo());
