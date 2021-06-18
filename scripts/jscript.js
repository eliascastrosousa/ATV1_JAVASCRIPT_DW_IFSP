/* Alterar Cor de Fundo */ 

const obj_sel_fundo = document.querySelector('#sel_fundo')
const obj_div_cor_fundo = document.querySelector('#div_cor_fundo')

obj_sel_fundo.addEventListener('change', FunMudaCorFundo)

function FunMudaCorFundo() {
    obj_div_cor_fundo.setAttribute('class', obj_sel_fundo.value) // definir atributo 'class' ao const div_cor_fundo, o atributo que eu vou definir será o value do objeto sel_fundo.
}

/* Alterar Cor da Fonte */ 

let  obj_rb_fonte_array = document.getElementsByName('rb_fonte') // 
const obj_div_area_teste = document.querySelector('#div_area_teste')

obj_rb_fonte_array.addEventListener('click', FunMudaCorFonte)

function FunMudaCorFonte() {
    obj_div_area_teste.setAttribute('class', obj_rb_fonte_array.value)
}

