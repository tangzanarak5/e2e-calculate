<template>
  <div class="hello container-fluid font">
    <div v-show = "count == '5'" class="row">
      <br>
      <div class=" col-md-offset-4 col-xs-12 col-sm-2 col-md-2 font">
        ใส่ชื่อวิชาที่เรียน
      <br>
      <input class="form-control" v-model = "subjectNumberOne.name" type="text" name="" value=""><br>
      <input class="form-control" v-model = "subjectNumberTwo.name" type="text" name="" value=""><br>
      <input class="form-control" v-model = "subjectNumberThree.name" type="text" name="" value=""><br>
      <input class="form-control" v-model = "subjectNumberFour.name" type="text" name="" value=""><br>
      <input class="form-control" v-model = "subjectNumberFive.name" type="text" name="" value="">
    </div>
    <div class="col-xs-12 col-sm-1 col-md-1 font">
      ใส่หน่วยกิต
    <br>
    <input class="form-control font" v-model = "subjectNumberOne.unit" type="text" name="" value=""><br>
    <input class="form-control" v-model = "subjectNumberTwo.unit" type="text" name="" value=""><br>
    <input class="form-control" v-model = "subjectNumberThree.unit" type="text" name="" value=""><br>
    <input class="form-control" v-model = "subjectNumberFour.unit" type="text" name="" value=""><br>
    <input class="form-control" v-model = "subjectNumberFive.unit" type="text" name="" value="">
    <br><br>
  </div>
  <div class="col-xs-12 col-sm-1 col-md-1 font">
    ใส่เกรด
  <br>
  <input class="form-control" v-model = "subjectNumberOne.grade" type="text" name="" value=""><br>
  <input class="form-control" v-model = "subjectNumberTwo.grade" type="text" name="" value=""><br>
  <input class="form-control" v-model = "subjectNumberThree.grade" type="text" name="" value=""><br>
  <input class="form-control" v-model = "subjectNumberFour.grade" type="text" name="" value=""><br>
  <input class="form-control" v-model = "subjectNumberFive.grade" type="text" name="" value="">
</div>
  </div>
  <div v-show = "count != 0">
    <button class="btn btn-primary" @click="calculateGradeTermOne(subjectNumberOne, subjectNumberTwo, subjectNumberThree, subjectNumberFour, subjectNumberFive)" type="button" name="button">คำนวน</button>
  </div>
  
  </div>
</template>

<script>
export default {
  props: ['count', 'subjectOne', 'calculateGradeTermOne'],
  data () {
    return {
      subjectNumberOne: {
        name: '',
        unit: '',
        grade: ''
      },
      subjectNumberTwo: {
        name: '',
        unit: '',
        grade: ''
      },
      subjectNumberThree: {
        name: '',
        unit: '',
        grade: ''
      },
      subjectNumberFour: {
        name: '',
        unit: '',
        grade: ''
      },
      subjectNumberFive: {
        name: '',
        unit: '',
        grade: ''
      }
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
