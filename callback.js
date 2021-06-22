//callback

console.log('loading')
getUser(1, (user) => {
    console.log(user)
    getFriends(2,(friends)=>{
        console.log(friends)

    })
})


function getUser(id, callbackFunc) {
    setTimeout(() => {
        console.log("finding user in database")
        const result = { id: 1, name: 'Hari', friendId: 1 }
        callbackFunc(result)
    }, 2000);
}

