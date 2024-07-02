<template>
  <div id="admin-login">
    <div class="login-image">
      <img src="https://pbs.twimg.com/media/GRYt8w2aIAABADm?format=jpg&name=small" alt="Login Image">
    </div>
    <h2>تسجيل الدخول كمسؤول</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">اسم المستخدم</label>
        <input type="text" v-model="username" id="username" required>
      </div>
      <div class="form-group">
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
  background-color: #f4f7f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.login-image {
  margin-bottom: 20px;
}

.login-image img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

form {
  text-align: right; /* Align text to the right */
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #666;
}

input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  transition: border-color 0.3s ease;
  text-align: right; /* Align input text to the right */
}

input:focus {
  border-color: #006870;
  outline: none;
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
