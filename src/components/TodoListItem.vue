
    <!-- View in editing -->
    <div v-show="isEditing">
      <input v-show="isEditing" v-model="todo.text" 
			@keydown.enter="hideForm">
    </div>
    <!-- Action buttons -->
    <button @click="$emit('remove', todo.id)">
      X
    </button>
    <button v-on:click="showForm" v-show="!isEditing">
      Edit
    </button>
    <button v-on:click="hideForm" v-show="isEditing">
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
        }
        else if(subtaskitem.status === "unachieved") {
          let new_status = subtaskitem.status = "achieved";
        }
        else if(subtaskitem.status === "achieved") {
          let new_status = subtaskitem.status = "unachieved";
        }
        else {
          let new_status = subtaskitem.status = "incomplete";
        }
    }
  },
};
</script>