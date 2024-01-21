<script setup>
import { useDatabaseList } from 'vuefire';
import { ref as dbRef } from 'firebase/database'; // Import the 'dbRef' function from firebase/database module
import { getDatabase } from 'firebase/database'; // Import the 'getDatabase' function from firebase/database module

const db = getDatabase(); // Initialize the database
const tasks = useDatabaseList(dbRef(db));
console.log(tasks);

</script>

<template>
  <main>
  </main>
</template>
