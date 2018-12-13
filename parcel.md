
```shell
"build": "parcel build parcel/index.html --no-cache -d parcel/dist --public-url /dist/",
```
打包parcel/index.html文件，禁用缓存，输出目录为 parcel/dist, 入口文件的依赖(js/css)等打包后放到 /dist/ 下

# parcel + babel + react

## .babelrc

```json
{
  "presets": [
    ["env", { "modules": false }],
    "stage-0",
    "react"
  ],
  "plugins": ["transform-runtime"],
  "comments": false,
  "env": {
    "test": {
      "presets": ["env", "stage-0"],
      "plugins": [ "istanbul" ]
    }
  }
}
```

## package.json

```json
{
    "scripts": {
        "start": "node server/index.js",
        "build": "rm -rf parcel/dist && parcel build parcel/index.html --no-cache -d parcel/dist --public-url /dist/",
    },
    "dependencies": {
        "babel-plugin-transform-runtime": "^6.23.0",
        "babel-preset-env": "^1.7.0",
        "babel-preset-react": "^6.24.1",
        "babel-preset-stage-0": "^6.24.1",
        "koa": "^2.6.2",
        "koa-logger": "^3.2.0",
        "koa-static": "^5.0.0",
        "react": "^16.6.3",
        "react-dom": "^16.6.3"
    },
    "devDependencies": {
        "babel-core": "^6.26.3"
    }
}

```
