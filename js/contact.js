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

  // 電話番号はハイフンの有無・全角数字を問わず受け付け、数字だけにして10〜11桁か確認する
  const telDigits = tel
    .replace(/[０-９]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) - 0xFEE0); })
    .replace(/[-－ー‐\s()（）]/g, '');
  if (!/^0[0-9]{9,10}$/.test(telDigits)) {
    errorText.textContent = '電話番号の形式が正しくありません。';
    return;
  }

  doneText.textContent = '送信しました。担当者よりご連絡いたします。（サンプルサイトのため、実際には送信されません）';
  form.reset();
});
