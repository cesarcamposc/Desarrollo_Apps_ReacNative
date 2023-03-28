const randomAPI = async ()=>{
    try {
        const results = await fetch('https://randomuser.me/api/?results=10');
        const data = await results.json();
        
        //console.log(data.results[5].name);

        let tableData = "";

        data.results.map((values) =>{
            tableData = tableData + `<tr>
            <td>${values.name.first}</td>
            <td>${values.name.last}</td>
            <td>${values.dob.age}</td>
            <td>${values.gender}</td>
            <td>${values.email}</td>
            <td>${values.nat}</td>
            <td><img src = '${values.picture.thumbnail}'></td>
        </tr>`
        })
        
        
        document.getElementById('table_body').innerHTML = tableData;
        
    } catch (error) {
        console.log(error);
    }
}

randomAPI();