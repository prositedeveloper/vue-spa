<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" to="#">{{ title }}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="mb-2 navbar-nav me-auto mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="add_contact">Add contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default { 
    name: 'Header',
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style>

</style>