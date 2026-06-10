
const timerElement = document.getElementById("timer");

const progress = document.querySelector(".progress");

const clickSound = document.getElementById("clickSound");
const correctSound = document.getElementById("correctSound");
const wrongSound = document.getElementById("wrongSound");
const timerSound = document.getElementById("timerSound");



const answers = document.querySelectorAll(".answer");

const questionElement = document.getElementById("question");

const typeElement = document.getElementById("type");

const ExitButton = document.getElementById("exit");

const scoreElement = document.getElementById("score");
const increaseScoreElement = document.getElementById("increaseScore");

const QuestionCountElement = document.getElementById("question-count");

const IntroElement = document.getElementById("Intro");
const ResultElement = document.getElementById("Result");
const StartButton = document.getElementById("Start");
const RestartButton = document.getElementById("Restart");
const PageElement = document.getElementById("Page");
const HscoreElement = document.getElementById("Hscore");
const SscoreElement = document.getElementById("Sscore");
const StateElement = document.getElementById("state");

/* ========================= */
/* بيانات اللعبة */
/* ========================= */

let Questions = [{
    "question": "ما عاصمة مصر؟",
    "options": ["الإسكندرية", "الجيزة", "القاهرة", "أسوان"],
    "icons": ["🌊", "🗿", "🏛️", "🏜️"],
    "type": "جغرافيا",
    "answer": "القاهرة",
    "answered": false
},
{
    "question": "ما عاصمة فرنسا؟",
    "options": ["مدريد", "باريس", "روما", "برلين"],
    "icons": ["🏙️", "🏛️", "🏛️", "🏛️"],
    "type": "جغرافيا",
    "answer": "باريس",
    "answered": false
},
{
    "question": "ما عاصمة إيطاليا؟",
    "options": ["روما", "ميلانو", "أثينا", "لشبونة"],
    "icons": ["🏛️", "🏙️", "🏛️", "🏙️"],
    "type": "جغرافيا",
    "answer": "روما",
    "answered": false
},
{
    "question": "ما عاصمة اليابان؟",
    "options": ["سيول", "بكين", "طوكيو", "بانكوك"],
    "icons": ["🏙️", "🏙️", "🏙️", "🏙️"],
    "type": "جغرافيا",
    "answer": "طوكيو",
    "answered": false
},
{
    "question": "ما أكبر قارة في العالم؟",
    "options": ["أفريقيا", "أوروبا", "آسيا", "أمريكا الجنوبية"],
    "icons": ["🌍", "🇪🇺", "🌏", "🇺🇸"],
    "type": "جغرافيا",
    "answer": "آسيا",
    "answered": false
},
{
    "question": "في أي دولة يقع برج إيفل؟",
    "options": ["ألمانيا", "فرنسا", "إيطاليا", "إسبانيا"],
    "icons": ["🇩🇪", "🇫🇷", "🇮🇹", "🇪🇸"],
    "type": "معلومات عامة",
    "answer": "فرنسا",
    "answered": false
},
{
    "question": "من بنى الفلك؟",
    "options": ["إبراهيم", "موسى", "نوح", "داود"],
    "icons": ["👨‍💼", "👨‍💼", "👨‍💼", "👨‍💼"],
    "type": "ديني",
    "answer": "نوح",
    "answered": false
},
{
    "question": "كم تلميذًا كان للمسيح؟",
    "options": ["10", "11", "12", "13"],
    "icons": ["10", "11", "12", "13"],
    "type": "ديني",
    "answer": "12",
    "answered": false
},
{
    "question": "من ابتلعه الحوت؟",
    "options": ["يونان", "بطرس", "يوحنا", "بولس"],
    "icons": ["👨‍💼", "👨‍💼", "👨‍💼", "👨‍💼"],
    "type": "ديني",
    "answer": "يونان",
    "answered": false
},
{
    "question": "أين وُلِد السيد المسيح؟",
    "options": ["الناصرة", "أورشليم", "بيت لحم", "أريحا"],
    "icons": ["🏙️", "🏛️", "🏘️", "🏜️"],
    "type": "ديني",
    "answer": "بيت لحم",
    "answered": false
},
{
    "question": "من أول إنسان خلقه الله؟",
    "options": ["هابيل", "آدم", "نوح", "إبراهيم"],
    "icons": ["👨‍💼", "👨‍💼", "👨‍💼", "👨‍💼"],
    "type": "ديني",
    "answer": "آدم",
    "answered": false
},
{
    "question": "من شق البحر الأحمر؟",
    "options": ["يوسف", "داود", "موسى", "سليمان"],
    "icons": ["👨‍💼", "👨‍💼", "👨‍💼", "👨‍💼"],
    "type": "ديني",
    "answer": "موسى",
    "answered": false
},
{
    "question": "كم يومًا استغرق الخلق؟",
    "options": ["5", "6", "7", "8"],
    "icons": ["5", "6", "7", "8"],
    "type": "ديني",
    "answer": "6",
    "answered": false
},
{
    "question": "ما الحيوان الملقب بسفينة الصحراء؟",
    "options": ["الحصان", "الجمل", "الفيل", "الحمار"],
    "icons": ["🐎", "🐫", "🐘", "驴"],
    "type": "معلومات عامة",
    "answer": "الجمل",
    "answered": false
},
{
    "question": "أي كوكب يُعرف بالكوكب الأحمر؟",
    "options": ["الأرض", "المريخ", "المشتري", "زحل"],
    "icons": ["🌍", "🪐", "♃", "♄"],
    "type": "معلومات عامة",
    "answer": "المريخ",
    "answered": false
},
{
    "question": "أيهم أكبر؟",
    "options": ["999", "1000", "990", "909"],
    "icons": ["999", "1000", "990", "909"],
    "type": "ذكاء",
    "answer": "1000",
    "answered": false
},
{
    "question": "ما عاصمة اليونان؟",
    "options": ["أثينا", "روما", "صوفيا", "بودابست"],
    "icons": ["🏛️", "🏛️", "🏛️", "🏛️"],
    "type": "جغرافيا",
    "answer": "أثينا",
    "answered": false
},
{
    "question": "من هو التلميذ الذي أنكر المسيح ثلاث مرات؟",
    "options": ["يوحنا", "يعقوب", "بطرس", "متى"],
    "icons": ["👨‍💼", "👨‍💼", "👨‍💼", "👨‍💼"],
    "type": "ديني",
    "answer": "بطرس",
    "answered": false
},
{
    "question": "ما عاصمة المملكة المتحدة؟",
    "options": ["مانشستر", "لندن", "ليفربول", "برمنجهام"],
    "icons": ["🏙️", "🏙️", "🏙️", "🏙️"],
    "type": "جغرافيا",
    "answer": "لندن",
    "answered": false
},
{
    "question": "من هو أصغر أبناء يعقوب؟",
    "options": ["يوسف", "يهوذا", "بنيامين", "رأوبين"],
    "icons": ["👨‍💼", "👨‍💼", "👨‍💼", "👨‍💼"],
    "type": "ديني",
    "answer": "بنيامين",
    "answered": false
}
];

/* ========================= */
/* متغيرات */
/* ========================= */

let playing = false;



let currentQuestion = null;

let score = 0;
let increment = 100;

let totalTime = 15;

let timeLeft = totalTime;

let countdown;

/* ========================= */
/* دائرة التايمر */
/* ========================= */

const radius = 52;

const circumference = 2 * Math.PI * radius;

progress.style.strokeDasharray = circumference;


// بدء اللعبة
StartButton.addEventListener('click', () =>{
    StartGame();
});
RestartButton.addEventListener('click', () => {
    StartGame();
});
ExitButton.addEventListener('click',()=>{
    EndGame();
});



function StartGame(){
    IntroElement.style.display = 'none';
    ResultElement.style.display = 'none';
    PageElement.style.pointerEvents = "auto";
    StateElement.innerText = '';
    nextQuestion();
};



    


/* ========================= */
/* الضغط على الإجابة */
/* ========================= */

answers.forEach(answer => {

    answer.addEventListener("click", () => {

        if(!playing) return;

        playing = false

        timerSound.pause();

        if(!currentQuestion) return;

        clearInterval(countdown);

        answer.style.transform = "scale(.95)";

        setTimeout(() => {

            answer.style.transform = "scale(1)";

        },120);

        const selectedAnswer =
            answer.querySelector(
                ".answer-content span"
            ).innerText;

        /* صحيحة */

        if(selectedAnswer === currentQuestion.answer){

            correctSound.currentTime = 0;
            correctSound.play();
            

            answer.style.boxShadow =
                "0 0 25px #00ff99";

            ShowIncrement()

            

        }

        /* خطأ */

        else{

            wrongSound.currentTime = 0;
            wrongSound.play();

            answer.style.boxShadow =
                "0 0 25px #ff3d3d";


            ShowCorrectAnswer()

        }

        /* سؤال جديد */

        setTimeout(() => {

            nextQuestion();

        },2000);

    });

});


function updateProgress(){

    const offset =
        circumference -
        (timeLeft / totalTime) * circumference;

    progress.style.strokeDashoffset = offset;

    if(timeLeft <= 5){

        progress.style.stroke = "#ff3d3d";

        timerElement.style.color = "#ff5252";

    }

    else{

        progress.style.stroke = "#ffd600";

        timerElement.style.color = "#ffd600";

    }

}



function ShowCorrectAnswer(){
    answers.forEach(btn=>{

        const text =
            btn.querySelector(
                ".answer-content span"
            ).innerText;

            if(text === currentQuestion.answer){

                btn.style.boxShadow =
                    "0 0 25px #00ff99";
                    btn.style.transform = "scale(1.05)";

            }

        });

}

function ShowIncrement(){

    increment = Math.ceil(timeLeft / totalTime * 100)
    score += increment;

    scoreElement.innerText = score;
    

    increaseScoreElement.innerText = `${increment}+`
    increaseScoreElement.style.display = 'inline';

    setTimeout(()=>{
        increaseScoreElement.style.display = 'none';
    },1000)
}



/* ========================= */
/* تشغيل التايمر */
/* ========================= */

function startTimer(){

    timerSound.currentTime = 0;
    timerSound.play();

    clearInterval(countdown);

    timeLeft = totalTime;

    timerElement.innerText = timeLeft;

    updateProgress();

    countdown = setInterval(() => {

        timeLeft--;

        timerElement.innerText = timeLeft;

        updateProgress();

        if(timeLeft <= 0){ 
            playing = false
            clearInterval(countdown); 
            timerSound.pause(); 
            ShowCorrectAnswer(); 
            setTimeout(()=>{
                nextQuestion();
            },2400)
        }

    },1000);

    

}

/* ========================= */
/* خلط Array */
/* ========================= */

function shuffleArray(array){

    return [...array].sort(() => Math.random() - 0.5);

}

/* ========================= */
/* السؤال التالي */
/* ========================= */

function nextQuestion(){


    const remainingQuestions =
        Questions.filter(q => !q.answered);

    /* انتهاء اللعبة */

    if(remainingQuestions.length === 0){

        

        ResetGame();
        return;

    }
    else{
        playing = true
    }

    QuestionCountElement.innerText =
        `السؤال ${Questions.filter(q=>q.answered).length + 1} / ${Questions.length}`;
    
    /* سؤال عشوائي */

    currentQuestion =
        remainingQuestions[
            Math.floor(Math.random() * remainingQuestions.length)
        ];

    currentQuestion.answered = true;

    /* كتابة السؤال */

    questionElement.innerText =
        currentQuestion.question;

    typeElement.innerText =
        `نوع : ${currentQuestion.type}`;

    /* دمج الإجابات مع الأيقونات */

    let mixedAnswers =
        currentQuestion.options.map((option,index)=>({

            text:option,

            icon:currentQuestion.icons[index]

        }));

    /* خلط */

    mixedAnswers = shuffleArray(mixedAnswers);

    /* عرض */

    answers.forEach((answer,index)=>{

        answer.classList.remove(
            "correct",
            "wrong"
        );

        const span =
            answer.querySelector(".answer-content span");

        const emoji =
            answer.querySelector(".emoji");

        span.innerText =
            mixedAnswers[index].text;

        emoji.innerText =
            mixedAnswers[index].icon;

    });

    answers.forEach(ans => {

        ans.style.boxShadow = "none";
        ans.style.transform = "scale(1)";
    });

    startTimer();

}

function ResetGame(){
    scoreElement.innertext = "0";
    ResultElement.style.display = 'flex';

    PageElement.style.pointerEvents = "none";
    playing = false;

    Questions.forEach((q)=>{
        q.answered = false;
    });

    if(!localStorage.getItem("Highest Score")){
        localStorage.setItem("Highest Score", JSON.stringify(0));
    }

    if(JSON.parse(localStorage.getItem('Highest Score')) < score){
        localStorage.setItem('Highest Score', JSON.stringify(score));
        StateElement.innerText = "High Score جديد!"

    };

    

    HscoreElement.innerHTML = `: Highest score  <br> ${JSON.parse(localStorage.getItem('Highest Score'))}`;
    SscoreElement.innerHTML = `: Score  <br> ${score}`;

    score = 0;
    
    clearInterval(countdown);

}

function EndGame(){
    scoreElement.innertext = "0";
    IntroElement.style.display = 'flex';
    PageElement.style.pointerEvents = "none";
    playing = false;

    Questions.forEach((q)=>{
        q.answered = false;
    });

    score = 0;
    
    clearInterval(countdown);
    timerSound.pause();

}
