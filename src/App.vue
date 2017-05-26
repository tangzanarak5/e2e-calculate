<template>
  <div id="app" class="container-fluid font">
    <grade :addCountSubject = "addCountSubject" ></grade>
    <insert-grade :count = "count" :subjectOne = "subjectOne" :calculateGradeTermOne = "calculateGradeTermOne"></insert-grade>
<div class="row" v-show = "status == false">
  <div class="col-md-offset-3 col-sm-5 col-md-5 font">
    <br>
    <table class="table table-striped font">
      <tr>
        <td>วิชาที่ลงทะเบียน</td>
        <td>หน่วยกิต</td>
        <td>เกรด</td>
      </tr>
      <tr>
        <td>{{subjectOne.name}}</td>
        <td>{{subjectOne.unit}}</td>
        <td>{{subjectOne.grade}}</td>
      </tr>
      <tr>
        <td>{{subjectTwo.name}}</td>
        <td>{{subjectTwo.unit}}</td>
        <td>{{subjectTwo.grade}}</td>
      </tr>
      <tr>
        <td>{{subjectThree.name}}</td>
        <td>{{subjectThree.unit}}</td>
        <td>{{subjectThree.grade}}</td>
      </tr>
      <tr>
        <td>{{subjectFour.name}}</td>
        <td>{{subjectFour.unit}}</td>
        <td>{{subjectFour.grade}}</td>
      </tr>
      <tr>
        <td>{{subjectFive.name}}</td>
        <td>{{subjectFive.unit}}</td>
        <td>{{subjectFive.grade}}</td>
      </tr>
      <tr>
        <td></td>
        <td><h4><strong>เกรดเฉลี่ย</strong></h4></td>
        <td><h4><strong>{{total}}</strong></h4></td>
      </tr>
    </table>
  </div>
</div>
  </div>
</template>

<script>
import Grade from './components/Grade'
import InsertGrade from './components/InsertGrade'

export default {
  name: 'app',
  components: {
    Grade,
    InsertGrade
  },
  data () {
    return {
      status: true,
      count: '',
      subjectOne: {
        name: '',
        unit: '',
        grade: ''
      },
      subjectTwo: {
        name: '',
        unit: '',
        grade: ''
      },
      subjectThree: {
        name: '',
        unit: '',
        grade: ''
      },
      subjectFour: {
        name: '',
        unit: '',
        grade: ''
      },
      subjectFive: {
        name: '',
        unit: '',
        grade: ''
      },
      sum: 0,
      sum2: 0,
      sum3: 0,
      sum4: 0,
      sum5: 0,
      total: 0
    }
  },
  methods: {
    addCountSubject (number) {
      this.count = number
      console.log(this.count)
    },
    calculateGradeTermOne (totalSubjectOne, totalSubjectTwo, totalSubjectThree, totalSubjectFour, totalSubjectFive) {
      this.subjectOne.name = totalSubjectOne.name
      this.subjectOne.unit = totalSubjectOne.unit
      this.subjectOne.grade = totalSubjectOne.grade

      this.subjectTwo.name = totalSubjectTwo.name
      this.subjectTwo.unit = totalSubjectTwo.unit
      this.subjectTwo.grade = totalSubjectTwo.grade

      this.subjectThree.name = totalSubjectThree.name
      this.subjectThree.unit = totalSubjectThree.unit
      this.subjectThree.grade = totalSubjectThree.grade

      this.subjectFour.name = totalSubjectFour.name
      this.subjectFour.unit = totalSubjectFour.unit
      this.subjectFour.grade = totalSubjectFour.grade

      this.subjectFive.name = totalSubjectFive.name
      this.subjectFive.unit = totalSubjectFive.unit
      this.subjectFive.grade = totalSubjectFive.grade

      this.sum = (parseFloat(this.subjectOne.grade)) * (parseFloat(this.subjectOne.unit))
      this.sum2 = (parseFloat(this.subjectTwo.grade)) * (parseFloat(this.subjectTwo.unit))
      this.sum3 = (parseFloat(this.subjectThree.grade)) * (parseFloat(this.subjectThree.unit))
      this.sum4 = (parseFloat(this.subjectFour.grade)) * (parseFloat(this.subjectFour.unit))
      this.sum5 = (parseFloat(this.subjectFive.grade)) * (parseFloat(this.subjectFive.unit))

      this.sum6 = (parseFloat(this.subjectOne.unit)) + (parseFloat(this.subjectTwo.unit)) + (parseFloat(this.subjectThree.unit)) + (parseFloat(this.subjectFour.unit)) + (parseFloat(this.subjectFive.unit))

      this.total = (this.sum + this.sum2 + this.sum3 + this.sum4 + this.sum5) / this.sum6

      this.status = false
      this.count = ''
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import url('https://fonts.googleapis.com/css?family=Mitr:200');
.font {
  font-family: 'Mitr', sans-serif;
}
</style>
