<template>
    <md-card>
      <form>
      <md-card-header>
        <div class="md-title">Card without hover effect</div>
      </md-card-header>

      <md-card-content>
        <md-autocomplete v-model="value" :md-options="countries" @md-selected="handleUserSelection" @md-changed="getCountries" @md-opened="getCountries">
          <label>Country</label>
          <template slot="md-autocomplete-item" slot-scope="{ item }">{{ item.city }}</template>
        </md-autocomplete>
        <md-field>
          <label>City From</label>
          <md-input v-model="formData.codeFrom"></md-input>
        </md-field>
        <md-field>
          <label>City To</label>
          <md-input v-model="formData.codeTo"></md-input>
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
      </md-card-content>

      <md-card-actions>
        <md-button v-on:click="searchFlights" class="md-raised md-primary">Search</md-button>
      </md-card-actions>
      </form>
    </md-card>
</template>

<script lang="ts">
export default {
  name: "SearchForm",
  data() {
    return {
      formData: {
        toDate: new Date(),
        fromDate: new Date(),
        codeFrom: "STD",
        codeTo: "RIX"
      },
      value: null,
      countryList: [
        {
          id: 1,
          name: 'Algeria'
        },
        {
          id: 2,
          name: 'Argentina'
        }
      ],
      countries: []
    }
  },

  //get: api/airports/
  methods: {
    searchFlights() {
      this.$emit('searchDataUpdated', {...this.formData});
    },
    show (ev) {
      console.log('show', ev)
    },
    handleUserSelection(event) {
      console.log('selected event', event)
      console.log('selected 1', this.value);
      this.value = this.value.city;
    },  
    getCountries (searchTerm) {
        console.log('value', this.value)
        this.countries = new Promise(resolve => {
          window.setTimeout(async () => {
            if (!searchTerm) {
              resolve(this.countryList)
            } else {
              const term = searchTerm.toLowerCase()
              let searchRes = await this.$http.get(`http://192.168.8.112:8080/api/airports?search=${searchTerm}`);
              let result = (await searchRes.json()) as Array<any>;
              // const variants = result.reduce((acc, cur) => [{id: cur.code, name: cur.city}, ...acc], []);
              // console.log(variants);
              resolve(result);
            }
          }, 500)
        });
        // this.countries.then(res => console.log('JAJAJA', res));
        console.log()
      }

  }
}
</script>

<style lang="scss" scoped>
.md-card-content {
  display: flex;
}

</style>