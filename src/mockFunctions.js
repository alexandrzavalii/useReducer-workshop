

export const login = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({user: "Superman"})
        },2000)
    })
}

export const createUser = (username) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({user: username})
        },2000)
    })
}
