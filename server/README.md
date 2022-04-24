# REST API MOVIES

## Konfiguracja bazy danych

Po zainstalowaniu bazy danych należy podmienić konfigurację w pliku `index.js` (linie 15-21):

```js
const client = new Pool ({
    host: process.env.PGHOST || 'localhost',
    port: process.env.PGPORT || 5432, // podaj port
    database: process.env.PGDB || 'postgres',
    user: process.env.PGUSER || 'postgres',
    password: process.env.POSTGRES_PASS || 'zaq1@WSX' // podaj hasło
});
```


## Uruchomienie backendu

Instalacja potrzebnych paczek:
```
yarn install
```

Uruchomienie backendu
```
yarn start
```

Projekt jest dostępny pod adresem:
```
http://localhost:5000
```

## Swagger

Api Documentation

```
http://localhost:5000/api-docs
```

### Walidatory

1. Tytuł musi być unikalny
2. Rok musi być z przedziału 1000 a aktualny rok
3. Link do zdjęcia jest opcjonalny
4. Ocena filmu musi wynosić między 1 a 5