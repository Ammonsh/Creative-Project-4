<template>
  <div id="app">
    <div id="menu">
      <div id="title">
        <h1>All of Ammon's Books</h1>
      </div>
      <div id="brand">
        <router-link to="/">
          <img src="/images/book.png">
        </router-link>
      </div>
    </div>
    <router-view />
    <div class="footer">
      <router-link to="/admin">Admin</router-link>
      <div>
        <a href="https://github.com/Ammonsh/Creative-Project-4.git">Github Repository</a>
      </div>
    </div>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 50px 100px;
}

#github {
  align-items: right;
}

#menu {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #333;
}

#brand {
  grid-area: 2 / 2;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#side {
  grid-area: 3 / 2;
  display: flex;
  justify-content: center;
}

#side img {
  width: 50px;
}

#title {
  grid-area: 1 / 2;
  margin-left: auto;
  margin-right: auto;
}

.icon {
    font-size: 30px; 
    color: #aaf0d1;
    margin-left: auto;
    margin-right: auto;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}

.content {
  padding: 20px 100px;
  min-height: 500px;
}

.footer {
  height: 70px;
  padding: 20px 100px 0px 100px;
  background: tan;
  font-size: 12px;
}

</style>
