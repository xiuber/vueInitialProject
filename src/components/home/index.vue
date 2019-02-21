<template>
    <div class="homeBox">
      <div>123</div>
      <!--<audio id="audioCoin" src="../../../static/audioCoin.mp3" style="display: none;"></audio>-->
    </div>
</template>
<script>
  import axios from 'axios'
  import {dataHostUrl} from '@/api/config'
  import {local} from '@/common/js/util';
  import {getHomeData} from '@/api/home';
  export  default{
      name: 'home',
      data () {
          return {
              uCoin:"",
              uPower:'',
              isShow:'',
              beans:'',
              token:'',
              userid:"",
              channelid:"",
              coinlist:'',
              province:'',
              city:'',
              area:''
          }
      },
      components: {},

      created: function () {
//          this.getData();
      },
      methods: {
          //获取地理位置
      }
  }





</script>
<style scoped>
  .homeBox {position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;font-family:"微软雅黑";background-size: cover;
    margin:0;font-size: .4rem}

</style>
