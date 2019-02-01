require('./config/config');
import 'babel-polyfill';
import env from './config/config';
import express from 'express';
import bodyParser from 'body-parser';
import App from '../src/app'
var compression = require('compression');

const app = express();
const port = process.env.PORT;

app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('build/public'));
app.use('/styles', express.static('src/pages/styles'));
app.use(express.static('src/pages/static'));

const loadHtml = (content) => {
    return (`
        <html>
            <head>
                 <title>Modern Reddit</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="manifest" href="/manifest.json">
                <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
                <link rel="icon" href="https://www.redditstatic.com/desktop2x/img/favicon/apple-icon-57x57.png">
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
                <style>
                    @keyframes rippleLoader {
                        100% {
                           width: 325px;
                           height: 325;
                            opacity: 0;
                          }
                    }
                </style>
            </head>
            <body>
                <div id="root"></div>
                <script>
                    window.loader = true;
                    document.getElementById('root').innerHTML =
                        '<div>\
                            </div>\
                                <div style="position: relative">\
                                    <div style="color: #fff; background-color: #ff4501; border-radius: 100%; width: 80px; height: 80px; text-align: center; margin: 45vh auto;z-index: 7;position: relative;">\
                                        <div style=""/>\
                                            <svg style="width:80px" viewBox="0 0 20 20"><g><circle fill="#FF4500" cx="10" cy="10" r="10"></circle><path fill="#FFF" d="M16.67,10A1.46,1.46,0,0,0,14.2,9a7.12,7.12,0,0,0-3.85-1.23L11,4.65,13.14,5.1a1,1,0,1,0,.13-0.61L10.82,4a0.31,0.31,0,0,0-.37.24L9.71,7.71a7.14,7.14,0,0,0-3.9,1.23A1.46,1.46,0,1,0,4.2,11.33a2.87,2.87,0,0,0,0,.44c0,2.24,2.61,4.06,5.83,4.06s5.83-1.82,5.83-4.06a2.87,2.87,0,0,0,0-.44A1.46,1.46,0,0,0,16.67,10Zm-10,1a1,1,0,1,1,1,1A1,1,0,0,1,6.67,11Zm5.81,2.75a3.84,3.84,0,0,1-2.47.77,3.84,3.84,0,0,1-2.47-.77,0.27,0.27,0,0,1,.38-0.38A3.27,3.27,0,0,0,10,14a3.28,3.28,0,0,0,2.09-.61A0.27,0.27,0,1,1,12.48,13.79Zm-0.18-1.71a1,1,0,1,1,1-1A1,1,0,0,1,12.29,12.08Z"></path></g></svg>\
                                        </div>\
                                    </div>\
                                <span style="transform: translate(-50%, -50%);position: absolute; top: 50%; left: 50%; width: 0; height: 0; background-color: #ff4501; border-radius: 50%; animation: rippleLoader 1.5s ease infinite;"></span>\
                            </div>\
                        </div>';
                </script>
                <script src = "/swRegisterer.js"></script>
                <script src="client_bundle.js"></script>
                <link rel="stylesheet" type="text/css" href="/styles/common.css">
                <link rel="stylesheet" type="text/css" href="/styles/home.css">
            </body>
        </html>`);
};

app.get('*', (req, res) => {
    const template = loadHtml();
    res.send(template);
});

app.listen(port, () => {
    console.log('Server Started on Port: ', port);
});

export default app;
