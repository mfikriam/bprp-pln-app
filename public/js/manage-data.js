/* eslint-disable */
import axios from 'axios';
import { delayAlert, showAlert, validationErrorAlert } from './alert';

export const addNewData = async (modelName, data, form, modal) => {
  try {
    const res = await axios({
      method: 'POST',
      url: `/api/v1/${modelName}`,
      data,
    });

    if (res.data.status === 'success') {
      const resObj = res.data.data[modelName];
      modal.hide();

      delayAlert(`Data ${modelName} berhasil ditambah`, 'success');
    }
  } catch (err) {
    form.classList.remove('was-validated');
    validationErrorAlert(err);
  }
};
