# PESELTask

## Important note
The project is a task done according to received general requirements. Entire code together with a code construction idea is written from scratch purely by me.

## Project manual
- Clone and run a project using an undermentioned instruction. The project is written using Angular 8.0.6, node 12.13.1 and npm 6.12.1.
- Use an input to type a PESEL number.
- "Wyślij" button unlocks only with a valid PESEL number.
- Use "Wyślij" button to show [numbersapi](http://numbersapi.com) response requested with entered PESEL number.
- "Wyczyść" button clears API response.

## Development server
Run 
```
ng serve
```
or 
```
npm start
```
for a dev server to start. Navigate to `http://localhost:4200/` to see the page.

## Technologies used
- Angular 8 & TypeScript.
- Angular Materials.
- Angular HttpClient + [numbersapi](http://numbersapi.com) REST API.
- SCSS preprocessor & HTML.
