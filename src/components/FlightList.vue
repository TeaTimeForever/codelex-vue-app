<template>
  <div v-on:click="makeGetRequest">
    <div v-for="(flight, index) in flights"
         v-bind:key="index"
         v-bind:class="{error: flight.from.airportCode === 'MRS'}"
         >

    {{index}}
    {{flight.from.city}} - {{flight.to.city}}
    <span v-if="flight.from.country === 'France'">:)</span>
    <span v-else-if="flight.from.country === 'Morocco'">˚∂©∂∑∑´®ƒ</span>
    <span v-else>----</span>
    {{rates}}
    <input type="checkbox" v-model="flight.from.city">
  </div>
  <button v-on:click="increment()">Bebebe button</button>
  </div>
</template>

<script>
export default {
  name: 'FlightList',
  props: {
    flights: {
      type: [Array],
      default: []
    }
  },
  data() {
    return {
      i: 0,
      rates: {}
    }
  },
  methods: {
    increment() {
      this.i++;
      console.log('from FlightList', this.i);
      this.$emit('incrementAA', 'PARAM FROM CHILD');
    },
    async makeGetRequest() {
      const promiseLike = this.$http.get('https://api.exchangeratesapi.io/latest');
      let res = await promiseLike;
      let json = await res.json()
      this.rates = json.rates;
    }
  }
}
</script>

<style scoped>

</style>