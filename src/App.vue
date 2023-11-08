<template>
  <div class="container">
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-2">Bünid Book Finder</h1>
          <h2 class="subtitle">Search for books using the Google Books API</h2>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <BookSearchInput v-model="searchQuery" @search="searchBooks" />
        <BookList :books="books" :searchMade="searchMade" />

        <HomePagination
          :currentPage.sync="currentPage"
          :pageCount="pageCount"
          :totalResults="totalResults"
          :searchMade="searchMade"
          @update:currentPage="changePage"
        />
      </div>
    </section>

    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Basic Vue 2 App</strong> by
          <a href="https://github.com/thierbig">thierbig</a>
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import BookSearchInput from "./components/BookSearchInput.vue";
import BookList from "./components/BookList.vue";
import HomePagination from "./components/HomePagination.vue";

export default {
  components: {
    BookSearchInput,
    BookList,
    HomePagination,
  },
  data() {
    return {
      searchQuery: "",
      books: [],
      currentPage: 1,
      pageSize: 10,
      totalResults: 0,
      searchMade: false,
    };
  },
  computed: {
    pageCount() {
      return Math.ceil(this.totalResults / this.pageSize);
    },
  },
  methods: {
    // Fetches books based on current page and search query
    fetchBooks() {
      const startIndex = (this.currentPage - 1) * this.pageSize;
      const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        this.searchQuery
      )}&startIndex=${startIndex}&maxResults=${this.pageSize}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          this.books = data.items || [];
          this.searchMade = true;
        })
        .catch((error) => {
          console.error("Error fetching books:", error);
          this.books = [];
          this.searchMade = false;
        });
    },

    // Fetches the total number of results for the search query
    // This function's logic is not working as intended. The correct solution requires a backend algo because the Google Books API data.totalItems does not return a reliable number
    fetchTotalResults() {
      if (
        this.totalResults === 0 &&
        this.currentPage === 1 &&
        this.searchMade == false
      ) {
        const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
          this.searchQuery
        )}`;

        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            if (data.items) {
              this.totalResults = data.totalItems || 0;
            }
          })
          .catch((error) => {
            console.error("Error fetching total results:", error);
            this.totalResults = 0;
          });
      }
    },

    searchBooks() {
      this.searchMade = false;
      this.currentPage = 1;
      this.totalResults = 0;
      this.fetchTotalResults();
      this.fetchBooks();
    },
    changePage(newPage) {
      this.currentPage = newPage;
      this.fetchBooks();
    },
  },
  watch: {
    // When the currentPage changes, get new books
    currentPage(newPage) {
      this.changePage(newPage);
    },
  },
};
</script>
