<template>
  <div class="project-by-id" >
    <PageTitle icon="fa fa-file-o" :main="projeto.nome" :sub="projeto.campus" />

    <div class="project-content">
      <div class="proj">
        <h4>Orientadores:</h4>
        <span v-for="prof in projeto.teachers" :key="prof.id">{{prof.nome}}
        </span>
        <!-- <p>{{students}}</p> -->
      </div>
      <div class="proj">
        <h4>Orientandos:</h4>
        <p v-for="aluno in projeto.students" :key="aluno.id">{{aluno.nome}}</p>
      </div>
      <!-- <div class="proj" v-for="arq in projeto.arquivos" :key="arq">
        <img :src="arq" alt />
      </div>-->
      <div class="proj">
        <h4>Resumo:</h4>
        <p v-html="projeto.resumo"></p>
        <!-- <p>{{projeto.resumo}}</p> -->
      </div>
      <div class="proj">
        <h4>Introdução:</h4>
        <p>{{projeto.introducao}}</p>
        <!-- <p>{{projeto.introducao}}</p> -->
      </div>
      <div class="proj">
        <h4>Justificativa:</h4>
        <!-- <p>{{projeto.justificativa}}</p> -->
        <p v-html="projeto.justificativa"></p>
      </div>
      <div class="proj">
        <h4>Fundamentação Teórica:</h4>
        <p v-html="projeto.fundamentacao_teorica"></p>
        <!-- <p>{{projeto.fundamentacaoTeorica}}</p> -->
      </div>
      <div class="proj">
        <h4>Objetivo Geral:</h4>
        <p v-html="projeto.objetivo_geral"></p>
        <!-- <p>{{projeto.objetivoGeral}}</p> -->
      </div>
      <div class="proj">
        <h4>Metodologia:</h4>
        <p v-html="projeto.metodologia_execucao_projeto"></p>
        <!-- <p>{{projeto.metodologiaExecucaoProjeto}}</p> -->
      </div>
      <div class="proj">
        <h4>Acompanhamento:</h4>
        <p v-html="projeto.acompanhamento_avaliacao_projeto"></p>
        <!-- <p>{{projeto.acompanhamentoAvaliacaoProjeto}}</p> -->
      </div>
      <div class="proj">
        <h4>Resultados Esperados:</h4>
        <p v-html="projeto.resultado_esperado"></p>
        <!-- <p>{{projeto.resultadoEsperado}}</p> -->
      </div>
      <div class="proj">
        <h4>Resultados Alcançados:</h4>
        <p v-html="projeto.resultado_alcancado"></p>
        <!-- <p>{{projeto.resultadoAlcancado}}</p> -->
      </div>
      <div class="proj">
        <h4>Resultados Observações:</h4>
        <p v-html="projeto.observacao"></p>
        <!-- <p>{{projeto.observacao}}</p> -->
      </div>
      <div class="proj">
        <h4>Referências:</h4>
        <p v-html="projeto.referencia"></p>
        <!-- <p>{{projeto.referancia}}</p> -->
      </div>
    </div>
    <!-- <div
      class="fb-comments"
      :data-href="url+this.$route.params.id"
      data-width
      data-numposts="5"
      data-show-faces="true"
    ></div>
    <br />
    <div
      class="fb-like"
      :data-href="url+this.$route.params.id"
      data-width
      data-layout="button_count"
      data-action="like"
      data-size="large"
      data-share="false"
    ></div> -->
  </div>
</template>

<script>
// import tcc from "../../../assets/tcc.jpg";
import { baseApiUrl } from "../../../global";
import axios from "axios";
import PageTitle from "../PageTitle";
export default {
  name: "ResearchProjectById",
  components: { PageTitle },
  data: function() {
    return {
      projeto: {},
    };
  },
  methods: {
    getProjeto() {
      axios
        .get(`${baseApiUrl}/projects/${this.$route.params.id}`)
        .then(res => (this.projeto = res.data));
    }
  },
  mounted() {
    this.getProjeto();
  }
};
</script>

<style scoped>
.project-by-id {
  width: 80%;
  border-radius: 8px;
  margin-bottom: 20px;
  flex-direction: column;
  flex-wrap: wrap;
  margin-top: 20px;
  background-color: #fff;
  padding: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
}

.project-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 8px;
  padding: 25px;
}

.project-content .proj {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 12px;
}

.proj p {
  flex-wrap: wrap;
  width: 100%;
  white-space: wrap;
  text-align: justify;
}

.project-content pre {
  padding: 20px;
  border-radius: 8px;
  font-size: 1.2rem;
}

.project-content img {
  max-width: 100%;
}

.project-content :last-child {
  margin-bottom: 0px;
}
.project-by-id {
  padding: 20px;
}

.svg {
  width: 100%;
}
</style>