# TIENDA API

Este proyecto está desarrollado utilizando NestJS y PostgreSQL, y se despliega en contenedores Docker tanto para la aplicación como para la base de datos. La estructura del proyecto asegura una implementación eficiente y escalable, adecuada para diversas aplicaciones empresariales.

## CARACTERÍSTICAS PRINCIPALES

- Framework Backend: NestJS
- Base de Datos: PostgreSQL
- Contenedores: Docker

## DESPLIEGUE Y ACTUALIZACIÓN

El proyecto y la base de datos se alojan en contenedores Docker, lo que garantiza un entorno de ejecución consistente y una fácil administración de dependencias y configuraciones. El repositorio se actualiza periódicamente para incorporar mejoras, nuevas funcionalidades y actualizaciones de seguridad, asegurando la continuidad y estabilidad del proyecto.

## SIGA LOS PASOS PARA LEVANTAR EL PROYECTO

1. Clonar proyecto
2. `yarn install`
3. Clonar el archivo `.env.template` y renombrarlo a `.env`
4. Cambiar las variables de entorno
5. Levantar la base de datos

```
docker-compose up -d
```

6. Ejecutar SEED

```
localhost:3000/api/seed
```

6. levantar: `yarn start:dev`

## API DISPONIBLES PARA CONSUMIR

## PRODUCTOS.

POST. ONE PRODUCT.

```
localhost:3000/api/products
```

Ejemplo body

```
{
    "title":"Titulo producto1234563ddd",
    "sizes":["SM","M","L"],
    "gender":"men",
    "price":151,
     "tags":["TSHIR" ],
    "images":[
        "imagen1",
        "imagen2"
    ]
}
```

GET. ALL

```
localhost:3000/api/products?limit=10&offset=0
```

GET. ONE PRODUCT WITH ID

```
localhost:3000/api/products/6fd25ebe-e449-49d8-8de7-f5d29a4674a1
```

DELETE. ONE PRODUCT WITH ID

```
localhost:3000/api/products/6fd25ebe-e449-49d8-8de7-f5d29a4674a1
```

GET. SEED DE PRODCUTO

```
localhost:3000/api/seed
```

POST. UPLOAD PRODUCT. USE FORM-DATA

```
localhost:3000/api/files/product
```

GET. IMAGE WITH NAME IMAGE

```
localhost:3000/api/files/product/1741416-00-A_1.jpg
```

## USUARIOS

POST. LOGIN

```
localhost:3000/api/auth/login
```

Ejemplo de body

```
{
    "email":"norio@gmail.com",
    "password":"Abc123"
}
```

POST. REGISTER USER

```
localhost:3000/api/auth/register
```

Ejemplo de body

```
{
    "email":"norio@gmail.com",
    "password":"Abc123",
    "fullName":"NorioD Shimomoto2"
}
```
