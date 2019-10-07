<template>
  <li>
    <!-- View before editing -->
    <div v-show="!isEditing">
      <span>{{ todo.text }}</span>
    </div>
    <!-- View in editing -->
    <div v-show="isEditing">
      <input v-show="isEditing" v-model="todo.text">
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
  </li>
</template>

<script>

export default {
  props: ['todo'],
  data() {
    return {
      isEditing: false,
    };
  },
  methods: {
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    }
  },
};
</script>