![Seneca](http://senecajs.org/files/assets/seneca-logo.png)
> A [Seneca.js](http://senecajs.org) plugin

# @seneca/telemetry-datadog

[![npm version](https://img.shields.io/npm/v/@seneca/telemetry-datadog.svg)](https://npmjs.com/package/@seneca/telemetry-datadog)
[![build](https://github.com/senecajs/seneca-telemetry-datadog/actions/workflows/build.yml/badge.svg)](https://github.com/senecajs/seneca-telemetry-datadog/actions/workflows/build.yml)
[![Coverage Status](https://coveralls.io/repos/github/senecajs/seneca-telemetry-datadog/badge.svg?branch=main)](https://coveralls.io/github/senecajs/seneca-telemetry-datadog?branch=main)
[![Known Vulnerabilities](https://snyk.io/test/github/senecajs/seneca-telemetry-datadog/badge.svg)](https://snyk.io/test/github/senecajs/seneca-telemetry-datadog)
[![DeepScan grade](https://deepscan.io/api/teams/5016/projects/19453/branches/505563/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=5016&pid=19453&bid=505563)
[![Maintainability](https://api.codeclimate.com/v1/badges/9d54b38a991fe7b92a43/maintainability)](https://codeclimate.com/github/senecajs/seneca-telemetry-datadog/maintainability)

| ![Voxgig](https://www.voxgig.com/res/img/vgt01r.png) | This open source module is sponsored and supported by [Voxgig](https://www.voxgig.com). |
|---|---|

## Install

```sh
npm install @seneca/telemetry-datadog
```

Also install the required peer dependencies:

- Install and enable the `datadog-agent` daemon from the Datadog website
- Install the `dd-trace` package

## Quick Example

```js
const DdTrace = require('dd-trace')
const Seneca = require('seneca')

const seneca = Seneca()
const tracer = DdTrace.init()

seneca.use('telemetry-datadog', {
  getTracer: () => tracer
})
```

## More Examples

See [test/](test/) for more usage examples.

## Motivation

A [Seneca.js](http://senecajs.org) plugin.

## Support

If you're using this module and need help, you can:

- Post a [github issue](https://github.com/senecajs/seneca-telemetry-datadog/issues)
- Tweet to [@senecajs](http://twitter.com/senecajs)
- Ask on the [Gitter](https://gitter.im/senecajs/seneca)

## API

### Notice

This piece of software is currently at the prototype stage, which means, among other things, that its API can be unstable,
and the software - buggy. For the duration of the prototype stage, we will also be using some auxiliary packages such as
`assert-plus` and `fetch-prop` - that are expected to help catch bugs.

## Contributing

The [Senecajs org](https://github.com/senecajs/) encourages open participation. If you feel you can help in any way, be it with documentation, examples, extra testing, or new features please get in touch.

### Running tests

```sh
npm run test
```

## Background

Part of the [Senecajs org](https://github.com/senecajs/).
 