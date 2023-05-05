Webcam.attach("#camera")
camera= document.getElementById("camera")
Webcam.set({
    width:350,
    height:270,
    image_format:"png",
    png_quality:90
})

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_img" src="'+data_uri+'">'
    })
}
console.log(ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/vRfCYu5Wo/model.json",modelloaded)

function modelloaded(){
console.log("model is loaded")
}

function check(){
    img = document.getElementById("selfie_img")
    classifier.classify(img,gotresult)
}

function gotresult(error,results){
if(error) {
    console.log(error)
} else {
    console.log(results)
    document.getElementById("object_name").innerHTML=results[0].label
    document.getElementById("object_accuracy").innerHTML=(results[0].confidence.toFixed(3))*100 +"%"
    
}
}