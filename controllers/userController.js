



const signup = async (req, res) =>{
    res.status(200).send('Sign up Page')
}


const login = async (req, res) =>{
    res.status(200).send('login up Page')
}


module.exports = {signup, login}