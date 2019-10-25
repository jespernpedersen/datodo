<template>
	<div id="app">
		<img src="img/do-long.svg" alt="Datodo logo" class="logo">  
		<div id="panels">
			<CategoryList/>
			
			<div id="task-panel">	
			<h1>{{ $route.params.category }}</h1>
			<TodoList/>
			</div>
		</div>
	</div>
</template>

<script>

import CategoryList from '../components/CategoryList.vue'
import TodoList from '../components/TodoList.vue'

export default {
	components: {
		CategoryList, TodoList
	}
}
</script>


<style lang="scss">

@import '../style.scss';
</style>