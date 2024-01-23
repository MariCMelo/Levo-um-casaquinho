 # Levo um casaquinho?

## Sobre
ClimaNow é uma aplicação web projetada para resolver um problema comum: ajudar as pessoas a se prepararem para as condições climáticas ao planejar viagens ou passeios. A aplicação fornece informações detalhadas sobre o clima de uma cidade específica, incluindo a temperatura atual, máxima, mínima e a previsão para os próximos dias.

Instruções para rodar o projeto:

- Certifique-se de ter o `Node.js` e `npm`   previamente instalados.

- ## Instalação

`git clone https://github.com/MariCMelo/Projeto-24-Levo-um-casaquinho.git`

`cd Projeto-24-Levo-um-casaquinho.git`

`npm install` -- Instala as dependencias

`npm run dev` -- inicia o projeto

Crie um arquivo `.env` na raiz do projeto e adicione as configurações necessárias:

```
VITE_API_URL=https://api.openweathermap.org/data/2.5/weather
VITE_API_URL_CITY=https://api.openweathermap.org/geo/1.0/direct      
VITE_API_KEY=Your_open_weather_map_API_key
```

O deploy do do front-end pode ser visto no seguinte link: 

[Projeto - Levo um Casaquinho](https://projeto-24-levo-um-casaquinho.vercel.app/)

Para verificar as condições climáticas de uma cidade digite o nome da cidade desejada dentro do Input e pressione "Enter"
