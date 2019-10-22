<template>
  <form>
    <div>
      <md-field>
        <label>City From</label>
        <md-input v-model="formData.cityFrom"></md-input>
      </md-field>
      <md-field>
        <label>City To</label>
        <md-input v-model="formData.cityTo"></md-input>
      </md-field>
      <md-datepicker
        v-on:md-closed="show($event)"
        v-on:md-opened="show($event)"
        v-model="formData.fromDate" 
        md-immediately />
      <md-datepicker
        v-on:md-closed="show($event)"
        v-on:md-opened="show($event)"
        v-model="formData.toDate" 
        md-immediately />
    </div>
    <md-button v-on:click="searchFlights" class="md-raised md-primary">Search</md-button>
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
    searchFlights() {

      // console.log(this.formData);
      this.$emit('searchDataUpdated', this.formData);
    }
  }
}
</script>

<style>

</style>