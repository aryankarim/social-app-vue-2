<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-sheet rounded="lg">
          <v-list color="transparent">
            <v-list-item v-for="sideBarItem in sideBar" :key="sideBarItem" link>
              <v-list-item-content @click="changeTab(sideBarItem)">
                <v-list-item-title> {{ sideBarItem }} </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <div v-if="tab === 'Feed'">
              <v-divider class="my-2"></v-divider>
              <v-list-item link color="grey lighten-4" @click="refreshPosts">
                <v-list-item-content>
                  <v-list-item-title>
                    Refresh
                    <v-icon class="mb-1">mdi-refresh</v-icon>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-list>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet min-height="70vh" rounded="lg">
          <PostList v-if="tab === 'Feed'" />
          <AddPost v-else-if="tab === 'Add Post'" />
          <div v-else class="pa-16">
            <v-alert text outlined color="deep-orange" icon="mdi-fire">
              This page is under development! Content will be added soon!
            </v-alert>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';
import PostList from '../components/PostList.vue';
import AddPost from '../components/AddPost.vue';

export default {
  name: 'Home',
  components: {
    PostList,
    AddPost,
  },
  data() {
    return {
      sideBar: ['Feed', 'Add Post', 'Messeges', 'Setting'],
      tab: 'Feed',
    };
  },
  methods: {
    ...mapActions(['fetchPosts']),
    refreshPosts() {
      this.fetchPosts();
    },
    changeTab(newTab = 'Feed') {
      this.tab = newTab;
    },
  },
  created() {
    this.fetchPosts();
  },
};
</script>
