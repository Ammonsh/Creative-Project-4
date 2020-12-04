<template>
<div>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <BookList :books="books" />
</div>
</template>

<script>
import BookList from "../components/BookList.vue"
export default {
  name: 'Home',
  components: {
    BookList,
  },
  data() {
    return {
      searchText: '',
    } 
  },
  computed: {
    items() {
      return this.items.filter(book => 
        (book.title.toLowerCase().search(this.searchText) >= 0 
        || book.author.toLowerCase().search(this.searchText) >= 0
        || book.title.search(this.searchText) >= 0 
        || book.author.search(this.searchText) >= 0) 
        && book.finished == false);
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>