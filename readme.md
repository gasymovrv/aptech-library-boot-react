# Тема: Онлайн-библиотека с возможностью покупки книг
![](https://github.com/gasymovrv/AptechLibrary/blob/master/src/main/webapp/resources/img/BeSmart-logo.png)

# Описание
+ Frontend - реакт, созданный через create-react-app (eject не делал).
    + Имеется несколько модулей, в каждом пробовал разные технологии совместно с реактом, главный - library-client-react-main
+ Backend - рест-сервис на spring-boot.

# Действия, необходимые для заупска
1. Если реальные данные из БД пока **НЕ** нужны, то можно перейти сразу к пункту 6. Spring-Boot автоматически поднимает in-memory-DB (hsqldb) и  генерит данные в CommandLineRunner. 
    
    Если реальные данные из БД все таки нужны, то удаляем строчки в **application.properties**:
    ```
    spring.datasource.url=jdbc:hsqldb:file:~/db/aplib
    spring.datasource.username=developer
    spring.datasource.password=developer
    spring.jpa.generate-ddl=true
    ```
    И раскоменчиваем:
    ```
    spring.datasource.url=jdbc:mysql://192.168.56.200:3306/aplib
    spring.datasource.username=aplib_owner
    spring.datasource.password=4
    spring.jpa.generate-ddl=false
    spring.datasource.driver-class-name=com.mysql.jdbc.Driver
    spring.liquibase.change-log=classpath:db/changelog/liquibase_changelog.xml
    ```
    Также раскоменчиваем строчки в pom.xml:
    ```
    <!--<dependency>-->
    	<!--<groupId>org.liquibase</groupId>-->
    	<!--<artifactId>liquibase-core</artifactId>-->
    <!--</dependency>-->
    ```
    Затем переходим к пункту 2.

1. Подключить в VirtualBox готовый диск **ub-serv-with-mysql.vbox** (логин/пароль/ip - rgasimov/4/192.168.56.200) или создать новую ВМ **ubuntu-16.04.3-server-amd64** с установленным MySQL и настройками сети:
    + Host-only adapter: VirtualBox Host-Only Ethernet Adapter #2
    + В глобальных настройках для 'VirtualBox Host-Only Ethernet Adapter #2' указан IPv4 addres = 192.168.56.1
    + Файл настроек сети на ubuntu **/etc/network/interfaces**
    должен выглядеть примерно так (главное чтобы совпадали адреса):
        ```
        source /etc/network/interfaces.d/*
    
        # The loopback network interface
        auto lo
        iface lo inet loopback
        
        # The primary network interface
        #auto enp0s3
        #iface enp0s3 inet dhcp
        
        # My host-only adapter (for 1: enp0s3, fro 2: enp0s8)
        auto enp0s3
        iface enp0s3 inet static
        address 192.168.56.200
        netmask 255.255.255.0
        ```

1. **MySQL** на ВМ с настройками (если **НЕ** подключен диск **ub-serv-with-mysql.vbox**):
    + Логин/пароль - aplib_owner/4
    + Кодировка. Изменить файл настроек MySQL:
        + ```sudo nano /etc/mysql/my.cnf``` или, если там пусто, то: ```sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf```
        + Изменить или добавить код в конце, если таких строк не будет:
            ```
            skip-character-set-client-handshake
            character-set-server = utf8
            init-connect='SET NAMES utf8'
            collation-server=utf8_general_ci
            ```
    + Сеть.
        Изменяем адреса, которые будет слушать mysql в файле в секции [mysqlid]:
        + ```sudo nano /etc/mysql/my.cnf``` или, если там нет такой секции, то ```sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf```
        + Вместо: ```bind address=127.0.0.1``` вписываем: ```bind address=0.0.0.0```
        + Перезагружаем: ```service mysql restart```
    + Привелегии.
        Заходим в mysql через консоль и создаем пользователей:
        + Если при установке mysql был задан пароль для root, то входим так ```sudo mysql --user=root --password=4```
        + Создаем юзеров и права для них:
            ```
            CREATE USER 'owner' IDENTIFIED BY '4';
            CREATE USER 'aplib_owner' IDENTIFIED BY '4';
            GRANT ALL PRIVILEGES ON *.* TO 'owner';
            GRANT ALL PRIVILEGES ON aplib.* TO 'aplib_owner';
            FLUSH PRIVILEGES;
            ```

1. **MySQLWorkbench** - если **НЕ** подключен диск **ub-serv-with-mysql.vbox**, то потребуется для дампа данных в БД, иначе по желанию.

1. **База данных**. БД можно восстановить так (если **НЕ** подключен диск **ub-serv-with-mysql.vbox**):
    + Через MySQLWorkbench импортировать скрипты:
        + Настройки подключения через MySQLWorkbench:
            + Host: 192.168.56.200
            + Port: 3306
            + Username: aplib_owner
            + Password: 4
        + Если требуются данные, то: db/dump(struct-and-data).sql
        + Если только структура, то: dump(struct).sql
    + Накатить db/liquibase/liquibase_db.xml
    (Запускать через мавен-плагин, выполнить liquibase:update)

1. **Maven 3**

1. **Java 8**

1. **Исходный код**. Можно сфетчить с GitHub или скачать в архиве. Запустить в Intellij IDEA или любой другой среде (хотя возможно потребуются доп. действия).

1. **Запуск бэкенда**. 
    + Заупскаем main-класс **LibraryApplication**. 
    + Теперь доступ к rest-api можно получить по урлу **http://localhost:8080**. Например **http://localhost:8080/books/findAll**. 
    + Также можно тестить в расширении chrome - **Postman**. В него нужно заимпортить файл  **aptech_library.postman_collection.json**.

1. **Запуск фронтенда**. 
    + В консоли переходим в необходимый клиентский модуль, например **library-client-react-main**. 
        + Если папки **node_modules** нет, то делаем ```mvn install``` в этой папке или через меню IDE, 
        + иначе можем запускать с помощью команды ```yarn start```. 
    + Переходим в браузере по урлу **http://localhost:[порт модуля]**. 
    + Описание клиентских модулей
        + library-client-react-main - основной, здесь главная реализация фронта библиотеки
        + library-client-react-books - просто список книг в табличном виде
        + library-client-react-npm-books - тоже что и предыдущий но с npm
        + library-client-reactstrap - подключен reactstrap
        + library-client-react-lifecycle - модуль с примерами использования методов ЖЦ
    + Просмотр компонентов через **storybook**:
        + Ставим глобально эту утилиту: ```npm i -g @storybook/cli```
        + Получаем нужные зависимости, запустив в проекте ```getstorybook```
        + Запускаем ```yarn run storybook``` или ```npm run storybook```. 
        + Можно открывать. Скорее всего запустится на **http://localhost:9009**