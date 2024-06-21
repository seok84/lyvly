<template></template>

<script>
let $s, vm;

export default {
  head() {
    return {
      script: [],
      link: []
    }
  },
  beforeCreate() {
    // 기존 Vue로 작성된 스크립트 실행시 적용
    $s = this.$saleson;
    vm = this;
  },
  data() {
    return {
      data: 'data'
    }
  },
  methods: {
  },
  mounted() {
    this.$nextTick(function() {

    });
  }
}
</script>