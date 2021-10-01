<template>
  <v-form @submit.prevent="addPost" align="right">
    <v-text-field
      class="pa-16 pb-0"
      label="New Post"
      v-model="text"
      :placeholder="$t('home.writePost')"
      outlined
    ></v-text-field>
    <Alert
      :feedbackMessage="feedbackMessage"
      :type="type"
      v-if="feedbackAlert"
    />
    <hr />
    <v-btn
      type="submit"
      :value="$t('home.publishPost')"
      color="blue darken-1"
      class="ma-4 mr-16 white--text"
    >
      Upload
      <v-icon right dark>
        mdi-send
      </v-icon>
    </v-btn>
  </v-form>
</template>

<script>
import Alert from './Alert.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  components: {
    Alert,
  },
  data() {
    return {
      feedbackAlert: false,
      text: '',
      feedbackMessage: '',
      type: '',
    };
  },
  computed: mapGetters(['user']),
  methods: {
    ...mapActions(['addNewPost']),
    addPost() {
      if (this.text.length > 150) {
        this.showFeedback('Text is too long!', 'error');
        return;
      }
      this.addNewPost({
        text: this.text,
        userId: this.user.userInfo.id,
        username: this.user.userInfo.username,
      });
      this.text = '';
      this.showFeedback('New post has been published!', 'success');
    },
    showFeedback(message, type) {
      this.feedbackMessage = message;
      this.type = type;
      this.feedbackAlert = true;
      setTimeout(() => {
        this.feedbackAlert = false;
      }, 3000);
    },
  },
};
</script>
