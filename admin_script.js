// admin_script.js
function showNewMembersTable() {
  // قم بعرض جدول الأعضاء الجدد أو قم بتحميله من الخادم
}

function approveAccountConfirmation() {
  // قم بتنفيذ الإجراءات المتعلقة بالموافقة على تأكيد الحساب
}

function approveDepositRequests() {
  // قم بتنفيذ الإجراءات المتعلقة بالموافقة على طلبات الإيداع
}

function approveWithdrawalRequests() {
  // قم بتنفيذ الإجراءات المتعلقة بالموافقة على طلبات السحب
}

function openAccountReviewPage() {
  // قم بتوجيه المسؤول إلى صفحة المراجعة (يمكنك إضافة معرف الحساب كمعلمة في عنوان الصفحة)
  window.location.href = 'account_review.php?id=' + accountId;
}
// admin_script.js
function reviewAccount() {
  // يمكنك توجيه المسؤول إلى صفحة مراجعة الحساب مع استخدام معرف الحساب المحدد
  var accountId = prompt("Enter Account ID for review:");
  if (accountId) {
    window.location.href = 'account_review.php?id=' + accountId;
  }
}