function internation() {

}

internation.prototype.languagePacks = {
    zh_cn: {
        lan:{
            // menu items
            "menu_explorer": "区块查询",
            "menu_api": "接口API",
            "menu_markets": "B网行情",
            "menu_richlist": "排行榜100名",
            "menu_reward": "奖励",
            "menu_movement": "交易查询",
            "menu_node": "节点数据",
            "menu_network": "网络",

            // explorer view
            "ex_title": "区块链浏览器",
            "ex_search_title": "检索",
            "ex_search_button": "检索",
            "ex_search_message": "您可以输入块高度，块哈希值，tx哈希值或地址.",
            "ex_error": "错误!",
            "ex_search_error": "没有搜索到结果: ",
            "ex_latest_transactions": "最近交易记录",
            "ex_summary": "区块摘要",
            "ex_supply": "白币供应",
            "ex_block": "块",

            // transaction view
            "tx_title": "交易详细",
            "tx_block_hash": "块哈希",
            "tx_recipients": "接收人",
            "tx_contributors": "输入地址",
            "tx_hash": "哈希",
            "tx_address": "地址",
            "tx_nonstandard": "不标准的TX哈希",
            "tx_timestamp": "时间戳",
            "tx_txid": "交易编号",
            "tx_amount": "数量",

            // block view
            "block_previous": "上一页",
            "block_next": "下一页",
            "block_title": "区块详情",
            "block_genesis": "起源",

            // global
            "difficulty": "难度系数",
            "network": "网络",
            "stakingweight": "网络权重",
            "height": "高度",
            "timestamp": "时间戳",
            "size": "尺寸",
            "transactions": "传输记录",
            "total_sent": "发送总量",
            "total_received": "接收总量",
            "confirmations": "确认数",
            "total": "总计",
            "bits": "比特",
            "nonce": "Nonce",
            "new_coins": "新币",
            "proof_of_stake": "PoS",
            "initial_index_alert": "索引尚未更新完毕.",

            //address menu
            "a_menu_showing": "查看最新",
            "a_menu_txs": "传输信息",
            "a_menu_all": "所有",

            //richlist
            "rl_received_coins": "前100 - 接收币",
            "rl_current_balance": "前100 - 当前账户",
            "rl_received": "接收到的",
            "rl_balance": "账户",
            "rl_wealth": "财富分布",
            "rl_top25": "前 1-25名",
            "rl_top50": "前 26-50名",
            "rl_top75": "前 51-75名",
            "rl_top100": "前 76-100名",
            "rl_hundredplus": "100名以后",

            "net_connections": "连接数",
            "net_address": "地址",
            "net_protocol": "协议",
            "net_subversion": "子版本号",
            "net_country": "国家",
            "net_warning": "过去24小时内连接到此节点的钱包数量。",

            // api view
            "api_title": "接口文档",
            "api_message": "块浏览器提供了一个API，允许用户或应用程序从网络中检索信息，而不需要本地钱包。",
            "api_calls": "接口调用",
            "api_getnetworkhashps": "返回当前的网络哈希率。 (哈希值/秒)",
            "api_getdifficulty": "返回当前的难度。",
            "api_getconnectioncount": "返回块浏览器对其他节点的连接数。",
            "api_getblockcount": "返回当前的块索引。",
            "api_getblockhash": "返回块的哈希值;索引创始区块。",
            "api_getblock": "返回有关给定散列的块的信息。",
            "api_getrawtransaction": "返回给定事务ID的原始事务表示。解密可以设置为0（假）或1（真）。",
            "api_getmaxmoney": "返回最大可能的货币供应量。",
            "api_getmaxvote": "返回当前投票阶段允许的最大投票数。",
            "api_getvote": "返回当前的区块奖励投票设置。",
            "api_getphase": "返回当前的投票阶段（'Mint'，'Limit'或'Sustain'）。",
            "api_getreward": "返回上一轮积分奖励投票中民主决定的当前积分奖励。",
            "api_getsupply": "返回当前的货币供应。",
            "api_getnextrewardestimate": "基于当前的分散投票状态，返回下一个块奖励的估算值。",
            "api_getnextrewardwhenstr": "返回字符串，描述计算投票的时间和计算下一个数据块奖励的时间。",

            // Markets view
            "mkt_hours": "24 小时",
            "mkt_view_chart": "查看24小时摘要",
            "mkt_view_summary": "查看24小时图",
            "mkt_no_chart": "图表数据不能通过市场API获得。",
            "mkt_high": "最高",
            "mkt_low": "最低",
            "mkt_volume": "交易量",
            "mkt_top_bid": "最高出价",
            "mkt_top_ask": "最高要价",
            "mkt_last": "最新价格",
            "mkt_yesterday": "昨天",
            "mkt_change": "更改",
            "mkt_sell_orders": "卖单",
            "mkt_buy_orders": "买单",
            "mkt_price": "价格",
            "mkt_amount": "数量",
            "mkt_total": "总量",
            "mkt_trade_history": "交易历史",
            "mkt_type": "类型",
            "mkt_time_stamp": "时间戳",

            // Markets
            "poloniex": "P网",
            "bittrex": "B网",
            "bleutrade": "Bleutrade",
            "yobit": "Yobit",
            "empoex": "Empoex",
            "cryptsy": "Cryptsy",
            "cryptopia": "Cryptopia",
            "ccex": "C-Cex",

            // Heavy rewards view
            "heavy_title": "挖矿所得",
            "heavy_vote": "捐款",
            "heavy_cap": "Coin Cap",
            "heavy_phase": "Phase",
            "heavy_maxvote": "Max Vote",
            "heavy_reward": "奖励",
            "heavy_blocks": "区块",
            "heavy_current": "当前奖励",
            "heavy_estnext": "Est. Next",
            "heavy_changein": "奖励变化约为",
            "heavy_key": "Key",
            "heavy_lastxvotes": "最近20天捐款数据"

        }
    },
    en_us: {
        lan: {
            // menu items
            "menu_explorer": "Explorer",
            "menu_api": "API",
            "menu_markets": "Markets",
            "menu_richlist": "Top 100",
            "menu_reward": "Reward",
            "menu_movement": "Movement",
            "menu_node": "Nodes",
            "menu_network": "Network",


            // explorer view
            "ex_title": "Block Explorer",
            "ex_search_title": "Search",
            "ex_search_button": "Search",
            "ex_search_message": "You may enter a block height, block hash, tx hash or address.",
            "ex_error": "Error!",
            "ex_search_error": "Search found no results for: ",
            "ex_latest_transactions": "Latest Transactions",
            "ex_summary": "Block Summary",
            "ex_supply": "Coin Supply",
            "ex_block": "Block",

            // transaction view
            "tx_title": "Transaction Details",
            "tx_block_hash": "Block Hash",
            "tx_recipients": "Recipients",
            "tx_contributors": "Input Addresses",
            "tx_hash": "Hash",
            "tx_address": "Address",
            "tx_nonstandard": "NONSTANDARD TX",
            "tx_timestamp": "Timestamp",
            "tx_txid": "txid",
            "tx_amount": "amount",

            // block view
            "block_previous": "Previous",
            "block_next": "Next",
            "block_title": "Block Details",
            "block_genesis": "GENESIS",

            // global
            "difficulty": "Difficulty",
            "network": "Network",
            "stakingweight": "Staking Weight",
            "height": "Height",
            "timestamp": "Timestamp",
            "size": "Size",
            "transactions": "Transactions",
            "total_sent": "Total Sent",
            "total_received": "Total Received",
            "confirmations": "Confirmations",
            "total": "Total",
            "bits": "Bits",
            "nonce": "Nonce",
            "new_coins": "New Coins",
            "proof_of_stake": "PoS",
            "initial_index_alert": "Indexing is currently incomplete, functionality is limited until index is up-to-date.",

            //address menu
            "a_menu_showing": "Showing last",
            "a_menu_txs": "transactions",
            "a_menu_all": "All",

            //richlist
            "rl_received_coins": "Top 100 - Received Coins",
            "rl_current_balance": "Top 100 - Current Balance",
            "rl_received": "Received",
            "rl_balance": "Balance",
            "rl_wealth": "Wealth Distribution",
            "rl_top25": "Top 1-25",
            "rl_top50": "Top 26-50",
            "rl_top75": "Top 51-75",
            "rl_top100": "Top 76-100",
            "rl_hundredplus": "101+",

            "net_connections": "Connections",
            "net_address": "Address",
            "net_protocol": "Protocol",
            "net_subversion": "Sub-version",
            "net_country": "Country",
            "net_warning": "This is sub sample of the network based on wallets that have connected to this node in the last 24hours.",

            // api view
            "api_title": "API Documentation",
            "api_message": "The block explorer provides an API allowing users and/or applications to retrieve information from the network without the need for a local wallet.",
            "api_calls": "API Calls",
            "api_getnetworkhashps": "Returns the current network hashrate. (hash/s)",
            "api_getdifficulty": "Returns the current difficulty.",
            "api_getconnectioncount": "Returns the number of connections the block explorer has to other nodes.",
            "api_getblockcount": "Returns the current block index.",
            "api_getblockhash": "Returns the hash of the block at ; index 0 is the genesis block.",
            "api_getblock": "Returns information about the block with the given hash.",
            "api_getrawtransaction": "Returns raw transaction representation for given transaction id. decrypt can be set to 0(false) or 1(true).",
            "api_getmaxmoney": "Returns the maximum possible money supply.",
            "api_getmaxvote": "Returns the maximum allowed vote for the current phase of voting.",
            "api_getvote": "Returns the current block reward vote setting.",
            "api_getphase": "Returns the current voting phase ('Mint', 'Limit' or 'Sustain').",
            "api_getreward": "Returns the current block reward, which has been decided democratically in the previous round of block reward voting.",
            "api_getsupply": "Returns the current money supply.",
            "api_getnextrewardestimate": "Returns an estimate for the next block reward based on the current state of decentralized voting.",
            "api_getnextrewardwhenstr": "Returns string describing how long until the votes are tallied and the next block reward is computed.",

            // Markets view
            "mkt_hours": "24 hours",
            "mkt_view_chart": "View 24 hour summary",
            "mkt_view_summary": "View 24 hour chart",
            "mkt_no_chart": "Chart data is not available via markets API.",
            "mkt_high": "High",
            "mkt_low": "Low",
            "mkt_volume": "Volume",
            "mkt_top_bid": "Top Bid",
            "mkt_top_ask": "Top Ask",
            "mkt_last": "Last Price",
            "mkt_yesterday": "Yesterday",
            "mkt_change": "Change",
            "mkt_sell_orders": "Sell Orders",
            "mkt_buy_orders": "Buy Orders",
            "mkt_price": "Price",
            "mkt_amount": "Amount",
            "mkt_total": "Total",
            "mkt_trade_history": "Trade History",
            "mkt_type": "Type",
            "mkt_time_stamp": "Time Stamp",

            // Markets
            "poloniex": "Poloniex",
            "bittrex": "Bittrex",
            "bleutrade": "Bleutrade",
            "yobit": "Yobit",
            "empoex": "Empoex",
            "cryptsy": "Cryptsy",
            "cryptopia": "Cryptopia",
            "ccex": "C-Cex",

            // Heavy rewards view
            "heavy_title": "Reward",
            "heavy_vote": "Vote",
            "heavy_cap": "Coin Cap",
            "heavy_phase": "Phase",
            "heavy_maxvote": "Max Vote",
            "heavy_reward": "Reward",
            "heavy_blocks": "Blocks",
            "heavy_current": "Current Reward",
            "heavy_estnext": "Est. Next",
            "heavy_changein": "Reward change in approximately",
            "heavy_key": "Key",
            "heavy_lastxvotes": "Last 20 votes"
        }
    },
    ja_jp: {
        lan: {
            "menu_explorer": "エクスプローラー",
            "menu_api": "アプリケーションプログラミングインタフェース(API)",
            "menu_markets": "マーケット",
            "menu_richlist": "トップ100",
            "menu_reward": "補償",
            "menu_movement": "運動",
            "menu_node": "ノード",
            "menu_network": "ネットワーク",


            // explorer view
            "ex_title": "ブロックエクスプローラー",
            "ex_search_title": "探索",
            "ex_search_button": "探索",
            "ex_search_message": "ブロックの高さ、ブロックのハッシュ、txハッシュまたはアドレスを入力することができます。",
            "ex_error": "エラー！",
            "ex_search_error": "検索結果がありません：",
            "ex_latest_transactions": "最新の取引",
            "ex_summary": "ブロックサマリー",
            "ex_supply": "コインの供給",
            "ex_block": "ブロック",

            // transaction view
            "tx_title": "トランザクションの詳細",
            "tx_block_hash": "ブロックハッシュ",
            "tx_recipients": "受信者",
            "tx_contributors": "入力アドレス",
            "tx_hash": "ハッシュ",
            "tx_address": "アドレス",
            "tx_nonstandard": "ノンスタンダードTX",
            "tx_timestamp": "タイムスタンプ",
            "tx_txid": "txid",
            "tx_amount": "金額",

            // block view
            "block_previous": "以前に",
            "block_next": "次に",
            "block_title": "ブロックの詳細",
            "block_genesis": "起源",

            // global
            "difficulty": "難易度",
            "network": "ネットワーク",
            "stakingweight": "ステッキング重量",
            "height": "高さ",
            "timestamp": "タイムスタンプ",
            "size": "サイズ",
            "transactions": "トランザクション",
            "total_sent": "送信総数",
            "total_received": "受信総数",
            "confirmations": "確認",
            "total": "トータル",
            "bits": "ビット",
            "nonce": "ノンス",
            "new_coins": "新しいコイン",
            "proof_of_stake": "ステークの証拠（PoS）",
            "initial_index_alert": "インデックスは現在完全ではなく、インデックスは最新の状態になるまで機能が制限されています。",

            //address menu
            "a_menu_showing": "最後に表示",
            "a_menu_txs": "取引",
            "a_menu_all": "すべて",

            //richlist
            "rl_received_coins": "トップ 100 -受け取ったコイン",
            "rl_current_balance": "トップ 100 -現在の残高",
            "rl_received": "レシーブ",
            "rl_balance": "バランス",
            "rl_wealth": "富の分配",
            "rl_top25": "トップ 1-25",
            "rl_top50": "トップ 26-50",
            "rl_top75": "トップ 51-75",
            "rl_top100": "トップ 76-100",
            "rl_hundredplus": "101+",

            "net_connections": "コネクションズ",
            "net_address": "アドレス",
            "net_protocol": "プロトコル",
            "net_subversion": "サブバージョン",
            "net_country": "国",
            "net_warning": "これは、最後の24時間にこのノードに接続したウォレットに基づくネットワークのサブサンプルです。",

            // api view
            "api_title": " APIドキュメント",
            "api_message": "ブロックエクスプローラーは、ユーザおよび/またはアプリケーションがローカルウォレットを必要とせずにネットワークから情報を取得できるようにするAPIを提供します。",
            "api_calls": " APIコール",
            "api_getnetworkhashps": "現在のネットワークハッシュレートを返します。 （ハッシュ/秒）",
            "api_getdifficulty": "現在の難易度を返します。",
            "api_getconnectioncount": "ブロックエクスプローラーが他のノードに対して持つ接続数を返します。",
            "api_getblockcount": "現在のブロックインデックスを返します。",
            "api_getblockhash": "ブロックのハッシュを返します。 インデックス0は起源ブロックです。",
            "api_getblock": "指定されたハッシュを持つブロックに関する情報を返します。",
            "api_getrawtransaction": "指定されたトランザクションIDの生のトランザクション表現を返します。復号（decrypt）は0（偽）または1（真）に設定できます。",
            "api_getmaxmoney": "可能な最大マネーサプライを返します。",
            "api_getmaxvote": "現在のボートフェーズで許可されているボートの最大値を返します。",
            "api_getvote": "現在のブロック補償ボート設定を返します。",
            "api_getphase": "現在のボートフェーズ（ 'ミント（Mint）'、 'リミット（Limit）'または 'サステイン（Sustain）'）を返します。",
            "api_getreward": "ブロック補償ボートの前回のラウンドで民主的に決定された現在のブロック補償を返します。",
            "api_getsupply": "現在のマネーサプライを返します。",
            "api_getnextrewardestimate": "分散ボートの現在の状態に基づいて、次のブロックの補償のために予期を返します。",
            "api_getnextrewardwhenstr": "ボートが集計され次のブロック補償が計算されるまでの時間を表す文字列を返します。",

            // Markets view
            "mkt_hours": "24時間",
            "mkt_view_chart": " 24時間のサマリーを表示",
            "mkt_view_summary": " 24時間チャートを表示",
            "mkt_no_chart": "チャートデータはマーケットAPI経由で入手できません。",
            "mkt_high": "ハイ",
            "mkt_low": "ロー",
            "mkt_volume": "ボリューム",
            "mkt_top_bid": "トップ入札",
            "mkt_top_ask": "トップ照会",
            "mkt_last": "最終価格",
            "mkt_yesterday": "昨日",
            "mkt_change": "チェンジ",
            "mkt_sell_orders": "販売オーダー",
            "mkt_buy_orders": "購入オーダー",
            "mkt_price": "価格",
            "mkt_amount": "金額",
            "mkt_total": "トータル",
            "mkt_trade_history": "取引経過歴史",
            "mkt_type": "タイプ",
            "mkt_time_stamp": "タイムスタンプ",

            // Markets
            "poloniex": "ポロニエス",
            "bittrex": "ビットレックス",
            "bleutrade": "ブリュトレード",
            "yobit": "ヨビト",
            "empoex": "エンポックス",
            "cryptsy": "クリプツィ",
            "cryptopia": "クリプトピア",
            "ccex": "C-Cex",


            // Heavy rewards view
            "heavy_title": "補償",
            "heavy_vote": "ボート",
            "heavy_cap": "コインキャップ",
            "heavy_phase": "フェーズ",
            "heavy_maxvote": "マックス・ボート",
            "heavy_reward": "補償",
            "heavy_blocks": "Blocks",
            "heavy_current": "現在の補償",
            "heavy_estnext": "エスト 次に",
            "heavy_changein": "おおよその変化に対する補償",
            "heavy_key": "キー",
            "heavy_lastxvotes": "最後の20ボート"
        }
    },
    ru_ru: {
        lan: {
            // menu items
            // элементы меню
            "menu_explorer": "Проводник",
            "menu_api": "API-интерфейс",
            "menu_markets": "Рынки",
            "menu_richlist": "Топ-100",
            "menu_reward": "Вознаграждение",
            "menu_movement": "Движение",
            "menu_node": "Узлы",
            "menu_network": "Сеть",


            // explorer view
            // вид проводника
            "ex_title": "Блок-проводник",
            "ex_search_title": "Поиск",
            "ex_search_button": "Поиск",
            "ex_search_message": "Можно ввести высоту блока, хэш блока, хэш транзакции или адрес.",
            "ex_error": "Ошибка!",
            "ex_search_error": "Поиск не обнаружил результатов для: ",
            "ex_latest_transactions": "Последние транзакции",
            "ex_summary": "Резюме блока",
            "ex_supply": "Запас монет",
            "ex_block": "Блок",

            // transaction view
            // вид транзакции
            "tx_title": "Детали транзакции",
            "tx_block_hash": "Хэш блока",
            "tx_recipients": "Получатели",
            "tx_contributors": "Адреса ввода",
            "tx_hash": "Хэш",
            "tx_address": "Адрес",
            "tx_nonstandard": "НЕСТАНДАРТНАЯ ТРАНЗАКЦИЯ",
            "tx_timestamp": "Метка времени",
            "tx_txid": "идентификатор транзакции",
            "tx_amount": "сумма",

            // block view
            // вид блока
            "block_previous": "Предыдущий",
            "block_next": "Следующий",
            "block_title": "Детали блока",
            "block_genesis": "ГЕНЕЗИС",

            // global
            // глобальный
            "difficulty": "Трудность",
            "network": "Сеть",
            "stakingweight": "Вес тяжки",
            "height": "Высота",
            "timestamp": "Метка времени",
            "size": "Размер",
            "transactions": "Транзакции",
            "total_sent": "Всего отправлено",
            "total_received": "Всего получено",
            "confirmations": "Подтверждения",
            "total": "Всего",
            "bits": "Биты",
            "nonce": "Данный случай",
            "new_coins": "Новые монеты",
            "proof_of_stake": "Подтверждение доли",
            "initial_index_alert": "В настоящее время индексация неполная, функциональность ограничена до обновления индекса",

            //address menu
            //меню адреса
            "a_menu_showing": "Показать последнее",
            "a_menu_txs": "транзакции",
            "a_menu_all": "Все",

            //richlist
            //список богатых
            "rl_received_coins": "Топ-100 – Получили монеты",
            "rl_current_balance": "Топ-100 – Текущее сальдо",
            "rl_received": "Получено",
            "rl_balance": "Сальдо",
            "rl_wealth": "Распределение богатства",
            "rl_top25": "Топ 1-25",
            "rl_top50": "Топ 26-50",
            "rl_top75": "Топ 51-75",
            "rl_top100": "Топ 76-100",
            "rl_hundredplus": "101+",

            "net_connections": "Соединения",
            "net_address": "Адрес",
            "net_protocol": "Протокол",
            "net_subversion": "Сокращенная версия",
            "net_country": "Страна",
            "net_warning": "Это сокращенный образец сети на основе бумажников, подключившихся к этому узлу в течение последних 24 часов.",

            // api view
            // вид API-интерфейса
            "api_title": "Документация API-интерфейса",
            "api_message": "Блок-проводник обеспечивает API-интерфейс, позволяющий пользователям и/или приложениям получать информацию из сети без необходимости иметь локальный бумажник.",
            "api_calls": "Вызовы API-интерфейса",
            "api_getnetworkhashps": "Выдает хэш-скорость текущей сети. (хэш/с)",
            "api_getdifficulty": "Выдает текущую трудность.",
            "api_getconnectioncount": "Выдает число соединений блок-проводника с другими узлами.",
            "api_getblockcount": "Выдает индекс текущего блока.",
            "api_getblockhash": "Выдает хэш блока; индекс 0 является блоком генезиса",
            "api_getblock": "Выдает информацию о боке с заданным хэшем.",
            "api_getrawtransaction": "Выдает необработанное представление транзации для заданного идентификатора транзакции, расшифровка может быть задана как 0 (ложно) или 1 (верно).",
            "api_getmaxmoney": "Выдает максимально возможный запас денег.",
            "api_getmaxvote": "Выдает максимально разрешенное количество голосов для текущей стадии голосования.",
            "api_getvote": "Выдает заданные значения голосов для текущего блока.",
            "api_getreward": "Выдает вознаграждение за текущий блок, определенное демократическим путем в ходе голосования по вознаграждению за блок на предыдущем раунде.",
            "api_getsupply": "Выдает текущий запас денег.",
            "api_getnextrewardestimate": "Выдает оценку вознаграждения за следующий блок, исходя из текущего состояния децентрализованного голосования.",
            "api_getnextrewardwhenstr": "Выдает строку, описывающую время до подсчета голосов и расчета вознаграждения за следующий блок.",

            // Markets view
            // Вид рынков
            "mkt_hours": "24 часа",
            "mkt_view_chart": "Посмотреть резюме за 24 часа",
            "mkt_view_summary": "Посмотреть диаграмму за 24 часа",
            "mkt_no_chart": "Данные диаграммы не доступны посредством API-интерфеса рынков.",
            "mkt_high": "Высокий",
            "mkt_low": "Низкий",
            "mkt_volume": "Объем",
            "mkt_top_bid": "Лучшее предложение цены",
            "mkt_top_ask": "Лучшее предложение на продажу",
            "mkt_last": "Последняя цена",
            "mkt_yesterday": "Вчера",

            "mkt_change": "Изменение",
            "mkt_sell_orders": "Приказы на продажу",
            "mkt_buy_orders": "Приказ о покупке",
            "mkt_price": "Цена",
            "mkt_amount": "Сумма",
            "mkt_total": "Всего",
            "mkt_trade_history": "Журнал торговых операций",
            "mkt_type": "Тип",
            "mkt_time_stamp": "Метка времени",

            // Markets
            // Рынки
            "poloniex": "Poloniex",
            "bittrex": "Bittrex",
            "bleutrade": "Bleutrade",
            "yobit": "Yobit",
            "empoex": "Empoex",
            "cryptsy": "Cryptsy",
            "cryptopia": "Cryptopia",
            "ccex": "C-Cex",

            // Heavy rewards view
            // Просмотр крупных вознаграждений
            "heavy_title": "Вознаграждение",
            "heavy_vote": "Голосование",
            "heavy_cap": "Монета",
            "heavy_phase": "Стадия",
            "heavy_maxvote": "Максимальное число голосов",
            "heavy_reward": "Вознаграждение",
            "heavy_blocks": "Blocks",
            "heavy_current": "Текущее вознаграждение",
            "heavy_estnext": "Оценка следующего",
            "heavy_changein": "Изменение вознаграждения приблизительно через",
            "heavy_key": "Ключ",
            "heavy_lastxvotes": "Последние 20 голосов"
        }
    },
    th_th: {
        lan: {
            // menu items	// รายการเมนู
            "menu_explorer": "Explorer",
            "menu_api": "API",
            "menu_markets": "ตลาด",
            "menu_richlist": "100 อันดับแรก",
            "menu_reward": "รางวัล",
            "menu_movement": "ความเคลื่อนไหว",


            "menu_node": "โหนด",
            "menu_network": "เครือข่าย",


            // explorer view	// มุมมองของ Explorer
            "ex_title": "บล็อก Explorer",
            "ex_search_title": "ค้นหา ",
            "ex_search_button": "ค้นหา",
            "ex_search_message": "คุณอาจต้องใส่บล็อกความสูง บล็อกแฮช แฮชการทำธุรกรรมหรือที่อยู่",
            "ex_error": "ข้อผิดพลาด!",
            "ex_search_error": "การค้นหาไม่พบผลลัพธ์สำหรับ:",
            "ex_latest_transactions": "การทำธุรกรรมล่าสุด",
            "ex_summary": "บล็อกสรุปผล",
            "ex_supply": "การจัดหาเหรียญ",
            "ex_block": "บล็อก",


            // transaction view	// มุมมองของการทำธุรกรรม
            "tx_title": "รายละเอียดเกี่ยวกับการทำธุรกรรม",
            "tx_block_hash": "บล็อกแฮช",
            "tx_recipients": "ผู้รับ",
            "tx_contributors": "ใส่ที่อยู่",
            "tx_hash": "แฮช",
            "tx_address": "ที่อยู่",
            "tx_nonstandard": "การทำธุรกรรมที่ไม่ได้มาตรฐาน",
            "tx_timestamp": "การบันทึกเวลา",
            "tx_txid": "หมายเลขไอดีสำหรับการทำธุรกรรม",
            "tx_amount": "จำนวน",


            // block view	// มุมมองของบล็อก
            "block_previous": "ก่อนหน้า",
            "block_next": "ถัดไป",
            "block_title": "รายละเอียดเกี่ยวกับบล็อก",
            "block_genesis": "เจเนซิส",


            // global	// ระดับโลก
            "difficulty": "ความยาก",
            "network": "เครือข่าย",
            "stakingweight": "น้ำหนักของการวางเดิมพัน",
            "height": "ความสูง",
            "timestamp": "การบันทึกเวลา",
            "size": "ขนาด",
            "transactions": "การทำธุรกรรม",
            "total_sent": "จำนวนที่ส่งแล้วทั้งหมด",
            "total_received": "จำนวนที่ได้รับแล้วทั้งหมด",
            "confirmations": "การยืนยัน ",
            "total": "จำนวนรวมทั้งหมด",
            "bits": "บิท",
            "nonce": "ข้อมูลหรือตัวเลขที่สุ่มขึ้นมา",
            "new_coins": "เหรียญใหม่ ",
            "proof_of_stake": "PoS",
            // global	// ระดับโลก


            //address menu	//เมนูที่อยู่
            "a_menu_showing": "กำลังแสดงรายการสุดท้าย",
            "a_menu_txs": "การทำธุรกรรม",
            "a_menu_all": "ทั้งหมด",


            //richlist	//รายชื่อผู้ร่ำรวย
            "rl_received_coins": "100 อันดับแรก – ตามจำนวนเหรียญที่ได้รับ",
            "rl_current_balance": "100 อันดับแรก – ตามยอดคงเหลือในปัจจุบัน",
            "rl_received": "ได้รับ",
            "rl_balance": "ยอดคงเหลือ",
            "rl_wealth": "การกระจายความมั่งคั่ง",
            "rl_top25": "อันดับที่ 1-25",
            "rl_top50": "อันดับที่ 26-50",
            "rl_top75": "อันดับที่ 51-75",
            "rl_top100": "อันดับที่ 76-100",
            "rl_hundredplus": "อันดับที่ 101+",


            "net_connections": "การเชื่อมต่อ",
            "net_address": "ที่อยู่",
            "net_protocol": "โปรโตคอล",
            "net_subversion": "เวอร์ชั่นย่อย",
            "net_country": "ประเทศ",
            "net_warning": "นี่คือกลุ่มตัวอย่างย่อยของเครือข่ายตามกระเป๋าเงินดิจิตัล (Wallet) ซึ่งได้รับการเชื่อมต่อเข้ากับโหนดนี้ในช่วง 24 ชั่วโมงที่ผ่านมา",


            // api view	// มุมมองของ api
            "api_title": "การจัดทำเอกสาร API",
            "api_message": "บล็อก Explorer จะจัดหา API ซึ่งอนุญาตให้ผู้ใช้งาน และ/หรือ แอปพลิเคชั่นต่างๆ สามารถเรียกคืนข้อมูลจากเครือข่ายได้โดยไม่จำเป็นต้องใช้กระเป๋าเงินดิจิตัลท้องถิ่น",
            "api_calls": "การเรียกใช้งาน API",
            "api_getnetworkhashps": "คืนอัตราการขุดของเครือข่ายในปัจจุบัน (แฮช/วินาที)",
            "api_getdifficulty": "คืนความยากในปัจจุบัน",
            "api_getconnectioncount": "คืนจำนวนของการเชื่อมต่อที่บล็อก Explorer มีต่อโหนดอื่นๆ",
            "api_getblockcount": "คืนบล็อกดัชนีในปัจจุบัน",
            "api_getblockhash": "คืนแฮชของบล็อกที่; ดัชนี 0 เป็นบล็อกเจเนซิส",
            "api_getblock": "คืนข้อมูลเกี่ยวกับบล็อกพร้อมแฮชที่กำหนด",
            "api_getrawtransaction": "คืนการรับรองการทำธุรกรรมดิบสำหรับหมายเลขไอดีสำหรับการทำธุรกรรมที่กำหนด สามารถกำหนดการถอดรหัสเป็น 0 (ผิด) หรือ 1 (ถูก) ได้",
            "api_getmaxmoney": "คืนการจัดหาเงินสูงสุดที่เป็นไปได้",
            "api_getmaxvote": "คืนคะแนนเสียงสูงสุดซึ่งได้รับอนุญาตสำหรับช่วงของการลงคะแนนเสียงในปัจจุบัน",
            "api_getvote": "คืนการตั้งค่าการลงคะแนนเสียงบล็อกรางวัลในปัจจุบัน",
            "api_getphase": "คืนช่วงของการลงคะแนนเสียงในปัจจุบัน ('เริ่มใหม่', 'จำกัด' หรือ 'คงไว้')",
            "api_getreward": "คืนบล็อกรางวัลในปัจจุบันซึ่งได้รับการตัดสินใจอย่างเป็นประชาธิปไตยในรอบก่อนของการลงคะแนนเสียงบล็อกรางวัล",
            "api_getsupply": "คืนการจัดหาเงินในปัจจุบัน",
            "api_getnextrewardestimate": "คืนค่าประมาณการสำหรับบล็อกรางวัลถัดไปตามสถานะในปัจจุบันของการลงคะแนนเสียงแบบกระจายอำนาจ",
            "api_getnextrewardwhenstr": "คืนสตริงซึ่งบอกถึงระยะเวลาจนกว่าจะมีการนับคะแนนเสียงและมีการคำนวณบล็อกรางวัลถัดไป",


            // Markets view	// มุมมองของตลาด
            "mkt_hours": "24 ชั่วโมง",
            "mkt_view_chart": "ดูสรุปผล 24 ชั่วโมง",
            "mkt_view_summary": "ดูแผนภูมิ 24 ชั่วโมง",
            "mkt_no_chart": "ไม่มีข้อมูลของแผนภูมิผ่านตลาด API",
            "mkt_high": "สูง",
            "mkt_low": "ต่ำ",
            "mkt_volume": "ปริมาณการซื้อขายต่อวัน ",
            "mkt_top_bid": "ราคาประมูลสูงสุด",
            "mkt_top_ask": "การบอกราคาสูงสุด",
            "mkt_last": "ราคาล่าสุด",
            "mkt_yesterday": "เมื่อวาน",
            "mkt_change": "เปลี่ยน",
            "mkt_sell_orders": "ขายออเดอร์",
            "mkt_buy_orders": "ซื้อออเดอร์",
            "mkt_price": "ราคา",
            "mkt_amount": "จำนวน",
            "mkt_total": "จำนวนรวม",
            "mkt_trade_history": "ประวัติการเทรด ",
            "mkt_type": "ประเภท",
            "mkt_time_stamp": "การบันทึกเวลา",


            // Markets	// ตลาด
            "poloniex": "Poloniex",
            "bittrex": "Bittrex",
            "bleutrade": "Bleutrade",
            "yobit": "Yobit",
            "empoex": "Empoex",
            "cryptsy": "Cryptsy",
            "cryptopia": "Cryptopia",
            "ccex": "C-Cex",


            // Heavy rewards view	// มุมมองของรางวัลจัดหนัก
            "heavy_title": "รางวัล",
            "heavy_vote": "คะแนนเสียง",
            "heavy_cap": "ตลาดเหรียญ",
            "heavy_phase": "ช่วง",
            "heavy_maxvote": "คะแนนเสียงสูงสุด",
            "heavy_reward": "รางวัล",
            "heavy_current": "รางวัลในปัจจุบัน",
            "heavy_estnext": "ค่าประมาณการถัดไป",
            "heavy_changein": "การเปลี่ยนรางวัลโดยประมาณ",
            "heavy_key": "คีย์",
            "heavy_lastxvotes": "20 คะแนนเสียงสุดท้าย"
        }
    }
};

internation.prototype.getPacks = function (setting) {
    if (!setting) {
        return this.languagePacks["en_us"];
    }
    if (setting in this.languagePacks) {
        return this.languagePacks[setting];
    } else {
        return this.languagePacks["en_us"];
    }
};

internation.prototype.set = function (app) {
    var self = this;
    app.use(function (req, res, next) {
        res.locals = self.getPacks(req.cookies.selected_lan);

        res.locals.check_lan = function () {


            if (!(req.cookies.selected_lan)) {
                return "en_us";
            } else {
                return req.cookies.selected_lan;
            }
        };
        next();
    })
};

module.exports = internation;