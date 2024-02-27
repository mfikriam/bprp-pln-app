exports.getBlankPage = (req, res) => {
  res.status(200).render('blank', {
    title: 'Blank Page',
  });
};

exports.getPengajuPage = (req, res) => {
  res.status(200).render('pengaju', {
    title: 'Halaman Pengaju',
  });
};

exports.getPegawaiPage = (req, res) => {
  res.status(200).render('pegawai', {
    title: 'Halaman Pegawai',
  });
};
