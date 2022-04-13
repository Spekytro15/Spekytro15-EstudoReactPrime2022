
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";

import {Home} from './pages/Home';
import reportWebVitals from './reportWebVitals';

import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import { locale, addLocale} from 'primereact/api';

locale('pt-BR');

addLocale('pt-BR', {
  firstDayOfWeek: 1,
  dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
  dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
  dayNamesMin: ['D', 'L', 'M', 'X', 'J', 'V', 'S'],
  monthNames: ['Janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
  monthNamesShort: ['Jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],
  today: 'Hoje',
  clear: 'Limpar',
  accept:	'Sim',
  reject: 'Não'
});



const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);


root.render(
  <StrictMode>
    <Home />
  </StrictMode>,
);
reportWebVitals();
