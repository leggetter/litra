import { findDevice } from '../src/driver';

const device = findDevice();

if (device) {
  console.log(`Found a ${device.type} device connected`);

  // Do something
} else {
  // Blow up
}
