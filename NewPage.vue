<template>
    <div>
      <h1>القاعات و الدورات</h1>
    </div>
    <input type="text" v-model="searchQuery" placeholder="ادخل رقم القاعة او اسم الدورة">
      <button @click="search">بحث</button>

      <div class="course-card">
    <div class="course-header">
      <h3>202 <span class="icon-location">📍</span></h3>
    </div>
    <div class="course-body">
      <p><strong>اسم الدورة:</strong> اهمية الابتكار</p>
      <p><span class="icon-calendar">📅</span> يبدأ في: 11/07/2024</p>
      <p><span class="icon-seats">💺</span> المقاعد المتاحة: 30</p>
    </div>
    <div class="course-footer">
      <button @click="goToDetails" class="details-button">التفاصيل</button>
      <span class="status reserved">محجوزة</span>
    </div>
  </div>
  </template>
  
  <script>
 export default {
  name: 'CourseCard',
  methods: {
    goToDetails() {
      this.$router.push('/details');
    }
  }
};
  </script>
  
  

<style scoped>
.course-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background-color: #f9f9f9;
  width: 250px;
  font-family: Arial, sans-serif;
}

.course-header h3 {
  display: flex;
  align-items: center;
  margin: 0;
  font-size: 24px;
  color: #333;
}

.course-header .icon-location {
  margin-left: 8px;
}

.course-body p {
  margin: 8px 0;
  color: #555;
}

.course-body .icon-calendar,
.course-body .icon-seats {
  margin-right: 8px;
}

.course-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
}

.details-button {
  background-color: #a0d7e7;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  color: white;
}

.status {
  padding: 4px 8px;
  border-radius: 4px;
  color: white;
}

.status.reserved {
  background-color: #e57373;
}
</style>
