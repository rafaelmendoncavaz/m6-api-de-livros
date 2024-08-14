# Requisições e Respostas

## POST /books

### Modelo de requisição
```json
{
	"name": "Harry Potter",
	"pages": 123,
	"category": "fantasia" 
}
```
### Padrão de Resposta (201)
```json
{
	"id": 1,
	"name": "Harry Potter",
	"pages": 123,
	"category": "fantasia",
	"createdAt": "2023-10-06T13:14:21.752Z",
	"updatedAt": "2023-10-06T13:14:21.752Z"
}
```
## GET /books

### Padrão de Resposta (200)
```json
[
	{
		"id": 1,
		"name": "Harry Potter",
		"pages": 123,
		"category": "fantasia",
		"createdAt": "2023-10-06T13:14:21.752Z",
		"updatedAt": "2023-10-06T13:14:21.752Z"
	}
]
```

## GET /books/:id

### Padrão de Resposta (200)
```json
[
	{
		"id": 1,
		"name": "Harry Potter",
		"pages": 123,
		"category": "fantasia",
		"createdAt": "2023-10-06T13:14:21.752Z",
		"updatedAt": "2023-10-06T13:14:21.752Z"
	}
]
```
# PATCH /books/:id

### Modelo de requisição (total ou parcial)
```json
{
	"name": "Harry Potter",
	"pages": 321,
	"category": "fantasia" 
}
// ou
{
	"pages": 321
}
```
### Padrão de Resposta (200)
```json
{
	"id": 1,
	"name": "Harry Potter",
	"pages": 321,
	"category": "fantasia",
	"createdAt": "2023-10-06T13:14:21.752Z",
	"updatedAt": "2023-10-06T13:14:21.752Z"
}
```

# DELETE /books/:id

### Modelo de requisição (total ou parcial)
```json
// Não há corpo de requisição
```
### Padrão de Resposta (204)