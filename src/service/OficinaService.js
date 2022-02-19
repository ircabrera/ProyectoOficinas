const urlCrud = 'http://localhost:8081';

const getListOficinas = async () => {
    const response = await fetch(`${urlCrud}/oficina`);
    const data = await response.json();
    return data;
}

const findByIdOficina = async (oficinaId) => {
    const response = await fetch(`${urlCrud}/oficina/${oficinaId}`);
    const data = await response.json();
    return data;
}


const createOficina = async (oficina) => {
    const urldos="http://localhost:8081/oficina"
    console.log(urldos)

    const resp = await fetch(urldos, {
        method: 'POST',
        body: JSON.stringify(oficina),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}


const updateOficina = async (oficina) => {

    const resp = await fetch(`${urlCrud}/oficina`, {
        method: 'PUT',
        body: JSON.stringify(oficina),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getListOficinas,
    createOficina,
    updateOficina,
    findByIdOficina

}
