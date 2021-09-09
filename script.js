function init() {

const  getFormaterTimeZone = () =>{
   const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
   let options = {
      timeZone: timezone,
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }
   let formatter = new Intl.DateTimeFormat([], options);
   return formatter
}
 const getCurrentSeconds = () =>{

    let dt = getFormaterTimeZone().format(new Date()).replace(/\d{2}[-/.]\d{1,2}[-/.]\d{4}/g, '').replace(/\,/g, '')
    let  [hours, minutes, seconds] = dt.split(":").map((a)=>Number(a.trim()))
    console.log(hours, minutes, seconds, dt.split(":"))
    let secs = seconds + (60 * minutes) + (60 * 60 * hours);
    return secs
 }   


 const clockBlock = document.querySelector('#clock')
 const setTime = (getCurrentSeconds()/(60*60*24)*100).toFixed(3)
 clockBlock.innerHTML = setTime + '%'

}
setInterval(init,1000)