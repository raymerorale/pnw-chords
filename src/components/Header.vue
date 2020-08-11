<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dark
    >
      <v-app-bar-nav-icon class='d-block d-sm-none' @click='drawer = true'></v-app-bar-nav-icon>

      <v-toolbar-title>
        <a href='/' class='white--text'>
          Chord Hero
        </a>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      
      <!-- <v-btn to='/create' class='d-none d-sm-block mr-2' icon>
        <v-icon class='mt-3'>mdi-music-note-plus</v-icon>
      </v-btn>
      <v-btn class='d-none d-sm-block' icon>
        <v-icon>mdi-heart-multiple</v-icon>
      </v-btn> -->
      
       <!-- <v-text-field
          light
          rounded
          class='searchbox d-none d-sm-block'
          background-color='white'
          append-icon="mdi-magnify"
        ></v-text-field> -->
        <v-btn depressed color="deep-purple accent-4">Login</v-btn>

        
      
    </v-app-bar>
    <v-navigation-drawer v-model='drawer' absolute temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Praise & Worship
          </v-list-item-title>
          <v-list-item-subtitle>
            Chords
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :href="item.link"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      drawer: false,
      items: [
        { title: 'Add Songs', icon: 'mdi-music-note-plus', link: '/create' },
        { title: 'Favorites', icon: 'mdi-heart-multiple'  },
        { title: 'About', icon: 'mdi-help-box' },
      ],
      right: null,
    }
  },
  methods: {
  }
}
</script>
<style>
.searchbox {
  margin: 20px 0 0 10px !important;
  max-width: 250px !important;
}
</style>
