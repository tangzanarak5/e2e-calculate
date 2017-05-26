<template>
  <div class="hello">
    x:<input type="text" name="x" v-model="x">
    y:<input type="text" name="y" v-model="y">
    <button type="button" name="btnadd" @click="add()">+</button>
    <button type="button" name="btnminus" @click="minus()">-</button>
    <button type="button" name="btnmuti" @click="muti()">*</button>
    <button type="button" name="btndivi" @click="divi()">/</button>
    <button type="button" name="submit" @click="sub()">submit</button>
    <h1>{{sum}}</h1>
    {{check}}
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      x: '',
      y: '',
      sum: '',
      check: 0
    }
  },
  methods: {
    add () {
      this.check = 1
    },
    minus () {
      this.check = 2
    },
    muti () {
      this.check = 3
    },
    divi () {
      this.check = 4
    },
    sub () {
      if (this.check === 1) {
        this.sum = parseInt(this.x) + parseInt(this.y)
      }
      if (this.check === 2) {
        this.sum = parseInt(this.x) - parseInt(this.y)
      }
      if (this.check === 3) {
        this.sum = this.x * this.y
      }
      if (this.check === 4) {
        this.sum = this.x / this.y
      }
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
