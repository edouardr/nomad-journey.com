<template>
  <header>
    <nav class="navbar navbar-expand-xs fixed-top navbar-dark site-header">
      <nuxt-link to="/" class="navbar-brand">
          <h1 class="sr-only">A Nomad Journey</h1>
          <img src="http://via.placeholder.com/80x80" alt="A Nomad Journey logo" />
      </nuxt-link>
      <button class="navbar-toggler" type="button" data-toggle="offcanvas">
        <span class="icon-bar"></span>
      </button>
      <div class="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto offcanvas-collapse--links">
          <li class="nav-item active">
            <nuxt-link to="/" class="nav-link" >
              Home
              <span class="sr-only">(current)</span>
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/intinerary" class="nav-link">
              Itinerary
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/destinations" class="nav-link">
              Destinations
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/portraits" class="nav-link">
              Portaits
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/about" class="nav-link">
              About Us
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="offcanvas-collapse--overlay"></div>
    </nav>
  </header>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator";

@Component({})
export default class Header extends Vue {
  @Prop() public menu;
}
</script>

<style scoped>
.navbar-toggler {
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: rgba(60, 60, 60, 0.8);
  padding: 5px 5px 10px 5px;
  margin-right: 5%;
  z-index: 900;
}

.navbar-toggler:focus {
  outline: 0;
}

.navbar-toggler .icon-bar,
.navbar-toggler .icon-bar:before,
.navbar-toggler .icon-bar:after {
  border-radius: 1px;
  height: 5px;
  width: 29px;
  background: white;
  position: absolute;
  display: block;
  content: '';

  transition: all 500ms ease-in-out;
}

.navbar-toggler .icon-bar:before {
  top: -10px;
}

.navbar-toggler .icon-bar:after {
  bottom: -10px;
}

.navbar-toggler.active .icon-bar {
  background-color: transparent;
}

.navbar-toggler.active .icon-bar:before,
.navbar-toggler.active .icon-bar:after {
  top: 0;
}

.navbar-toggler.active .icon-bar:before {
  transform: rotate(45deg);
}

.navbar-toggler.active .icon-bar:after {
  transform: rotate(-45deg);
}

.nav-underline .nav-link {
  padding-top: .75rem;
  padding-bottom: .75rem;
  font-size: .875rem;
  color: var(--secondary);
}

.nav-underline .nav-link:hover {
  color: var(--blue);
}

.nav-underline .active {
  font-weight: 500;
  color: var(--gray-dark);
}

.offcanvas-collapse {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  overflow-y: auto;
  background-color: #343a40;
  z-index: 850;

  transition: -webkit-transform .3s ease-in-out;
  transition: transform .3s ease-in-out;
  transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;
  -webkit-transform: translateX(100%);
  transform: translateX(100%);
}

.offcanvas-collapse--links {
  position: fixed;
  top: 56px;
}

.offcanvas-collapse--overlay {
  display: none;
  opacity: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(60, 60, 60, 0.85);
  z-index: 800;

  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}

.offcanvas-collapse--overlay.open {
  display: inline-block;
  opacity: 1;
}
@media (max-width: 768px) {
  .offcanvas-collapse.open {
      -webkit-transform: translateX(30%);
      transform: translateX(30%);
      /* Account for horizontal padding on navbar */
  }
}

@media (min-width: 768px) {
  .offcanvas-collapse.open {
      -webkit-transform: translateX(70%);
      transform: translateX(70%);
      /* Account for horizontal padding on navbar */
  }
}
</style>
