function convertToDenCode() {
    // テキスト入力欄の値を取得
    const inputText = document.getElementById('inputText').value;
    // 結果を表示する要素を取得
    const resultElement = document.getElementById('denCodeResult');

    // Den codeへの変換処理（例: 各文字をUnicodeエスケープシーケンスに変換）
    let denCodeResult = '';
    for (let i = 0; i < inputText.length; i++) {
        denCodeResult += '\\u' + ('0000' + inputText.charCodeAt(i).toString(16)).slice(-4);
    }

    // 結果を表示
    resultElement.textContent = denCodeResult;
}
