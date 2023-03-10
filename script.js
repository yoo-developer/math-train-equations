const EQS_TYPES = [
    "eq1" ,
    "eq2" ,
    "eq3" ,
    "eq4" 
]
var correct_answer = 0
var score = 0
let animatecount = 0
function score_save(){
if (localStorage.score !== "NaN"){
    score = parseInt(localStorage.score)
    document.getElementById("score").innerHTML = score.toString()
    
}
else{
    score = 0
    localStorage.score = score
    document.getElementById("score").innerHTML = score.toString()
}
}
score_save()
function generate(type){
    if (type == 1) {
        let y = Math.floor(Math.random() *10 )
        let x = Math.floor(Math.random() *10 )
        correct_answer = x
        eq_txt.innerHTML = " X + " + y.toString() + " = "+ (x+y).toString()
    }
    if (type == 2) {
        let y = Math.floor(Math.random() *10 )
        let x = Math.floor(Math.random() *10 )
        let a = Math.floor(Math.random() *10 )
        correct_answer = x
        eq_txt.innerHTML = a.toString() + "X + " + y.toString() + " = "+ (a*x+y).toString()
    }
    if (type == 3) {
        let y = Math.floor(Math.random() *10 )
        let x = Math.floor(Math.random() *10 )
        let a = Math.floor(Math.random() *10 )
        let r = Math.round(Math.random())
        if (r == 1){
            equation = (a*x + y) - x
            correct_answer = x
            eq_txt.innerHTML = a.toString() + "X + " + y.toString() + " = "+ (equation).toString() + "  + X"
        }else{
            equation = (a*x + y) + x
            correct_answer = x
            eq_txt.innerHTML = a.toString() + "X + " + y.toString() + " = "+ (equation).toString() + "  - X"
        }  
    }
    if (type == 4 | type == 0){
        let y = Math.floor(Math.random() *10 )
        let x = Math.floor(Math.random() *10 )
        let a = Math.floor(Math.random() *10 )
        let j = Math.floor(Math.random() * (3 - 1) + 1);
        let r = Math.round(Math.random())
        if (r == 1){
            e1 = (a*x + y)
            e2 = (2*x - j*a*y)
            correct_answer = x
            eq_txt.innerHTML = a.toString() + " X  + Y = " + e1.toString() + "<br>" + "2X - " + (j*a).toString() + "Y = " + e2.toString()
        }else{
            e1 = (a*x + y)
            e2 = (2*x + j*a*y)
            correct_answer = x
            eq_txt.innerHTML = a.toString() + " X  + Y = " + e1.toString() + "<br>" + "2X + " + (j*a).toString() + "Y = " + e2.toString()
        }  
    }
}
let eq_txt = document.getElementById("equation_txt")
function gen_eq_type(){   
    generate(Math.floor(Math.random() * (EQS_TYPES.length)))
}
function check(){
    const answer = document.getElementById("answer").value 
    if (answer == correct_answer){
        gen_eq_type()
        let s = document.getElementById("score")
        s.style.animation = "correct 1s"
        score = score + 1
        localStorage.score = score;
    }
    else{
        let s = document.getElementById("score")
        s.style.animation = "wrong 1s"
        animatecount = animatecount + 1
        score = score - 1
        localStorage.score = score;
    }
    document.getElementById("score").innerHTML = score.toString()
}
gen_eq_type()
