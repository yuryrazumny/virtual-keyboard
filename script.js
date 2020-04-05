const lettersList = {
  rusKeys: [['ё', 'Ё'], ['1', '!'], ['2', '"'], ['3', '№'], ['4', ';'], ['5', '%'], ['6', ':'], ['7', '?'], ['8', '*'],
    ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], '←', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х',
    'ъ', 'Delete', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', ['\\', '|'], 'Enter', 'Shift', 'я', 'ч',
    'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'Shift', 'Up', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', 'Left', 'Down', 'Right'],
  engKeys: [['`', '~'], ['1', '!'], ['2', '@'], ['3', '#'], ['4', '$'], ['5', '%'], ['6', '^'], ['7', '&'], ['8', '*'],
    ['9', '('], ['0', ')'], ['-', '_'], ['=', '+'], '←', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', ['[', '{'], [']', '}'],
    'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", ['\\', '|'], 'Enter', 'Shift', 'z', 'x', 'c', 'v',
    'b', 'n', 'm', ',', '.', '/', 'Shift', 'Up', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', 'Left', 'Down', 'Right'],
};
let capsOn = false;
let language = '';
if (localStorage.language === undefined) {
  language = 'en';
  localStorage.language = language;
} else { language = localStorage.language; }

function createKeyboard() {
  const Element = document.createElement('div');
  Element.innerHTML = `<textarea class="text-content" cols="45" rows="10"></textarea>
  <div class="keyboard">
  <div class="row"></div>
  <div class="row"></div>
  <div class="row"></div>
  <div class="row"></div>
  <div class="row"></div></div>
  <p class="hint"><b>CTRL + ALT change keyboard layout</b></p>
  <p class="hint"><b>Made on Windows OS</b></p>`;
  document.body.append(Element);

  let a = 0;
  const key = document.querySelectorAll('.row');
  function keyGeneration(n) {
    const result = [];
    for (let i = 1; i <= n; i += 1) {
      const div = document.createElement('div');
      div.classList.add('key');
      const span = document.createElement('span');
      div.append(span);
      if (language === 'en') {
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
      } else if (language === 'ru') {
        if (Array.isArray(lettersList.rusKeys[a])) {
          span.append(lettersList.rusKeys[a][0]);
        } else { span.append(lettersList.rusKeys[a]); }
        if (lettersList.rusKeys[a] === 'Left' || lettersList.rusKeys[a] === 'Right'
          || lettersList.rusKeys[a] === 'Up' || lettersList.rusKeys[a] === 'Down') {
          div.classList.add('arrow');
        }
        if (lettersList.rusKeys[a] === ' ') {
          div.classList.add('space-key');
        }
        if (lettersList.rusKeys[a] === 'Shift') {
          if (a === 42) {
            div.classList.add('lShift');
          } else if (a === 53) div.classList.add('rShift');
        }
        if (lettersList.rusKeys[a] === 'Alt') {
          if (a === 57) {
            div.classList.add('lAlt');
          } else if (a === 59) div.classList.add('rAlt');
        }
        if (lettersList.rusKeys[a] === 'Ctrl') {
          if (a === 55) {
            div.classList.add('lCtrl');
          } else if (a === 60) div.classList.add('rCtrl');
        }
        if (lettersList.rusKeys[a] === 'CapsLock') {
          div.classList.add('capslock');
        }
        if (lettersList.rusKeys[a] === 'Win') {
          div.classList.add('win');
        }
        if (lettersList.rusKeys[a] === '←') {
          div.classList.add('backspace');
        }
        a += 1;
        result.push(div);
      }
    }
    return result;
  }

  key[0].append(...keyGeneration(14));
  key[1].append(...keyGeneration(14));
  key[2].append(...keyGeneration(14));
  key[3].append(...keyGeneration(13));
  key[4].append(...keyGeneration(9));
}
createKeyboard();

const Keyboard = document.querySelector('.keyboard');
const Textarea = document.querySelector('textarea');
const body = document.querySelector('body');

body.addEventListener('keydown', (event) => {
  if (event.key === 'Tab') {
    event.preventDefault();
    Textarea.value += '\t';
  }
  if (event.key === 'ArrowUp') {
    event.preventDefault();
    Textarea.value += '↑';
  }
  if (event.key === 'ArrowDown') {
    event.preventDefault();
    Textarea.value += '↓';
  }
  if (event.key === 'ArrowRight') {
    event.preventDefault();
    Textarea.value += '→';
  }
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    Textarea.value += '←';
  }
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
    } else if (event.key === 'ArrowLeft' && document.querySelectorAll('span')[i].textContent === 'Left') {
      document.querySelectorAll('span')[i].parentElement.classList.add('active');
    } else if (event.key === 'ArrowUp' && document.querySelectorAll('span')[i].textContent === 'Up') {
      document.querySelectorAll('span')[i].parentElement.classList.add('active');
    } else if (event.key === 'ArrowRight' && document.querySelectorAll('span')[i].textContent === 'Right') {
      document.querySelectorAll('span')[i].parentElement.classList.add('active');
    } else if (event.key === 'ArrowDown' && document.querySelectorAll('span')[i].textContent === 'Down') {
      document.querySelectorAll('span')[i].parentElement.classList.add('active');
    } else if (event.code === 'MetaLeft' && i === 56) {
      document.querySelector('.win').classList.add('active');
    } else if (event.key !== 'Shift' && event.key === document.querySelectorAll('span')[i].textContent) {
      document.querySelectorAll('span')[i].parentElement.classList.add('active');
    }
  }
  Textarea.focus();
});
body.addEventListener('keyup', (event) => {
  for (let i = 0; i < 64; i += 1) {
    if (event.code === 'ControlLeft' || event.code === 'MetaLeft' || event.code === 'ControlRight'
      || event.code === 'Backspace' || event.code === 'Win' || event.key === 'ArrowDown' || event.key === 'ArrowLeft'
      || event.key === 'ArrowUp' || event.key === 'ArrowRight' || event.key === 'AltRight') {
      document.querySelector('.rShift').classList.remove('active');
      document.querySelector('.backspace').classList.remove('active');
      document.querySelector('.rCtrl').classList.remove('active');
      document.querySelector('.lCtrl').classList.remove('active');
      document.querySelector('.win').classList.remove('active');
      for (let j = 0; j < document.querySelectorAll('.arrow').length; j += 1) {
        document.querySelectorAll('.arrow')[j].classList.remove('active');
      }
    }
    if (event.key === document.querySelectorAll('span')[i].textContent) {
      document.querySelectorAll('span')[i].parentElement.classList.remove('active');
    }
  }
  Textarea.focus();
});

let activeElement = '';

Keyboard.addEventListener('mousedown', (event) => {
  Textarea.focus();
  let elementToDelete = '';
  if (event.target.classList[0] === 'key') {
    activeElement = event.target;
  } else { activeElement = event.target.parentElement; }
  if (event.target.parentElement.classList[0] === 'key') {
    event.target.parentElement.classList.add('active');
  } else {
    event.target.classList.add('active');
  }
  if (event.target.textContent === 'Enter') {
    Textarea.value += '\n';
  }
  if (event.target.textContent === 'Tab') {
    Textarea.value += '\t';
  }
  if (event.target.textContent === 'Up') {
    event.preventDefault();
    Textarea.value += '↑';
  }
  if (event.target.textContent === 'Down') {
    event.preventDefault();
    Textarea.value += '↓';
  }
  if (event.target.textContent === 'Right') {
    event.preventDefault();
    Textarea.value += '→';
  }
  if (event.target.textContent === 'Left') {
    event.preventDefault();
    Textarea.value += '←';
  }
  if (event.target.textContent === '←') {
    for (let k = 0; k < Textarea.value.length - 1; k += 1) {
      elementToDelete += Textarea.value[k];
    }
    Textarea.value = elementToDelete;
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
document.addEventListener('mouseup', (event) => {
  if (event.target.tagName === 'HTML' || event.target.tagName === 'DIV' || event.target.tagName === 'SPAN') activeElement.classList.remove('active');
  Textarea.focus();
});

Textarea.addEventListener('keydown', (event) => {
  if (event.key === 'Shift') {
    const span = document.querySelectorAll('span');
    let a = 0;
    for (let i = 0; i < span.length; i += 1) {
      if (language === 'en') {
        if (Array.isArray(lettersList.engKeys[a])) {
          span[i].innerText = '';
          span[i].append(lettersList.engKeys[a][1]);
        } else if (span[i].textContent.length === 1) {
          span[i].innerText = '';
          span[i].append(lettersList.engKeys[a].toUpperCase());
        }
        a += 1;
      } else {
        if (Array.isArray(lettersList.rusKeys[a])) {
          span[i].innerText = '';
          span[i].append(lettersList.rusKeys[a][1]);
        } else if (span[i].textContent.length === 1) {
          span[i].innerText = '';
          span[i].append(lettersList.rusKeys[a].toUpperCase());
        }
        a += 1;
      }
    }
  }
  if (event.key === 'CapsLock' && !capsOn) {
    capsOn = !capsOn;
    const span = document.querySelectorAll('span');
    let a = 14;
    for (let i = 14; i < span.length; i += 1) {
      if (language === 'en') {
        if (Array.isArray(lettersList.engKeys[a])) {
          span[i].innerText = '';
          span[i].append(lettersList.engKeys[a][1]);
        } else if (span[i].textContent.length === 1) {
          span[i].innerText = '';
          span[i].append(lettersList.engKeys[a].toUpperCase());
        }
        a += 1;
      } else if (language === 'ru') {
        if (Array.isArray(lettersList.rusKeys[a])) {
          span[i].innerText = '';
          span[i].append(lettersList.rusKeys[a][1]);
        } else if (span[i].textContent.length === 1) {
          span[i].innerText = '';
          span[i].append(lettersList.rusKeys[a].toUpperCase());
        }
        a += 1;
      }
    }
  } else if (event.key === 'CapsLock' && capsOn) {
    capsOn = !capsOn;
    const span = document.querySelectorAll('span');
    let a = 14;
    for (let i = 14; i < span.length; i += 1) {
      if (language === 'en') {
        if (Array.isArray(lettersList.engKeys[a])) {
          span[i].innerText = '';
          span[i].append(lettersList.engKeys[a][1]);
        } else if (span[i].textContent.length === 1) {
          span[i].innerText = '';
          span[i].append(lettersList.engKeys[a].toLowerCase());
        }
        a += 1;
      } else {
        if (Array.isArray(lettersList.rusKeys[a])) {
          span[i].innerText = '';
          span[i].append(lettersList.rusKeys[a][1]);
        } else if (span[i].textContent.length === 1) {
          span[i].innerText = '';
          span[i].append(lettersList.rusKeys[a].toLowerCase());
        }
        a += 1;
      }
    }
  }
});

Textarea.addEventListener('keyup', (event) => {
  if (event.key === 'Shift') {
    const span = document.querySelectorAll('span');
    let a = 0;
    for (let i = 0; i < span.length; i += 1) {
      if (language === 'en') {
        if (Array.isArray(lettersList.engKeys[a])) {
          span[i].innerText = '';
          span[i].append(lettersList.engKeys[a][0]);
        } else if (span[i].textContent.length === 1) {
          span[i].innerText = '';
          span[i].append(lettersList.engKeys[a].toLowerCase());
        }
        a += 1;
      } else {
        if (Array.isArray(lettersList.rusKeys[a])) {
          span[i].innerText = '';
          span[i].append(lettersList.rusKeys[a][0]);
        } else if (span[i].textContent.length === 1) {
          span[i].innerText = '';
          span[i].append(lettersList.rusKeys[a].toLowerCase());
        }
        a += 1;
      }
    }
  }
});

Keyboard.addEventListener('mousedown', (event) => {
  if (event.target.textContent === 'Shift') {
    const span = document.querySelectorAll('span');
    let a = 0;
    for (let i = 0; i < span.length; i += 1) {
      if (language === 'en') {
        if (Array.isArray(lettersList.engKeys[a])) {
          span[i].innerText = '';
          span[i].append(lettersList.engKeys[a][1]);
        } else if (span[i].textContent.length === 1) {
          span[i].innerText = '';
          span[i].append(lettersList.engKeys[a].toUpperCase());
        }
        a += 1;
      } else {
        if (Array.isArray(lettersList.rusKeys[a])) {
          span[i].innerText = '';
          span[i].append(lettersList.rusKeys[a][1]);
        } else if (span[i].textContent.length === 1) {
          span[i].innerText = '';
          span[i].append(lettersList.rusKeys[a].toUpperCase());
        }
        a += 1;
      }
    }
  }
});

Keyboard.addEventListener('mouseup', (event) => {
  if (event.target.textContent === 'Shift') {
    const span = document.querySelectorAll('span');
    let a = 0;
    for (let i = 0; i < span.length; i += 1) {
      if (language === 'en') {
        if (Array.isArray(lettersList.engKeys[a])) {
          span[i].innerText = '';
          span[i].append(lettersList.engKeys[a][0]);
        } else if (span[i].textContent.length === 1) {
          span[i].innerText = '';
          span[i].append(lettersList.engKeys[a].toLowerCase());
        }
        a += 1;
      } else {
        if (Array.isArray(lettersList.rusKeys[a])) {
          span[i].innerText = '';
          span[i].append(lettersList.rusKeys[a][0]);
        } else if (span[i].textContent.length === 1) {
          span[i].innerText = '';
          span[i].append(lettersList.rusKeys[a].toLowerCase());
        }
        a += 1;
      }
    }
  }
});

function switchLanguage() {
  if (language === 'ru') {
    for (let i = 0; i < 64; i += 1) {
      const switcher = document.querySelectorAll('span');
      if (Array.isArray(lettersList.rusKeys[i])) {
        switcher[i].textContent = [lettersList.rusKeys[i][0]];
      } else { switcher[i].textContent = lettersList.rusKeys[i]; }
    }
  } else {
    for (let i = 0; i < 64; i += 1) {
      const switcher = document.querySelectorAll('span');
      if (Array.isArray(lettersList.engKeys[i])) {
        switcher[i].textContent = [lettersList.engKeys[i][0]];
      } else { switcher[i].textContent = lettersList.engKeys[i]; }
    }
  }
}
document.addEventListener('keydown', (event) => {
  if (event.shiftKey && event.altKey && language === 'en') {
    language = 'ru';
    localStorage.language = 'ru';
    switchLanguage();
  } else if (event.shiftKey && event.altKey && language === 'ru') {
    language = 'en';
    localStorage.language = 'en';
    switchLanguage();
  }
});
