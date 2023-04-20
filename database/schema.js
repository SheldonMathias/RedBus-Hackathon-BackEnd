const mongoose = require('mongoose')


const sensors = new mongoose.Schema({
  AbsoluteOrientalSensor:{
    required: true,
    type: Number
  },
  Accelerometer:{
    required: true,
    type:Number
  },
  AmbientLightSensor:{
    required: true,
    type: Number
  },
  GravitySensor:{
    required: true,
    type: Number
  },
  Gyroscope:{
    required: true,
    type: Number
  },
  Magnetometersensor:{
    required: true,
    type: Number
  },
  OrientalSensor:{
    required: true,
    type: Number
  },
  RelativeOrientalSensor:{
    required: true,
    type: Number
  }
})


const model = mongoose.model('Sensors',sensors)

module.exports= {model}