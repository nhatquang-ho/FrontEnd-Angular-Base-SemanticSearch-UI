# Angular Frontend

## Run
1. unzip
2. `npm install`
3. `npm run start`
4. open http://localhost:4200

## Architecture
- src/app/components : UI components (one folder per component)
- src/app/services : API + auth services and interceptor
- Tailwind for styling. PostCSS + autoprefixer configuration included.

## Notes
- Backend base URL: http://localhost:8080/api — change in `src/environments/environment.ts`
- This is a scaffold: improve validation, guards, error handling, and tests for production.




# Angular Frontend for "Backend SpringBoot JWT SemanticSearch - API"

This repository is a **minimal Angular frontend scaffold** that calls the backend APIs described in your OpenAPI file (title: *Backend SpringBoot JWT SemanticSearch - API*).  
It includes components, services and an HTTP interceptor to use JWT authentication, and demonstrates how to call the endpoints (auth, users, products, semantic-search, etc).

## What is included
- Basic Angular app structure (`src/`)
- Components: Login, Register, Products list, Product detail, Users list, Profile
- Services: `auth.service.ts`, `api.service.ts` (implements most endpoints), `auth.interceptor.ts`
- Simple routing
- Environment config pointing at `http://localhost:8080` (the server URL in your OpenAPI)
- README with run instructions and architecture notes

> ⚠️ This is a scaffold — after downloading you must run `npm install` to install dependencies.