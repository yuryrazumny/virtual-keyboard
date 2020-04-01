let Element = '';
let key = '';
let a = 0;

const lettersList = {
  rusKeys: [['ё', 'Ё'], ['1', '!'], ['2', '"'], ['3', '№'], ['4', '; '], ['5', ' % '], ['6', ':'], ['7', '?'], ['8', '*'], ['9', '('], ['0', ')'],
    ['-', '_'], ['=', '+'], '←', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Delete', 'CapsLock', 'ф', 'ы', 'в',
    'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', 'Up', 'Ctrl', 'Win',
    'Alt', ' ', 'Alt', 'Left', 'Down', 'Right', 'Ctrl'],
  engKeys: [['`', '~'], ['1', '!'], ['2', '@'], ['3', '#'], ['4', '$'], ['5', '%'], ['6', '^'], ['7', '&'], ['8', '*'], ['9', '('], ['0', ')'],
    ['-', '_'], ['=', '+'], '←', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Delete', 'CapsLock', 'a', 's', 'd', 'f',
    'g', 'h', 'j', 'k', 'l', '; ', "'", '\\', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Up', 'Ctrl', 'Win', 'Alt',
    ' ', 'Alt', 'Ctrl', 'Left', 'Down', 'Right'],
};

function createKeyboard() {
  Element = document.createElement('div');
  Element.innerHTML = `<textarea class="text-content" cols="45" rows="10"></textarea>
  <div class="keyboard">
  <div class="row"></div>
  <div class="row"></div>
  <div class="row"></div>
  <div class="row"></div>
  <div class="row"></div>`;

  document.body.append(Element);

  key = document.querySelectorAll('.row');
  function getKey(n) {
    const result = [];

    for (let i = 1; i <= n; i += 1) {
      const div = document.createElement('div');
      div.classList.add('key');
      const span = document.createElement('span');
      div.append(span);
      if (Array.isArray(lettersList.engKeys[a])) {
        span.append(lettersList.engKeys[a][0]);
      } else { span.append(lettersList.engKeys[a]); }
      if (lettersList.engKeys[a] === 'Left' || lettersList.engKeys[a] === 'Right'
        || lettersList.engKeys[a] === 'Up' || lettersList.engKeys[a] === 'Down') {
        div.classList.add('arrow');
      }
      if (lettersList.engKeys[a] === ' ') {
        div.classList.add('space-key');
      }
      if (lettersList.engKeys[a] === 'Shift') {
        div.classList.add('shift');
      }
      if (lettersList.engKeys[a] === 'CapsLock') {
        div.classList.add('capslock');
      }
      if (lettersList.engKeys[a] === '←') {
        div.classList.add('backspace');
      }
      a += 1;
      result.push(div);
    }

    return result;
  }

  key[0].append(...getKey(14));
  key[1].append(...getKey(14));
  key[2].append(...getKey(14));
  key[3].append(...getKey(13));
  key[4].append(...getKey(9));
}
createKeyboard();
