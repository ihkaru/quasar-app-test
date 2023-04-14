<template>
  <q-layout view="lHh Lpr lFf" id="route-page">
    <q-header elevated class="bg-white">
      <q-toolbar>
        <q-toolbar-title class="text-blue">EV Charge Map</q-toolbar-title>
        <q-btn round dense color="grey-9" flat icon="login"></q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
        <router-view/>
    </q-page-container>
    <q-footer class="bg-white" elevated dense no-caps>
      <q-tabs>
        <q-route-tab dense class="text-grey-7" active-class="active-footer-tab" to="/map" label="Map" icon="explore"></q-route-tab>
        <q-route-tab dense class="text-grey-7" active-class="active-footer-tab" name="/route" to="/route" label="Routes" icon="directions"></q-route-tab>
        <q-route-tab dense class="text-grey-7" active-class="active-footer-tab" to="/auth" label="Auth" icon="login"></q-route-tab>
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script setup>

  function activeFooterTab(el){
    console.log(el.srcElement.classList.add("active-footer-tab"));
  }
</script>

<style lang="scss">
.active-footer-tab {
    color: $blue-7 !important;
  }
  ::-webkit-scrollbar {
   display: none;
}
</style>
