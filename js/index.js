const $video=document.queryselector('#video')
const $play=document.queryselector('#play')
const $pausa=document.quereryselector('pausa')
const $backward=document.quereryselector('backward')
const $forward=document.queryselector('forward')
$play.addEventlistener ('click,handleplay')
$pause.addEventlistener ('click,handlePause')
$backward.addEventlistener ('click,handleBackward')
$forward.addEventlistener ('click,handleForward')

function handleplay(){
$video.play()
$play.hidden=true
$play.hidden=false
console.log('clic en reproducir')

}
function handepause(){
    $video.pause()
    $pause.hidden=true
    $play.hidden=false
    console.log('clic en pause') 
}

function handlebackward (){
    $video.currenttime-=(10)
    console.log('Regresaste 10 seg')
}
function handleforward(){
    $video.currenttime+=(10)
    console.log('adelantaste 10 seg')
}


