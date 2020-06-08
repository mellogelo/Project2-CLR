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
