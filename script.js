let addSpaces = false;

function convertToHex() {
    const inputText = document.getElementById('inputText').value;
    const resultElement = document.getElementById('hexResult');
    let sjisArray = Encoding.convert(Encoding.stringToCode(inputText), 'SJIS');
    let hexResult = '';
    for (let i = 0; i < sjisArray.length; i++) {
        let hex = sjisArray[i].toString(16).toUpperCase();
        hex = ('00' + hex).slice(-2);
        hexResult += hex;
        if (addSpaces && i < sjisArray.length - 1) {
            hexResult += ' ';
        }
    }
    resultElement.textContent = hexResult;
}

function toggleSpaces() {
    addSpaces = !addSpaces;
    convertToHex();
}

function convertCase(caseType) {
    const resultElement = document.getElementById('hexResult');
    if (caseType === 'upper') {
        resultElement.textContent = resultElement.textContent.toUpperCase();
    } else if (caseType === 'lower') {
        resultElement.textContent = resultElement.textContent.toLowerCase();
    }
}

function copyToClipboard() {
    const hexResult = document.getElementById('hexResult').textContent;
    navigator.clipboard.writeText(hexResult).then(() => {
        alert('16進数結果がコピーされました');
    }).catch(err => {
        console.error('コピーに失敗しました', err);
    });
}

function copySiteToClipboard() {
    const siteURL = window.location.href;
    navigator.clipboard.writeText(siteURL).then(() => {
        alert('このサイトのURLがコピーされました');
    }).catch(err => {
        console.error('サイトURLのコピーに失敗しました', err);
    });
}

document.getElementById('inputText').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        convertToHex();
    }
});
