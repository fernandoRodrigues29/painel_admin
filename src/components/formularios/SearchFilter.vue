<template>
  <div class="inputConteiner">
        <div class="inputBox">
         <input type="text" class="inpt-controller"
            v-model="itemPesquisar"
            @keyup="filtar"
            @click="trocarExibirLista()"
            >
        </div>
        <div class="listBox" v-show="exibieLista">
            <ul class="lista">
                <li class="lista-item" @click="selecionar(item)" 
                    v-for="(item, index) in listaPesquisa"
                    :key="item[idValue]"
                    :class="{'item-selecionado': index === indexListaSelecionado }">
                        {{ item[valorValue] }}
                    </li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            exibieLista:false,
            itemPesquisar:"",
            listaPesquisa:[],
            indexListaSelecionado:0
        }
    },
    methods:{
        trocarExibirLista(){
            this.exibieLista = !this.exibieLista;
        },
        selecionarItemLista(indice){
            this.indexListaSelecionado = indice;
           
        },
        selecionar(item){
            this.itemPesquisar = item[this.valorValue];
            this.enviarItemSelecionado(item);
            this.trocarExibirLista();
        },
        filtar(event){
            if(event.key == 'ArrowDown' || event.key == 'ArrowUp' || event.key == 'Enter' ){
                switch (event.key) {
                    case 'ArrowUp':
                        console.log('[arrow up]id',this.indexListaSelecionado);
                        if(this.indexListaSelecionado > 0){
                                this.indexListaSelecionado -=1;
                                    this.selecionarItemLista(this.indexListaSelecionado);
                                        let l =  document.querySelectorAll('.lista-item');
                                            l[this.indexListaSelecionado].style.background="#c3c3c3";
                                            l[this.indexListaSelecionado].scrollIntoView();
                                                l.forEach((el,i)=>{
                                                    if(i !== this.indexListaSelecionado){
                                                        el.style.background="#fff";
                                                    }
                                                }); 
                        }
                    break;
                    case 'ArrowDown':
                        if(this.indexListaSelecionado < this.listaPesquisa.length - 1){
                            this.indexListaSelecionado +=1;    
                            this.selecionarItemLista(this.indexListaSelecionado);
                                    let l =  document.querySelectorAll('.lista-item');
                                                l[this.indexListaSelecionado].style.background="#c3c3c3";
                                                l[this.indexListaSelecionado].scrollIntoView({behavior: "smooth"});
                                                //scrollTop  veja isso, mas antes veja o docker
                                                    l.forEach((el,i)=>{
                                                        if(i !== this.indexListaSelecionado){
                                                            el.style.background="#fff";
                                                        }
                                                    });
                        }
                    break;
                    case 'Enter':
                            let elemento = this.listaPesquisa[this.indexListaSelecionado];
                            this.itemPesquisar = elemento.cidade;
                            console.log('controle: enter key',this.itemPesquisar);
                            this.enviarItemSelecionado(elemento);
                            this.trocarExibirLista();

                    break;    
                    default:
                    break;
                }
            }
            if(this.itemPesquisar.length >= 2){
                this.listaPesquisa = this.lista.filter((e)=>{
                    if(e[[this.valorValue]].toLowerCase().includes(this.itemPesquisar.toLowerCase())){
                        return e;
                    }
                });
            }else{
                this.carregar();
            }
        },
        carregar(){
            this.listaPesquisa = this.lista;
            // this.trocarExibirLista();
        },
        enviarItemSelecionado(obj){
            this.$emit('receberObjeto',obj)
        }
    },
    mounted(){
        this.carregar();
    },
    props:{
        lista: Array,
        idValue:String,
        valorValue:String
    },
    watch:{
        lista(n,o){
            // console.log('novo comp:',n,'velho comp:',o);
            console.log(`novo comp:`,n);
            this.lista = n;
            this.carregar();
            // this.listaPesquisa =  this.lista;
        }
    }
}
</script>

<style scoped>
    .inputConteiner{
        position: relative;
        /* height: 47vh; */
    }
    .listBox{
        overflow: hidden;
        max-height: 400px;
        width: 100%;
    }
    .inpt-controller{
        width: 100%;
        padding: 8px;
        border-radius: 8px;
        border: 1px solid #ccc;
        font-size: 16px;
    }
    .inpt-controller:focus{
        outline: none;
        box-shadow: 1px 1px 20px -10px #c4f4ff7d;
    }
    .lista{
        border: 1px solid #c3c3c3;
        padding: 10px 12px;
        list-style: none;
        width:100%;
        max-height: 247px;
        overflow-y: scroll;
    }
    .lista-item{
        padding: 40px;
        transition: .5s;
        cursor: pointer;
    }
    .lista-item:hover{
        background-color: #c3c3c38c;
    }
    .item-selecionado{
        background-color: #c3c3c38c;
    }
</style>