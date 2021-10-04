<template>
  <div align="center">
    <v-card elevation="8" max-width="460" class="my-15 rounded-lg" align="left">
      <v-card-title>{{ $t('shared.profile') }}</v-card-title>
      <v-row class="mx-4 py-8">
        <v-col>
          <v-card-text>
            <div class="title">{{ $t('profile.personalInfo') }}</div>
            <div class="subheading">
              <v-icon left>mdi-account</v-icon>
              {{ user.userInfo.username }}
            </div>
            <div class="grey--text">
              <v-icon left>mdi-email</v-icon>
              {{ user.userInfo.email }}
            </div>
          </v-card-text>
        </v-col>
        <v-col class="pl-0 pt-0">
          <v-responsive align="center">
            <v-avatar size="150">
              <img
                :src="
                  user.userInfo.avatar
                    ? user.userInfo.avatar
                    : require('../assets/avatar.png')
                "
                alt=""
              />
            </v-avatar>
          </v-responsive>
          <div align="center">
            <v-btn x-small @click="$refs.fileInput.$refs.input.click()">
              Change Avatar
            </v-btn>
            <v-file-input
              accept="image/*"
              truncate-length="1"
              ref="fileInput"
              class="d-none align-self-end"
            />
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'ProfilePage',
  data() {
    return {
      defaultAvatar: '../assets/avatar.png',
    };
  },
  methods: {
    // ...mapActions(['avatarUpload']),
    // onFileChange(imageFile) {
    //   this.avatarUpload(imageFile);
    // },
  },
  computed: mapGetters(['user']),
};
</script>

<style scoped>
/* .card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  border-radius: 5%;
} */
</style>
