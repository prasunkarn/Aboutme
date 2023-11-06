<template>
  <q-page class="q-mx-md">
    <q-card class="q-pa-md q-mb-md" style="box-shadow: 0 0 40px rgba(0, 0, 0, 0.6);">
      <div class="q-card-section">
        <div class="row items-center">
          <div >
            <div class="circle">
              <img src="../assets/prasun.png" />
            </div>
          </div>
          <div class="col">
            <div class="text-h4">{{ Name }}</div>
            <div class="q-mt-md">{{ aboutMe }}</div>
          </div>
        </div>
      </div>
      <hr class ="line">
      <br>
      <div class="q-card-actions">
        <q-btn
          to="/prasun/skills"
          label="Skills"
          color="primary"
        />
        <q-btn
          to="/prasun/education"
          label="Educational Background"
          color="primary"
        />
        <q-btn
          to="/prasun/hobbies"
          label="Hobbies"
          color="primary"
        />
      </div>
      <br>
      <hr class="line">
      <div>
        <p>
        <b>Contact Me</b>
        <br>Email -> prasun.karn@ltimindtre.com
        <br>
        Phone No -> 7678385590</p>
      </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      Name: "Prasun Karn",
      aboutMe: "I am a Software Engineer at LTI Mindtree, and I come from the holy place that is the birthplace of Sita, Sitamadhi, Bihar",
    };
  },
};
</script>

<style scoped>
.circle {
  width: 100px;
  height: 100px;
  background-color: blue;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 50%;
}

.q-card-actions {
  display: flex;
  justify-content: space-between;
}

.line{
    height: 5px; 
  background-color: blue; 
  border-radius: 4px ;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); 
}
</style>
