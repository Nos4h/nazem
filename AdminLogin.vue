<template>
  <div id="admin-login" class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <div class="login-image text-center mb-3">
              <img src="https://pbs.twimg.com/media/GRYt8w2aIAABADm?format=jpg&name=small" alt="Login Image" class="img-fluid rounded shadow">
            </div>
            <h2 class="text-center">تسجيل الدخول كمسؤول</h2>
            <form @submit.prevent="login">
              <div class="mb-3">
                <label for="username" class="form-label">اسم المستخدم</label>
                <input type="text" v-model="username" id="username" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="password" class="form-label">كلمة المرور</label>
                <input type="password" v-model="password" id="password" class="form-control" required>
              </div>
              <button type="submit" class="btn custom-button w-100">تسجيل الدخول</button>
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
      const adminCredentials = {
        username: 'admin',
        password: 'password123'
      };

      if (this.username === adminCredentials.username && this.password === adminCredentials.password) {
        console.log('Logged in successfully');
        this.$router.push({ name: 'AdminDashboard' });
      } else {
        this.errorMessage = 'اسم المستخدم أو كلمة المرور غير صحيحة';
      }
    }
  }
};
</script>

<style scoped>
.login-image img {
  max-width: 100%;
  height: auto;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

form {
  text-align: right;
}

input {
  text-align: right; /* Align input text to the right */
}

.custom-button {
  background-color: #b18d44;
  color: white;
  border: none;
}

.custom-button:hover {
  background-color: #98855f;
}
</style>

