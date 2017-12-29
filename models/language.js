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
            "stakingweight": "Staking Weight",
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
            "heavy_current": "当前奖励",
            "heavy_estnext": "Est. Next",
            "heavy_changein": "奖励变化约为",
            "heavy_key": "Key",
            "heavy_lastxvotes": "最近20天捐款数据"

        }
    },
    eng: {
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
            "heavy_current": "Current Reward",
            "heavy_estnext": "Est. Next",
            "heavy_changein": "Reward change in approximately",
            "heavy_key": "Key",
            "heavy_lastxvotes": "Last 20 votes"
        }
    }
}

//如果有语言设置，则设置为对应的语言，否则，设置为中文；
internation.prototype.getPacks = function (setting) {
    if (!setting) {
        return this.languagePacks["eng"]
    }
    if (setting in this.languagePacks) {
        return this.languagePacks[setting];
    } else {
        return this.languagePacks["eng"]
    }
}

internation.prototype.set = function (app) {
    var self = this;
    app.use(function (req, res, next) {
        //这个是示例，定义一个动态视图助手变量

        //如果有语言设置，则设置为对应的语言，否则，设置为中文；
        res.locals = self.getPacks(req.session.language)
        //下面两个因为要调用req和res，所以特殊设置
        res.locals.check_lan = function () {
            if (!('language' in req.session) || req.session.language === 'eng')
                return "eng";
            else
                return "zh_cn";
        }
        next();
    })
}


module.exports = internation;