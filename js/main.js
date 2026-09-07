// Mobile nav toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
    var navAnchors = links.querySelectorAll('a');
    for (var n = 0; n < navAnchors.length; n++) {
      navAnchors[n].addEventListener('click', function () { links.classList.remove('open'); });
    }
  }

  // Terminal typing sequence — hero only, one orchestrated moment on page load
  var body = document.getElementById('terminal-body');
  if (!body) return;

  var lines = [
    { type: 'cmd', text: 'whoami' },
    { type: 'out', text: 'Rohit Bhardwaj \u2014 Software Developer' },
    { type: 'cmd', text: 'cat focus.txt' },
    { type: 'out', text: 'Backend development, application support,\ncloud & containers' },
    { type: 'cmd', text: 'cat stack.json' },
    { type: 'json' },
    { type: 'cmd', text: 'status --availability' },
    { type: 'out', text: 'Open to opportunities \u2192 see Contact' }
  ];

  var jsonLines = [
    '{',
    '  "languages": ["C#", "Python", "Java", "SQL"],',
    '  "cloud": ["AWS", "Docker"],',
    '  "frameworks": [".NET", "ASP.NET Core"]',
    '}'
  ];

  var i = 0, j = 0;
  var speed = 16;

  function typeLine(cb) {
    var line = lines[i];
    if (!line) { cb(); return; }

    if (line.type === 'json') {
      var jsonHtml = '';
      var k = 0;
      var pre = document.createElement('div');
      pre.className = 'out';
      body.appendChild(pre);
      var jt = setInterval(function () {
        if (k < jsonLines.length) {
          pre.textContent += (k > 0 ? '\n' : '') + jsonLines[k];
          k++;
          body.scrollTop = body.scrollHeight;
        } else {
          clearInterval(jt);
          i++;
          setTimeout(function () { typeLine(cb); }, 250);
        }
      }, 90);
      return;
    }

    var row = document.createElement('div');
    if (line.type === 'cmd') {
      row.innerHTML = '<span class="prompt">$</span> <span class="key"></span><span class="cursor"></span>';
    } else {
      row.innerHTML = '<span class="out"></span>';
    }
    body.appendChild(row);
    var target = line.type === 'cmd' ? row.querySelector('.key') : row.querySelector('.out');
    var cursorEl = row.querySelector('.cursor');
    var text = line.text;
    var c = 0;

    var t = setInterval(function () {
      if (c < text.length) {
        target.textContent += text[c];
        c++;
        body.scrollTop = body.scrollHeight;
      } else {
        clearInterval(t);
        if (cursorEl) cursorEl.remove();
        i++;
        setTimeout(function () { typeLine(cb); }, 350);
      }
    }, speed);
  }

  typeLine(function () {
    var final = document.createElement('span');
    final.className = 'cursor';
    body.appendChild(final);
  });
})();
