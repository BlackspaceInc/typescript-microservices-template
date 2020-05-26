# Node Microservices Template

Node Microservices Template using Driven Design Domain (DDD), CQRS and Event Sourcing

## Architecture

Architecture diagrams

![Explicit Architecture](images/architecture-1.png)

![Concentric Layers](images/architecture-2.png)

![Dependency Flow](images/architecture-3.png)

## Project structure

This project is structured by libraries and modules

```
├── .vscode                               # VSCode configuration to settings typescript version
│   └── settings.json                    
├── libs                                  # Folder that contains the libs for the microservices
│   ├── kernel                            # Shared Kernel (@micro/kernel)
│   ├── logger                            # Centralized library for logs both node js and browsers (@micro/logger)  
│   ├── server                            # Centralized library for create custom server using NestJS (@micro/server)  
│   └── utils                             # Library for validations, extensions, etc. (@micro/utils)  
├── microservices
│   ├── countries
│   │   ├── app
│   │   ├── config
│   │   ├── core
│   │   │   ├── application
│   │   │   │   ├── dtos
│   │   │   │   ├── transforms
│   │   │   │   └── use-cases
│   │   │   ├── domain
│   │   │   │   └── errors
│   │   │   ├── infraestructure
│   │   │   │   ├── database
│   │   │   │   ├── mappers
│   │   │   │   └── repositories
│   │   ├── interfaces
│   │   │   ├── console
│   │   │   │   ├── commands
│   │   │   │   └── app.js
│   │   │   ├── graphql
│   │   │   │   ├── core
│   │   │   │   ├── models
│   │   │   │   ├── modules
│   │   │   │   └── main.js
│   │   │   └── rest
│   │   │   │   ├── core
│   │   │   │   ├── modules
│   │   │   │   └── main.js
└── README.md