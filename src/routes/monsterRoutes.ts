import { Router } from "express";
import { MonsterController } from "../controllers/monsterController";

const router = Router();
const controller = new MonsterController();

/**
 * @swagger
 * /api/monsters:
 *   get:
 *     summary: Get all monsters
 *     tags: [Monsters]
 *     responses:
 *       200:
 *         description: List of all monsters
 */
router.get("/", controller.getAllMonsters);

/**
 * @swagger
 * /api/monsters/{id}:
 *   get:
 *     summary: Get a monster by ID
 *     tags: [Monsters]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Monster details
 *       404:
 *         description: Monster not found
 */
router.get("/:id", controller.getMonsterById);

/**
 * @swagger
 * /api/monsters/type/{type}:
 *   get:
 *     summary: Get monsters by type
 *     tags: [Monsters]
 *     parameters:
 *       - in: path
 *         name: type
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of monsters of specified type
 *       404:
 *         description: No monsters found
 */
router.get("/type/:type", controller.getMonstersByType);

/**
 * @swagger
 * /api/monsters/{id}/weaknesses:
 *   get:
 *     summary: Get monster weaknesses
 *     tags: [Monsters]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Monster weaknesses
 *       404:
 *         description: Monster not found
 */
router.get("/:id/weaknesses", controller.getMonsterWeaknesses);

export default router;
