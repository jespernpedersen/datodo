<template>
    <li v-bind:class="subtaskitem.status" @click="$emit('complete', subtaskitem)">
    </li>
</template>

<script>
export default {
    props: ['subtask'],
    data() {
        return {
            subtaskitem: this.subtask
        }
    },
    methods: {
    }
}
</script>