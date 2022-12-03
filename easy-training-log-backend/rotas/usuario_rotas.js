const express = require('express')
const router = express.Router();

const controller = require('../controller/usuarioController');
const middleware_role = require('../middleware/role')

//router.use(middleware_role.validarTokenAdm)
router.post('/',controller.adicionar)


router.get('/',controller.listar)
router.get('/query',controller.encontrarUsuarioPorNome)

/**
 * @swagger
 *  components:
 *      schemas:
 *          Usuario:
 *              type: object
 *              required:
 *                  - _id
 *              properties:
 *                  _id:
 *                      type: string
 *                      description: id do usuario
 *                  nome:
 *                      type: string
 *                      description: nome do usuario
 *                  senha:
 *                      type: string
 *                      description: senha do usuario
 *                  whatsapp:
 *                      type: string
 *                      description: whatsapp do usuario
 *                  idade:
 *                      type: number
 *                      description: idade do usuario
 *                  peso:
 *                      type: number
 *                      description: peso do usuario
 *                  sexo:
 *                      type: string
 *                      description: sexo do usuario 
 *                  objetivo:
 *                      type: string
 *                      description: idade do usuario                  
 *                  rotina:
 *                      type: obj
 *                      description: rotina do usuario                  
 */

/**
 * @swagger
 * /api/usuarios/{id}:
 *    get:
 *      summary: 
 *          retorna um usuario especifico
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: string
 *          required: true
 *          description: id do usuario    
 *        - in: header
 *          name: x-auth-token
 *          schema:
 *              type: string
 *          required: true
 *          description: token do usuario                       
 *      responses:
 *          200:
 *              description: Usuario
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#components/schemas/Usuario'   
 * 
 * 
 */
router.get('/:id',controller.encontrarUsuario)

router.put('/incrementar-rotina/:id',controller.incrementarRotina)
router.put('/decrementar-rotina/:id',controller.decrementarRotina)
router.put('/:id',controller.atualizarUsuario)

router.delete('/:id',controller.excluirUsuario)


module.exports = router;