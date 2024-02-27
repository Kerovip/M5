// investment_script.js
let investmentAmount;
let timer;
let remainingTime = 24 * 60 * 60; // 24 hours in seconds
const interestRate = 0.04;

function startInvestment() {
  // استرجاع قيمة المبلغ
  investmentAmount = parseFloat(document.getElementById('amount').value);

  // التحقق من صحة الإدخال
  if (isNaN(investmentAmount) || investmentAmount <= 0) {
    alert('الرجاء إدخال قيمة صحيحة للمبلغ.');
    return;
  }

  // إعداد العداد
  updateTimer();
  timer = setInterval(updateTimer, 1000);

  // إظهار نتائج الاستثمار
  const resultsElement = document.getElementById('investment-results');
  resultsElement.innerHTML = `تم استثمار ${investmentAmount}$ لمدة 24 ساعة بنجاح.`;
  resultsElement.innerHTML += `<br>سيتم إضافة الربح إلى رصيدك بعد انتهاء الفترة.`;
}

function updateTimer() {
  const timerElement = document.getElementById('timer');
  const hours = Math.floor(remainingTime / 3600);
  const minutes = Math.floor((remainingTime % 3600) / 60);
  const seconds = remainingTime % 60;

  timerElement.innerHTML = `الوقت المتبقي: ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;

  if (remainingTime <= 0) {
    clearInterval(timer);
    completeInvestment();
  } else {
    remainingTime--;
  }
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function completeInvestment() {
  // حساب الربح
  const profit = investmentAmount * interestRate;

  // إضافة الربح إلى الرصيد
  // يمكنك تنفيذ الخطوات الخاصة بإضافة الربح إلى رصيد الحساب هنا
  //