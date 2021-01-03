import { createTable } from './sudokuModel';
import { renderTable } from './sudokuPresenter';

let t = createTable();

t[0][0] = 1;
t[0][1] = 2;
t[1][0] = 3;
t[1][1] = 4;
t[2][2] = 9;
t[2][1] = 8;
t[1][2] = 7;

renderTable( t );