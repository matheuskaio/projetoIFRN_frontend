<template>
  <div class="home">
    <PageTitle
      icon="fa fa-home"
      main="Página Inicial"
      sub="Base de Conhecimento"
    />
    <div class="stats">
      <Stat
        title="Projetos"
        :value="stat.id"
        icon="fa fa-project-diagram"
        color="#800000"
      />

      <Stat
        title="Orientandos"
        :value="3"
        icon="fa fa-user-friends"
        color="#2E8B57"
      />

      <Stat
        title="Comentários"
        :value="99"
        icon="fa fa-comments"
        color="#DAA520"
      />
    </div>
  </div>
</template>

<script>
import PageTitle from "../template/PageTitle";
import Stat from "./Stat";
// import axios from "axios";
// import { baseApiUrl } from "../../global";

export default {
  name: "Home",
  components: { PageTitle, Stat },
  data() {
    return {
      stat: {}
    };
  },
  methods: {
    getStats() {
      // axios
      //   .get(`${baseApiUrl}/projeto/`)
      //   .then(res => (this.stat = res.data))
      //   .catch(error => {
      //     alert(error);
      //   });
    }
  },
  mounted() {
    this.getStats();
  }
};
</script>

<style>
.stats {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
