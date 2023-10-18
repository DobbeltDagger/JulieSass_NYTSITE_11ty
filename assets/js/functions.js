/*
 * These are helper functions for my app
 * - general functions that are not bound to App class or prototype
 */


///////////////////////////////////
const resize = () => {

  console.log("resize was run");
  /*
  let bgImg = document.getElementById('bgImage')
  const frontImg = document.getElementById('textBIG');

  const h = frontImg.clientHeight;
  bgImg.style.height = h + 'px'
  */
}


////////////////////////////////////
// client side readable time function
const getTime = () => {

  var date = new Date();
  let year = date.getFullYear();
  let shortYear = year.toString().substr(-2);
  let month = date.getMonth()+1;
  let day = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  month = (month < 10 ? "0" : "") + month;
  day = (day < 10 ? "0" : "") + day;
  hour = (hour < 10 ? "0" : "") + hour;
  min = (min < 10 ? "0" : "") + min;
  sec = (sec < 10 ? "0" : "") + sec;

  let longTime = day + '/' + month + '/' + year + ' - ' + hour + ':' + min;
  let shortTime = day + '/' + month + '/' + shortYear + '-' + hour + ':' + min + ':' + sec;
  // let shortTime = day + '/' + month + '/' + shortYear + '-' + hour + ':' + min;

  return {
    long: longTime,
    short: shortTime
  }
}


export {
  resize, getTime
}