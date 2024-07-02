<template>
  <div id="course-details">
    <div class="header">
      <h1>{{ course.number }} قاعة 📍</h1>
      <h2>{{ course.name }}</h2>
    </div>
    <div class="course-info">
      <div class="course-time">
        <p><strong>:البداية</strong> <span>{{ course.startTime }}</span></p>
        <p><strong>:النهاية</strong> <span>{{ course.endTime }}</span></p>
      </div>
      <div class="course-meta">
        <p><strong>عدد المقاعد المتاحة:</strong> <span>{{ course.availableSeats }}</span></p>
        <p><strong>:مبنى</strong> <span>{{ course.building }}</span></p>
        <p><strong>:المدرب</strong> <span>{{ course.instructor }}</span></p>
      </div>
    </div>
    <div class="course-description">
      <p><strong>:الوصف</strong></p>
      <p>{{ course.description }}</p>
    </div>
    <div class="course-actions">
      <button class="scan-button" @click="scanQRCode">امسح الكود</button>
      <div class="rating">
        <button class="rating-button" @click="rateCourse('bad')">😞</button>
        <button class="rating-button" @click="rateCourse('neutral')">😐</button>
        <button class="rating-button" @click="rateCourse('good')">😊</button>
        <p>قيمنا</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseDetails',
  data() {
    return {
      course: {
        number: 202,
        name: 'أهمية الابتكار',
        startTime: '8:00 AM',
        endTime: '10:00 AM',
        availableSeats: 13,
        building: 'A',
        instructor: 'هشام ملك',
        description: 'الوصف التفصيلي للدورة.',
      }
    };
  },
  methods: {
    scanQRCode() {
      console.log('QR code scanning...');
    },
    rateCourse(rating) {
      console.log(`Rating received: ${rating}`);
      this.submitRating(rating);
    },
    submitRating(rating) {
      console.log('Submitting rating:', rating);
      // Add logic here to handle the rating submission, e.g., sending to an API
      alert(`تم إرسال التقييم: ${rating}`);
    },
    fetchCourseDetails() {
      console.log('Fetching details for course ID:', this.$route.params.id);
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
      this.course = courses.find(course => course.id === parseInt(this.$route.params.id));
      console.log('Course details:', this.course);
    }
  },
  mounted() {
    this.fetchCourseDetails();
  }
};
</script>

<style scoped>
#course-details {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  text-align: center;
  padding: 20px;
  background: linear-gradient(135deg, #ece9e6 0%, #ffffff 100%);
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 40px auto;
}

.header {
  background-color: #006870;
  color: white;
  padding: 20px;
  border-radius: 15px 15px 0 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.header h1 {
  font-size: 30px;
  margin: 0;
}

.header h2 {
  font-size: 24px;
  margin: 10px 0 0 0;
}

.course-info {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
}

.course-time, .course-meta {
  width: 45%;
}

.course-time p, .course-meta p {
  font-size: 16px;
  color: #333;
}

.course-description {
  background-color: #ffffff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 20px 0;
  text-align: right;
}

.course-description p {
  font-size: 16px;
  color: #333;
  margin: 0;
}

.course-actions {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.scan-button {
  background-color: #b18d44;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

.scan-button:hover {
  background-color: #98855f;
}

.rating {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rating-button {
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  margin: 5px;
  transition: transform 0.2s;
}

.rating-button:hover {
  transform: scale(1.2);
}

.rating p {
  margin-top: 10px;
  font-size: 16px;
  color: #333;
}
</style>
