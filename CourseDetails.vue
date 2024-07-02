<template>
  <div v-if="course">
    <h1>{{ course.name }}</h1>
    <p>Course Number: {{ course.number }}</p>
    <p>Start Date: {{ course.startDate }}</p>
    <p>Available Seats: {{ course.availableSeats }}</p>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  name: 'CourseDetails',
  props: ['id'],
  data() {
    return {
      course: null
    };
  },
  created() {
    this.fetchCourseDetails();
  },
  methods: {
    fetchCourseDetails() {
      console.log('Fetching details for course ID:', this.id);
      // Replace this with your actual fetching logic
      const courses = [
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
      ];
      this.course = courses.find(course => course.id === parseInt(this.id));
      console.log('Course details:', this.course);
    }
  }
};
</script>

<style scoped>
.course-details {
  direction: rtl;
  text-align: center;
  font-family: Arial, sans-serif;
}
.header {
  margin-bottom: 20px;
}
.details {
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
}
.qr-code {
  margin-bottom: 20px;
}
.description {
  margin-bottom: 20px;
}
.rating .icons {
  display: flex;
  justify-content: center;
}
.rating .icons i {
  margin: 0 10px;
}
</style>
