<template>
<div class="section">
  <li>
    <!-- View before editing -->
    <div v-show="!isEditing">
      <span ><h3>{{ todo.text }}</h3></span>
    </div>
    <!-- View in editing -->
    <div class="button newTask" v-show="isEditing">
      <input class="inputfield" v-model="todo.text">
    </div>
    <!-- Action buttons -->
    <button class="button remove" @click="$emit('remove', todo.id)">
      X
    </button>
    <button class="button edit" v-on:click="showForm" v-show="!isEditing">
      Edit
    </button>
    <button class="button complete" v-on:click="hideForm" v-show="isEditing">
      Complete
    </button>
    <ul>
      <SubtaskItem
				v-for="subtask in todo.tasks"
				:key="subtask.id"
				:subtask="subtask"
        @complete="completeToDo"
      >
      </SubtaskItem>
    </ul>
  </li>
  </div>
</template>

<script>
import SubtaskItem from './SubtaskItem.vue'


export default {
  components: {
		SubtaskItem
	},
  props: ['todo'],
  data() {
    return {
      isEditing: false,
    }
  },
  methods: {
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
    completeToDo(subtaskitem) {
        if(subtaskitem.status === "incomplete") {
          let new_status = subtaskitem.status = "overachieved";
          return new_status;
        }
        else if(subtaskitem.status === "unachieved") {
          let new_status = subtaskitem.status = "achieved";
          return new_status;
        }
        else if(subtaskitem.status === "achieved") {
          let new_status = subtaskitem.status = "unachieved";
          return new_status;
        }
        else {
          let new_status = subtaskitem.status = "incomplete";
          return new_status;
        }
    }
  },
};
</script>