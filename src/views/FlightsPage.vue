<template>
  <div class="flights">
    <!-- <form>
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

    </form> -->
    <FlightSearchForm></FlightSearchForm>

    <div class="filtered">
      <div class="list">
        <FlightList 
          v-bind:flights="fliAAAA"
          v-on:incrementAA="incrementAAHandler($event)"></FlightList>
      </div>
      <!-- <div class="map">TODO: Reserved for google maps</div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Flight, RIX } from '../models/flight.model';
import FlightList from '../components/FlightList.vue';
import FlightSearchForm from '../components/FlightSearchFrom.vue'

export default {
  name: 'FlightsPage',
  components: {
    FlightList,
    FlightSearchForm
  },
  data() {
    return {
      
      fliAAAA: [{
        from: {
          airportCode: 'MRS',
          city: 'Marseille',
          country: 'France'
        },
        to: RIX,
        date: new Date(),
      }, 
      {
        from: {
          airportCode: 'VEN',
          city: 'Venecia',
          country: 'Italy'
        },
        to: RIX,
        date: new Date(),
      },
      {
        from: {
          airportCode: 'MRC',
          city: 'Agadir',
          country: 'Morocco'
        },
        to: RIX,
        date: new Date(),
      }] as Flight[]
    }
  },
  methods: {
    incrementAAHandler(ev: number) {
      console.log('incrementAAHandler got ', ev)
    },
    show(event:any) {
      console.log(event, this.fromDate, this.toDate);
    }
  }
}
</script>

<style scoped lang="scss">
  .error {
    font-weight: 700;
    color: red;
  }
  .flights {
    display: flex;
    flex-flow: column;
    form {
      // height: 100px;
      width: 100%;
      background-color: greenyellow;
    }
    .filtered {
      display: flex;
      justify-content: space-between;
      .map, .list {
        height: 100px;
        background-color: orange;
      }
    }
  }
  
</style>
