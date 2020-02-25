<template>
  <div class="register">
    <div class="title-register">
      <h3>Cadastro de Usuário (Professor/Aluno)</h3>
    </div>
    <hr />

    <h5>Dados Pessoais</h5>

    <b-row>
      <b-col md="12" sm="12">
        <b-form-group label="Nome:" label-for="name">
          <b-form-input
            id="name"
            v-model="user.nome"
            type="text"
            required
            placeholder="Informe seu nome copleto..."
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="6" sm="12">
        <b-form-group label="CPF:" label-for="cpf">
          <b-form-input
            id="cpf"
            v-model="user.cpf"
            type="text"
            required
            placeholder="Informe seu CPF.."
          ></b-form-input>
        </b-form-group>
      </b-col>
      <!-- <b-col md="6" sm="12">
        <b-form-group label="Data de Nascimento:" label-for="date">
          <b-form-input id="date" v-model="user.data_nascimento" type="date" required></b-form-input>
        </b-form-group>
      </b-col> -->
    </b-row>

    <h5>Dados Pessoais</h5>

    <b-row>
      <b-col md="6" sm="12">
        <b-form-group label="Tipo de Usuário:" label-for="type">
          <b-form-select v-model="user.type_user" :options="options" id="type"></b-form-select>
        </b-form-group>
      </b-col>
      <b-col md="6" sm="12">
        <b-form-group label="Matrícula:" label-for="registration">
          <b-form-input
            id="registration"
            v-model="user.matricula"
            type="text"
            required
            placeholder="Informe sua matrícula"
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="6" sm="12">
        <b-form-group label="Curso:" label-for="course">
          <b-form-input
            id="course"
            v-model="user.curso"
            type="text"
            placeholder="Informe seu curso, caso seja aluno..."
          ></b-form-input>
        </b-form-group>
      </b-col>
      <b-col md="6" sm="12">
        <b-form-group label="Currículo Lattes:" label-for="lattes">
          <b-form-input id="lattes" v-model="user.curriculo_latte" type="text"></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="6" sm="12">
        <b-form-group label="Campus:" label-for="campus">
          <b-form-input
            id="campus"
            v-model="user.campus"
            type="text"
            placeholder="Informe seu campus..."
          ></b-form-input>
        </b-form-group>
      </b-col>
      <!-- <b-col md="6" sm="12">
        <b-form-group label="Área de Atuação:" label-for="occupation-area ">
          <b-form-select v-model="user.areaAtuacao" :options="areas" id="occupation-area"></b-form-select>
        </b-form-group>
      </b-col> -->
    </b-row>

    <h5>Dados do Usuário</h5>
    <b-row>
      <b-col md="8" sm="12">
        <b-form-group label="E-mail:" label-for="email">
          <b-form-input
            id="email"
            v-model="user.email"
            type="email"
            placeholder="Informe seu email..."
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="8" sm="12">
        <b-form-group label="Senha:" label-for="password">
          <b-form-input
            id="password"
            v-model="user.password"
            type="password"
            placeholder="Informe sua senha..."
          ></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <b-row>
      <b-col md="8" sm="12">
        <b-form-group label="Confirmar Senha:" label-for="password-of-new">
          <b-form-input id="name" v-model="user.name" placeholder="Name..."></b-form-input>
        </b-form-group>
      </b-col>
    </b-row>

    <div class="finish">
      <button @click="save" class="btn btn-lg btn-outline-success">Finalizar</button>
    </div>
  </div>
</template>

<script>
import { showError } from "../../global";
import { baseApiUrl } from "../../global";
import axios from "axios";
export default {
  name: "Register",
  data() {
    return {
      mode: "save",
      user: {},
      areas: [
        { value: null, text: "Escolha sua área de atuação" },
        { value: "adm", text: "Administração, Economia e Negócios" },
        { value: "cs", text: "Ciências Sociais" },
        { value: "cm", text: "Comunicação e Mídia" },
        { value: "da", text: "Design e Arte" },
        { value: "direito", text: "Direito" },
        { value: "cn", text: "Ciências Naturais" },
        { value: "ch", text: "Ciências Humanas" },
        { value: "ea", text: "Engenharia e Arquitetura" },
        { value: "ti", text: "Informação e Tecnologia" },
        { value: "saude", text: "Saúde" },
        { value: "outra", text: "Outra Área" }
      ],
      options: [
        { value: null, text: "Escolha uma opção" },
        { value: "Professor", text: "Professor" },
        { value: "Aluno", text: "Aluno" }
      ]
    };
  },
  methods: {
    save() {
      if (this.user.type_user === "Professor") {
        axios
          .post(`${baseApiUrl}/teachers`, this.user)
          .then(() => {
            this.$toasted.global.defaultSuccess();
            this.reset();
          })
          .catch(showError);
      }
      if (this.user.type_user === "Aluno") {
        axios
          .post(`${baseApiUrl}/students`,this.user)
          .then(() => {
            this.$toasted.global.defaultSuccess();
            // this.reset();
          })
          .catch(showError);
      }
    }
  }
};
</script>

<style scoped>
.title-register {
  display: flex;
  justify-content: center;
  align-items: center;
}
.finish {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
}
h5 {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  text-transform: uppercase;
}
.register {
  border-radius: 8px;
  margin-top: 20px;
  background-color: #fff;
  width: 80%;
  margin-bottom: 20px;
  padding: 35px;
  border: 1px 10px 5px 20px solid rgba(0, 0, 0, 0.2);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
}
</style>