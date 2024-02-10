<template>
    <div class="w-100 d-flex justify-content-center align-items-center">
        <!-- * The Form that Handle the entire Add Task Section -->
        <form
            @submit.prevent="addTask"
            class="col-11 col-lg-10 d-flex flex-column flex-md-row mt-4 overflow-y-scroll justify-content-between align-items-center align-items-md-end"
            style="max-height: calc(100vh - 200px)"
        >
            <div class="col-11 col-md-6">
                <!-- * First Input-Field: Thats the Title of the new Task -->
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

                <!-- * Second Input-Field: Thats the Description of the new Task -->
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

                <!-- * Third Input-Field: Thats the Due-Date of the new Task -->
                <div class="mb-3">
                    <label for="taskDueDate" class="form-label">Due Date</label>
                    <input type="date" class="form-control" id="taskDueDate" />
                </div>

                <!-- * Fourth Input-Field: Thats the Priority of the new Task -->
                <div class="mb-3">
                    <label for="taskPriority" class="form-label">Priority</label>
                    <div class="d-flex flex-row justify-content-between">
                        <button
                            :class="{ active: isActiveSuccess }"
                            @click="setActive('success')"
                            type="button"
                            class="col-3 btn shadow-sm btn-outline-success"
                        >
                            Urgent
                            <arrowUpIcon class="ms-3 mb-1" style="height: 20px; width: 20px" />
                        </button>
                        <button
                            :class="{ active: isActiveWarning }"
                            @click="setActive('warning')"
                            type="button"
                            class="col-3 btn shadow-sm btn-outline-warning"
                        >
                            Medium
                            <arrowRightIcon class="ms-3 mb-1" style="height: 20px; width: 20px" />
                        </button>
                        <button
                            :class="{ active: isActiveDanger }"
                            @click="setActive('danger')"
                            type="button"
                            class="col-3 btn shadow-sm btn-outline-danger"
                        >
                            Low
                            <arrowDownIcon class="ms-3 mb-1" style="height: 20px; width: 20px" />
                        </button>
                    </div>
                </div>

                <!-- * Fifth Input-Field: Thats the Assignee of the new Task -->
                <div class="mb-3 dropdown">
                    <input
                        for="taskAssignee"
                        class="form-control dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        placeholder="Assignee (Optional)"
                    />
                    <ul class="dropdown-menu w-100" id="taskAssignee" @click.stop>
                        <li
                            v-for="(contact, index) in allContacts"
                            class="dropdown-item"
                            @click="toggleCheckbox(index)"
                            :key="`contact-${index}`"
                        >
                            <input
                                class="me-3 my-2"
                                type="checkbox"
                                :id="`contact-${index}`"
                                v-model="contact.checked"
                            />
                            <label :for="`contact-${index}`" class="w-100"
                                >{{ contact.firstName }} {{ contact.lastName }}</label
                            >
                        </li>
                    </ul>
                </div>

                <!-- * Hidden Avatar Field for Checked Users, unhide if  user is checked -->
                <div class="d-flex mb-3" style="height: 42px;">
                    <div
                        v-for="(contact, index) in selectedContacts"
                        :key="`contact-${index}`"
                        class="d-flex p-2 me-1 bg-primary rounded-circle border-1 border-gray border text-white"
                        type="text"
                        :value="contact.checked"
                    >
                        {{ contact.firstName.charAt(0) }}{{ contact.lastName.charAt(0) }}
                    </div>
                </div>

                <!-- * Sixth Input-Field: Thats the Category of the new Task -->
                <div class="mb-3 dropdown">
                    <input
                        v-model="stateCategory"
                        class="form-control dropdown-toggle"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                        placeholder="Category"
                        required
                    />
                    <ul class="dropdown-menu w-100" id="taskCategory">
                        <li
                            v-for="category in allCategories"
                            class="dropdown-item"
                            @click="selectCategory(category)"
                            :key="category.id"
                        >
                            <label class="w-100">{{ category.category }}</label>
                        </li>
                    </ul>
                </div>

                <!-- * Seventh Input-Field: Thats the Subtasks of the new Task -->
                <div class="mb-3">
                    <label for="taskTags" class="form-label">Subtasks (optional)</label>
                    <input
                        type="text"
                        class="form-control"
                        id="taskTags"
                        v-model="newSubtask"
                        @keyup.enter="addSubtask"
                    />
                </div>
            </div>

            <!-- * The Buttons to Clear the Form and to Create the Task -->
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
import { ref, computed } from 'vue'

import arrowUpIcon from '../assets/icons/arrowUpIcon.vue'
import arrowRightIcon from '../assets/icons/arrowRightIcon.vue'
import arrowDownIcon from '../assets/icons/arrowDownIcon.vue'

/*
Priority Buttons 
 */
let isActiveSuccess = ref(false)
let isActiveWarning = ref(false)
let isActiveDanger = ref(false)

const setActive = (button) => {
    if (button === 'success') {
        isActiveSuccess.value = !isActiveSuccess.value
        isActiveWarning.value = isActiveDanger.value = false
    } else if (button === 'warning') {
        isActiveWarning.value = !isActiveWarning.value
        isActiveSuccess.value = isActiveDanger.value = false
    } else if (button === 'danger') {
        isActiveDanger.value = !isActiveDanger.value
        isActiveSuccess.value = isActiveWarning.value = false
    }
}

/* 
Load Assignees and Categories
*/
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase'
import { onMounted } from 'vue'

const allContacts = ref([])
const allCategories = ref([])

const selectedContacts = computed(() => {
    return allContacts.value.filter((contact) => contact.checked)
})

onMounted(async () => {
    const querySnapshotContacts = await getDocs(collection(db, 'contacts'))
    const querySnapshotCategories = await getDocs(collection(db, 'categorys'))
    let currentContacts = []
    let currentCategories = []
    querySnapshotContacts.forEach((doc) => {
        // console.log(doc.id, ' => ', doc.data())
        const contact = {
            id: doc.id,
            firstName: doc.data().first_name,
            lastName: doc.data().last_name,
            checked: false
        }
        currentContacts.push(contact)
    })
    allContacts.value = currentContacts
    // console.log(allContacts.value);

    querySnapshotCategories.forEach((doc) => {
        // console.log(doc.id, ' => ', doc.data())
        const category = {
            id: doc.id,
            category: doc.data().title
        }
        currentCategories.push(category)
    })
    allCategories.value = currentCategories
})

import { reactive } from 'vue'

let stateContacts = reactive({
    allContacts: []
})

const toggleCheckbox = (index) => {
    if (
        index >= 0 &&
        index < stateContacts.allContacts.length &&
        stateContacts.allContacts[index]
    ) {
        stateContacts.allContacts[index].checked = !stateContacts.allContacts[index].checked
    }
}

/* 
Use Category
*/
let stateCategory = ref('')

const selectCategory = (category) => {
    stateCategory.value = category.category
}

/* 
Adding Subtasks
*/
let subtasks = ref([])
let newSubtask = ref('')

const addSubtask = () => {
    const subtask = {
        title: newSubtask.value,
        done: false
    }
    subtasks.value.push(subtask)
    newSubtask.value = ''
    console.log(subtasks.value)
}

/* 
Add Task
*/
const addTask = () => {
    console.log('Add Task')
}
</script>

<style lang="scss"></style>
