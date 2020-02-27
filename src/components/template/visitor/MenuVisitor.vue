<template>
  <div class="menuVisitor">
    <b-navbar class="menuVisitor" type="info">
      <b-navbar-nav>
        <b-nav-item class="item"><router-link class="barra-link" to="/">Início</router-link></b-nav-item>
        <b-nav-item><router-link class="barra-link" to="/projetos-de-pesquisa">Projetos de Pesquisa</router-link></b-nav-item>
        <b-nav-item><router-link class="barra-link" to="/projetos-de-extensao">Projetos de Extensão</router-link></b-nav-item>
        <b-nav-item><router-link class="barra-link" to="/tccs"> TCC's</router-link></b-nav-item>
        <b-nav-item><router-link class="barra-link" to="/sobre">Sobre</router-link></b-nav-item>
        <b-nav-item><router-link class="barra-link" to="/auth">Login</router-link></b-nav-item>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "MenuVisitor",
  data() {
    return {
      active: true
    };
  }
};
</script>

<style >
.navbar {
  height: 100%;
}
.barra-link{
  margin-left: 0
}
.barra-link:hover{
  text-decoration: none;
  background: none
}
.menuVisitor {
  grid-area: menuVisitor;
  background: linear-gradient(to right, #7cd17f, #a2cba4);

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>