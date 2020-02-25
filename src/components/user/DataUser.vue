<template>
  <div class="data-user">
    <b-form>
      <input type="hidden" id="teacher-id" v-model="user.id" />

      <b-row>
        <b-col md="12" sm="12">
          <b-form-group label="Nome:" label-for="nome">
            <b-form-input
              id="teacher-name"
              type="text"
              v-model="user.nome"
              :placeholder="user.nome"
              :readonly="mode==='block'"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Matrícula:" label-for="registration">
            <b-form-input
              id="registration"
              v-model="user.matricula"
              type="text"
              :readonly="mode==='block'"
            ></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12" v-if="this.user.tipo==='Teacher'">
          <b-form-group label="Área de Atuação:" label-for="occupation-area">
            <b-form-input
              id="occupation-area"
              v-model="user.area_atuacao"
              type="text"
              :readonly="mode==='block'"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="CPF:" label-for="cpf">
            <b-form-input id="cpf" v-model="user.cpf" type="text" :readonly="mode==='block'"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="E-mail:" label-for="email">
            <b-form-input id="email" type="email" v-model="user.email" :readonly="mode==='block'" ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Currículo Lattes:" label-for="lattes">
            <b-form-input
              id="lattes"
              type="text"
              v-model="user.curriculo_latte"
              :readonly="mode==='block'"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>

      <!-- <b-row>
        <b-col md="6" sm="12">
          <b-form-group label="Senha:" label-for="password">
            <b-form-input id="password"></b-form-input>
          </b-form-group>
        </b-col>
        <b-col md="6" sm="12">
          <b-form-group label="Confirmar Senha:" label-for="password">
            <b-form-input id="password2" type="password"></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>-->

      <hr />

      <b-button variant="primary" @click="save">Salvar</b-button>

      <b-button variant="info" @click="editar" class="ml-2">Editar</b-button>

      <b-button class="ml-2" @click="cancelar">Cancelar</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "../../global";

export default {
  name: "DataUser",
  data() {
    return {
      mode: "block",
      user: {},
    };
  },
  methods: {
    editar() {
      this.mode = "editar";
    },
    cancelar() {
      this.mode = "block";
    },
    save() {
      
      const usuerId = this.user.id;
      if(this.user.tipo==="Teacher"){
        axios
        .put(`${baseApiUrl}/teachers/${usuerId}`,this.user,)
        .then(this.$toasted.global.defaultSuccess(), this.cancelar());
      }
      if(this.user.tipo==="Student"){
        axios
        .put(`${baseApiUrl}/students/${usuerId}`,this.user,)
        .then(this.$toasted.global.defaultSuccess(), this.cancelar());
      }
      
    },
    loadTeacher() {
      const url = `${baseApiUrl}/user-logado`;
      axios.get(url).then(res => {
        this.user = res.data;
      });
    }
  },
  mounted() {
    this.loadTeacher();
  }
};
</script>

<style></style>
