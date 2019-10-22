<template>
  <form>
      <div>
        <md-datepicker
          v-on:md-closed="show($event)"
          v-on:md-opened="show($event)"
          v-model="fromDate" 
          md-immediately />
        <md-datepicker
          v-on:md-closed="show($event)"
          v-on:md-opened="show($event)"
          v-model="toDate" 
          md-immediately />
      </div>
    </form>
</template>

<script>
export default {
  name: "SearchForm",
  data(){
    return {
      formData: {
        toDate: new Date(),
        fromDate: new Date(),
        cityFrom: "Riga",
        cityTo: ""
      }
    }
  },
  methods: {
    
  }
}
</script>

<style>

</style>