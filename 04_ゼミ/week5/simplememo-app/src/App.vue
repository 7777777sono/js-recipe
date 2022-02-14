<template>
  <!-- <simple-memo>
    <button>メモ１ボタン</button>
  </simple-memo>
  <simple-memo>
    <div>メモ２−１です</div>
    <div>メモ２−２です</div>
  </simple-memo> -->
  <!-- <simple-memo bgColor="orange">オレンジ</simple-memo>
  <simple-memo bgColor="pink">ピンク</simple-memo>
  <simple-memo bgColor="green">みどり</simple-memo> -->
  <!-- <simple-memo colorType="orange">オレンジ</simple-memo>
  <simple-memo colorType="pink">ピンク</simple-memo>
  <simple-memo colorType="green">みどり</simple-memo> -->
  <simple-memo v-for="memo in memos" v-bind:key="memo.id" v-bind:memo="memo" />
</template>

<script>
  import SimpleMemo from "@/components/SimpleMemo.vue"
  export default {
    components: { SimpleMemo },
  data() {
      return {
        memos: [
          { id: 0, text: "今日のメモ", createdAt: Date.now() },
          { id: 1, text: "今週のメモ", createdAt: Date.now() - 60 * 60 * 24 * 3 },
          { id: 2, text: "大昔のメモ", createdAt: Date.now() - 60 * 60 * 24 * 30 },
        ],
      }
    },
  }
</script>

<style>

</style>
