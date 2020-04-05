<template>
<!-- 本页内容 -->
<!-- 把所有留言显示出来 -->
  <div id="mainmsg">
    <p>留言板</p>
    <!-- 搜索框 -->
    <input type="text" v-model="search" placeholder="输入搜索内容">
    <div v-for="item in filterdMsgs" class="oneMsg">
        <router-link v-bind:to="'/singlemsg/'+item.id">
          <h3>title:{{item.title}}</h3>
          <!-- 在main.js设置了自定义过滤，让长度0-100 -->
          <p>{{item.body | snippet}}</p>
        </router-link>
    </div>
  </div>
</template>


<script>
import AddMsg from './AddMsg.vue'

export default {
  name: 'mainmsg',
  components: {
    "addmsg":AddMsg
  },
  data(){
      return{
         msgs:[],
         search:""
      }
  },
  methods:{
    
  },
  created(){
      //请求数据，这里也可以用sample.json
      this.$ajax.get('http://jsonplaceholder.typicode.com/posts').then(resp=>{
      // console.log(resp.data);
      this.msgs = resp.data;
      },function(err){})
  },
  computed:{
    filterdMsgs:function(){
      // 和搜索内容匹配才显示
      return this.msgs.filter((msgs)=>{
        return Boolean(msgs.title.match(this.search));
      });
    }
  }
}
</script>

<style>
.oneMsg{
  border:1px solid red;
}
</style>
