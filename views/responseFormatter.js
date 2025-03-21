const responseFormater =(data) => {
    if(data){
        return JSON.stringify({error: "No hay información"})
        
    } return JSON.stringify(data, null, 2)
}

module.exports = { responseFormater};
