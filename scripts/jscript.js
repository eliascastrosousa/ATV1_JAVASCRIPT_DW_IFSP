/* Alterar Cor de Fundo */

const obj_sel_fundo = document.querySelector('#sel_fundo')
const obj_div_cor_fundo = document.querySelector('#div_cor_fundo')

obj_sel_fundo.addEventListener('change', FunMudaCorFundo)

function FunMudaCorFundo() {
    obj_div_cor_fundo.setAttribute('class', obj_sel_fundo.value) // definir atributo 'class' ao const div_cor_fundo, o atributo que eu vou definir será o value do objeto sel_fundo.
}

/* Alterar Cor da Fonte */

const obj_rb_fonte_array = document.querySelectorAll('[name="rb_fonte"]') // colchetes em volta do atributo quando for name o identificador 
const obj_div_area_teste = document.querySelector('#div_area_teste')

for (obj_rb_fonte of obj_rb_fonte_array) { // aqui estou apelidando o obj e criando um laço de repetiçção para verificar cada vetor dentro do array
    obj_rb_fonte.addEventListener('click', FunMudaCorFonte)
}

function FunMudaCorFonte() {
    for    skdfgjoadfi     
}

/*obj_div_area_teste.setAttribute('class', obj_rb_fonte_array.value)*/ 

