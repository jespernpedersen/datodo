<template>
<div id="category-panel" v-bind:class="{ active: expandedList }">
    <span id="expand-list" v-on:click="expandedList = !expandedList" class="fa-icon">
        <font-awesome-icon icon="bars" />
    </span>
    <ul class="category-list">
        <li class="category-item"> 
            <div class="category-inner">
                <router-link to="/health">
                <i class="fa-icon">        
                    <font-awesome-icon icon="heartbeat" />
                </i>
                <span>Health</span>
                </router-link>
            </div>
        </li>
        <li class="category-item"> 
            <div class="category-inner">
                <router-link to="/grocery">
                    <i class="fa-icon">        
                        <font-awesome-icon icon="list-ul" />
                    </i>
                    <span>Grocery</span>
                </router-link>
            </div>
        </li>
    </ul>
</div>
</template>

<script>
    export default {
        data() {
            return {
                expandedList: false
            }
        },
        methods: {
        }
    }
</script>