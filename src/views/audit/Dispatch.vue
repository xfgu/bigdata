<template>
    <section>Dispatch</section>
</template>

<script>
  export default {
    name: 'Dispatch',
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
