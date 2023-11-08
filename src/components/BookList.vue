<template>
  <div>
    <div v-for="book in books" :key="book.id" class="box">
      <article class="media">
        <div class="media-left">
          <figure
            v-if="
              book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail
            "
            class="image is-64x64"
          >
            <img :src="book.volumeInfo.imageLinks.thumbnail" alt="Book cover" />
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <strong>{{ book.volumeInfo.title }}</strong>
            <p v-if="book.volumeInfo && book.volumeInfo.authors">
              by {{ book.volumeInfo.authors.join(", ") }}
            </p>
            <p>{{ book.volumeInfo.description }}</p>
            <p v-if="book.saleInfo && book.saleInfo.listPrice">
              Price: {{ book.saleInfo.listPrice.amount }}
              {{ book.saleInfo.listPrice.currencyCode }}
            </p>
            <p v-if="book.saleInfo && book.saleInfo.buyLink">
              <a :href="book.saleInfo.buyLink" target="_blank">Buy here</a>
            </p>
          </div>
        </div>
      </article>
    </div>
    <div
      v-if="books.length === 0 && searchMade"
      class="notification is-warning"
    >
      No books found.
    </div>
    <div v-else-if="!searchMade" class="notification is-info">
      Please enter a search term to find books.
    </div>
  </div>
</template>

<script>
export default {
  props: {
    books: Array,
    searchMade: Boolean,
  },
  created() {
    console.log("Books on created:", this.books); // Debug books
  },
  watch: {
    books(newVal) {
      console.log("Books prop changed:", newVal); // Debug new books
    },
  },
};
</script>
