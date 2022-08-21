<template>
  <div>
    <button @click="increment">{{ count }}</button>
    <ul>
      <li v-for="dude in friends" v-bind:key="dude">{{ dude }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  // 상태: 앱을 작동하는 원본 소스
  data() {
    return {
      count: 10,
      friends: ['giri', 'wooni', 'seph', 'mini', 'bae'],
    }
  },
  mounted() {
    // this는 컴포넌트 인스턴스를 참조
    this.increment();
  },
  // 뷰: 상태의 선언적 매핑
  template: '<div>{{ count }}</div>',
  // 액션: 뷰에서 사용자 입력에 대해 반응적으로 상태 변겅
  methods: {
    increment: function() {
      this.count++;
    }
  }
}
</script>

<style>

</style>