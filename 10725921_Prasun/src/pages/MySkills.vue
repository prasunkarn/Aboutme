<template>
  <q-page class="q-mx-md">
    <q-card class="q-pa-md q-mb-md" style="box-shadow: 0 0 40px rgba(0, 0, 0, 0.4);">
      <div class="q-card-section">
        <div class="text-h5">My Skills</div>
        <p>These are my skills, and I am familiar with the domains we cover during our training."</p>
        <ul>
        
          <li>Vue.js</li>
          <li>Linux</li>
          <li>Spring Boot</li>
          <li>Python</li>
          <li>Linux</li>
          <li>Docker & Kubernetes</li>
        </ul>
      </div>
      <div class="q-mt-md q-card-actions">
      <q-btn
        to="/prasun/aboutme"
        label="Back to About Me"
        color="primary"
      />
    </div>
    </q-card>
  </q-page>
</template>

<style scoped>
.q-card {
  max-width: 400px;
  margin: 0 auto;
}

.text-h5 {
  font-weight: bold;
  color: blue;
  margin-bottom: 10px;
}

ul {
  list-style: disc;
  padding-left: 20px;
}

p {
  margin-bottom: 20px;
}
</style>
