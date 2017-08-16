# libpostal-api
Small HTTP API to use [libpostal](https://github.com/openvenues/libpostal)

## Prerequisites

* [libpostal](https://github.com/openvenues/libpostal) `>= 1.0`
* [Node.js](https://nodejs.org) `>= 6.0`

Or see [Docker section](https://github.com/jdesboeufs/libpostal-api#docker)

## Usage

```bash
# Install package
npm install --production

# Start service
npm run start
```

## API

### Parse

`GET /parse?q=12 rue des trois rois, Metz`

```json
[
  {
    "value": "12",
    "component": "house_number"
  },
  {
    "value": "rue des trois rois",
    "component": "road"
  },
  {
    "value": "metz",
    "component": "city"
  }
]
```

See documentation for [parser labels](https://github.com/openvenues/libpostal#parser-labels)

### Normalize

`GET /normalize?q=12 rue des trois rois, Metz`

```json
[
  "12 rue des 3 rois metz"
]
```

## Docker

A Dockerfile is provided, but no image is currently published on Docker Hub.

⚠️ Building Docker image could take minutes since there are at least 800MB of training data to download.

```bash
# Build the Docker image
docker build -t libpostal-api .

# Run the container
docker run -p 3000:3000 libpostal-api
```

## License

MIT
