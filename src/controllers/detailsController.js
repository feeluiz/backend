const axios = require('axios')
module.exports = {
    async getDetails(req, res){
        const {username } = req.body
        if(username != undefined){

        try {
            const details = await axios.get(`https://api.github.com/users/${username}`)
            const repos = await axios.get(`https://api.github.com/users/${username}/repos`)
            const urls = await Object.entries(repos.data).map(item => item[1]['html_url'])
            
            if(details.status == 200 && repos.status == 200 ){

                const info = {
                    name: details.data['name'],
                    avatar: details.data['avatar_url'],
                    bio: details.data['bio'],
                    page:  details.data['html_url'],
                    repositories: urls
                }
                return res.json(info)            
            }else{
                return res.json({'items': [],'error': 'Não encontrado'})            
            }

        } catch (error) {
            console.log(error.message);
            return res.json({'items': [],'error': error.message})
        }   
        }
    }   
}