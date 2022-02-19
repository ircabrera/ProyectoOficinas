const urlCrud = 'http://localhost:8081';

const getListArriendos = async () => {
    const response = await fetch(`${urlCrud}/arriendo`);
    const data = await response.json();
    return data;
}

const findByIdArriendo = async (arriendoId) => {
    const response = await fetch(`${urlCrud}/arriendo/${arriendoId}`);
    const data = await response.json();
    return data;
}


const createArriendo = async (arriendo) => {
    const urldos="http://localhost:8081/arriendo"
    console.log(urldos)

    const resp = await fetch(urldos, {
        method: 'POST',
        body: JSON.stringify(arriendo),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}


const updateArriendo = async (arriendo) => {

    const resp = await fetch(`${urlCrud}/arriendo`, {
        method: 'PUT',
        body: JSON.stringify(arriendo),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getListArriendos,
    createArriendo,
    updateArriendo,
    findByIdArriendo

}


					