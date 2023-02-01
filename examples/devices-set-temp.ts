import {
  findDevices,
  getMaximumTemperatureInKelvinForDevice,
  getMinimumTemperatureInKelvinForDevice,
  setTemperatureInKelvin,
  // setTemperaturePercentage,
} from '../src/driver';

const devices = findDevices();

if (devices.length > 0) {
  console.log(`Setting the maximum brightness for ${devices.length} devices`);
  for (let i = 0; i < devices.length; ++i) {
    const device = devices[i];
    const minimumTemperature = getMinimumTemperatureInKelvinForDevice(device);
    const maximumTemperature = getMaximumTemperatureInKelvinForDevice(device);

    console.log(
      `The minimum allowed temperature for device ${i + 1} is ${minimumTemperature} and the maximum is ${maximumTemperature}`,
    );

    const WARM = minimumTemperature;
    const COOL = maximumTemperature;
    const NEUTRAL = (COOL - WARM) / 2 + WARM;
    const temp = NEUTRAL;
    console.log(`Setting temperature of device ${i + 1} to ${temp}`);
    setTemperatureInKelvin(device, temp);
    // setTemperaturePercentage(device, 100);
  }
} else {
  // Blow up
}
