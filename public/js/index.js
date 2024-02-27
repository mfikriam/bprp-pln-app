/* eslint-disable */
import '@babel/polyfill';
import { DataTable } from 'simple-datatables';

import { showAlert } from './alert';

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

//************************** ALERT ********************************** */
const delayAlertMsg = sessionStorage.getItem('delay-alert-message');
const delayAlertType = sessionStorage.getItem('delay-alert-type');
if (delayAlertMsg) {
  showAlert(delayAlertMsg, delayAlertType);
  sessionStorage.removeItem('delay-alert-message');
  sessionStorage.removeItem('delay-alert-type');
}
