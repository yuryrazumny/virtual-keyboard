const lettersList = {
  rusKeys: [['ё', 'Ё'], ['1', '!'], ['2', '"'], ['3', '№'], ['4', ';'], ['5', '%'], ['6', ':'], ['7', '?'], ['8', '*'], ['9', '('], ['0', ')'],
    ['-', '_'], ['=', '+'], '←', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'Delete', 'CapsLock', 'ф', 'ы', 'в',
    'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', '\\', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', 'Up', 'Ctrl', 'Win',
    'Alt', ' ', 'Alt', 'Left', 'Down', 'Right', 'Ctrl'],
  engKeys: [['`', '~'], ['1', '!'], ['2', '@'], ['3', '#'], ['4', '$'], ['5', '%'], ['6', '^'], ['7', '&'], ['8', '*'], ['9', '('], ['0', ')'],
    ['-', '_'], ['=', '+'], '←', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', 'Delete', 'CapsLock', 'a', 's', 'd', 'f',
    'g', 'h', 'j', 'k', 'l', ';', "'", '\\', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift', 'Up', 'Ctrl', 'Win', 'Alt',
    ' ', 'Alt', 'Ctrl', 'Left', 'Down', 'Right'],
};

function createKeyboard() {
  const Element = document.createElement('div');
  Element.innerHTML = `<textarea class="text-content" cols="45" rows="10"></textarea>
  <div class="keyboard">
  <div class="row"></div>
  <div class="row"></div>
  <div class="row"></div>
  <div class="row"></div>
  <div class="row"></div>`;

  document.body.append(Element);

  let a = 0;
  const key = document.querySelectorAll('.row');
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
        if (a === 42) {
          div.classList.add('lShift');
        } else if (a === 53) div.classList.add('rShift');
      }
      if (lettersList.engKeys[a] === 'Alt') {
        if (a === 57) {
          div.classList.add('lAlt');
        } else if (a === 59) div.classList.add('rAlt');
      }
      if (lettersList.engKeys[a] === 'Ctrl') {
        if (a === 55) {
          div.classList.add('lCtrl');
        } else if (a === 60) div.classList.add('rCtrl');
      }
      if (lettersList.engKeys[a] === 'CapsLock') {
        div.classList.add('capslock');
      }
      if (lettersList.engKeys[a] === 'Win') {
        div.classList.add('win');
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

const Keyboard = document.querySelector('.keyboard');
const Textarea = document.querySelector('textarea');


Textarea.addEventListener('keydown', (event) => {
  for (let i = 0; i < 64; i += 1) {
    if (event.code === 'ShiftLeft' && i === 42) {
      document.querySelector('.lShift').classList.add('active');
    } else if (event.code === 'AltLeft' && i === 59) {
      document.querySelector('.lAlt').classList.add('active');
    } else if (event.code === 'AltRight' && i === 57) {
      document.querySelector('.rAlt').classList.add('active');
    } else if (event.code === 'ShiftRight' && i === 53) {
      document.querySelector('.rShift').classList.add('active');
    } else if (event.code === 'ControlLeft' && i === 55) {
      document.querySelector('.lCtrl').classList.add('active');
    } else if (event.code === 'ControlRight' && i === 60) {
      document.querySelector('.rCtrl').classList.add('active');
    } else if (event.code === 'Backspace' && i === 13) {
      document.querySelector('.backspace').classList.add('active');
    } else if (event.code === 'MetaLeft' && i === 56) {
      document.querySelector('.win').classList.add('active');
    } else if (event.key !== 'Shift' && event.key === document.querySelectorAll('span')[i].textContent) {
      document.querySelectorAll('span')[i].parentElement.classList.add('active');
    }
  }
});
Textarea.addEventListener('keyup', (event) => {
  for (let i = 0; i < 64; i += 1) {
    if (event.code === 'ControlLeft' || event.code === 'MetaLeft' || event.code === 'ControlRight' || event.code === 'Backspace' || event.code === 'Win') {
      document.querySelector('.rShift').classList.remove('active');
      document.querySelector('.backspace').classList.remove('active');
      document.querySelector('.rCtrl').classList.remove('active');
      document.querySelector('.lCtrl').classList.remove('active');
      document.querySelector('.win').classList.remove('active');
    }
    if (event.key === document.querySelectorAll('span')[i].textContent) {
      document.querySelectorAll('span')[i].parentElement.classList.remove('active');
    }
  }
});

Keyboard.addEventListener('mousedown', (event) => {
  if (event.target.parentElement.classList[0] === 'key') {
    event.target.parentElement.classList.add('active');
  } else {
    event.target.classList.add('active');
  }
  if (event.target.classList[0] !== 'row' && event.target.classList[0] !== 'keyboard'
    && event.target.textContent !== 'Shift' && event.target.textContent !== '←'
    && event.target.textContent !== 'Delete' && event.target.textContent !== 'Enter'
    && event.target.textContent !== 'Ctrl' && event.target.textContent !== 'Alt'
    && event.target.textContent !== 'Win' && event.target.textContent !== 'CapsLock'
    && event.target.textContent !== 'Tab' && event.target.textContent !== 'Up'
    && event.target.textContent !== 'Left' && event.target.textContent !== 'Down'
    && event.target.textContent !== 'Right') {
    Textarea.value += event.target.textContent;
  }
});
Keyboard.addEventListener('mouseup', (event) => {
  if (event.target.parentElement.classList[0] === 'key') {
    event.target.parentElement.classList.remove('active');
  } else {
    event.target.classList.remove('active');
  }
  Textarea.focus();
});
