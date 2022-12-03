const express = require('express');
const  router = express.Router();

const controller = require('../controller/tokenController');

/**
 * @swagger
 *  components:
 *      schemas:
 *          Token:
 *              type: object
 *              properties:
 *                  usuario:
 *                      type: string
 *                      description: nome do usuario
 *                  senha:
 *                      type: string
 *                      description: senha do usuario              
 */

/**
 * @swagger
 * tags:
 *  name: Token
 *  description: Seção de autenticação
 */
/**
 * @swagger
 * /api/token:
 *  post:
 *      summary: realiza autenticacao
 *      tags: 
 *          - Token
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/Token'
 *      responses:
 *          200:
 *              description: Response
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          items:
 *                              $ref: '#components/schemas/Token'   
 * 
 * 
 */
router.post('/',controller.gerarToken);

module.exports = router;