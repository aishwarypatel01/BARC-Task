
const quiz = [
    {
        question: "Q1: What is the full form of BARC?",
        a: "Branching and Research cell",
        b: "Branding and Relations cell",
        c: "Branding and Research cell",
        d: "Braching and Relations cell",
        ans: "ans2"
    },

    {
        question: "Q2: What is an E-main address of BARC?",
        a: "barc@kgpian.iitkgp.ac.in",
        b: "barc@iitkgp.com",
        c: "barc@iitkgp.ac.in",
        d: "barc@gmail",
        ans: "ans3"
    },

    {
        question: "Q3: What is an area Pincode of Kharagpur?",
        a: "721302",
        b: "621302",
        c: "521302",
        d: "421302",
        ans: "ans1"
    },

    {
        question: "Q4: Who is the current Director of IIT Kharagpur?",
        a: "Partha Pratim Chakrabarti",
        b: "Prof. Amitabha Ghosh",
        c: "Prof. Virendra Kumar Tewari",
        d: "Prof. Damodar Acharya",
        ans: "ans3"
    },

    {
        question: "Q5: What is full form of IIT?",
        a: "International Institute of Technology",
        b: "Indian Institute of Technography",
        c: "Indian Institute of Info. Technology",
        d: "Indian Institute of Technology",
        ans: "ans4"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let i = 0, k = 0;
let score = 0;

function loadQuestion(){
    question.innerText = quiz[i].question;
    option1.innerText = quiz[i].a;
    option2.innerText = quiz[i].b;
    option3.innerText = quiz[i].c;
    option4.innerText = quiz[i].d;
}
submit.addEventListener('click', () => {
    
})
loadQuestion();

function checkanswer(){
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
            curAnsElem.checked = false;
            k = 1;
        }
    });

    return answer;
};

submit.addEventListener('click', () => {
    const checkedAnswer = checkanswer();
    console.log(checkedAnswer);


    if (checkedAnswer == quiz[i].ans){
        score += 4;
    }
    else if(k == 1){
        score--;
    } 
    k = 0;

    i++;

    if(i < quiz.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
            <h3> Your Score ${score}/${quiz.length*4} </h3>
            <button class = "btn" onClick = "history. back()">PLAY AGAIN</button>
        `
            ;

            showScore.classList.remove('scoreArea');
    }

})