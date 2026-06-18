import { Component } from "@draug/engine";

@Component({ name: "worm_part" })
export class WormPart {
    public head = false;
    public prevPartId: number | null = null;
    public nextPartId: number | null = null;
};
