<template>
<!-- 本页内容： -->
<!-- 添加留言，下方有页面预览。点击匿名下面的文本框消失，提交后向数据库传数据，然后返回到MainMsg页面 -->
  <div id="addmsg">
      <h2>给我留言吧！</h2>
      <form action="">
          <label for="">留言标题</label><br>
          <input type="text" v-model="msg.title"><br>
          <label for="">留言内容</label><br>
          <textarea v-model="msg.content"></textarea><br>
          <label for="">昵称</label><br>
          <label for="anonymity">·匿名</label><input id="anonymity" type="checkbox" @change="noShow"><br>
          <input type="text" v-model="msg.name" v-if="isShow"><br>
          <label for="">职业</label><br>
          <select v-model="msg.job">
            <option v-for="item in jobs">
                {{item}}
            </option>
          </select>
          <!-- 按下后给MainMsg传值 -->
          <!-- @click.prevent防止自动刷新 -->
          <button @click.prevent="submitData">提交</button>
          
      </form>
      <hr>
      <!-- 页面预览 -->
      <div id="right">
          <p>预览</p>
          <p>{{msg.title}}</p>
          <p>{{msg.content}}</p>
          <p>{{msg.name}}</p>
          <p>{{msg.job}}</p>

      </div>
  </div>
</template>

<script>

export default {
  name: 'addmsg',
  data(){
      return {
          isShow:true,
          jobs:["前端","后端","测试","游客"],
          msg:{
          title:"",
          content:"",
          name:"",
          job:""
          }
      }
  },
  methods:{
      //在选择了匿名之后，填写匿名的文本框消失
      noShow:function(){
        //   alert("ds");
          this.isShow=!this.isShow;
          //如果匿名，默认起名为无名大侠
          if(this.isShow==false){
              this.msg.name="无名大侠";
          }else{
              //不匿名就把文本框空着
               this.msg.name="";
          }
      },
      submitData:function(){
        //  向数据库传值
        this.$ajax.post("http://jsonplaceholder.typicode.com/posts",{title:this.msg.title,body:this.msg.content}).then(function(resp){

        },function(err){})
        //提交完跳到MainMsg
        alert("添加成功！");
        location.href="/mainmsg";
      }
      
  }
}
</script>

<style>
button{
    width:60px;
    height:30px;
}
</style>
