<template>
  <div id="course-details" v-if="course" class="container mt-5">
    <div class="header text-center py-4">
      <h1 class="text-white">{{ course.hall }}</h1>
      <h2 class="text-white">{{ course.name }}</h2>
    </div>
    <div class="course-info row mt-4">
      <div class="course-time col-md-6">
        <p><strong>Date:</strong> {{ course.date }}</p>
        <p><strong>Start Time:</strong> {{ course.startTime }}</p>
        <p><strong>End Time:</strong> {{ course.endTime }}</p>
      </div>
      <div class="course-meta col-md-6">
        <p><strong>Available Seats:</strong> {{ course.availableSeats }}</p>
        <p><strong>Floor:</strong> {{ course.floor }}</p>
        <p><strong>Hall:</strong> {{ course.hall }}</p>
        <p><strong>Instructor:</strong> {{ course.instructor }}</p>
      </div>
    </div>
    <div class="course-description mt-4 p-4">
      <p><strong>Description:</strong></p>
      <p>{{ course.description }}</p>
    </div>
    <div class="course-actions mt-4 text-center">
      <button class="btn scan-button" @click="scanQRCode">Scan QR Code</button>
      <div class="barcode-container mt-3">
        <img src="@/assets/qr-code.png" alt="Barcode" />
      </div>
      <div class="rating mt-4">
        <button class="rating-button" @click="rateCourse('bad')">😞</button>
        <button class="rating-button" @click="rateCourse('neutral')">😐</button>
        <button class="rating-button" @click="rateCourse('good')">😊</button>
        <p class="mt-2">Rate Us</p>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading course details...</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CourseDetails',
  computed: {
    ...mapGetters(['courses']),
    course() {
      const courseId = this.$route.params.id;
      return this.courses.find(course => course.id.toString() === courseId);
    }
  },
  methods: {
    scanQRCode() {
      console.log('QR code scanning...');
    },
    rateCourse(rating) {
      console.log('Rating received: ${rating}');
      this.submitRating(rating);
    },
    submitRating(rating) {
      console.log('Submitting rating:', rating);
      alert('تم إرسال التقييم: ${rating}');
    }
  }
};
</script>

<style scoped>
#course-details {
  background: linear-gradient(135deg, #ece9e6 0%, #ffffff 100%);
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.header {
  background-color: #6e6151;
  border-radius: 15px 15px 0 0;
}

.course-info {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.course-description {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
}

.scan-button {
  background-color: #98855f;
  color: white;
  border-radius: 10px;
  font-size: 16px;
  transition: background-color 0.3s;
}

.scan-button:hover {
  background-color: #806a47;
}

.barcode-container {
  display: flex;
  justify-content: center;
}

.barcode-container img {
  width: 150px;
  height: auto;
}

.rating {
  display: flex;
  flex-direction: row;
  justify-content: center;
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
