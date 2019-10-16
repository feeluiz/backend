const axios = require('axios')
module.exports = {
    async search(req,res){
        const {username, repos } = req.body
        if(username != undefined || repos != undefined){

         try {
             let url = `https://api.github.com/search/users?q=` 
             if(username != undefined) url += `user:${username}`
             if(username != undefined && repos != undefined) url += `&`
             if(repos != undefined) url += `repos:${repos}`
             const response = await axios.get(url)
             const info = response.data.items.map( (item)=>{
                const {public_repos,avatar_url,login} = item
                return  {public_repos,avatar_url,login} 
             })

             console.log(info);
             return res.json(info)            
             
         } catch (error) {
             console.log(error);

         }   
        }
    }   
}