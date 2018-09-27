# Криптобиржа криптокотиков

Перед Вами начало работы над прототипом биржи криптокотиков - таблица, в которой отображаются список котиков на продажу.
Таблица связана с API располагается по адресу `cats.demo.javascript.ninja`. По этому адресу работает GET-запрос, доступный по урлу `cats.demo.javascript.ninja/cats`. Также по этому адресу работает websocket, который присылает три вида сообщений:
* `update` - когда цена на котика изменяется
* `add` - когда добавляется новый котик
* `remove` - когда котик удаляется

Необходимо "слегка" добработать этот проект:
- сделать аватару котика красивой - обернуть в кружочек с бордером и выровнять по высоте
- добавить в каждое "поколение" котиков возможность свертывания и развертывания об этом поколении
- реализовать кнопку "Купить" - которая показывает модалку с вводом email'а