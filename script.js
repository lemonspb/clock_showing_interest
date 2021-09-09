function init() {
 const getCurrentSeconds = () =>{
    let dt = new Date();
    let secs = dt.getSeconds() + (60 * dt.getMinutes()) + (60 * 60 * dt.getHours());
    return secs
 }   
 const clockBlock = document.querySelector('#clock')
 const setTime = (getCurrentSeconds()/(60*60*24)*100).toFixed(3)
 clockBlock.innerHTML = setTime

}
setInterval(init,1000)