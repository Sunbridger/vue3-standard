<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <div>{{foo}}</div>
    <div>
      <a-button type="primary" @click="handleClick">+1</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Statistics from '@souche-f2e/statistics-next'
import HelloWorld from '/@/components/HelloWorld.vue' // @ is an alias to /src
import { skyline, tgc } from '/services/'
import Const from '/const/'
import Utils from '/utils/'
import Store from '/store/'

export default defineComponent({
  data () {
    return {
      foo: 0
    }
  },
  components: {
    HelloWorld
  },
  mounted () {
    console.log(Const.TOKEN, 'const example')
    console.log(Store.state.inited, 'store example')
    Utils.getUserData()
    // 自定义plugin
    this.$logger('aaaa111')
    this.getData()
  },
  methods: {
    handleClick () {
      this.foo++
      this.$message.success(this.foo)
      Statistics.doStatistics({
        mobile: '15899993333',
        stage: 100
      })
    },
    getData () {
      skyline.getDepartmentList({
        spm: '1778.1.1.1',
        name: '1'
      }).then((res) => {
        console.log(res)
      })
      skyline.jxShow({
        agent: 6,
        spm: '1778.1.1.1',
        token: '8174mI_2g8u1Zv52Z'
      }).then((res: any) => {
        console.log(res, 'rrrr')
      })
      tgc.getDepartmentList({}).then((res) => {
        console.log(res, 'rrrrr')
      })
    }
  }
})
</script>
