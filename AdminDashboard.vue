<template>
  <div id="admin-dashboard" class="container mt-5">
    <h1 class="text-center">لوحة تحكم المسؤول</h1>
    <div class="actions text-center my-3">
      <button class="btn custom-button" @click="showAddCourseForm = !showAddCourseForm">
        إضافة دورة جديدة
      </button>
    </div>
    <div v-if="showAddCourseForm" class="course-form card p-4 my-3">
      <h2 class="text-center">إضافة دورة جديدة</h2>
      <form @submit.prevent="addCourse">
        <div class="mb-3">
          <label for="number" class="form-label">رقم الدورة:</label>
          <input type="number" v-model="newCourse.number" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="name" class="form-label">اسم الدورة:</label>
          <input type="text" v-model="newCourse.name" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="startTime" class="form-label">وقت البدء:</label>
          <input type="time" v-model="newCourse.startTime" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="endTime" class="form-label">وقت النهاية:</label>
          <input type="time" v-model="newCourse.endTime" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="availableSeats" class="form-label">عدد المقاعد المتاحة:</label>
          <input type="number" v-model="newCourse.availableSeats" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="building" class="form-label">مبنى:</label>
          <input type="text" v-model="newCourse.building" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="instructor" class="form-label">المدرب:</label>
          <input type="text" v-model="newCourse.instructor" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">الوصف:</label>
          <textarea v-model="newCourse.description" class="form-control" required></textarea>
        </div>
        <button type="submit" class="btn custom-button">إضافة</button>
      </form>
    </div>
    <h2 class="text-center mt-4">إدارة الدورات</h2>
    <table class="table table-striped table-bordered mt-3">
      <thead class="table-light">
        <tr>
          <th>رقم الدورة</th>
          <th>اسم الدورة</th>
          <th>وقت البدء</th>
          <th>وقت النهاية</th>
          <th>عدد المقاعد المتاحة</th>
          <th>مبنى</th>
          <th>المدرب</th>
          <th>الوصف</th>
          <th>إجراءات</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" :key="course.id">
          <td>{{ course.number }}</td>
          <td>{{ course.name }}</td>
          <td>{{ course.startTime }}</td>
          <td>{{ course.endTime }}</td>
          <td>{{ course.availableSeats }}</td>
          <td>{{ course.building }}</td>
          <td>{{ course.instructor }}</td>
          <td>{{ course.description }}</td>
          <td>
            <button class="btn btn-warning btn-sm me-2" @click="editCourse(course)">تعديل</button>
            <button class="btn btn-danger btn-sm" @click="deleteCourse(course.id)">حذف</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard',
  data() {
    return {
      showAddCourseForm: false,
      newCourse: {
        number: '',
        name: '',
        startTime: '',
        endTime: '',
        availableSeats: '',
        building: '',
        instructor: '',
        description: ''
      },
      courses: [
        // Sample data
        {
          id: 1,
          number: 202,
          name: 'أهمية الابتكار',
          startTime: '08:00',
          endTime: '10:00',
          availableSeats: 13,
          building: 'A',
          instructor: 'هشام ملك',
          description: 'الوصف التفصيلي للدورة.'
        },
        {
          id: 2,
          number: 203,
          name: 'التعلم الآلي',
          startTime: '09:00',
          endTime: '11:00',
          availableSeats: 10,
          building: 'B',
          instructor: 'محمد أحمد',
          description: 'وصف آخر للدورة.'
        }
      ]
    };
  },
  methods: {
    addCourse() {
      this.courses.push({ ...this.newCourse, id: Date.now() });
      this.newCourse = {
        number: '',
        name: '',
        startTime: '',
        endTime: '',
        availableSeats: '',
        building: '',
        instructor: '',
        description: ''
      };
      this.showAddCourseForm = false;
    },
    editCourse(course) {
      // Logic for editing a course
      const index = this.courses.findIndex(c => c.id === course.id);
      if (index !== -1) {
        this.courses[index] = { ...course };
      }
    },
    deleteCourse(id) {
      this.courses = this.courses.filter(course => course.id !== id);
    }
  }
};
</script>

<style scoped>
.custom-button {
  background-color: #b18d44;
  color: white;
  border: none;
}

.custom-button:hover {
  background-color: #98855f;
}
</style>


  
