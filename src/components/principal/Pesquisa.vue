<template>
  <div>
    <nav
            class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
            id="layout-navbar"
          >
            <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
              <a @click="acaoMenu" class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                <i class="bx bx-menu bx-sm"></i>
              </a>
            </div>
            <!-- <div>controle teste {{ exibirMenuMobile }}</div> -->

            <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
              <!-- Search -->
              <div class="navbar-nav align-items-center">
                <div class="nav-item d-flex align-items-center">
                  <i class="bx bx-search fs-4 lh-0"></i>
                  <input
                    type="text"
                    class="form-control border-0 shadow-none"
                    placeholder="Pesquisa..."
                    aria-label="Search..."
                  />
                </div>
              </div>
              <!-- /Search -->

              <ul class="navbar-nav flex-row align-items-center ms-auto">
                <!-- Place this tag where you want the button to render. -->
                <li class="nav-item lh-1 me-3 d-none">
                  <a
                    class="github-button"
                    href="https://github.com/themeselection/sneat-html-admin-template-free"
                    data-icon="octicon-star"
                    data-size="large"
                    data-show-count="true"
                    aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
                    >Star</a
                  >
                </li>

                <!-- User -->
                <li class="nav-item navbar-dropdown dropdown-user dropdown">
                  <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                    <div class="avatar avatar-online">
                      <img src="assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" />
                    </div>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" href="#">
                        <div class="d-flex">
                          <div class="flex-shrink-0 me-3">
                            <div class="avatar avatar-online">
                              <img src="assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" />
                            </div>
                          </div>
                          <div class="flex-grow-1">
                            <span class="fw-semibold d-block">John Doe</span>
                            <small class="text-muted">Admin</small>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <div class="dropdown-divider"></div>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="bx bx-user me-2"></i>
                        <span class="align-middle">Total de Items</span>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <i class="bx bx-cog me-2"></i>
                        <span class="align-middle">Settings</span>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        <span class="d-flex align-items-center align-middle">
                          <i class="flex-shrink-0 bx bx-credit-card me-2"></i>
                          <span class="flex-grow-1 align-middle">Billing</span>
                          <span class="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <div class="dropdown-divider"></div>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#"  @click.prevent="navegarSair()" >
                        <i class="bx bx-power-off me-2"></i>
                        <span class="align-middle">Log Out</span>
                      </a>
                    </li>
                  </ul>
                </li>
                <!--/ User -->
              </ul>
            </div>

          </nav>
        <div class="menu-lateral-mobile bg-menumobile" :class="{ocultarmenuLateralmobile:exibirMenuMobile }">
          <div class="sair-btn-conteiner">
            <button class="btn rounded-pill btn-icon btn-outline-warning btn-sair" @click="acaoMenu">X</button>
          </div>
          <div class="mt-5 d-flex justify-content-center listBox">
            <ul class="menu-list">
              <li class="menu-item">
                <router-link to="/dashboard" class="menu-link">
                <i class="menu-icon tf-icons bx bx-home-circle"></i>
                  <div data-i18n="Analytics">Dashboard</div>
                </router-link>
              </li>
              <li class="menu-item">
                <router-link to="/estoque/listar" class="menu-link">
                <i class="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Gereciar Itens</div>
              </router-link>
              </li>
              <li class="menu-item">
                <a @click.prevent="navegarSair()" href="#" class="menu-link">
                  <i class="bx bx-power-off me-2"></i>
                    <div data-i18n="Analytics">Sair</div>
                </a>
              </li>
             
            </ul> 
         </div>
        </div>  
  </div>
</template>

<script>
export default {
  data(){
    return{
      exibirMenuMobile:false
    }
  },
  methods:{
    acaoMenu(){
      this.exibirMenuMobile = !this.exibirMenuMobile;
    },
    navegarSair(){
      this.$router.push('/login');
    }
  },
  mounted(){

  } 
}
</script>

<style scoped>
li{
  list-style: none;
}
.menu-item{
  padding: 8px 16px;
}
.listBox{
  width: 100%;

}
.bg-menumobile {
  box-shadow: 0 0.125rem 0.375rem 0 rgba(161, 172, 184, 0.12);
}
  .menu-lateral-mobile{
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100vh;
    z-index: 11111;
    background: #ffff;
    display: none;
    transition: .3s linear;
  }
  .ocultarmenuLateralmobile{
    display: flex !important;
  }

  .sair-btn-conteiner{
    position: fixed;
    left: 5px;
    top: 2px;
  }
</style>