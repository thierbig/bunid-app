<template>
  <div>
    <nav
      class="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <div v-if="searchMade">
        <a
          class="pagination-previous"
          @click="goToPrev"
          :disabled="!(currentPage > 1 && currentPage < pageCount)"
          >Previous</a
        >
        <a
          v-if="currentPage < pageCount"
          class="pagination-next"
          @click="goToNext"
          >Next</a
        >
      </div>
    </nav>

    <ul class="pagination-list">
      <li v-for="page in pages" :key="page">
        <a
          class="pagination-link"
          :class="{ 'is-current': page === currentPage }"
          @click="goToPage(page)"
        >
          {{ page }}
        </a>
      </li>
    </ul>

    <p v-if="searchMade" class="total-results">
      Estimated Total Results: {{ totalResults }}
    </p>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    pageCount: Number,
    totalResults: Number,
    searchMade: Boolean,
  },
  methods: {
    goToPage(page) {
      this.$emit("update:currentPage", page);
    },
    goToPrev() {
      if (this.currentPage > 1) {
        this.$emit("update:currentPage", this.currentPage - 1);
      }
    },
    goToNext() {
      if (this.currentPage < this.pageCount) {
        this.$emit("update:currentPage", this.currentPage + 1);
      }
    },
  },
  computed: {
    pages() {
      let pages = [];
      for (let i = 1; i <= this.pageCount; i++) {
        pages.push(i);
      }
      return pages;
    },
  },
};
</script>
