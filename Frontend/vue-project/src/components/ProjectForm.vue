<template>
  <q-page class="project-form">
    <div class="form-container">
      <h2>Add Project</h2>
      <q-form @submit.prevent="submitForm" class="q-mb-md">
        <q-input v-model="project.name" label="Project Name" required />
        <q-input v-model="project.description" label="Description" required />
        <q-select
          v-model="project.customerId"
          :options="customers"
          label="Customer"
          required
        />
        <q-btn type="submit" color="primary" label="Add Project" class="submit-btn" />
      </q-form>

      <h2>Project List</h2>
      <q-table :rows="projects" :columns="columns" row-key="id" class="project-table" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const project = ref({ name: '', description: '', customerId: null });
const projects = ref([]);
const customers = ref([]);
const columns = [
  { name: 'name', label: 'Project Name', field: 'name' },
  { name: 'description', label: 'Description', field: 'description' },
];

const submitForm = async () => {
  await axios.post('http://localhost:3000/projects/createProject', project.value);
  loadProjects();
  resetForm();
};

const loadProjects = async () => {
  const response = await axios.get('http://localhost:3000/projects/getProjects');
  projects.value = response.data;
};

const loadCustomers = async () => {
  const response = await axios.get('http://localhost:3000/customers/getCustomers');
  customers.value = response.data.map(c => ({ label: c.name, value: c.id }));
};

const resetForm = () => {
  project.value = { name: '', description: '', customerId: null };
};

onMounted(() => {
  loadCustomers();
  loadProjects();
});
</script>

<style scoped>
.project-form {
  padding: 20px;
  border-radius: 8px;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  color: white;
}

.form-container {
  max-width: 600px;
  margin: auto;
}

h2 {
  margin-bottom: 20px;
}

.submit-btn {
  margin-top: 20px;
}

.project-table {
  margin-top: 30px;
}
</style>
