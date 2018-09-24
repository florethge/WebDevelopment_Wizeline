<template>
  <div>
    <h1 style="margin-left: 17em;color: midnightblue;font-weight: bold;">My ToDo App</h1>
    <form @submit.prevent="addTask">
      <input v-model="newTaskName" type="text" style="background-color: navajowhite;">
      <input type="submit" class="waves-effect waves-light btn white" style="margin-left:37em;" value="Agregar Tarea">
    </form>

    <tasks-list
      :title="'Pendientes'"
      :task-list="tasksPending"
      @completar="toggleTasks"/>
    <hr>

    <tasks-list
      :title="'Completados'"
      :task-list="tasksComplete"
      @completar="toggleTasks"/>
  </div>
</template>

<script>
import TasksList from './components/TasksList'
import Firebase from 'firebase'
let config = {
    apiKey: "AIzaSyACiqbwllb8b2dQB8Fn3wkpe-9y1tCuGIE",
    authDomain: "mytodoapp-df8e5.firebaseapp.com",
    databaseURL: "https://mytodoapp-df8e5.firebaseio.com",
    projectId: "mytodoapp-df8e5",
    storageBucket: "mytodoapp-df8e5.appspot.com",
    messagingSenderId: "980667116862"
  };
  let app = Firebase.initializeApp(config)
  let db = app.database()
  let TaskVar = db.ref('task')
export default {
  components: {
    TasksList
    
  },
  firebase: {
    task: TaskVar
  },
  data () {
    return {
      newTaskName: '',
      tasks: [
        {
          name: 'Tarea 1',
          done: false
        },
        {
          name: 'Tarea 2',
          done: false
        },
        {
          name: 'Tarea 2',
          done: false
        }
      ]
    }
  },
  methods: {
    toggleTasks (task) {
      task.done = !task.done
    },
    addTask () {
      if (!this.newTaskName) return
      TaskVar.push({ name: this.newTaskName, done: false })
      this.newTaskName = ''
    }
  },
  computed: {
    tasksPending () {
      return this.task.filter(task => !task.done)
    },
    tasksComplete () {
      return this.task.filter(task => task.done)
    }
  }
}

var names = [];
localStorage.setItem("names", JSON.stringify(names));
//...
var storedNames = JSON.parse(localStorage.getItem("names"));
</script>