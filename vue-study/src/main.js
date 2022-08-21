import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
/**
 * mount() 메소드가 호출되기 전까지 애플리케이션 인스턴스는 아무것도 렌더링하지 않음
 * mount() 메소드는 앱의 모든 confiurations, asset registrations이 완료된 후 호출됨
 * 
 */