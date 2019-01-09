<template>
  <div>
    <div class="todoList">
      <p v-for="todo in todoList" class="todoItem" :key="todo.id">
        <span :class="{ 'isDone': todo.isDone }" @click="doneTodo(todo.id)">{{todo.text}}</span>
      </p>
    </div>
    <div class="select-section">
      <span :class="{ 'select-type': selected == '0' , 'select': true }" @click="selectType('0')">全部</span>
      <span :class="{ 'select-type': selected == '1' , 'select': true}" @click="selectType('1')">已完成</span>
      <span :class="{ 'select-type': selected == '2' , 'select': true}" @click="selectType('2')">未完成</span>
    </div>
  </div>
</template>

<script>
    export default{
        data(){
            return{

            }
        },
        computed:{
            todoList() {
                let selected = this.$store.state.todo.selected;
                if(selected == '0'){
                    return this.$store.state.todo.todoList;
                }else if(selected == '1'){
                    return this.$store.getters.filterDoned;  //根据不同类型的选择，返回不同todolist
                }else if(selected == '2'){
                    return this.$store.getters.filterNoDoned;
                }
            },
            selected() {
                return this.$store.state.todo.selected;
            },
        },        
        methods:{
            doneTodo(id) {
                this.$store.dispatch('doneTodo' , id);
            },
            selectType(type) {
                if(type){
                    this.$store.dispatch('selectType' , type);
                }
            }
        }
    }
</script>

<style>
  .todoList{
    width: 290px;
    min-height: 140px;
    margin:40px auto;
    padding-left: 5px;
    padding-top: 5px;
    margin-top: 20px;
    margin-bottom: 50px;
  }
  .todoItem{
    width: 95%;
    height: 20px;
    color: #42b983;
    border-bottom: 1px solid #b8b8bf;
    padding-bottom: 5px;
  }
  .isDone{
    color: #000;
    text-decoration: line-through;
  }
  .select-type{
    background-color: #42b983;
    color:white;
  }
  .select{
    display: inline-block;
    width: 60px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    margin-top: 10px;
  }
  .select-section{
    width: 300px;
    height: 40px;
    margin: 0 auto;
    margin-top : -40px;
  }
</style>
