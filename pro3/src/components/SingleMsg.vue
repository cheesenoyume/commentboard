<template>
<!-- 本页内容 -->
<!-- 显示单条留言 -->
  <div id="singlemsg">
      <h1>{{msg.title}}</h1>
      <h3>{{msg.body}}</h3>
    
  </div>
</template>


<script>
export default {
  name: 'singlemsg',
  data(){
      return{
        id:this.$route.params.id,
        msg:{}
      }
  },
  methods:{
    
  },
  created(){
    this.$ajax.get('http://jsonplaceholder.typicode.com/posts/'+this.id).then(resp=>{
        // console.log(resp.data);
        this.msg = resp.data;
    },function(){

    })
  }
  
}
</script>

<style>

</style>
