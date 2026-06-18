import { Engine, type StepFunction } from '@draug/engine';
import { WebLoop } from './web-loop';
import { injectStd } from '@draug/engine/std-utils';


export class WebEngine {
    public readonly engine: Engine;
    private readonly stepFns: StepFunction[] = [];
    constructor() {
        const loop = new WebLoop({ stepFn: this.flushStepFns.bind(this) });
        const engine = new Engine({ loop });
        this.engine = engine;
        injectStd(this.engine.world);
    };

    private flushStepFns(...args: Parameters<StepFunction>): void {
        for (const fn of this.stepFns)
            fn(...args);
    };

    public addLoopStepFn(stepFn: StepFunction): void {
        this.stepFns.push(stepFn);
    };
};
