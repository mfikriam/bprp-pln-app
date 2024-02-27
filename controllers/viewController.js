// const { Pegawai, Pengaju } = require('./../models');
const { Pegawai } = require('./../models');
const catchAsync = require('./../utils/catchAsync');

//**************************** EXPORTED FUNCTIONS *********************************/
exports.getBlankPage = (req, res) => {
  res.status(200).render('blank', {
    title: 'Blank Page',
  });
};

exports.getPegawaiPage = catchAsync(async (req, res, next) => {
  const resultQuery = await Pegawai.findAll({
    order: [['nama', 'ASC']],
  });
  const resultQueryArr = resultQuery.map((instance) => instance.dataValues);

  res.status(200).render('pegawai', {
    title: 'Halaman Pegawai',
    modelName: 'pegawai',
    pegawaiObjArr: resultQueryArr,
  });
});

exports.getPengajuPage = (req, res) => {
  res.status(200).render('pengaju', {
    title: 'Halaman Pengaju',
    modelName: 'pengaju',
  });
};
