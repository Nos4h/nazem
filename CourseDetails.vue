<template>
  <div id="course-details">
    <div class="header">
      <h1>{{ course.number }} قاعة 📍</h1>
      <h2>{{ course.name }}</h2>
    </div>
    <div class="course-info">
      <div class="course-time">
        <p><strong>البداية:</strong> <span>{{ course.startTime }}</span></p>
        <p><strong>النهاية:</strong> <span>{{ course.endTime }}</span></p>
      </div>
      <div class="course-meta">
        <p><strong>عدد المقاعد المتاحة:</strong> <span>{{ course.availableSeats }}</span></p>
        <p><strong>مبنى:</strong> <span>{{ course.building }}</span></p>
        <p><strong>المدرب:</strong> <span>{{ course.instructor }}</span></p>
      </div>
    </div>
    <div class="course-description">
      <p><strong>الوصف:</strong></p>
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
      // Implement QR code scanning logic
      console.log('QR code scanning...');
    },
    rateCourse(rating) {
      // Implement course rating logic
      console.log(`Rating received: ${rating}`);
    },
    fetchCourseDetails() {
      console.log('Fetching details for course ID:', this.$route.params.id);
      // Replace this with your actual fetching logic
      const courses = [
        { id: 1, number: 101, name: 'أهمية الابتكار', startTime: '8:00 AM', endTime: '10:00 AM', availableSeats: 36, building: 'A', instructor: 'هشام ملك', description: 'الوصف التفصيلي للدورة.' },
        { id: 2, number: 102, name: 'الابتكار المتقدم', startTime: '9:00 AM', endTime: '11:00 AM', availableSeats: 30, building: 'B', instructor: 'محمد أحمد', description: 'الوصف التفصيلي للدورة.' },
        // ... other courses
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
  text-align: left;
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
