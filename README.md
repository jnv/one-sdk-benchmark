# OneSDK Memory usage in v1 vs. v2

Memory usage measurement of [@superfaceai/one-sdk](https://github.com/superfaceai/one-sdk-js). This is intended to roughly measure base heap usage of OneSDK between versions using [Clinic.js Doctor](https://clinicjs.org/doctor/).

## Usage

Run `npm start` or manually execute the scripts:

1. [`./setup.sh`](./setup.sh) to install individual dependencies and install `clinic` package (via `npx`)
2. [`./single-profile.sh`](./single-profile.sh) to run the benchmark; this will run `single-profile.js` in `v1` and `v2` directory

   - each script is executed twice: first time to warm up a cache, second time with `clinic doctor` for profiling and a heap size limited to 128 MB
   - after each profiling an interactive profile snapshot is generated and opened by the default browser

## Contents

- `single-profile.js` measures OneSDK with single profile and map fetched from the registry, currently [weather/current-city](https://superface.ai/weather/current-city) with `wttr-in` provider is used
