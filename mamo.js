const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
  fs.appendFileSync('ips.txt', ip + '\n');

  res.send(`
    <html>
      <head>
        <script>
          window.onload = function() {
            alert("You have been hacked!");
          };
        </script>
      </head>
      <body>
        <h1>Welcome</h1>
      </body>
    </html>
  `);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
