import { findDevices, turnOn } from '../src/driver';

const devices = findDevices();

if (devices.length > 0) {
  console.log(`Turning on ${devices.length} devices`);
  for (const device of devices) {
    turnOn(device);
  }
} else {
  // Blow up
}
