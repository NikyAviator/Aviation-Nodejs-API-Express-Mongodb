const getAllBootcamps = (req, res) => {
  try {
    res.send({ status: 'OK', msg: 'Show all bootcamps. ppc' });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllBootcamps,
};
