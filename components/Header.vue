<template>
  <b-navbar toggleable="xs" type="dark" fixed="top">
    <b-navbar-brand href="#">
          <h1 class="sr-only">A Nomad Journey</h1>
          <img src="http://via.placeholder.com/80x80" alt="A Nomad Journey logo" />
    </b-navbar-brand>

    <b-btn v-b-toggle.offcanvas
           :class="'navbar-toggler ' + (isOpen ? 'active' : '')"
           aria-controls="offcanvas"
           :aria-expanded="isOpen ? 'true' : 'false'"
           @click="isOpen = !isOpen">
        <span class="icon-bar"></span>
    </b-btn>

    <b-collapse is-nav id="offcanvas" class="offcanvas-collapse">
      <b-navbar-nav class="mr-auto offcanvas-collapse--links">
        <li :key="menu.title" class="nav-item" v-for="menu in items">
          <b-link :to="menu.url"
                  class="nav-link"
                  @click="isOpen = false">
            {{menu.title}}
            <span class="sr-only">(current)</span>
          </b-link>
        </li>
      </b-navbar-nav>
    </b-collapse>

    <div :class="'offcanvas-collapse--overlay ' + (isOpen ? 'show' : '')"
      v-b-toggle="'offcanvas'"
      @click="isOpen = false"></div>
  </b-navbar>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Vue,
} from "nuxt-property-decorator";
import { State } from "vuex-class";

@Component({})
export default class Header extends Vue {
  @State public items: any[];
  public isOpen: boolean = false;
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

@media (max-width: 768px) {
  .offcanvas-collapse.show {
    -webkit-transform: translateX(30%);
    transform: translateX(30%);
  }
}

@media (min-width: 768px) {
  .offcanvas-collapse.show {
    -webkit-transform: translateX(70%);
    transform: translateX(70%);
  }
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

  -webkit-transition: all 0.8s ease-in-out;
  -moz-transition: all 0.8s ease-in-out;
  -ms-transition: all 0.8s ease-in-out;
  -o-transition: all 0.8s ease-in-out;
  transition: all 0.8s ease-in-out;
}

.offcanvas-collapse--overlay.show {
  display: inline-block;
  opacity: 1;
}
</style>
