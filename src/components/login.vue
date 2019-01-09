<template>
  <div class="hello">
    <div class="login">
      <input type="text" v-model.trim = 'mobile' ><br>
      <input type="password" v-model.trim = 'password' ><br>
      <button @click="login">登录</button>
      <button @click="close">关闭</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  computed: {
     
  },
  data () {
    return {
      mobile: '18612527736',
      password: '123456'
    }
  },
  methods:{
    login(){
      //这边做登录操作，然后登录成功后把个人信息暂存vuex
      this.$store.dispatch('addMyInfo' , { 'mobile' : this.mobile , 'password' : this.password });
      this.$store.dispatch('showLogin' , false);
    },
    close(){
      this.$store.dispatch('closeLogin', false)
    },
  }
}
</script>

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
.hello{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.5);
}
.login{
    position: fixed;
    left: 50%;
    top: 50%;
    margin-top: -85px;
    margin-left: -150px;
    z-index: 999;
    width: 300px;
    border-radius: 2px;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: white;
    text-align: center;
}

input{
  width: 200px;
  height:35px;
  border-radius: 2px;
  border:1px solid #8e8e8e;
  margin-top: 10px;
  padding-left: 5px;
}
button{
  width: 208px;
  height: 35px;
  background-color: #42b983;
  color:white;
  border-radius: 2px;
  border:0px;
  margin-top: 10px;
}
  .bg{
    background-color: black;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    position: fixed;
    top:0;
    left: 0;
  }
</style>
