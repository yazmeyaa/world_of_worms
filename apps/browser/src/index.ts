import { WebEngine } from "./game/engine";
import { Health, IsWorm, WormPart } from "@world_of_snakes/game/components";

const engine = new WebEngine();
for (const component of [Health, IsWorm, WormPart]) {
    engine.engine.world.components.register(component);
}
engine.engine.start();
