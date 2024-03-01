/* eslint-disable */
import '@babel/polyfill';
import { DataTable } from 'simple-datatables';

import { showAlert } from './alert';
import { addNewData, updateDataById, delDataById } from './manage-data';

//? DOM Element - Halaman Pegawai
const pegawaiTable = document.querySelector('#pegawai-table');
const addPegawaiForm = document.querySelector('#form-add-pegawai');
const updatePegawaiBtns = document.querySelectorAll('.btn-update-pegawai');
const deletePegawaiBtns = document.querySelectorAll('.btn-delete-pegawai');

//***************** Halaman Pegawai ********************/
//? Datatables
if (pegawaiTable) {
  const options = {
    perPage: 5,
    columns: [{ select: 8, sortable: false }],
  };
  new DataTable(pegawaiTable, options);
}

//? Add Data
if (addPegawaiForm) {
  const addPegawaiModal = document.querySelector('#modal-add-pegawai');
  const bsAddPegawaiModal = new bootstrap.Modal(addPegawaiModal);

  addPegawaiForm.addEventListener('submit', (e) => {
    e.preventDefault();
    addPegawaiForm.classList.add('was-validated');

    if (addPegawaiForm.checkValidity()) {
      const pegawaiObj = {
        nama: addPegawaiForm.querySelector('#add-nama').value,
        jabatan: addPegawaiForm.querySelector('#add-jabatan').value,
        masa_kerja: addPegawaiForm.querySelector('#add-masa_kerja').value,
        grade_gaji: addPegawaiForm.querySelector('#add-grade_gaji').value,
        status_nikah: addPegawaiForm.querySelector('#add-status_nikah').value,
        jumlah_anak: addPegawaiForm.querySelector('#add-jumlah_anak').value,
        hutang_tempat_lain: addPegawaiForm.querySelector('#add-hutang_tempat_lain').value,
        kelayakan: addPegawaiForm.querySelector('#add-kelayakan').value,
      };

      addNewData('pegawai', pegawaiObj, addPegawaiForm, bsAddPegawaiModal);
    }
  });
}

//? Update Data

//? Delete Data
if (deletePegawaiBtns.length > 0) {
  const deletePegawaiModalList = document.querySelectorAll('[id^="modal-delete-pegawai"]');
  const bsDeletePegawaiModalList = Array.from(deletePegawaiModalList).map(
    (el) => new bootstrap.Modal(el),
  );

  deletePegawaiBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const pegawaiId = btn.dataset.objId;
      delDataById('pegawai', pegawaiId, bsDeletePegawaiModalList);
    });
  });
}

//************************** ALERT ********************************** */
const delayAlertMsg = sessionStorage.getItem('delay-alert-message');
const delayAlertType = sessionStorage.getItem('delay-alert-type');
if (delayAlertMsg) {
  showAlert(delayAlertMsg, delayAlertType);
  sessionStorage.removeItem('delay-alert-message');
  sessionStorage.removeItem('delay-alert-type');
}
