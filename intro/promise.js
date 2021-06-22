const isRiderArrived = false

//create
const ride = new Promise((resolve, reject) => {
    if (isRiderArrived) {
        resolve('Drive has arrived')
    } else {
        reject('driver is ....')
    }
})

//consume
ride.then(value => {
    console.log(value)
})
    // .then()
    // .then()
    // .then()
    .catch((error) => {
        console.log("Error :", error)
    })

//concurrent 