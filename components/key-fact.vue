<template>
  <div class="card">
    <div class="card-image">
        <font-awesome-icon :icon="[model.iconGroup.text, model.icon.text]" />
    </div>
    <div class="card-content">
      <p class="title is-2 is-spaced has-text-white">{{model.title.text}}</p>
    </div>
  </div>
</template>

<script>

export default {
  props: ['model'],
}
</script>

<style lang="scss" scoped>
  .card {
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
    width: 100%;
    position: relative;
    text-align: left;
    padding-bottom: 5px;
    transition: background-color .5s;
    overflow: hidden;
    cursor: pointer;
    color: $water;

    .card-content {
      border: 2px solid $water;
      background: transparent;
    }
  }

  .card-link {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: hsla(0,0%,100%,0);
    text-indent: 200%;
    white-space: nowrap;
    overflow: hidden;
    z-index: 30;
  }

  .card-image {
    display: block;
    position: relative;
    padding-top: 50%;
    overflow: hidden;
    z-index: 10;

    .image {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      padding-top: 0!important;
      -webkit-transition: all 1s ease;
      -moz-transition: all 1s ease;
      -ms-transition: all 1s ease;
      -o-transition: all 1s ease;
      transition: all 1s ease;

      &.hovered {
        -webkit-transform:scale(1.25);
        -moz-transform:scale(1.25);
        -ms-transform:scale(1.25);
        -o-transform:scale(1.25);
        transform:scale(1.25);
      }

      img {
        -o-object-fit: cover;
        object-fit: cover;
        font-family: "object-fit: cover;";
      }

      &:after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: $overlay;
        z-index: 2;
      }
    }
  }

  .card-content {
    display: flex;
    z-index: 20;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    min-height: calc(100% - 24px);
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    border-width: 3px;
    padding: 20px;
    margin: 0;
  }
</style>
