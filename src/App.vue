<template>
  <nav>
    <router-link :to="route.path" v-for="(route, index) in routes">
      {{route.meta.intro}}
    </router-link> 
  </nav>
  <div class="content">
    <router-view/>
  </div>
</template>



<script>
import {routes} from './router/index.js'
import { toRefs, reactive, ref } from 'vue'
export default {
  setup() {
    const allRoutes = ref(routes)
    return {
      allRoutes,
      routes
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100vh;
  height: 100%;
  padding: 20px;
}

nav {
  margin: 20px;
  border-right: 1px solid rgba(222,222,222,.1);
  height: 100%;
  padding: 20px;
  box-sizing: border-box;
  float: left;
  text-align: left;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  display: block;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.content {
  margin-left: 30px;
  border: 1px solid rgba(222,222,222,.1);
  overflow-x: scroll;
  padding: 20px;
  box-sizing: border-box;
  float: left;
}
</style>
