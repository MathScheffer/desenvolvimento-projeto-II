exports.GET_ROTINA = (id_rotina) => `http://localhost:3000/api/rotinas/${id_rotina}`

exports.GET_EXERCICIO = (id) => 'http://localhost:3000/api/rotinas/exercicio/' + id;

exports.PUT_EXERCICIO = (id) => `http://localhost:3000/api/rotinas/exercicio/${id}/atualizar`;

exports.PUT_ADD_EXERCICIO = (id_rotina) => `http://localhost:3000/api/rotinas/${id_rotina}/exercicio/adicionar`;

exports.DELETE_EXERCICIO = (id_exercicio) => `http://localhost:3000/api/rotinas/exercicio/${id_exercicio}`