
## Project structure

```
nestjs-project/
├── src/
│   ├── common/                        # Common utilities, guards, pipes, etc.
│   │   ├── decorators/
│   │   │   └── public.decorator.ts
│   │   ├── filters/
│   │   │   └── http-exception.filter.ts
│   │   ├── guards/
│   │   │   └── auth.guard.ts
│   │   ├── interceptors/
│   │   │   └── logging.interceptor.ts
│   │   ├── middleware/
│   │   │   └── logger.middleware.ts
│   │   └── pipes/
│   │       └── validation.pipe.ts
│   │
│   ├── config/                       # Configuration files and env validation
│   │   ├── app.config.ts             # Loads and maps env variables
│   │   ├── env.validation.ts         # Joi validation schema for .env variables
│   │   └── config.module.ts          # ConfigModule setup (imports Nest ConfigModule)
│   │
│   ├── core/                         # Core reusable services
│   │   ├── logger/
│   │   │   └── logger.service.ts
│   │   ├── database/
│   │   │   └── database.service.ts
│   │   ├── exception/
│   │   │   └── exception.service.ts
│   │   └── core.module.ts
│   │
│   ├── shared/                       # Shared types, constants, utils
│   │   ├── constants/
│   │   │   └── app.constants.ts
│   │   ├── interfaces/
│   │   │   └── paginated.interface.ts
│   │   └── utils/
│   │       └── format.util.ts
│   │
│   ├── modules/                     # Feature modules (example)
│   │   ├── users/
│   │   │   ├── dto/
│   │   │   │   └── create-user.dto.ts
│   │   │   ├── users.controller.ts
│   │   │   ├── users.module.ts
│   │   │   └── users.service.ts
│   │   └── auth/
│   │       ├── auth.controller.ts
│   │       ├── auth.module.ts
│   │       └── auth.service.ts
│   │
│   ├── app.controller.ts            # Root app controller
│   ├── app.module.ts                # Root app module
│   └── main.ts                     # Bootstrap file
│
├── test/                           # Tests
│   ├── common/
│   ├── modules/
│   └── ...  
│
├── .env                           # Default env variables
├── .env.development               # Dev environment variables
├── .env.production                # Prod environment variables
├── package.json
├── tsconfig.json
├── nest-cli.json
└── README.md
```

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Environment setup
#### .env
```
NODE_ENV=development
PORT=3000
DATABASE_URL=mongodb://localhost:27017/devdb
```

#### .env.production
```
NODE_ENV=production
PORT=8080
DATABASE_URL=mongodb://mongo/proddb
```

#### .env.development
```
NODE_ENV=development
PORT=3000
DATABASE_URL=mongodb://localhost:27017/devdb
```

## Project setup

```bash
$ yarn install
```

## Compile and run the project

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Run tests

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ yarn install -g mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
