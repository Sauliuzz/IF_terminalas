var lectureDisplay = document.getElementById("demo");
var lecturerDisplay = document.getElementById("demo2");
var classroomDisplay = document.getElementById("demo3");
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
    lectureDisplay.innerHTML = "Paskaita: " + lectures[counter].lectureTitle;
    lecturerDisplay.innerHTML = "Destytojas: " + lectures[counter].lecturerName;
    classroomDisplay.innerHTML = "Auditorija: " + lectures[counter].classroom;
    counter++;
    if(counter>=lectures.length){
    counter = 0;
    }
}

setInterval(displayLectureTitle, 1000);