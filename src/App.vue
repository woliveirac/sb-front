<template>
  <div id="app">
    <students-roster></students-roster>
  </div>
</template>

<script>
import StudentsRoster from './components/StudentsRoster'

export default {
  name: 'App',
  components: {
    StudentsRoster
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #caced2;
  margin-top: 60px;
}
</style>
