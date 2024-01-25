<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </nav> -->
    <b-navbar
      v-if="$route.name != route.HOME && $route.name != route.LOGIN && $route.name != route.REGISTER"
      toggleable="lg"
      type="dark"
      variant="info"
    >
      <!-- Left aligned nav items -->
      <b-navbar-nav class="nav">
        <b-navbar-brand>
          <b-link
            href="#"
            style="color: inherit; text-decoration: inherit;"
            @click="goToMain"
          >
            Lernumgebung
          </b-link>
        </b-navbar-brand>
      </b-navbar-nav>

      <b-navbar-toggle target="nav-collapse" />
      <b-collapse
        id="nav-collapse"
        is-nav
      >
        <!-- Centered aligned nav items -->
        <b-navbar-nav class="d-none d-md-block mx-auto">
          <b-nav-text>
            &nbsp;
          </b-nav-text>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav>
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>{{ username }}</em>
            </template>
            <b-dropdown-item
              href="#"
              to="/game-map"
            >
              Spielkarte
            </b-dropdown-item>
            <b-dropdown-item
              href="#"
              to="/credits"
            >
              Credits
            </b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item
              href="#"
              @click="quit"
            >
              Quit
            </b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<script>
import route from '@/router/route'

export default {
  components: {},
  data() {
    return {
      route,
    }
  },
  computed: {
    username() {
      return this.$store.getters.getUsername
    },
  },
  methods: {
    goToMain() {
      this.$router.push({
        path: '/main',
      })
    },
    quit() {
      localStorage.removeItem('username')
      this.$router.push({
        path: '/',
      })
    },
  },
}
</script>

<style lang="scss">
@import "@/assets/scss/variables";

#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $dark;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

nav {
  color: #a7cad4;
  //   padding: 30px;

  //   a {
  //     font-weight: bold;
  //     color: #2c3e50;

  //     &.router-link-exact-active {
  //       color: #42b983;
  //     }
  //   }
}

</style>
