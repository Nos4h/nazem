<template>
    <div id="admin-login">
      <h2>تسجيل الدخول كمسؤول</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">اسم المستخدم</label>
          <input type="text" v-model="username" id="username" required>
        </div>
        <div>
          <label for="password">كلمة المرور</label>
          <input type="password" v-model="password" id="password" required>
        </div>
        <button type="submit">تسجيل الدخول</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminLogin',
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        // هنا يمكنك إضافة منطق تسجيل الدخول للمسؤول
        console.log('اسم المستخدم:', this.username);
        console.log('كلمة المرور:', this.password);
        // بعد التحقق الناجح، يمكنك إعادة توجيه المستخدم إلى صفحة أخرى
        // this.$router.push({ name: 'AdminDashboard' });
      }
    }
  };
  </script>
  
  <style scoped>
  #admin-login {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  form div {
    margin-bottom: 10px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #006870;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #b18d44;
  }
  </style>
