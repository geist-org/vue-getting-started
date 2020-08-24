<template>
  <div class="zi-layout">
    <zi-card style="width: 400px">
      <p>我的第一个 Geist UI 应用，看起来不错</p>
      <zi-button>按钮 1</zi-button>
      <zi-spacer />
      <zi-button type="success">按钮 2</zi-button>
    </zi-card>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
