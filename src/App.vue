<template>
  <v-app>
    <div id="container">
      <v-main>
        <router-view></router-view>
      </v-main>
    </div>
  </v-app>
</template>

<style lang="scss">
  #container {
    @media screen and (min-width: 1024px) {
      margin-left: 220px;
    }
    min-height: 100vh;
  }
</style>

<script>

