<template>
  <q-page class="q-mx-md">
    <q-card class="q-pa-md q-mb-md" style="box-shadow: 0 0 40px rgba(0, 0, 0, 0.4);">
      <div class="q-card-section">
        <div class="text-h4">Educational Background</div>

        <!-- B.Tech Section -->
        <q-card class="edu-card">
          <div class="edu-section">
            <h6 class="edu">B.Tech</h6>
            <p class="ed">Computer Science Engineering</p>
            <p>SRMIST, Chennai</p>
            <p>9 CGPA</p>
          </div>
        </q-card>

        <!-- 12th Section -->
        <q-card class="edu-card">
          <div class="edu-section">
            <h6 class="edu">12th</h6>
            <p class="ed">GVIPS, New Delhi</p>
            <p>78%</p>
          </div>
        </q-card>

        <!-- 10th Section -->
        <q-card class="edu-card">
          <div class="edu-section">
            <h6 class="edu">10th</h6>
            <p class="ed">RKPS, New Delhi</p>
            <p>9.2 CGPA</p>
          </div>
        </q-card>
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
.text-h4 {
  font-weight: bold;
  color: blue;
  margin-bottom: 10px;
}

.edu-card {
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
}

h6.edu {
  font-weight: bold;
  color: blue;
  margin-bottom: 5px;
}

p.ed {
  margin: 0;
}

.edu-section {
  margin-bottom: 20px;
}
</style>
