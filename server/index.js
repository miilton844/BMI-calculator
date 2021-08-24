const express = require('express');
const cors = require('cors')

let app = express();
app.use(cors())

app.use(express.json())

app.listen(3001)




app.post('/', function (req, res) {

  console.log(req.body)
  let { height, weight } = req.body
  let BMI = BMICalc(height, weight)
  console.log(BMI)
  res.send('Your BMI is ' + BMI)
})

function BMICalc(height, weight) {
  let squareOfHeight = height * height
  let BMI = (weight) / (squareOfHeight)
  console.log(BMI)
  return BMI;
}
