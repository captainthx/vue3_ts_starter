function padTo2Digits(num: number) {
  return num.toString().padStart(2, "0");
}

function convertMsToTime(milliseconds: number) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);
  const day = Math.floor(hours / 24);

  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24;

  // 👇️ If you want to roll hours over, e.g. 00 to 24
  // 👇️ uncomment the line below
  // uncommenting next line gets you `00:00:00` instead of `24:00:00`
  // or `12:15:31` instead of `36:15:31`, etc.
  // 👇️ (roll hours over)
  // hours = hours % 24;
  if (day > 0) {
    return `${padTo2Digits(day)} วัน ${padTo2Digits(
      hours
    )} ชั่วโมง ${padTo2Digits(minutes)} นาที ${padTo2Digits(seconds)} วินาที`;
  } else if (hours > 0) {
    return `${padTo2Digits(hours)} ชั่วโมง ${padTo2Digits(
      minutes
    )} นาที ${padTo2Digits(seconds)} วินาที`;
  } else if (minutes > 0) {
    return `${padTo2Digits(minutes)} นาที ${padTo2Digits(seconds)} วินาที`;
  } else {
    return `${padTo2Digits(seconds)} วินาที`;
  }
}

export default convertMsToTime;
