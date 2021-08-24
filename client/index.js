console.log('hi')
async function calculate() {
    const URL = 'http://localhost:3001/'
    let height = +document.getElementById('height').value
    let weight = +document.getElementById('weight').value
    if (height <= 0 || weight <= 0) {
        document.getElementById('response').innerHTML = 'Please put values above 0, and make sure that weight is in kg and height is in meters';
    }
    else {

        axios.post(URL, {
            height: height,
            weight: weight
        }).then(response => {
            console.log(response)
            document.getElementById('response').innerHTML = response.data;
        })
    }
}