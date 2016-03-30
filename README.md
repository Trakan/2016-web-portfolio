# Mike Trakan's Web Portfolio

## Dependencies

Run `bower install`
Run `npm install`

## Build & development

- `$ gulp` to build an optimized version of application in folder dist
- `$ gulp serve` to start BrowserSync server on source files with live reload
- `$ gulp serve:dist` to start BrowserSync server on optimized application without live reload

## Testing

- `$ gulp test` to run unit tests with Karma
- `$ gulp test:auto` to run unit tests with Karma in watch mode
- `$ gulp protractor` to launch e2e tests with Protractor
- `$ gulp protractor:dist` to launch e2e tests with Protractor on the dist files
