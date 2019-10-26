<template>
  <div class="header">      
    <md-toolbar class="md-primary">
      <md-button class="md-icon-button" @click="showNavigation = true">
        <md-icon>menu</md-icon>
      </md-button>
      <span class="md-title">Evend data: {{eventData}}</span>

      <div class="md-toolbar-section-end">
        <md-avatar >
          <img src="https://en.gravatar.com/userimage/27494756/d902c095db3e364698036521816cb125.png?size=200" alt="Avatar">
        </md-avatar>
      </div>
    </md-toolbar>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { bus } from '../main';

export default {
  name: 'Header',
  data(){
    return {
      eventData: ''
    }
  },
  created() {
    bus.$on('EmitWithBUS', (event) => {
      console.log(event)
      this.eventData = event;
    })
  }
}
</script>

<style scoped lang="scss">
.md-toolbar-section-end {
  .md-avatar {
    margin: 0;
  }
}
</style>
