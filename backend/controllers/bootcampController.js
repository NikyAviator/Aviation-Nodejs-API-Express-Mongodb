const getAllBootcamps = (req, res) => {
  try {
    res.send({ status: 'OK', msg: 'Show all bootcamps. ppc' });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};
const getOneBootcamp = (req, res) => {
  try {
    res.send({ status: 'OK', msg: `Display bootcamp ${req.params.id}` });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const createOneBootcamp = (req, res) => {
  try {
    res.send({ status: 'OK', msg: 'Create a new bootcamp. ppc' });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const updateOneBootcamp = (req, res) => {
  try {
    res.send({ status: 'OK', msg: 'Updated a bootcamp.' });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

const deleteABootcamp = (req, res) => {
  try {
    res.send({ status: 'OK', msg: `Delete a bootcamp: ${req.params.id}` });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: 'FAILED', data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllBootcamps,
  createOneBootcamp,
  getOneBootcamp,
  updateOneBootcamp,
  deleteABootcamp,
};
