<!-- vue + tab 하면 기본 템플릿 형식 반환 -->
<template>
  <div>
    <!-- <app-header v-bind:프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header 
      v-bind:propsdata="str"
      v-on:renew="renewStr"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
export default {
  data: function() {
    return {
      str: 'hi',
    }
  },
  components: {
    'app-header': AppHeader,
  },
  methods: {
    renewStr: function() {
      this.str = 'Renew???';
    }
  }
}
</script>

<style>

</style>