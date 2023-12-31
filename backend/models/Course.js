const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: [true, 'Please add a course title.'],
  },
  description: {
    type: String,
    required: [true, 'Please add a course description.'],
  },
  weeks: {
    type: String,
    required: [true, 'Please add a number of weeks.'],
  },
  tuition: {
    type: Number,
    required: [true, 'Please add a tuition cost.'],
  },
  minimumSkill: {
    type: String,
    required: [true, 'Please add a minimum skill.'],
    enum: ['beginner', 'intermediate', 'advanced'],
  },
  scholarshipAvailable: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // relationship between courses and bootcamps
  bootcamp: {
    type: mongoose.Schema.ObjectId,
    ref: 'Bootcamp',
    required: true,
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
});

// Static method to get avg of course tuitions
CourseSchema.statics.getAverageCost = async function (bootcampId) {
  const obj = await this.aggregate([
    // this is a mongoose method
    {
      $match: { bootcamp: bootcampId },
    },
    {
      $group: {
        // this is a mongodb method
        _id: '$bootcamp',
        averageCost: { $avg: '$tuition' },
      },
    },
  ]);
  console.log(obj);

  try {
    await this.model('Bootcamp').findByIdAndUpdate(bootcampId, {
      averageCost: Math.ceil(obj[0].averageCost / 10) * 10,
    });
  } catch (error) {
    console.log(error);
  }
};

// Call getAverageCost after save
CourseSchema.post('save', function () {
  this.constructor.getAverageCost(this.bootcamp);
});

// Call getAverageCost before remove
// Could be a problem with remove, see Bootcamp.js middleware for fix
CourseSchema.pre('remove', function () {
  this.constructor.getAverageCost(this.bootcamp);
});
module.exports = mongoose.model('Course', CourseSchema);
