<template>
  <div>
    <navbar></navbar>
    <div class="container-fluid">
      <div class="row">
        <sidebar></sidebar>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
            <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from './sidebar';
import navbar from './navbar';

export default {
    components: {
       sidebar,
       navbar,
    },
};
</script>
