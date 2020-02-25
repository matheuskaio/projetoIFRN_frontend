<template>
  <div class="tccs">
    <PageTitle icon="fa fa-file" main="Projetos de Extensão" sub="Meus Projetos" />

    <div>
      <b-table striped hover :items="projects" :fields="fields"></b-table>
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import { baseApiUrl, showError } from "../../global";
import axios from "axios";
export default {
  components: { PageTitle },
  name: "TccsTable",
  data() {
    return {
      projects: [],
      project:{},
      fields: [
        { key: "nome", label: "Título" },
        // { key: "teachers.nome", label: "Orientador" },
        { key: "teachers", label: "Orientador" },
        { key: "students", label: "Orientando" }
      ]
    };
  },
  methods: {
    getProjetos() {
      axios
        // .get(`${baseApiUrl}/projects-type/TCC`)
        .get(`${baseApiUrl}/projectsUser/Projeto-de-Extensão`)
        .then(res => (this.projects = res.data.map(project =>{
          return {
            nome: project.nome, 
            teachers: project.teachers.map(teacher =>{return {nome:teacher.nome}}),
            students: project.students.map(student =>{return {nome:student.nome}})
            }
        })))
        .catch(showError);
    }
  },
  mounted() {
    this.getProjetos();
  }
};
</script>

<style></style>
