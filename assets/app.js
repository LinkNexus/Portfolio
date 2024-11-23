import { registerReactControllerComponents } from '@symfony/ux-react';
import './bootstrap.js';
import './bootstrap.ts';
import "./app.sass";
import "./images/favicon/favicon-96x96.png";
import "./images/favicon/favicon.svg";
import "./images/favicon/favicon.ico";
import "./images/favicon/apple-touch-icon.png";
import "./images/favicon/site.webmanifest";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './images/thumbnail.png';
import './utils/captcha.js';
import './utils/i18n.js';

AOS.init({
    duration: 1000
});