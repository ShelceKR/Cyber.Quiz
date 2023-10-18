let timeleft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown; 

// 15 Questions with answer choices in array
const quizArray = [
    {
        id: "0",
        question: "Which of the following data connectivity options is the best to use when both availability and reliability is required?",
        options: [
            "Wifi",
            "Bluetooth",
            "Wired",
            "Cellular",
        ],
        correct: "Wired",
    },
    {
        id: "2",
        question: "To reduce the risk of installing unapproved or possibly malicious software on a smartphone, a user should ...",
        options: [
            "download apps from a user-friendly community",
            "update the firmware before downloading any app from anywhere",
            "utilize the vendor-provided app store",
        ],
        correct: "utilize the vendor-provided app store",
    },
    {
        id: "3",
        question: "When trying to activate the operating system, a user receives a notice that the software is not genuine. Which of the following security threats has occurred?",
        options: [
            "phishing",
            "license theft",
            "virus attack",
        ],
        correct: "license theft",
    },
    {
        id:"4",
        question:"Which of the following tool is used for Wi-Fi hacking?",
        options: [
            "Nessus",
            "Snort",
            "Aircrack-ng",
            "Wireshark",
        ],
        correct:"Aircrack-ng",
    },
    {
        id:"5",
        question:"Which of the following is an example of physical data leakage?",
        options: [
            "Phishing",
            "Dumpster diving",
            "Printers and photocopies",
        ],
        correct:"Phishing",
    },
    {
        id:"6",
        question:"Which of the following is the most important activity in your system hacking?",
        options: [
            "Information Gathering",
            "Cracking passwords",
            "Covering tracks",
        ],
        correct:"Cracking passwords",
    },
    {
        id:"7",
        question:"We should turn a ____ on to protect our computer from hacker(s).",
        options: [
            "Script",
            "Firewall",
            "Antivirus",
        ],
        correct:"Firewall",
    },
    {
        id:"8",
        question:"Which of the following is an example of a fishing attack?",
        options: [
            "Sending someone an email that contains a malicious link that is disguised to look like an email from someone the person knows",
            "Creating a fake website that looks nearly identical to a real website in order to trick users into entering their login information",
            "Sending someone a text message that contains a malicious link that is disguised to look like a notification that the person has won a contest",
            "All of the above"
        ],
        correct:"All of the above",
    },
    {
        id:"9",
        question:"A group of computers that is networked together and used by hackers to steal information is called a ___",
        options: [
            "Operating System",
            "DDoS",
            "Rootkit",
            "Botnet",
        ],
        correct:"Botnet",
    },
    {
        id:"10",
        question:"Which of the following four passwords is the most secure?",
        options: [
            "Dog123",
            "123456",
            "T33ddYB34R4L1f3!!!",
            "into!89",
        ],
        correct:"T33ddYB34R4L1f3!!!",
    },
    {
        id:"11",
        question:"If a public Wi-Fi network (such as in an airport or café) requires a password to access, is it generally safe to use that network for sensitive activities such as online banking?",
        options: [
            "Yes",
            "No",
        ],
        correct:"No",
    },
    {
        id:"12",
        question:"What kind of cybersecurity risks can be minimized by using a Virtual Private Network (VPN)?",
        options: [
            "Key-Logging",
            "Phishing Attacks",
            "Use of insecure Wifi networks",
        ],
        correct:"Use of insecure Wifi networks",
    },
    {
        id:"13",
        question:"A website sending you a code to your mobile device before you log in is an example of...",
        options: [
            "Antivirus Protection",
            "Password Encryption",
            "Two Factor identification",
        ],
        correct:"Two Factor identification",
    },
    {
        id:"14",
        question:"State whether True or False: Data encryption is used to ensure confidentiality.",
        options: [
            "True",
            "False",
        ],
        correct:"True",
    },
    {
        id:"15",
        question:"Which of the following statements concerning the firewall is true? ",
        options: [
            "It is a barrier created to stop files from hurting the company.", 
            "It is a tool put in place at a business's perimeter to stop uninvited physical entrance.", 
            "It is a device placed at an organisation's perimeter to prevent unwanted access.",
        ],
        correct:"It is a device placed at an organisation's perimeter to prevent unwanted access.",
    }, 
];



restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

nextBtn.addEventListener("click",(displayNext = () =>{
    questionCount += 1;

    if(questionCount == quizArray.length){
        displayContainer.classList.add("hide");
        scoreContainer.classList.remove("hide");
        userScore.innerHTML = "Your score is " + scoreCount + " out of " + questionCount;
    }
    else{
        countOfQuestion.innerHTML = questionCount + 1 + " of " + quizArray.length + " Question";
        
        quizDisplay(questionCount);
        count = 15;
        clearInterval(countdown);
        timerDisplay();
    }
} )
);

const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeleft.innerHTML = count +"s";
        if(count == 0){
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");

    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    quizCards[questionCount].classList.remove("hide");
};

function quizCreator() {
    quizArray.sort(() => Math.round() - 0.5);

    for (let i of quizArray) {
        i.options.sort(() => Math.random() - 0.5);
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");

        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";

        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);

        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;

        quizContainer.appendChild(div);
    }
}

function checker(userOption){
    let userSolution = userOption.innerText;
    let question = document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll("option-div");

    if(userSolution === quizArray[questionCount].correct){
        userOption.classList.add("correct");
        scoreCount ++;
            var audio = new Audio('correcteffect.mp3');
            audio.play();
    }
    else{
        userOption.classList.add("incorrect");
        var audio2 = new Audio('wrongeffect.mp3');
        audio2.play();
        
        options.forEach((element)=> {
            if(element.innerText=quizArray[questionCount].correct){
                element.classList.add("correct");
            }
        });
    }
    classInterval(countdown);
    options.forEach((element)=>{
        element.disabled=true;
    })
}

function initial(){
    quizContainer.innerHTML = "";
    questionCount =0 ;
    scoreCount = 0;
    count = 16;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

startButton.addEventListener("click", () =>{
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

window.onload= () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};