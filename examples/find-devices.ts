import { findDevices } from '../src/driver';

const devices = findDevices();

if (devices.length > 0) {
  console.log(`Found ${devices.length} devices connected`);
  for (let i = 0; i < devices.length; ++i) {
    console.log(`Device ${i + 1}: ${devices[i].type}`);
  }

  // Do something
} else {
  // Blow up
}
