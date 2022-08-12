const { SuperfaceClient } = require('@superfaceai/one-sdk');

const sdk = new SuperfaceClient();

async function run() {
  // Load the profile
  const profile = await sdk.getProfile('weather/current-city@1.0.2');

  // Use the profile
  const result = await profile.getUseCase('GetCurrentWeatherInCity').perform(
    {
      city: 'Prague, Czech Republic',
      units: 'C',
    },
    {
      provider: 'wttr-in',
    }
  );

  // Handle the result
  try {
    const data = result.unwrap();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

run();
