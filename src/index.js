import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

ReactDOM.render(<I18nextProvider i18n={i18n}><App /></I18nextProvider>, document.getElementById('root'));
serviceWorker.unregister();

