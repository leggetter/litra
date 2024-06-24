#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const driver_1 = require("./../driver");
try {
    const device = (0, driver_1.findDevice)();
    if (!device) {
        throw 'Device not found';
    }
    const DEVICE_ARG_VAL = 'camera';
    const EVENT_ARG_VAL = 'on';
    const deviceArgVal = process.argv[3];
    const eventArgVal = process.argv[5];
    const isCameraArg = deviceArgVal == DEVICE_ARG_VAL;
    const isEventOnArg = eventArgVal == EVENT_ARG_VAL;
    if (isCameraArg) {
        if (isEventOnArg) {
            (0, driver_1.turnOn)(device);
        }
        else {
            (0, driver_1.turnOff)(device);
        }
    }
    process.exit(0);
}
catch (e) {
    console.log(e);
    process.exit(1);
}
