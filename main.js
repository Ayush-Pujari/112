prediction_1="";
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach(camera);

function takeSnapShot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="img1" src="'+data_uri+'">';
    
    });

}
console.log(ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/H3GOqf4cl/model.json",modelLoded);
function modelLoded(){
    console.log("modelLoded");
}
function speak(){
    var synth=window.speechSynthesis;
    speak_data_1="The prediction is "+prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}
function check(){
    img=document.getElementById("img1");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_ges_name").innerHTML=results[0].label;
        prediction_1=results[0].label;
        speak();
        if(results[0].label=="hand"){
            document.getElementById("update_ges").innerHTML="&#9995";
        }
        if(results[0].label=="like"){
            document.getElementById("update_ges").innerHTML="&#128077";
        }
        if(results[0].label=="dislike"){
            document.getElementById("update_ges").innerHTML="&#128078";
        }
    }

}






























