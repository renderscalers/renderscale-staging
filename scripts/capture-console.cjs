const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

(async () => {
  const url = process.argv[2] || 'http://localhost:5173';
  const outArg = process.argv[3];

  // default to logs/capture-YYYYMMDD-HHMMSS.log when no output arg provided
  const now = new Date();
  const pad = (n) => String(n).padStart(2, '0');
  const ts = `${now.getFullYear()}${pad(now.getMonth() + 1)}${pad(now.getDate())}-${pad(now.getHours())}${pad(now.getMinutes())}${pad(now.getSeconds())}`;
  const defaultOut = path.resolve(`./logs/capture-${ts}.log`);
  const resolvedOut = path.resolve(outArg || defaultOut);

  // ensure directory exists
  try {
    fs.mkdirSync(path.dirname(resolvedOut), { recursive: true });
  } catch (e) {
    // ignore
  }

  const outStream = fs.createWriteStream(resolvedOut, { flags: 'a' });
  const writeLog = (prefix, message) => {
    const line = `[${new Date().toISOString()}] ${prefix} ${message}\n`;
    process.stdout.write(line);
    outStream.write(line);
  };

  const browser = await chromium.launch();
  const page = await browser.newPage();

  page.on('console', (msg) => {
    try {
      const loc = msg.location ? ` (${msg.location().url}:${msg.location().line})` : '';
      writeLog('[page console]', `${msg.type()}: ${msg.text()}${loc}`);
    } catch (e) {
      writeLog('[page console]', '(unserializable message)');
    }
  });

  page.on('pageerror', (err) => {
    writeLog('[page error]', err.toString());
  });

  page.on('requestfailed', (req) => {
    const failure = req.failure ? req.failure().errorText : '';
    writeLog('[request failed]', `${req.url()} ${failure}`);
  });

  writeLog('[runner]', `Opening ${url}`);
  await page.goto(url, { waitUntil: 'networkidle' });

  // wait a bit for runtime logs to appear
  await page.waitForTimeout(3000);

  await browser.close();
  writeLog('[runner]', 'Done capturing console output.');
  outStream.end();
})();
