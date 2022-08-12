const { SuperfaceClient } = require('@superfaceai/one-sdk');

const sdk = new SuperfaceClient();

async function run() {
  // Load the installed profile
  const profile = await sdk.getProfile('weather/current-city');

  // Use the profile
  const result = await profile.getUseCase('GetCurrentWeatherInCity').perform({
    city: 'Prague, Czech Republic',
    units: 'C',
  });

  console.log(result.unwrap());
}

run();
