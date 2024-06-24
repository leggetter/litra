#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const driver_1 = require("../driver");
try {
    const device = (0, driver_1.findDevice)();
    if (device) {
        const value = process.argv[2];
        (0, driver_1.setTemperatureInKelvin)(device, parseInt(value));
    }
    else {
        throw 'Device not found';
    }
    process.exit(0);
}
catch (e) {
    console.log(e);
    process.exit(1);
}
