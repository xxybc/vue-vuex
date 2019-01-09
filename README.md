# y

> y

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


说明：
    一个利用vue、vue-router、vuex、webpack构建的如何使用vuex的栗子

    login是简单写法
    todolist是module写法

    1.如果要使用router和vuex,首先需要在main.js中引入并注册
    2.router文件夹下的index.js是router的用法
    3.store.js是对module模块的引用方式
    4.loginModules文件夹下的login.js是单文件包含vuex中的state、getters、mutations、acitons以及使用方法
    5.todoModules文件夹下的index.js是对state、getters、mutations、acitons的引用,如果还不清楚每个的功能和使用方式,请参考官网https://vuex.vuejs.org/zh/guide/state.html

    例子虽然简单，但清楚的说明了使用方式，但仍建议手敲一遍，会更容易理解。
    如果你是琢磨了很久vuex，但一直不知道如何下手，学了本例子应该就可以试试了，若对你有帮助，希望能给我个star,你的认可是我莫大的鼓励，谢谢。
