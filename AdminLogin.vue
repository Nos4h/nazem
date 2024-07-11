<template>
  <div id="admin-login" class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-12 col-md-8 col-lg-6">
        <div class="card shadow-sm">
          <div class="card-body">
            <div class="login-image text-center mb-4">
              <img src="https://pbs.twimg.com/media/GRYt8w2aIAABADm?format=jpg&name=small" alt="Login Image" class="img-fluid rounded shadow-sm">
            </div>
            <h2 class="text-center mb-4">تسجيل الدخول كمسؤول</h2>
            <form @submit.prevent="login">
              <div class="form-group">
                <label for="username">اسم المستخدم</label>
                <input type="text" v-model="username" id="username" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="password">كلمة المرور</label>
                <input type="password" v-model="password" id="password" class="form-control" required>
              </div>
              <button type="submit" class="btn btn-custom btn-block">تسجيل الدخول</button>
              <p v-if="errorMessage" class="text-danger mt-3">{{ errorMessage }}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminLogin',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    login() {
      // Replace with actual admin credentials or authentication logic
      const adminCredentials = {
        username: 'admin',
        password: 'password123'
      };

      if (this.username === adminCredentials.username && this.password === adminCredentials.password) {
        console.log('Logged in successfully');
        // Redirect to the admin dashboard or another secure page
        this.$router.push({ name: 'AdminDashboard' });
      } else {
        this.errorMessage = 'اسم المستخدم أو كلمة المرور غير صحيحة';
      }
    }
  }
};
</script>

<style scoped>
#admin-login {
  max-width: 100%;
  margin: auto;
  padding: 20px;
  background-color: #f4f7f9;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
  border-color: #6e6151;
  outline: none;
}

.btn-custom {
  width: 100%;
  padding: 10px;
  background-color: #6e6151;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-custom:hover {
  background-color: #b18d44;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
