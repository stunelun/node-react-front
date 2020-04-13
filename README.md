### Task : Make candle-chart from KorbitAPI

Target:
https://www.korbit.co.kr/markets/?market=btc-krw

API Source:
https://api.korbit.co.kr/v1/ticker/detailed/all


### Back-end : Database Operation

    - [V] Setting develop-Database Tools : Mysql
    - [V] Create Database Table
    - [V] Insert Mock-up data
    
    - [▲] Setting Environment : Typescript, QraphQL, Axios, etc...
    - [V] Calling data based on Korbit API
    - [ ] Auto calling & inserting API data into the table (Interval: minute)


### Front-end : Customer Web Page
    - [V] Setting develop-Environment : Typescript & Javascript, React, (HTML, CSS,) etc...
    - [V] Mock-up Directory-structure
    - [V] Layout : Header, Body, Footer
    - [V] Layout : Body division ( left / right )
    - [ ] get Component
        - [V] DataBox - get mock_up Database
        - [▲] Button
        - [ ] Chart
            - ( ※상세 설계 필요 ) 
            Internet blog data: https://lasdri.tistory.com/810
    

### Middle Ware : Web-Back Operation Tool
    - [ ] Construct dataLogic
        - [▲] timestamp, high, low, open, close : getData => make arrayData

    - [ ] function : hourData, dayData, (monthData), etc...
    - [ ] function : showData (use hourData or dayData or ...)
    - [ ] Connect link : Currency_pair - Data
        - [ ] DatabaseFunction : select
        - [ ] button link : division Currency_pair (BTC, ETH, XRP, ...)
        - [ ] view chart