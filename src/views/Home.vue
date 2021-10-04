<template>
  <v-layout wrap>
    <v-flex xs12 sm3 md2 lg2 xl2>
      <v-container>
        <v-sheet rounded="lg">
          <v-list color="transparent">
            <v-list-item v-for="sideBarItem in sideBar" :key="sideBarItem" link>
              <v-list-item-content @click="changeTab(sideBarItem)">
                <v-list-item-title> {{ sideBarItem }} </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <div v-if="tab === 'Feed'">
              <v-divider class="my-2 hidden-sm-and-down"></v-divider>
              <v-list-item
                link
                color="grey lighten-4"
                @click="refreshPosts"
                class="hidden-sm-and-down"
              >
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
      </v-container>
    </v-flex>

    <v-flex xs12 sm9 md10 lg10 xl10>
      <v-container>
        <v-sheet min-height="70vh" rounded="lg">
          <PostList v-if="tab === 'Feed'" />
          <AddPost
            v-else-if="tab === 'Add Post'"
            @refreshPosts="refreshPosts"
          />
          <div v-else class="pa-16">
            <v-alert text outlined color="deep-orange" icon="mdi-fire">
              This page is under development! Content will be added soon!
            </v-alert>
          </div>
        </v-sheet>
      </v-container>
    </v-flex>
  </v-layout>
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
