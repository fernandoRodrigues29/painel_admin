export default{
    auth(to,from,next){
        const token = localStorage.getItem('chave_acesso_admEstoque');
        //AJAX PARA O BACKEND PARA VERIFICAR A VALIDADE DO TOKEN
        

        if(!token){
            next('/login');
        }
        next();
        
    },
}