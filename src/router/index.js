import Vue from "vue";
import Router from "vue-router";
import Accueil from "../views/Accueil";
import About from "../views/About";
import Competences from "../views/Competences";
import Projets from "../views/Projets";
import Contact from "../views/Contact";
import Gpa from "../views/projets/Gpa";
import Gao from "../views/projets/Gao";
import CrfWordpress from "../views/projets/CrfWordpress";
import MielPei from "../views/projets/MielPei";
import MonPortfolio from "../views/projets/MonPortfolio";
import BallNCo from "../views/projets/BallNCo";
import NavBar from "../components/NavBar";

Vue.use(Router);

const routes = [
  {
    path: "/mon-portfolio",
    name: "NavBar",
    component: NavBar
  },
  /* {
    path: "/accueil",
    name: "Accueil",
    component: Accueil
  }, */
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/competences",
    name: "Competences",
    component: Competences
  },
  {
    path: "/projets",
    name: "Projets",
    component: Projets
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/gestion-parc-application",
    name: "Gpa",
    component: Gpa
  },
  {
    path: "/gestion-attribution-ordinateurs",
    name: "Gao",
    component: Gao
  },
  {
    path: "/crf-wordpress",
    name: "CrfWordpress",
    component: CrfWordpress
  },
  {
    path: "/miel-pei",
    name: "MielPei",
    component: MielPei
  },
  {
    path: "/mon-portfolio",
    name: "MonPortfolio",
    component: MonPortfolio
  },
  {
    path: "/ball-n-co",
    name: "BallNCo",
    component: BallNCo
  }
];

const router = new Router({
  mode: "history",
  routes
});

export default router;
