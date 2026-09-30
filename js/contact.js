// お問い合わせフォームの入力チェック
const form = document.getElementById('contactForm');
const errorText = document.getElementById('formError');
const doneText = document.getElementById('formDone');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  errorText.textContent = '';
  doneText.textContent = '';

  const name = document.getElementById('c-name').value.trim();
  const tel = document.getElementById('c-tel').value.trim();
  const body = document.getElementById('c-body').value.trim();

  if (name === '' || tel === '' || body === '') {
    errorText.textContent = '必須項目を入力してください。';
    return;
  }

  // 電話番号は数字のみ
  if (!/^[0-9]+$/.test(tel)) {
    errorText.textContent = '電話番号の形式が正しくありません。';
    return;
  }

  doneText.textContent = '送信しました。担当者よりご連絡いたします。（サンプルサイトのため、実際には送信されません）';
  form.reset();
});
