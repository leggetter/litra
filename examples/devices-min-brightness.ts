import {
  findDevices,
  getMaximumBrightnessInLumenForDevice,
  getMinimumBrightnessInLumenForDevice,
  setBrightnessInLumen,
} from '../src/driver';

const devices = findDevices();

if (devices.length > 0) {
  console.log(`Setting the maximum brightness for ${devices.length} devices`);
  for (let i = 0; i < devices.length; ++i) {
    const device = devices[i];
    const minimumBrightness = getMinimumBrightnessInLumenForDevice(device);
    const maximumBrightness = getMaximumBrightnessInLumenForDevice(device);

    console.log(
      `The minimum allowed brightness for devices ${i + 1} is ${minimumBrightness} and the maximum is ${maximumBrightness}`,
    );

    setBrightnessInLumen(device, minimumBrightness);
  }
} else {
  // Blow up
}
