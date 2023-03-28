const myApi = async() =>{
    try {
        const response = await fetch('https://randomuser.me/api/?results=5');

        if(response.status >= 200 && response.status <300){
            const data = response.json();
            console.log(data);
        }else if(response.status >= 400 && response.status < 500){
            console.log('Error el recurso no fue encontrado');
        }else if(response.status >= 500 && response.status < 600){
            console.log('Error del servidor de base de datos');
        }else{
            console.log("Error Fatal");
        }

    } catch (error) {
        console.log(error);
        
    }
    
}

myApi();