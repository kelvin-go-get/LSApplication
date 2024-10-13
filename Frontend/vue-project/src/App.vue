<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          LogicSoft CRUD Application
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container class="page-container">
      <CustomersForm/>
      <ProjectsForm />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import CustomersForm from "./components/CustomerForm.vue";
import ProjectsForm from './components/ProjectForm.vue';
</script>

<style>
.q-layout {
  background-color: #f5f5f5;
}

.page-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
</style>
