<template>
  <section>
    <div v-for="item in list" :key="item.id">
      {{ item }}
    </div>
  </section>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'Operate',
    data () {
      return {
        list: [],
        pageInfo: {
          pageNum: 1,
          pageSize: 2
        }
      }
    },
    created () {
      this.operate(this.pageInfo)
    },
    methods: {
      async operate (params) {
        try {
          this.list = await this.$axios.get('/audit/audit/getOperationLog', { params })
          console.log(this.list)
        }
        catch (e) {
          console.log(e)
        }
      }
    },
  }
</script>

<style scoped>

</style>
