function convertToHex() {
    // テキスト入力欄の値を取得
    const inputText = document.getElementById('inputText').value;
    // 結果を表示する要素を取得
    const resultElement = document.getElementById('hexResult');

    // UTF-16の16進数への変換処理
    let hexResult = '';
    for (let i = 0; i < inputText.length; i++) {
        // 各文字をUTF-16の16進数に変換
        let hex = inputText.charCodeAt(i).toString(16).toUpperCase();
        // 必要に応じて4桁にパディング
        hex = ('0000' + hex).slice(-4);
        hexResult += hex;
    }

    // 結果を表示
    resultElement.textContent = hexResult;
}
