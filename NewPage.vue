
<!-- src/components/CourseList.vue -->
<template>
  <div id="course-list">
    <h1>القاعات و الدورات</h1>
    <div class="search-container">
      <input type="text" v-model="searchQuery" placeholder="ادخل رقم القاعة او اسم الدورة">
      <button @click="search">بحث</button>
    </div>

    <div class="courses-container">
      <div v-for="course in filteredCourses" :key="course.id" class="course-card">
        <div class="course-header">
          <h3>{{ course.number }} <span class="icon-location">📍</span></h3>
        </div>
        <div class="course-body">
          <p><strong>اسم الدورة:</strong> {{ course.name }}</p>
          <p><span class="icon-calendar">📅</span> يبدأ في: {{ course.startDate }}</p>
          <p><span class="icon-seats">💺</span> المقاعد المتاحة: {{ course.availableSeats }}</p>
        </div>
        <div class="course-footer">
          <button class="details-button">التفاصيل</button>
          <span class="status" :class="course.availableSeats > 0 ? 'available' : 'reserved'">{{ course.availableSeats > 0 ? 'متاحة' : 'محجوزة' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseList',
  data() {
    return {
      searchQuery: '',
      courses: [
        { id: 1, number: 101, name: 'أهمية الابتكار', startDate: '11/07/2024', availableSeats: 36 },
        { id: 2, number: 102, name: 'الابتكار المتقدم', startDate: '12/07/2024', availableSeats: 30 },
        { id: 3, number: 103, name: 'الابتكار الأساسي', startDate: '13/07/2024', availableSeats: 22 },
        { id: 4, number: 104, name: 'الذكاء الاصطناعي', startDate: '14/07/2024', availableSeats: 36 },
        { id: 5, number: 201, name: 'الأمن السيبراني', startDate: '15/07/2024', availableSeats: 65 },
        { id: 6, number: 202, name: 'الروبوتات', startDate: '16/07/2024', availableSeats: 36 },
        { id: 7, number: 203, name: 'البرمجة المتقدمة', startDate: '17/07/2024', availableSeats: 36 },
        { id: 8, number: 204, name: 'البيانات الضخمة', startDate: '18/07/2024', availableSeats: 30 },
        { id: 9, number: 205, name: 'التعلم الآلي', startDate: '19/07/2024', availableSeats: 30 },
        { id: 10, number: 206, name: 'الحوسبة السحابية', startDate: '20/07/2024', availableSeats: 30 },
        { id: 11, number: 207, name: 'شبكات الكمبيوتر', startDate: '21/07/2024', availableSeats: 20 },
        { id: 12, number: 208, name: 'تطوير الويب', startDate: '22/07/2024', availableSeats: 36 },
        { id: 13, number: 209, name: 'تطبيقات المحمول', startDate: '23/07/2024', availableSeats: 36 },
        { id: 14, number: 210, name: 'تصميم الألعاب', startDate: '24/07/2024', availableSeats: 39 },
        { id: 15, number: 301, name: 'الواقع الافتراضي', startDate: '25/07/2024', availableSeats: 41 },
        { id: 16, number: 302, name: 'الواقع المعزز', startDate: '26/07/2024', availableSeats: 36 },
        { id: 17, number: 303, name: 'أنظمة التشغيل', startDate: '27/07/2024', availableSeats: 36 },
        { id: 18, number: 217, name: 'تطبيقات المحمول', startDate: '28/07/2024', availableSeats: 36 },
      ],
    };
  },
  computed: {
    filteredCourses() {
      if (!this.searchQuery) {
        return this.courses;
      }
      return this.courses.filter(course =>
        course.number.toString().includes(this.searchQuery) ||
        course.name.includes(this.searchQuery)
      );
    },
  },
  methods: {
    search() {
      // Perform search logic, if needed
    },
  },
};
</script>

<style scoped>
#course-list {
  font-family: Arial, sans-serif;
  text-align: center;
}

.search-container {
  margin-bottom: 20px;
}

.search-container input {
  width: 250px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.search-container button {
  padding: 10px 15px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.search-container button:hover {
  background-color: #2980b9;
}

.courses-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-height: 70vh; /* Set the maximum height */
  overflow-y: auto; /* Enable vertical scrolling */
}

.course-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background-color: #f9f9f9;
  width: 250px;
  margin: 10px;
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

.status.available {
  background-color: #4caf50;
}

.status.reserved {
  background-color: #e57373;
}
</style>
