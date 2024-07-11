<template>
  <div id="home" class="container-fluid">
   
      <div class="col-12 background-container">
        <!-- Background image is set through CSS -->
      </div>
    
    <div class="row no-gutters justify-content-center">
      <div class="col-12 d-flex justify-content-center">
        <button @click="adminLoginClicked" class="admin-login-button">{{ $t('adminLoginButton') }}</button>
      </div>
    </div>
    <div class="row no-gutters justify-content-center">
      <div class="col-12 d-flex justify-content-center">
        <button @click="startButtonClicked" class="start-button">{{ $t('startButton') }}</button>
      </div>
    </div>
    <div class="row no-gutters justify-content-center">
      <div class="col-12 d-flex justify-content-center">
        <div class="language-switcher">
          <span @click="setLocale('en')" class="language-button">English</span>
          <span class="divider">|</span>
          <span @click="setLocale('ar')" class="language-button">عربي</span>
        </div>
      </div>
    </div>
    <input type="file" @change="handleFileUpload" ref="fileInput" style="display: none;">
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      backgroundImage: '',
    };
  },
  methods: {
    startButtonClicked() {
      this.$router.push({ name: 'Courses' });
    },
    adminLoginClicked() {
      this.$router.push({ name: 'AdminLogin' });
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          this.backgroundImage = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    setLocale(locale) {
      this.$i18n.locale = locale;
    }
  }
};
</script>

<style>
#home {
  height: 100vh; /* Set full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0;
}

.background-container {
  width: 100%; /* Make the background container full width */
  height: 60vh; /* Adjust the height to take up more space */
  background-image: url('https://pbs.twimg.com/media/GRYt8w2aIAABADm?format=jpg&name=small'); /* Replace with your image URL */
  background-size: 700px; /* Ensure the entire image is visible without being cropped */
  background-repeat: no-repeat; /* Prevent the image from repeating */
  background-position: center;
}

.start-button,
.admin-login-button {
  padding: 5px 25px;
  font-size: 1.3em;
  cursor: pointer;
  background-color: #6e6151;
  color: white;
  border: none;
  border-radius: 30px;
  transition: background-color 0.3s ease;
  margin-bottom: 20px; /* Space between the buttons */
}

.start-button:hover,
.admin-login-button:hover {
  background-color: #b1a544;
}

.language-switcher {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px; /* Space above the language switcher */
}

.language-button {
  font-size: 1.3em;
  cursor: pointer;
  color: #6e6151;
  margin: 0 10px; /* Space between the buttons */
  transition: color 0.3s ease;
}

.language-button:hover {
  color: #b18d44;
}

.divider {
  font-size: 1.3em;
  color: #006870;
}
</style>
