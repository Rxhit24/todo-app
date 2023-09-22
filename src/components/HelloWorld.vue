

<template>
  <div>

    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" style="color: aquamarine">What TODO ?</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto gap-lg-5">
            <router-link class="navlink" :to="{ name: 'Todo' }">
              TODO
            </router-link>

            <router-link class="navlink" :to="{ name: 'Notodo' }">
              No todo
            </router-link>

          </ul>
        </div>
      </div>
    </nav>
  </div>
  <div class="container-fluid text-center mt-4 contain">
    <router-view></router-view>
  </div>
</template>
<script>
import router from '../router'
</script>
<style >
.navlink {
  text-decoration: none;
  color: aquamarine;
  border-radius: 3px;
  padding: 3px 6px;

}

.router-link-exact-active {
  background-color: aquamarine;
  color: rgb(11, 49, 36);
}
.contain{
  width: 50%;
}
@media (max-width: 480px) {
  .contain{
    width: 100%;
  }
}
</style>
