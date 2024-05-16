function convertToHex() {
    // テキスト入力欄の値を取得
    const inputText = document.getElementById('inputText').value;
    // 結果を表示する要素を取得
    const resultElement = document.getElementById('hexResult');

    // Shift JISの16進数への変換処理
    let sjisArray = Encoding.convert(Encoding.stringToCode(inputText), 'SJIS');
    let hexResult = '';
    for (let i = 0; i < sjisArray.length; i++) {
        // 各バイトを16進数に変換
        let hex = sjisArray[i].toString(16).toUpperCase();
        // 必要に応じて2桁にパディング
        hex = ('00' + hex).slice(-2);
        hexResult += hex;
    }

    // 結果を表示
    resultElement.textContent = hexResult;
}
