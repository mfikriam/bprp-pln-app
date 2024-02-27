/* eslint-disable */
import '@babel/polyfill';
import { DataTable } from 'simple-datatables';

//? DOM Element - Halaman Pegawai
const pegawaiTable = document.querySelector('#pegawai-table');

//***************** Halaman Pegawai ********************/
//? Datatables
if (pegawaiTable) {
  const options = {
    perPage: 5,
    columns: [{ select: 8, sortable: false }],
  };
  new DataTable(pegawaiTable, options);
}
