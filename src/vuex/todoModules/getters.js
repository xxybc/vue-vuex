export default{
    filterDoned (state) { //已完成的todo
        let todoList = state.todoList.filter((item)=>{
            if(item.isDone){
              return item;
            }
        });
        return todoList;
    },
    filterNoDoned (state) {
      let todoList = state.todoList.filter((item)=>{
        if(!item.isDone){
          return item;
        }
      });
      return todoList;
    }
}