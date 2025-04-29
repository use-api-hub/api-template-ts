import { Request, Response } from "express";
import { Monster } from "../models/Monster";
import monsters from "../data/monsters.json";

export class MonsterController {
  public getAllMonsters(req: Request, res: Response): void {
    res.json(monsters);
  }

  public getMonsterById(req: Request, res: Response): void {
    const monster = monsters.find((m) => m.id === req.params.id);
    if (!monster) {
      res.status(404).json({ message: "Monster not found" });
      return;
    }
    res.json(monster);
  }

  public getMonstersByType(req: Request, res: Response): void {
    const monsterType = req.params.type.toLowerCase();
    const filteredMonsters = monsters.filter(
      (m) => m.type.toLowerCase() === monsterType
    );
    if (filteredMonsters.length === 0) {
      res.status(404).json({ message: "No monsters found of this type" });
      return;
    }
    res.json(filteredMonsters);
  }

  public getMonsterWeaknesses(req: Request, res: Response): void {
    const monster = monsters.find((m) => m.id === req.params.id);
    if (!monster) {
      res.status(404).json({ message: "Monster not found" });
      return;
    }
    res.json(monster.weaknesses);
  }
}
