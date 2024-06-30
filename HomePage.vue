<template>
    <div id="home">
      <div class="background-container">
        <button @click="startButtonClicked" class="start-button">{{ $t('startButton') }}</button>
        <div class="language-switcher">
          <span @click="setLocale('en')" class="language-button">English</span>
          <span class="divider">|</span>
          <span @click="setLocale('ar')" class="language-button">عربي</span>
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
        this.$router.push({ name: 'NewPage' });
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
    justify-content: center;
    align-items: center;
  }
  
  .background-container {
    position: relative;
    width: 50%;
    height: 50%;
    background-image: url('https://pbs.twimg.com/media/DR4StkrWsAAu-wV.jpg'); /* Replace with your image URL */
    background-size: cover;
    background-position: center;
  }
  
  .start-button {
    position: absolute;
    bottom: 20px; /* Adjust button position from bottom */
    left: 50%;
    transform: translate(-50%, 150%);
    padding: 5px 25px;
    font-size: 1.3em;
    cursor: pointer;
    background-color: #006870;
    color: white;
    border: none;
    border-radius: 30px;
    transition: background-color 0.3s ease;
  }
  
  .start-button:hover {
    background-color: #b18d44;
  }
  
  .language-switcher {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
  }
  
  .language-button {
    font-size: 1.3em;
    cursor: pointer;
    color: #006870;
    margin: 0 10px; /* Space between the buttons */
    transition: color 0.3s ease;
    transform: translateY(1550%);
  }
  
  .language-button:hover {
    color: #b18d44;
  }
  
  .divider {
    font-size: 1.3em;
    color: #006870;
    transform: translateY(1550%);
  }
  </style>
  