<template>
            <ul class="menu-inner py-1">
            <li class="menu-item active" @click="exibirSubMenu">
              <a href="index.html" class="menu-link">
                <i class="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Dashboard</div>
              </a>
            </li>
            <li class="menu-item " @click="exibirSubMenu">
              <a href="index.html" class="menu-link">
                <i class="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Relatorios</div>
              </a>
            </li>
            <li class="menu-item " @click="exibirSubMenu">
              <a href="index.html" class="menu-link">
                <i class="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Item em Estoque</div>
              </a>
            </li>
            <li class="menu-item " @click="exibirSubMenu">
              <a href="index.html" class="menu-link">
                <i class="menu-icon tf-icons bx bx-home-circle"></i>
                <div data-i18n="Analytics">Compras</div>
              </a>
            </li>

            <!-- <li class="menu-item"  @click="exibirSubMenu">
              <a href="javascript:void(0);" class="menu-link menu-toggle">
                <i class="menu-icon tf-icons bx bx-layout"></i>
                <div data-i18n="Layouts">Layouts</div>
              </a>
                <ul class="menu-sub" :class="{'exibirMenu':submenuAtivo}">
                  <li class="menu-item">
                    <a href="#" class="menu-link">
                      <div data-i18n="Without menu">Sub menu item</div>
                    </a>
                  </li>
                </ul>
            </li> -->

            <li class="menu-header small text-uppercase">
              <span class="menu-header-text">Pages</span>
              {{ submenuAtivo }}
            </li>
          </ul>
</template>

<script>
export default {
    name:"Menu",
    data(){
      return{
        submenuAtivo:false,
        ativo:true
      }
    },
    methods:{
      exibirSubMenu(){
        this.submenuAtivo = !this.submenuAtivo;
        const sublist = document.querySelector('.menu-sub');
        sublist.style.maxHeight = sublist.style.maxHeight ? null : sublist.scrollHeight + 'px';
      }
    }

}
</script>

<style scoped>
  .exibirMenu{
    display: block;
    transition: .3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  
  .menu-sub{
    display: block;
    overflow: hidden;
    max-height: 0;
    transition: max-height 0.3s ease-out;
  }
  /*animação padrao*/
  
        /* .slide-fadex-enter-active,
        .slide-fadex-leave-active{
          transition: all 0.3s ease-out;
        }
        
        .slide-fadex-enter-from,.slide-fadex-leave-from{
          opacity: 1;
        }
        .slide-fadex-enter-to{
          opacity: 0;
        }
        .slide-fadex-leave-to{
          opacity: 0;
        } */
/*animação padrao*/

</style>