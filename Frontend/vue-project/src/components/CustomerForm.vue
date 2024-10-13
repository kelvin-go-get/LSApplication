<template>
  <q-page class="customer-form">
    <div class="form-container">
      <h2>Add Customer</h2>
      <q-form @submit.prevent="submitForm" class="q-mb-md">
        <q-input v-model="customer.name" label="Name" required />
        <q-input v-model="customer.email" label="Email" type="email" required />
        <q-input v-model="customer.address" label="Address" required />
        <q-btn type="submit" color="primary" label="Add Customer" class="submit-btn" />
      </q-form>

      <h2>Customer List</h2>
      <q-table :rows="customers" :columns="columns" row-key="id" class="customer-table" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import axios from 'axios';

const customer = ref({ name: '', email: '', address: '' });
const customers = ref([]);
const columns = [
  { name: 'name', label: 'Name', field: 'name' },
  { name: 'email', label: 'Email', field: 'email' },
  { name: 'address', label: 'Address', field: 'address' },
];

const submitForm = async () => {
  await axios.post('http://localhost:3000/customers/createCustomer', customer.value);
  loadCustomers();
  resetForm();
};

const loadCustomers = async () => {
  const response = await axios.get('http://localhost:3000/customers/getCustomers');
  customers.value = response.data;
};

const resetForm = () => {
  customer.value = { name: '', email: '', address: '' };
};

onMounted(loadCustomers);
</script>

<style scoped>
.customer-form {
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

.customer-table {
  margin-top: 30px;
}
</style>
