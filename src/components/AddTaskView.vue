<template>
    <div class="col-10 d-flex justify-content-center align-items-center">
        <form @submit.prevent="addTask" class="col-10 d-flex">
            <div class="col-5">
                <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="floatingTitle" placeholder="Enter title ..." />
                    <label for="floatingTitle" class="form-label">Task Title</label>
                    <span class="invalid-feedback"><small>Please enter a title for your task</small></span>
                </div>
                <div class="form-floating mb-3">
                    <textarea 
                    style="max-height: 200px; min-height: 100px;"
                    class="form-control" 
                    id="taskDescription" 
                    rows="5" 
                    placeholder="Task Description (optional)"></textarea>
                    <label for="taskDescription" class="form-label">Task Description (optional)</label>
                </div>
                <div class="mb-3">
                    <label for="taskDueDate" class="form-label">Due Date</label>
                    <input type="date" class="form-control" id="taskDueDate" />
                </div>
                <div class="mb-3">
                    <label for="taskPriority" class="form-label">Priority</label>
                    <select class="form-select" id="taskPriority">
                        <option selected>Choose...</option>
                        <option value="1">High</option>
                        <option value="2">Medium</option>
                        <option value="3">Low</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="taskStatus" class="form-label">Status</label>
                    <select class="form-select" id="taskStatus">
                        <option selected>Choose...</option>
                        <option value="1">To Do</option>
                        <option value="2">In Progress</option>
                        <option value="3">Done</option>
                    </select>
                </div>
                <div class="mb-3">
                    <label for="taskAssignee" class="form-label">Assignee (optional)</label>
                    <input type="text" class="form-control" id="taskAssignee" />
                </div>
                <div class="mb-3">
                    <label for="taskTags" class="form-label">Subtasks (optional)</label>
                    <input type="text" class="form-control" id="taskTags" />
                </div>
            </div>
            <div class="col-5 d-flex justify-content-end align-items-end">
                <button type="reset" class="btn btn-white border border-1 border-gray me-2">
                    Clear
                </button>
                <button :disabled="!formIsValid" type="submit" class="btn btn-primary text-white">
                    Create Task
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'

/* 
Add Task
*/

const addTask = () => {
    console.log('Add Task')
}
</script>

<style lang="scss"></style>
