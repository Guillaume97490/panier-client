const router = require("express").Router();

let controller = require("../controllers/articlesController");

/**
 * @request GET
 * @controller list
 * Liste tout les articles
 * 
 */
router.get('/', controller.list);

/**
 * @request GET
 * @controller add
 * Afficher le formulaire de creation d'un article
 */
router.get('/add', controller.add);

/**
 * @request POST
 * @controller create
 * Crée un nouvel article
 */
router.post('/create', controller.create);

/**
 * @request GET
 * @controller edit
 * @param - id: number
 * Affiche la page pour éditer un article grâce à son id
 */
router.get('/edit/:id', controller.edit);

/**
 * @request PUT
 * @controller update
 * @param - id: number
 * Met à jour un article grâce à son id
 */
router.post('/update/:id', controller.update);

/**
 * @request DELETE
 * @controller delete
 * @param - id: number
 * Supprime un article grâce à son id
 */
router.post('/delete/:id', controller.delete);

/**
 * @request POST
 * @controller addToPanier
 * @param - id: number; idUser: number
 * Ajoute un article au panier de l'utilisateur
 */
router.post('/:id/addToPanier/:idUser', controller.addToPanier);


module.exports = router;
