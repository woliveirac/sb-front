<template>
  <div class="student-list">
    <h1>Course Example Attendance</h1>
    <ul>
      <li v-for="student in students">
        {{ student.first_name + ' ' + student.last_name }}
        <toggle-button width="70" @change="onChangeEventHandler(student)" :value="(student.student_presences.length > 0 ? !!Number(student.student_presences[0].is_present) : false)" :labels="{checked: 'Present', unchecked: 'Absent'}"/>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'StudentsRoster',
  data () {
    return {
      students: []
    }
  },
  methods: {
    getStudents () {
      this.$http.get('http://127.0.0.1:8000/api/students').then(response => {
        this.students = response.data
      })
    },
    onChangeEventHandler (student) {
      if(student.student_presences.length === 0) {
        this.$http.post('http://127.0.0.1:8000/api/students/' + student.id + '/presence', {
          is_present: true
        }).then(response => {
          if(response.status === 201) {
            this.getStudents()
          }
        })
      } else {
        this.$http.patch('http://127.0.0.1:8000/api/students/' + student.id + '/presence', {
          is_present: !student.student_presences[0].is_present
        }).then(response => {
          if(response.status === 201) {
            this.getStudents()
          }
        })
      }
    }
  },
  created () {
    this.getStudents()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.student-list {
  margin: 0 auto;
  width: 600px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
}
h1 {
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #333;
}
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
li {
  margin-bottom: 10px;
  text-align: left;
  color: #333
}
</style>
