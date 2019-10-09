<template>
	<div>
		<BaseInputText 
			v-model="newTodoText"
			placeholder="New todo"
			@keydown.enter="addTodo"
		/>
		<ul v-if="todos.length">
			<TodoListItem
				v-for="todo in todos"
				:key="todo.id"
				:todo="todo"
				@remove="removeTodo"
			>
			</TodoListItem>
		</ul>
		<p v-else>
			Nothing left in the list. Add a new todo in the input above.
		</p>
	</div>
</template>

<script>
import BaseInputText from './BaseInputText.vue'
import TodoListItem from './TodoListItem.vue'
import { db } from '../firebase/db.js'

let nextTodoId = 1

export default {
	components: {
		BaseInputText, TodoListItem
	},
  data () {
    return {
		user_id: '1',
		newTodoText: '',
		todos: []
    }
  },
	methods: {
			async addTodo () {
				const trimmedText = this.newTodoText.trim()
				if (trimmedText) {
					let task_id = nextTodoId++;
					let task = {
						id: task_id,
						text: trimmedText,
						tasks: 
							[ 
								{
									id: 1,
									status: 'unachieved'
								},
								{
									id: 2,
									status: 'unachieved'
								},
								{
									id: 3,
									status: 'unachieved'
								},
								{
									id: 4,
									status: 'incomplete'
								},
								{
									id: 5,
									status: 'incomplete'
								}
							]
					}
					this.todos.push({
						task
					})
					this.newTodoText = ''

					await db.collection('todo').add({
						task
					})


					this.todos.push({
						id: task_id,
						text: trimmedText,
						tasks: 
							[ 
								{
									id: 1,
									status: 'unachieved'
								},
								{
									id: 2,
									status: 'unachieved'
								},
								{
									id: 3,
									status: 'unachieved'
								},
								{
									id: 4,
									status: 'incomplete'
								},
								{
									id: 5,
									status: 'incomplete'
								}
							]						
					})
					this.newTodoText = ''
				}
			},
			async removeTodo (idToRemove) {
				this.todos = this.todos.filter(todo => {
					return todo.id !== idToRemove
				})

				await db.collection('todo').doc(idToRemove).delete()
			}
		}
}
</script>