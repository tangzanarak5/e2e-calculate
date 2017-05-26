<template>
  <div class="hello font">
      <h1>คำนวณเกรดเทอม 1</h1><br>
      <div class="row">
  <div class="col-md-4 col-md-offset-4" >
    <div class="form-group">
    <label class="sr-only" for="exampleInputAmount">Amount (in dollars)</label>
    <div class="input-group">

      <input v-model = "number" type="text" class="form-control" id="exampleInputAmount" placeholder="จำนวนวิชาที่ลงทะเบียน">
      <div class="input-group-addon"></div>
    </div>
  </div>
  <button @click = "addCountSubject(number)" type="submit" class="btn btn-primary">ตกลง</button>
  </div>
</div>


  </div>
</template>

<script>
export default {
  props: ['addCountSubject'],
  data () {
    return {
      number: ''
    }
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
