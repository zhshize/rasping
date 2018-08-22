# 介紹
就是個可以幫你一直ping伺服器，然後會把結果念給你聽的程式。

## 需求
請先安裝mgp123播放器，或者在設定檔裡修改使用的播放器。

## 使用
### 安裝
    $ git clone https://github.com/zhshize/rasping.git
    $ cd rasping
    $ npm install
### 使用
    $ sudo npm run start
(要有root權限)

## 設定檔
src/config.js:

    module.exports = {
        // 目標伺服器
        targetHost: "1.1.1.1",
        // 就是Timeout
        timeout: 3000,
        // 使用的播放器
        // Linux: mpg123, Mac OS X: afplay, Windows: 我不知道
        audioPlayer: 'mpg123'
    };

## 授權
Copyright 2018 zhshize

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.