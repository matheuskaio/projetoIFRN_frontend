<template>
  <div class="project-item">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="white">
        <h1>Projetos de Extensão</h1>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-form-select v-model="selected" :options="options"></b-form-select>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <hr />

    <!-- <router-link to="/"> -->

    <!-- <router-link to="/">
      <div class="item-image d-none d-sm-block">
        <img
          src="https://i.ytimg.com/vi/xB8bLbtEIGY/maxresdefault.jpg"
          height="150px"
          width="150px"
        />
      </div>
      <div class="project-info">
        <h2>{{ nomeProjeto}}</h2>
        <p>{{ descricao }}</p>
        <span>
          <strong>Autor:</strong>
          {{ autor }}
        </span>
        <span>
          <strong>Avaliação:</strong>
          {{ avaliacao }}
        </span>
      </div>
    </router-link>-->
    <ul>
      <li v-for="project in projects" :key="project.id">
        <ProjetoItem :project="project" />
      </li>
    </ul>
    <hr />

    <div class="load-more">
      <button v-if="loadMore" class="btn btn-lg btn-outline-success" @click="getProj">Carregar Mais</button>
    </div>
  </div>
</template>

<script>
// import PageTitle from '../../template/PageTitle'

import { baseApiUrl } from "../../../global";
import axios from "axios";
import ProjetoItem from "./ProjetoItem";

export default {
  name: "ExtensionProjects",
  components: { ProjetoItem },
  // props: ["project"],
  data() {
    return {
      projects: {},
      proj: [],
      page: 1,
      loadMore: true,
      // nomeProjeto: "",
      // descricao: "Aprenda a hipnotizar galinhas",
      // autor: "Márcio Brasil",
      // avaliacao: "5.0",
      selected: null,
      options: [
        { value: null, text: "Organizar por:" },
        { value: "avaliacao", text: "Avaliação" },
        { value: "recentes", text: "Mais recentes" },
        { value: "antigos", text: "Mais Antigos" }
      ]
    };
  },
  methods: {
    getProjetos() {
      axios
        .get(`${baseApiUrl}/projects-type/Projeto-de-Extensao`)
        .then(res => (this.projects = res.data));
      // .then(res => {
      // this.projects = res.data.map(projeto => {
      //   return { ...projeto, value: projeto.id, text: projeto.nome };
      // });
      // });
    },
    getProj() {
      axios
        .get(`${baseApiUrl}/projects-type/Projeto-de-Extensao?page=${this.page}`)
        .then(res => {
          this.proj = this.proj.concat(res.data);
          this.page++;
          if (res.data.length === 0) this.loadMore = false;
        });
    }
  },
  mounted() {
    this.getProjetos();
    this.getProj();
  }
};
</script>

<style scoped>
.load-more {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
}
.project-item ul {
  list-style: none;
}
.project-item li {
  margin-top: 20px;
}

.project-item {
  width: 80%;
  border-radius: 8px;
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
}

.project-item a {
  display: flex;
  align-items: flex-start;
  text-decoration: none;
  color: black;
}
/* .project-info h2 {
  font-size: 1.7rem;
} */

.custom-select {
  width: 200px;
}
/* .item-image {
  padding-right: 20px;
  margin-right: 20px;
  border-right: 1px solid #aaa;
}

.item-image img {
  border-radius: 5px;
} */

/* .project-info {
  display: flex;
  align-self: stretch;
  flex-direction: column;
}

.project-info p {
  flex: 1;
  color: #555;
  font-size: 1.1rem;
} */
</style>