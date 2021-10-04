<template>
  <v-app-bar app flat>
    <v-layout class="hidden-xs-only">
      <v-btn :ripple="false" to="/" plain>
        {{ $t('shared.home') }}
      </v-btn>
      <v-btn :ripple="false" to="/profile" plain>
        {{ $t('shared.profile') }}
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        plain
        @click="logoutUser"
        :ripple="false"
        to="/login"
        :style="[user.loggedIn ? { background: '#ff6060' } : '']"
      >
        {{ user.loggedIn ? $t('navBar.signout') : $t('shared.signin') }}
      </v-btn>
      <Languages />
    </v-layout>
    <div class="hidden-sm-and-up ml-auto">
      <v-menu min-width="100%">
        <template v-slot:activator="{ on, attrs }">
          <v-icon class="mb-1" v-bind="attrs" v-on="on">mdi-menu</v-icon>
        </template>
        <v-list align="center" class="hidden-sm-and-up">
          <v-list-item>
            <v-btn min-width="100%" :ripple="false" to="/" plain>
              {{ $t('shared.home') }}
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn min-width="100%" :ripple="false" to="/profile" plain>
              {{ $t('shared.profile') }}
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn
              min-width="100%"
              plain
              @click="logoutUser"
              :ripple="false"
              to="/login"
              :style="[user.loggedIn ? { background: '#ff6060' } : '']"
            >
              {{ user.loggedIn ? $t('navBar.signout') : $t('shared.signin') }}
            </v-btn>
          </v-list-item>
          <Languages />
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Languages from './Languages.vue';
export default {
  name: 'Header',
  components: {
    Languages,
  },
  computed: mapGetters(['user']),
  methods: {
    ...mapActions(['logout']),
    logoutUser() {
      if (this.user.loggedIn) {
        this.logout();
      }
    },
  },
};
</script>

<style scoped>
.router-link-exact-active {
  background-color: #616161;
}
</style>
