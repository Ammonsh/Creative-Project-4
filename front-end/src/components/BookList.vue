<template>
<div class="wrapper">
  <div class="books">
    <div class="book" v-for="book in items" :key="book.id">
      <div class="info">
        <h1>{{book.title}}</h1>
        <p>{{book.author}}</p>
        <p>{{book.genre}}</p>
      </div>
      <div class="image">
        <img :src="book.path" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      items: [],
    }
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        console.log(error);
      }
    },
  },
  /*name: 'BookList',
  props: {
    books: Array
  }*/
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.books {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.book {
  margin: 10px;
  margin-top: 50px;
  width: 260px;
}

.book img {
  border: 2px solid #333;
  height: 410px;
  width: 260px;
  object-fit: cover;
}

.book .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #aaf0d1;
  color: #000;
  padding: 5px;
  height: 85px;
}

.info h1 {
  font-size: 16px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}

.auto {
  margin-left: auto;
}
</style>