const first = document.getElementById("first")
const second = document.getElementById("second")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")
const delenie = document.getElementById("delenie")
const umnojenie = document.getElementById("umnojenie")
const stepeni = document.getElementById("stepeni")
const exprt = document.getElementById("export")
const resultat = document.getElementById("vivod")
let choose_alt = "+"

  plus.onclick = function() {
    choose_alt = "+"
  }
  minus.onclick = function() {
    choose_alt = '-'
  }
  delenie.onclick = function() {
    choose_alt = '/'
  }
  umnojenie.onclick = function() {
    choose_alt = '*'
  }
  stepeni.onclick = function() {
    choose_alt = '**'
  }
  exprt.onclick = function(){
    if(choose_alt == "+"){
        let cymma = Number(first.value) + Number(second.value);
        resultat.textContent = cymma;
    }
    else if(choose_alt == "-"){
        let raznost = Number(first.value) - Number(second.value);
        resultat.textContent = raznost;
    }
    else if(choose_alt == "/"){
        let delenie = Number(first.value) / Number(second.value);
        resultat.textContent = delenie;
    }
    else if(choose_alt == "*"){
        let umnojenie = Number(first.value) * Number(second.value);
        resultat.textContent = umnojenie;
    } 
    else if(choose_alt == "**"){
      let stepeni = Number(first.value) ** Number(second.value);
      resultat.textContent = stepeni;
    }
  }



