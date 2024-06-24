import { findDevices, turnOff } from '../src/driver';

const devices = findDevices();

if (devices.length > 0) {
  console.log(`Turning off ${devices.length} devices`);
  for (const device of devices) {
    turnOff(device);
  }
} else {
  // Blow up
}
