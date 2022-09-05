// Add your code here
function submitData(userName,userEmail){
    let userObject = {
        name : userName,
        email : userEmail
    };
    let userConfig = {
        method : "POST",
        headers : {
            "Content-type" : "application/json",
            Accept : "application/json"
        },
        body : JSON.stringify(userObject)
    }
    let postUser = fetch("http://localhost:3000/users",userConfig)
                    .then(res => res.json())
                    .then(object => {
                        document.body.append(object.id)
                    })
                    .catch(err => {
                        document.body.append(err.message);
                    })
    return postUser;             
}