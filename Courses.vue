<template>
  <div id="course-list" class="container mt-5">
    <h1 class="text-center mb-5">القاعات و الدورات</h1>

    <!-- Search bar -->
    <div class="search-container mb-3 d-flex justify-content-center"> 
      <div class="d-flex w-50">
        <button @click="search" class="btn btn-search">
          <i class="bi bi-search"></i>
        </button>
        <input type="text" v-model="searchQuery" class="form-control search-input ms-2" style="text-align: right;" placeholder="ادخل رقم القاعة او اسم الدورة">
      </div>
    </div>

    <!-- Cards container with Bootstrap grid -->
    <div class="row justify-content-center">
      <div v-for="course in paginatedCourses" :key="course.id" class="col-md-4 mb-4">
        <div class="card h-100 course-card">
          <div class="card-header">
            <h5 class="card-title">{{ course.number }}</h5>
          </div>
          <div class="card-body">
            <p class="card-text"><strong>اسم الدورة:</strong> {{ course.name }}</p>
            <p class="card-text"><i class="bi bi-calendar-event"></i> يبدأ في: {{ course.startDate }}</p>
            <p class="card-text"><i class="bi bi-person-fill"></i> المقاعد المتاحة: {{ course.availableSeats }}</p>
          </div>
          <div class="card-footer d-flex justify-content-between align-items-center">
            <button class="btn btn-details" @click="viewDetails(course.id)">التفاصيل</button>
            <span class="status badge" :class="course.availableSeats > 0 ? 'badge-success' : 'badge-danger'">
              {{ course.availableSeats > 0 ? 'متاحة' : 'محجوزة' }}
            </span>
          </div>
        </div>
      </div>
    </div>
  
    <!-- Pagination -->
    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center mt-4">
        <li class="page-item" v-for="page in totalPages" :key="page" :class="{ active: currentPage === page }">
          <a class="page-link" @click="setCurrentPage(page)">{{ page }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'CourseList',
  computed: {
  ...mapGetters(['courses']),
  totalPages() {
    return Math.ceil(this.filteredCourses.length / this.pageSize);
  },
  paginatedCourses() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredCourses.slice(startIndex, startIndex + this.pageSize);
  },
  filteredCourses() {
    if (!this.searchQuery) {
      return this.courses;
    }
    const lowerSearchQuery = this.searchQuery.toLowerCase();
    return this.courses.filter(course => {
      const number = course.number ? course.number.toString().toLowerCase() : '';
      const name = course.name ? course.name.toLowerCase() : '';
      return number.includes(lowerSearchQuery) || name.includes(lowerSearchQuery);
    });
  }
}

,
  data() {
    return {
      searchQuery: '',
      currentPage: 1,
      pageSize: 8, // Number of items per page
    };
  },
  methods: {
    search() {
      this.currentPage = 1;
    },
    setCurrentPage(page) {
      this.currentPage = page;
    },
    viewDetails(courseId) {
      this.$router.push({ name: 'CourseDetails', params: { id: courseId } });
    }
  }
};
</script>

<style scoped>
/* Set the background color for the entire body */
body {
  background-color: #f5ece4 !important;
}

#course-list {
  text-align: center;
}

h1 {
  color: #6e6151;
}

.search-container {
  max-width: 600px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
}

.search-input {
  border: 1px solid #2a4d69;
  border-radius: 0 30px 30px 0;
  padding: 10px 20px;
  width: calc(100% - 40px);
}

.btn-search {
  background-color: #6e6151;
  color: #fff;
  border: none;
  border-radius: 30px 0 0 30px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-search:hover {
  background-color: #b7b8a2;
}

.course-card {
  border: none;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s;
}

.course-card:hover {
  background-color: #f9f9f9;
  transform: translateY(-5px);
}

.card-header {
  background-color: #6e6151;
  color: #fff;
  padding: 10px;
  border-bottom: none;
  border-radius: 40px 40px 0 0 !important; 
}

.card-title {
  margin-bottom: 0;
  font-size: 1.5rem;
}

.card-body {
  padding: 20px;
}

.card-text {
  margin-bottom: 0.75rem;
  color: #555;
}

.card-footer {
  background-color: #fff;
  padding: 10px;
  border-top: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 40px 40px !important;
}

.btn-details {
  background-color: #b7b8a2;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 8px;
}

.btn-details:hover {
  background-color: #afa77c;
}

.status {
  padding: 8px 16px;
  border-radius: 8px;
  color: white;
  font-size: 0.875rem;
  text-align: center;
}

.badge-success {
  background-color: #28a745;
}

.badge-danger {
  background-color: #dc3545;
}

.pagination .page-link {
  color: #6e6151;
  background-color: #f3f4ed;
  border: 1px solid #ccc;
}

.pagination .page-item.active .page-link {
  background-color: #6e6151;
  border-color: #388e3c;
  color: #fff;
}
</style>
