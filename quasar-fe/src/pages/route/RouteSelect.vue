<template>
  <q-page id="routeSelect">
    <q-toolbar class="text-grey-9">
      <q-toolbar-title>
        Toolbar
      </q-toolbar-title>
      <q-btn flat round dense icon="more_vert"></q-btn>
    </q-toolbar>
    <transition
    appear
    enter-active-class="animated fadeInRight"
    leave-active-class="animated fadeOutRight"
    >
    <div class="form-style q-pa-md">
      <div class="text-h6">Where would you like to go?</div>
      <q-input class="q-pt-lg" v-model="from_route" outlined stack-label label="From" placeholder="Cafetaria, beach..">
        <template v-slot:append>
          <q-icon name="close" @click="from_route=''" class="cursor-pointer" />
        </template>
      </q-input>
      <q-input class="q-pt-md" v-model="to_route" outlined stack-label label="To" placeholder="Some place..">
        <template v-slot:append>
          <q-icon name="close" @click="to_route=''" class="cursor-pointer" />
        </template>
      </q-input>
      <div class="q-pt-xl">
        <q-btn class="full-width bg-primary text-white">Search</q-btn>
      </div>

    </div>
  </transition>

  </q-page>
  <router-view/>
</template>

<script setup>
  import {ref} from "vue";
  const from_route = ref("")
  const to_route = ref("")
</script>

<style lang="scss">
#routeSelect {
  .form-style{
    margin: 0 auto;
    height: calc(100vh - 100px);
    max-width: 500px;
  }
}
</style>
