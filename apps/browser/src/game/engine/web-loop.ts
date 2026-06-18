import { Clock, Loop, type StepFunction, type TimeSource } from "@draug/engine";

class WebTimeSource implements TimeSource {
    public now(): number {
        return performance.now();
    }
};

export type WebLoopConstructor = {
    stepFn: StepFunction;
};

export class WebLoop extends Loop {
    constructor({ stepFn }: WebLoopConstructor) {
        const clock = new Clock(new WebTimeSource());
        super(clock, stepFn, window.requestAnimationFrame.bind(window));
    }
}