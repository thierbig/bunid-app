<template>
  <div class="field has-addons">
    <div class="control is-expanded">
      <input
        class="input"
        type="text"
        v-model="internalQuery"
        @keyup.enter="onSearch"
        placeholder="Start typing the book title or author"
      />
    </div>
    <div class="control">
      <button class="button is-info" @click="onSearch">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  data() {
    return {
      internalQuery: this.value,
    };
  },
  watch: {
    value(newValue) {
      this.internalQuery = newValue;
    },
  },
  methods: {
    onSearch() {
      this.$emit("input", this.internalQuery);
      this.$emit("search");
    },
  },
};
</script>
