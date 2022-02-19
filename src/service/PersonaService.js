const urlCrud = 'http://localhost:8081';

const getListPersonas = async () => {
    const response = await fetch(`${urlCrud}/persona`);
    const data = await response.json();
    return data;
}

const findByIdPersona = async (personaId) => {
    const response = await fetch(`${urlCrud}/persona/${personaId}`);
    const data = await response.json();
    return data;
}


const createPersona = async (persona) => {
    const urldos="http://localhost:8081/persona"
    console.log(urldos)

    const resp = await fetch(urldos, {
        method: 'POST',
        body: JSON.stringify(persona),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}


const updatePersona = async (persona) => {

    const resp = await fetch(`${urlCrud}/persona`, {
        method: 'PUT',
        body: JSON.stringify(persona),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getListPersonas,
    createPersona,
    updatePersona,
    findByIdPersona

}
