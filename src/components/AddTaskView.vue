<template>
    <div class="w-100 d-flex justify-content-center align-items-center">
        <form
            @submit.prevent="addTask"
            class="col-11 col-lg-10 d-flex flex-column flex-md-row mt-4 overflow-y-scroll justify-content-between align-items-center align-items-md-end"
            style="max-height: calc(100vh - 200px)"
        >
            <div class="col-11 col-md-6">
                <div class="form-floating mb-3">
                    <input
                        type="text"
                        class="form-control"
                        id="floatingTitle"
                        placeholder="Enter title ..."
                    />
                    <label for="floatingTitle" class="form-label">Task Title</label>
                    <span class="invalid-feedback"
                        ><small>Please enter a title for your task</small></span
                    >
                </div>
                <div class="form-floating mb-3">
                    <textarea
                        style="max-height: 200px; min-height: 100px"
                        class="form-control"
                        id="taskDescription"
                        rows="5"
                        placeholder="Task Description (optional)"
                    ></textarea>
                    <label for="taskDescription" class="form-label"
                        >Task Description (optional)</label
                    >
                </div>
                <div class="mb-3">
                    <label for="taskDueDate" class="form-label">Due Date</label>
                    <input type="date" class="form-control" id="taskDueDate" />
                </div>
                <div class="mb-3">
                    <label for="taskPriority" class="form-label">Priority</label>
                    <div class="d-flex flex-row justify-content-between">
                        <button
                            :class="{ active: isActive }"
                            @click="isActive = !isActive"
                            type="button"
                            class="col-3 btn shadow-sm btn-outline-success"
                        >
                            Urgent<arrowUpIcon
                                class="ms-3 mb-1"
                                style="height: 20px; width: 20px"
                            />
                        </button>
                        <button
                            :class="{ active: isActive }"
                            @click="isActive = !isActive"
                            type="button"
                            class="col-3 btn shadow-sm btn-outline-warning"
                        >
                            Medium<arrowRightIcon
                                class="ms-3 mb-1"
                                style="height: 20px; width: 20px"
                            />
                        </button>
                        <button
                            :class="{ active: isActive }"
                            @click="isActive = !isActive"
                            type="button"
                            class="col-3 btn shadow-sm btn-outline-danger"
                        >
                            Low<arrowDownIcon class="ms-3 mb-1" style="height: 20px; width: 20px" />
                        </button>
                    </div>
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
            <div
                class="col-11 col-md-5 d-flex justify-content-between justify-content-md-end align-items-end me-md-2 my-3 my-md-0 mb-md-3 sticky-top"
            >
                <button type="reset" class="col-5 btn btn-white border border-1 border-gray me-2">
                    Clear
                </button>
                <button
                    :disabled="!formIsValid"
                    type="submit"
                    class="col-6 btn btn-primary text-white"
                >
                    Create Task
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'

import arrowUpIcon from '../assets/icons/arrowUpIcon.vue'
import arrowRightIcon from '../assets/icons/arrowRightIcon.vue'
import arrowDownIcon from '../assets/icons/arrowDownIcon.vue'

let isActive = ref(false)

/* 
Add Task
*/

const addTask = () => {
    console.log('Add Task')
}
</script>

<style lang="scss"></style>
