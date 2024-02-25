import Vue from 'vue'
import VueRouter from 'vue-router'
import Guard from  '../services/middleware'

import HomeView from '../views/HomeView.vue'
import DashHome from '../components/Dashborad.vue'
import Grafico from '../components/Grafico.vue'
//login
import Login from '../components/login/Login.vue'
//principal
import Principal from '../components/principal/Principal.vue'
//formularios
import Formulario from '../components/formularios/Formulario_padrao.vue'
//tabela
import Tabela from '../components/tabelas/Tabela.vue'
//dashboard
import Dashborad from '../components/dashboard/Dashboard.vue'

//Estoque
  //cadastro
    import CadastroEstoque from '../components/estoque/ItemCad.vue'
    import EditarEstoque from '../components/estoque/ItemEditar.vue'
    import ListarEstoque from '../components/estoque/ItemListar.vue'
//--------


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Principal,
    beforeEnter:Guard.auth,
    children:[
      {
        path: '/',
        name: 'dashboard-0',
        component: Dashborad
      },
      {
          path: '/estoque/cadastro',
          name: 'estoque',
          component: CadastroEstoque
      },
      {
        path: '/estoque/editar/:id',
        name: 'editar-estoque',
        component: EditarEstoque
      },
      {
        path: '/estoque/listar',
        name: 'listar-estoque',
        component: ListarEstoque
      },
      {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashborad
      },
    ]
    // component:CadastroEstoque
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  //pagina login
  {path:'*',component:Login},
  // {path:'/login',component:null}
  //listar
 //rascunho
  {
    path: '/princ',
    name: 'principal',
    component: Principal
  },
  {
    path: '/form',
    name: 'form',
    component: Formulario
  },
  {
    path: '/tabela',
    name: 'tabela',
    component: Tabela
  },
  {
    path: '/dash',
    name: 'dash',
    component: DashHome
  },
  {
    path: '/graf',
    name: 'graf',
    component: Grafico
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
