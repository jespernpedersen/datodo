<template>
<div>
		<ul v-if="todos.length">
			<TodoListItem
				v-for="todo in todos"
				:key="todo.id"
				:todo="todo"
				@remove="removeTodo"
				@editcomplete="editTodo"
			>
			</TodoListItem>
		</ul>
		<p v-else>
			Nothing left in the list. Add a new todo in the input above.
		</p>
<div class="field">
		<BaseInputText
			v-model="newTodoText"
			placeholder="New goal"
			@keydown.enter="addTodo"
		/>
</div>
	</div>
</template>

<script>
import BaseInputText from './BaseInputText.vue'
import TodoListItem from './TodoListItem.vue'
import { db } from '../firebase/db.js'


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
				// Clientside
				const trimmedText = this.newTodoText.trim()
				if (trimmedText) {
					let task = {
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
							],
						category: this.$route.params.category
					}
					this.todos.push({
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
							],
						category: this.$route.params.category
					})

					// Database
					await db.collection('todo').add(task)

					// localStorage
					localStorage.push({
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
							],
						category: "health"				
					})

					// Reset
					this.newTodoText = ''
				}
			},
			async removeTodo (todo) {
				// Clientside Edit
				let removeable = this.todos.indexOf(todo)
				this.todos.splice(removeable, 1)

				//  Databse Remove
				await db.collection('todo').doc(todo.id).delete()
			},
			async editTodo (todo) {
				// Database Edit
				await db.collection('todo').doc(todo.id).set({
					text: todo.text
				})
			},
			getUrl() {
    			console.log(this.$route.params.category)
			},
			retrieveTasks() {
				if(this.$route.name == 'category') {
					this.todos.splice(0, this.todos.length)
					let route = this.$route.params.category 

					db.collection("todo").where('category', '==', route).get().then((querySnapshot) => {
						querySnapshot.forEach(doc => this.todos.push({
							id:doc.id,
							...doc.data()
						}))
					})
				}
				else {
					db.collection("todo").get().then((querySnapshot) => {
						querySnapshot.forEach(doc => this.todos.push({
							id:doc.id,
							...doc.data()
						}))
					})	
				}
			}
		},
		created() {	
		},
  	mounted() {
		this.retrieveTasks()
  	},
	watch: {
		// call again the method if the route changes
		'$route': 'retrieveTasks'
	}
}
</script>