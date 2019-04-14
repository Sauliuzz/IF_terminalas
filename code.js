var lectureDisplay = document.getElementById("demo");
var counter = 0;


var lectures  = [
    {
        "lectureTitle": "Objektinis programavimas",
        "lecturerName": "Vytautas Barzdaitis",
        "classroom": 117
    },
    {
        "lectureTitle": "Programu inzinerijos pagrindai",
        "lecturerName": "Andrius Davidsonas",
        "classroom": 512
    },
    {
        "lectureTitle": "Audiovizualines technologijos",
        "lecturerName": "Egidijus Vaskevicius",
        "classroom": 301
    }
]

function displayLectureTitle(){
    lectureDisplay.innerHTML = lectures[counter].lectureTitle;
    counter++;
    if(counter>=lectures.length){
    counter = 0;
    }
}

setInterval(displayLectureTitle, 1000);