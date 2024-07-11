<template>
  <div id="admin-dashboard" class="container mt-5">
    <h1 class="text-center">Admin Dashboard</h1>
    <div class="actions text-center my-3">
      <button class="btn custom-button" @click="toggleAddCourseForm">{{ showAddCourseForm ? 'Hide Form' : 'Add New Course' }}</button>
    </div>
    <div v-if="showAddCourseForm" class="course-form card p-4 my-3">
      <h2 class="text-center">{{ isEditMode ? 'Edit Course' : 'Add New Course' }}</h2>
      <form @submit.prevent="addOrUpdateCourse">
        <div class="mb-3">
          <label for="name" class="form-label">Course Name:</label>
          <input type="text" v-model="newCourse.name" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="date" class="form-label">Date:</label>
          <input type="date" v-model="newCourse.date" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="startTime" class="form-label">Start Time:</label>
          <input type="time" v-model="newCourse.startTime" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="endTime" class="form-label">End Time:</label>
          <input type="time" v-model="newCourse.endTime" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="availableSeats" class="form-label">Available Seats:</label>
          <input type="number" v-model="newCourse.availableSeats" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="floor" class="form-label">Floor:</label>
          <input type="text" v-model="newCourse.floor" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="hall" class="form-label">Hall:</label>
          <input type="text" v-model="newCourse.hall" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="instructor" class="form-label">Instructor:</label>
          <input type="text" v-model="newCourse.instructor" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description:</label>
          <textarea v-model="newCourse.description" class="form-control" required></textarea>
        </div>
        <div class="mb-3">
          <button type="button" class="btn btn-secondary me-2" @click="cancelAddCourse">Cancel</button>
          <button type="submit" class="btn custom-button">{{ isEditMode ? 'Save Changes' : 'Add' }}</button>
        </div>
      </form>
    </div>
    <h2 class="text-center mt-4">Manage Courses</h2>
    <table class="table table-striped table-bordered mt-3">
      <thead class="table-light">
        <tr>
          <th>Course Name</th>
          <th>Date</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Available Seats</th>
          <th>Floor</th>
          <th>Hall</th>
          <th>Instructor</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="course in courses" :key="course.id">
          <td>{{ course.name }}</td>
          <td>{{ course.date }}</td>
          <td>{{ course.startTime }}</td>
          <td>{{ course.endTime }}</td>
          <td>{{ course.availableSeats }}</td>
          <td>{{ course.floor }}</td>
          <td>{{ course.hall }}</td>
          <td>{{ course.instructor }}</td>
          <td>{{ course.description }}</td>
          <td>
            <button class="btn btn-warning btn-sm me-2" @click="editCourse(course)">Edit</button>
            <button class="btn btn-danger btn-sm" @click="handleDeleteCourse(course.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'AdminDashboard',
  data() {
    return {
      showAddCourseForm: false,
      isEditMode: false,
      newCourse: {
        id: null,
        name: '',
        date: '',
        startTime: '',
        endTime: '',
        availableSeats: '',
        floor: '',
        hall: '',
        instructor: '',
        description: ''
      }
    };
  },
  computed: {
    ...mapGetters(['courses'])
  },
  created() {
    this.fetchCourses(); // Initialize courses state
  },
  methods: {
    ...mapActions(['fetchCourses', 'addCourse', 'deleteCourse']),
    toggleAddCourseForm() {
      this.showAddCourseForm = !this.showAddCourseForm;
      if (!this.showAddCourseForm) {
        this.cancelAddCourse();
      }
    },
    async addOrUpdateCourse() {
      if (this.isEditMode) {
        try {
          await this.deleteCourse(this.newCourse.id); // Delete the old course
          await this.deleteCourseFromExcel(this.newCourse.id); // Delete the course from Excel file
          const newCourseWithId = { ...this.newCourse, id: Date.now().toString() };
          await this.addCourse(newCourseWithId); // Add the new course
          await this.addCourseToExcel(newCourseWithId); // Add the new course to Excel file
          this.fetchCourses(); // Refresh the courses list
          this.resetForm();
        } catch (error) {
          console.error('Error updating course:', error);
        }
      } else {
        try {
          const newCourseWithId = { ...this.newCourse, id: Date.now().toString() };
          await this.addCourse(newCourseWithId);
          await this.addCourseToExcel(newCourseWithId); // Add the new course to Excel file
          this.fetchCourses(); // Refresh the courses list
          this.resetForm();
        } catch (error) {
          console.error('Error adding course:', error);
        }
      }
    },
    cancelAddCourse() {
      this.resetForm();
    },
    resetForm() {
      this.showAddCourseForm = false;
      this.newCourse = {
        id: null,
        name: '',
        date: '',
        startTime: '',
        endTime: '',
        availableSeats: '',
        floor: '',
        hall: '',
        instructor: '',
        description: ''
      };
      this.isEditMode = false;
    },
    editCourse(course) {
      this.newCourse = { ...course };
      this.isEditMode = true;
      this.showAddCourseForm = true;
    },
    handleDeleteCourse(courseId) {
      this.deleteCourse(courseId)
        .then(() => {
          this.deleteCourseFromExcel(courseId); // Delete the course from Excel file
          this.fetchCourses(); // Refresh the courses list
        })
        .catch(error => {
          console.error('Error deleting course:', error);
        });
    },
    addCourseToExcel(course) {
      return axios.post('http://localhost:3000/api/add-course-to-excel', course)
        .then(() => {
          console.log('Course added to Excel successfully');
        })
        .catch(error => {
          console.error('Error adding course to Excel:', error);
        });
    },
    deleteCourseFromExcel(courseId) {
      return axios.post('http://localhost:3000/api/delete-course-from-excel', { id: courseId })
        .then(() => {
          console.log('Course deleted from Excel successfully');
        })
        .catch(error => {
          console.error('Error deleting course from Excel:', error);
        });
    }
  }
};
</script>

<style scoped>
#admin-dashboard {
  padding: 20px;
  text-align: center;
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
