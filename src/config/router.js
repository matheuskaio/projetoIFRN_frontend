import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../components/home/Home";
import AdminPages from "../components/admin/AdminPages";
import User from "../components/user/User";
import ResearchProjects from "../components/template/visitor/ResearchProjects";
import ExtensionProjects from "../components/template/visitor/ExtensionProjects";
import HomeVisitor from "../components/template/visitor/HomeVisitor";
import Tccs from "../components/template/visitor/Tccs";
import ResearchProjectById from "../components/template/visitor/ResearchProjectById";
import LoginAndRegister from "../components/login/LoginAndRegister";
import Informations from "../components/template/visitor/Informations";
import Register from "../components/login/Register";
import Auth from "../components/auth/Auth";
import ProjectByCategory from "../components/template/ProjectByCategory";
import TccsTable from "../components/admin/TccsTable";
import SearchTable from "../components/admin/SearchTable";
import ExtensionTable from "../components/admin/ExtensionTable";
import { userKey } from "@/global";
// Vue.use(VueRouter);

Vue.use(VueRouter);

const routes = [
  {
    name: "home",
    path: "/home-admin",
    component: Home,
    meta: { requiresTeacher: true }
  },
  {
    name: "tccsTable",
    path: "/meus-tccs",
    component: TccsTable
  },
  {
    name: "searchTable",
    path: "/meus-projetos-de-pesquisa",
    component: SearchTable
  },
  {
    name: "extensionTable",
    path: "/meus-projetos-de-extensao",
    component: ExtensionTable
  },
  {
    name: "homeVisitor",
    path: "/",
    component: HomeVisitor
  },
  {
    name: "adminPages",
    path: "/admin",
    component: AdminPages,
    meta: { requiresTeacher: true }
  },
  {
    name: "user",
    path: "/user",
    component: User
  },
  {
    name: "researchProjects",
    path: "/projetos-de-pesquisa",
    component: ResearchProjects
  },
  {
    name: "extensionProjects",
    path: "/projetos-de-extensao",
    component: ExtensionProjects
  },
  {
    name: "tccs",
    path: "/tccs",
    component: Tccs
  },
  {
    name: "researchProjectById",
    path: "/projetos/:id",
    component: ResearchProjectById
  },
  {
    name: "loginAndRegister",
    path: "/login",
    component: LoginAndRegister
  },

  {
    name: "register",
    path: "/cadastro",
    component: Register
  },
  {
    name: "information",
    path: "/sobre",
    component: Informations
  },
  {
    name: "auth",
    path: "/auth",
    component: Auth,
  },
  {
    name: "projectByCategory",
    path: "/projeto/:id/projetos",
    component: ProjectByCategory
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  const json = localStorage.getItem(userKey);
  if (to.matched.some(record => record.meta.requiresTeacher)) {
    const user = JSON.parse(json);
    user && user.user.type_user === "Professor" ? next() : next({ path: "/" });
  } else {
    next();
  }
});

export default router;
