<template>
  <div class="hello">
    <div class="myInfo">
      <p v-if='isHaveMobile'>欢迎您，{{mobile}}</p>
      <p v-if='isHaveMobile' @click="exit">退出</p>
      <p v-if='!isHaveMobile' @click='goLogin'>登录</p>
    </div>     

    <addTodo></addTodo>
    <todoList></todoList>

    <login v-if="isShowLogin"></login>
  </div>
</template>

<script>
import login from './login';
import addTodo from './addTodo';
import todoList from './todoList';
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  computed:{
    isShowLogin:function(){
      return this.$store.state.login.isShowLogin;
    },
    mobile: function () {
      return this.$store.state.login.mobile;
    },
    isHaveMobile: function () {
      let mobile = this.$store.state.login.mobile;
      if(mobile.length == 11){
        return true;
      }else{
        return false;
      }
    }
  },
  methods:{
    goLogin () {
      this.$store.dispatch('showLogin' , true);
    },
    exit(){
      this.$store.dispatch('exitLogin',{ 'mobile' : '' , 'password' : '' })
    },
  },
  components: {
    login,
    addTodo,
    todoList
  },
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
.logo{
    width: 200px;
    height: 200px;
    margin: 0 auto;
  }
  .myInfo{
    width: 200px;
    margin: 0 auto;
    text-align: center;
    overflow: hidden;
  }
</style>
