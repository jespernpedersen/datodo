<template>
	<div id="app">
		<img src="img/do-long.svg" alt="Datodo logo" class="logo">  
		<TodoList/>
	</div>
</template>

<script>
import TodoList from '../components/TodoList.vue'

export default {
	components: {
		TodoList
	}
}
</script>


<style lang="scss">
@import '../variables.scss';
@import '../style.scss';
</style>