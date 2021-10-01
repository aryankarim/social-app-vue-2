<template>
  <v-app>
    <Header />
    <v-main class="grey lighten-3">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';
import Header from './components/Header.vue';
export default {
  name: 'App',
  components: {
    Header,
  },
  methods: {
    ...mapActions(['verifyLogin']),
  },
  created() {
    this.verifyLogin().then((logged) => {
      if (logged) {
        this.$router.push('/');
      }
    });
  },
};
</script>
