<template>
  <div class="col-md-8">
    <h3 style="margin-left: 11em;font-weight: bold;">{{ title }}</h3>
      <ul style="padding-left:33em">
        <li v-for="(task, index) in taskList"
            :key="index">
          {{ task.name }} - {{ task.done ? 'Completado' : 'Pendiente' }}
          <button class="waves-effect waves-light btn blue" style=" padding: 2px 10px;margin-left: 3em;" v-if="!task.done" type="button" @click="toggleTasks(task)">Completar</button>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    taskList: {
      type: Array,
      required: true
    }
  },
  methods: {
    toggleTasks (task) {
      this.$emit('completar', task)
    }
  }
}
</script>