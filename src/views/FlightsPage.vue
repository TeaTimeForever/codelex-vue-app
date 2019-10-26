<template>
  <div class="flights">
    <!-- v-on:searchDataUpdated="handleSearchForm($event)" -->
    <FlightSearchForm ></FlightSearchForm>

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
          code: 'MRS',
          city: 'Marseille',
          country: 'France'
        },
        to: RIX,
        date: new Date(),
      }, 
      {
        from: {
          code: 'VEN',
          city: 'Venecia',
          country: 'Italy'
        },
        to: RIX,
        date: new Date(),
      },
      {
        from: {
          code: 'MRC',
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
      console.log('FlightsPage got ', ev)
    },
    async handleSearchForm(ev: any) {
      const searchData = await ev;
      const requestBody = {
        from: searchData.codeFrom,
        to: searchData.codeTo,
        departureDate: searchData.fromDate.toLocaleDateString().split('/').reverse().join('-')
      };
      console.log(requestBody)
      const res = await this.$http.get(
        'http://192.168.8.112:8080/api/flights/5'
      );
      console.log(await res.json())
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
        // height: 100px;
        background-color: orange;
      }
    }
  }
  
</style>
