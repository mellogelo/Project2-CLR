# TradeForex
Project 2 - TradeForex

Forex (Foreign Currency) Trading -

==== Summary ==== With all that is going on in the world today, it is even more important for investors to take advantage of every investment opportunity. While there are many ways to invest, there are not many tools for the novice investor to use and practice investing without putting his/her capital at risk.One of the best ways to make money is through foreign exchange trading (Forex). Buying and selling foreign currency while extremely risky, can yield enormous returns. The best way to9 take the guesswork out of this type of investing is to practice trading foreign currencies without putting your own cash at risk. At the same time, the practice should be based on real time data and exchange rates. This proposal is for the design and implementation of a three-tier web fronted application that will allow users to trade in virtual foreign exchange.

==== Goals ==== The goal of this project is to produce an application that will be gnarly and will impress prospective employers.

## Application Configuration

### Environmental Variables
The environmental variables should be configured for the proper operation of the server-side application. Most of the variables have default values but it is recommented that they are set nonetheless. In the developement environment, these variables van be set within the .env file. Otherwise follow deployment instructions to ensure that the variables are set within enviroment in which the application is deployed.

> - **DB_USER**: Database server user account name. This will be used to access the database server. Default is *forex*
> - **DB_PASSWORD**: Password for the database user account Default is *trade-forex*
> - **DB_HOST**: The database server hostname or IP address. Default is *localhost* or *127.0.0.1*
> - **DB_INSTANCE**: Name of the database instance. Default is *forexDB*
> - **DB_DIALECT**: Database engine type. default is *mysql*
> - **DB_PORT**: Port used to access the database server instance on the database host. Default is *3306* for *mysql*
> - **NODE_ENV**: Application environment. One of
>     - *development*
>     - *test*
>     - *production*
> - **USE_HTTPS**: If set to *true* the HTTP server will run using SSL and will use the HTTPS server port
> - **SERVER_PORT_HTTP**: HTML server port for HTTP protocol. Default is *8080*
> - **SERVER_PORT_HTTPS**: HTML server port for HTTPS protocol. Default is *443*

```
Trading means buying and selling. Not just displaying the information. The purpose of the site if for users to "pretend" they are actually trading. So each user will get the equivalent of $10,000 when they sign up (depending on the base currency they choose). Then they can start buying other currencies and selling those other currencies back to the base currency. So lets say you started with $10,000 last week and you used $5,000 to buy Brazilian money (BRL) at 3.90 to the USD last week (for a total of BRL 19,500) and the remaining $5000 to buy JPY (Japan Yen) at 106.4 yen to the dollar (for 532,000 Yen).
Lets say today the exchange rate is 4.0. It means your position in your base currency is now 19500/4 = $4,800.
At the same time, the yen has gone "up" to 101.8 yen to the dollar. That means you now have 5225.93 dollars.
Your balance in USD today would be 5225.93 + $4,800 = $10,025.93 for a gain of 0.25% in a week!!

```

https://stackoverflow.com/questions/18304504/create-or-update-sequelize
