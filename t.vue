<!--
    @jestResponse 陈伟镔
-->
<style lang="less">
    .pg-car-credit-assessment {
        .share-tip {
            position: fixed;
            width: 220px;
            height: 70px;
            right: 11px;
            top: 2px;
            z-index: 1;
            .tip-img {
                position: absolute;
                width: 220px;
                height: 70px;
            }
            .close {
                position: absolute;
                width: 11px;
                right: 10px;
                top: 20px;
            }
            .share-text {
                position: absolute;
                top: 16px;
                left: 15px;
            }
        }
        .tips {
            padding: 15px 16px;
            background-color: rgb(253, 239, 197);
            color: rgb(238, 120, 83);
            overflow: hidden;
            img {
                float: right;
            }
        }
        .content {
            padding: 16px;
            .top-div {
                background: #fff;
                border-top-left-radius: 8px;
                border-top-right-radius: 8px;
                padding: 32px 32px 0;
                position: relative;
                .qrcode-imgbg {
                    position: relative;
                    left: 50%;
                    transform: translateX(-50%);
                    height: 210px;
                    width: 150px;
                    margin-bottom: 16px;
                    .qrcode-img {
                        position: absolute;
                        top:0;
                        left:0;
                        height: 160px;
                    }
                    .qrcode-bg {
                        position: absolute;
                        top: -25px;
                        left:-30px;
                        width: 230px;
                    }
                    margin-bottom: 16px;
                }
                .zoom-11 {
                    zoom: 1.1;
                }
                .screenshot-process {
                    img {
                        width: 56%;
                    }
                    p {
                        font-size: 14px;
                        color: #999;
                    }
                }
                .screenshot-title {
                    font-size: 20px;
                    line-height: 20px;
                    margin-bottom: 10px;
                }
                .title1 {
                    font-size: 20px;
                    line-height: 20px;
                }
                .title2 {
                    font-size: 12px;
                    background: #f2f2f2;
                    padding: 12px;
                    margin: 0 auto;
                    width: 200px;
                }
                .mt32 {
                    margin-top: 32px;
                }
            }
            .middle-div {
                position: relative;
                background: #fff;
                height: 76px;
                i {
                    top: 32px;
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    display: inline-block;
                }
                .icon-common {
                    background: #00a8f2;

                }
                .icon-tmall {
                    background: #fc7200;
                }
                .left-i {
                    position: absolute;
                    left: -8px;
                }
                .right-i {
                    position: absolute;
                    right: -8px;
                }
                .bg-p {
                    top: 32px;
                    color: #999;
                    overflow: hidden;
                    white-space: nowrap;
                    position: absolute;
                    left: 8px;
                    right: 8px;
                    color: #888;
                    font-size: 12px;
                }
                .center-p {
                    top: 32px;
                    color: #999;
                    position: absolute;
                    width: 100%;
                    text-align: center;
                    font-size: 12px;
                    span {
                        padding: 0 16px;
                        background: #fff;
                    }
                }
            }
            .text-center {
                text-align: center;
            }
            .last-div-center {
                margin: 0 32px;
            }
            .last-div {
                background: #fff;
                border-bottom-left-radius: 8px;
                border-bottom-right-radius: 8px;
                .row-car-img {
                    width: 100%;
                }
                .small-car-img {
                    width: 60px;
                    float: left;
                }
                .car-info-right {
                    margin-left: 68px;
                }
                .price {
                    color: #1A1A1A;
                    font-size: 12px;
                    margin-bottom: 20px;
                }
                .top-p {
                    font-size: 16px;
                    color: #1a1a1a;
                    line-height: 20px;
                }
            }
            .logo {
                padding-top: 20px;
                color: #999;
                font-size: 14px;
                text-align: center;
                img {
                    vertical-align: -3px;
                    width: 16px;
                }
            }
            .bottom-div {
                margin-top: 32px;
                text-align: center;
                font-size: 12px;
                color: #fff;
            }
            .mb24 {
                margin-bottom: 24px;
            }
        }

        .share-wx {
            position: fixed;
            bottom: 0;
            text-align: center;
            width: 100%;
            height: 44px;
            color: #fff;
            line-height: 44px;
            background-color: #ff571a;
        }
        .block {
            display: block;
        }

        .shop-info {
            font-size: 12px;
            color: #666666;
            line-height: 18px;
        }

        .finance-tip {
            line-height: 15px;
        }

        .finance-box {
            padding: 16px 0;
            background-color: #fff;
            border-radius: 12px;
            overflow-y: scroll;
            height: calc(100vh - 300px);
        }

        .dialog-finance {
            .som-dialog__content {
                width: calc(100% - 32px);
                max-width: none;
                max-height: 80%;
            }
            .dialog-top {
                margin: 0 auto;
                display: inline-block;
            }
            .title-img {
                width: 96.5px;
                height: 22px;
            }
            .title {
                width: 172px;
                line-height: 16px;
                margin-top: 4px;
            }
            .tip-img {
                width: 44px;
                margin-left: 160px;
            }
        }
        .place-tip {
            padding: 6px 12px;
            background-color: #FFF7D8;
            border-radius: 4px;
            line-height: 14px;
            font-size: 12px;
            color: #FF4040;
            text-align: left;
        }
        .mt-1 {
            margin-top: -1px;
        }
        .top-car-info {
            overflow: hidden;
            margin-bottom: 25px;
            display: flex;
            align-items: center;
            .row-car-img {
                width: 60px;
            }
            .top-p {
                width: calc(100% - 70px);
                margin-left: 8px;
                font-size: 16px;
                color: #1a1a1a;
            }
        }
        .row-car-img,
        .middle-div {
            margin-top: -1px;
        }
    }

</style>

<template>
    <div class="pg-car-credit-assessment">
        <sob-modal
            v-model="confirmShow"
            isConfirm
            title="分享到微信"
            content="图片已保存至相册，请打开微信，从相册中选择图片进行分享"
            @on-confirm="rightClick"></sob-modal>
        <!-- 新功能引导文案 -->
        <div class="share-tip" v-show="showShareTip && !screenshot" @click="showShareTip=false">
            <img class="tip-img" src="//img.souche.com/f2e/417c0c30851c29323e1f5f534158e242.png" alt="">
            <img class="close" src="~assets/common/close.png" alt="">
            <span class="share-text">新增分享长图和分享链接！<br>赶快分享给客户吧！</span>
        </div>
        <!-- 后台控制的提示文案 -->
        <div class="tips fs-14" v-if="normalInfo.tipMsg" @click="goTipImgUrl">
            <span>{{normalInfo.tipMsg}}</span>
            <img src="~assets/common/trigle-right.png" width="8" height="16" alt="">
        </div>
        <som-tabs v-if="tabs.length === 2 && showTab">
            <som-tab-item
                v-for="(tab, index) in tabs"
                :key="tab.qrType"
                :selected="index === 0"
                @on-item-click="setData(index)">{{tab.tabName}}</som-tab-item>
        </som-tabs>
        <div class="content">
            <div class="top-div" :style="{padding: screenshot ? '30px 32px 0' : '42px 0 24px 0'}">
                <section class="tc">
                    <div class="top-car-info" style="marginBottom: 35px" v-if="screenshot && productIdList">
                        <oss-image class="fl row-car-img" :src="normalInfo.carModelImg"></oss-image>
                        <p class="fl top-p">{{normalInfo.carModelName}}</p>
                    </div>
                    <div
                        class="qrcode-imgbg"
                        :class="screenshot ? '' : 'zoom-11'"
                        :style="{marginBottom: screenshot ? '30px' : '16px'}">
                        <img class="qrcode-bg" src="//img.souche.com/f2e/06fffc9538a0b4416c241beb06c34353.png" alt="">
                        <img class="qrcode-img" :src="normalInfo.qrCodeUrl" alt="">
                    </div>
                    <div v-if="!screenshot">
                        <p class="title1 text-center">{{qrType===1?'支付宝扫码评估':'淘宝或天猫扫码评估'}}</p>
                        <p class="title2 mt32">本流程不涉及支付，扫码后请协助客户在{{qrType===1?'支付宝':'天猫APP'}}继续操作，并注意接收通知</p>
                    </div>
                    <div v-if="screenshot">
                        <p class="screenshot-title">{{qrType===1?'快打开支付宝扫码信用评估吧':'快打开天猫／淘宝扫码评估吧'}}</p>
                        <div class="screenshot-process">
                            <p :class="qrType === 1 && customerType === '2' ? 'mb8' : 'mb16'">征信流程不涉及支付</p>
                            <img v-if="qrType===1" src="//img.souche.com/f2e/0117fbf47962c624fb13499cd3ffa898.png" alt="">
                            <img v-else src="//img.souche.com/f2e/3593f55a491d5b2322f8dd300ced95b3.png" alt="">
                        </div>
                    </div>
                </section>
            </div>
            <div class="middle-div" v-if="!screenshot">
                <i class="left-i" :class="[+qrType === 1?'icon-common':'icon-tmall']"></i>
                <p class="bg-p">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
                <p v-if="qrType===1" class="center-p">
                    <span>二维码有效期1小时</span>
                </p>
                <i class="right-i" :class="[+qrType === 1?'icon-common':'icon-tmall']"></i>
            </div>
            <div
                class="last-div"
                :style="{paddingBottom: screenshot ? '25px' : '32px'}"
                :class="[!screenshot?'text-center':'']">
                <template v-if="showTab">
                    <template v-if="productIdList">
                        <template v-if="!screenshot">
                            <co-assessment-finance
                                :normalInfo="normalInfo"
                                :isOutOfTown="isOutOfTown"
                                :cityName="cityName">
                            </co-assessment-finance>
                            <p
                                class="finance-tip fs12 text-caption mb24 text-left last-div-center">
                                *一成首付租金由融资租赁方式提供服务，活动最终优惠及车辆价格以弹个车官方app和天猫旗舰店公示为准，实际成交金融方案以信用审核为准</p>
                        </template>
                    </template>
                    <template v-else>
                        <template v-if="!screenshot">
                            <div class="place-tip" v-if="isOutOfTown === '1'">此方案为异地售卖方案，客户提车城市为：{{cityName}}</div>
                            <oss-image class="row-car-img" :src="normalInfo.carModelImg"></oss-image>
                            <p class="top-p">{{normalInfo.carModelName}}</p>
                        </template>
                        <template v-else>
                            <oss-image class="small-car-img" :src="normalInfo.carModelImg"></oss-image>
                            <div class="car-info-right">
                                <p class="top-p">{{normalInfo.carModelName}}</p>
                                <p class="price">
                                    <span>首付租金：￥{{normalInfo.prepaidAmount}}万</span>
                                    <span class="block">首年月租：￥{{normalInfo.rental}}X{{normalInfo.leaseTerms}}期</span>
                                </p>
                            </div>
                        </template>
                    </template>
                    <div
                        v-if="(productIdList && !screenshot) || (!productIdList && screenshot)"
                        class="last-div-center"
                        :class="productIdList ? 'text-left' : 'car-info-right'">
                        <p class="shop-info">店铺名称：{{normalInfo.shopName}}</p>
                        <p class="shop-info">销售姓名：{{normalInfo.salespersonName}}</p>
                        <p class="shop-info">手机号码：{{normalInfo.salespersonMobile}}</p>
                    </div>
                </template>
                <div class="logo" :style="{paddingTop: screenshot ? '25px' : '20px'}" :class="screenshot ? 'mt-1' : ''">
                    <img src="~assets/common/logo.png" alt="">
                    <span>来源于弹个车商家版</span>
                </div>
            </div>
            <div class="bottom-div">扫码即视为您同意蚂蚁智信（杭州）信息技术有限公司从关联方获取您的信息并向【大搜车】输出您的【汽车分期】的建议方案</div>
        </div>
        <div v-if="screenshot && showShareWX" @click="confirmShow = true" class="share-wx">分享给微信好友</div>
        <som-dialog v-model="showAssessmentFinance" :hide-on-blur="true" :is-cancle="false" class="dialog-finance">
            <div @click="showAssessmentFinance = false">
                <div class="text-left dialog-top">
                    <img class="title-img" src="//img.souche.com/f2e/8ff3e2f8ef63f0af2c6b84aba39fb83c.png">
                    <p class="title fs14 white">以下是该车型可评估的金融方案</p>
                    <img class="tip-img" :src="'//img.souche.com/f2e/9beb2d89d8339d60febd06a62152b86b.png'">
                </div>
                <div class="finance-box">
                    <co-assessment-finance :showModel="false" :normalInfo="normalInfo"></co-assessment-finance>
                </div>
            </div>
        </som-dialog>
    </div>
</template>

<script>
import Tower from 'tower';
import Api from 'api';
import Common from 'common';
import CoAssessmentFinance from 'components/car/assessment-finance';

export default {
    data () {
        const {
            carId,
            productId,
            productIdList,
            vin,
            shopCode,
            shopName,
            isOutOfTown,
            cityName,
            cityCode,
            customerType,
            qrProductType,
            isShowTmallQrTypeStr,
            qrInstallmentPeriods
        } = this.$route.query;
        return {
            carId,
            productId,
            productIdList,
            alreadyReminded: localStorage.getItem('QRTip') === '1',
            appVersioin: '',
            showShareWX: false,
            shareText: '',
            confirmShow: false,
            screenshot: false,
            showShareTip: false,
            normalInfo: {},
            info: {
                qrCodeUrl: ''
            },
            qrType: 1, //1: 大风车 2: 天猫
            qrId: '',
            longitude: '',
            latitude: '',
            tabs: [],
            defaultIndex: 0,
            vin,
            showAssessmentFinance: false,
            shopCode,
            shopName: decodeURIComponent(shopName),
            isOutOfTown,
            cityName: decodeURIComponent(cityName),
            cityCode,
            showHongbaoActivity: false,
            customerType, // 客户类型 1/个人 2/企业
            qrProductType,
            isShowTmallQrTypeStr, // 0/不请求天猫接口  1/请求天猫接口
            showTab: true, // 是否展示tab   设计要求分享的图片没有tab
            qrInstallmentPeriods,
            tmallsInfo: []
        };
    },
    methods: {
        rightClick() {
            this.screenshot = false;
            this.showShareWX = false;
            // 唤起微信 并分享
            Tower.singleShare({
                sharetype: 0,
                platform: 0,
                shareFullImage: this.path
            });
        },
        goTipImgUrl() {
            window.location.replace(this.$getPageUrl('car-image-container', {}, {
                imgUrl: this.normalInfo.tipImgUrl
            }));
        },
        // 复制文本
        copyText (text) {
            Tower.copy(text).then(() => {
                this.$som.toast.text('复制成功!');
            }, /* istanbul ignore next */ () => {
                this.$som.toast.text('复制失败!');
            });
        },
        // 获取二维码分享链接文本
        getShareText () {
            this.$som.loading.show();
            return Api.lease.alipay_v1_alipayqrcodeapi_getShareText({
                qrId: this.qrId
            }).then((result) => {
                this.shareText = result;
            }).finally(() => {
                this.$som.loading.hide();
            });
        },
        setMoreData() {
            Tower.setMoreData([{
                text: '复制链接',
                image: 'http://img.souche.com/f2e/fba943f33be504c9b114134da4aaf48f.png',
                event: () => {
                    this.$bury('XYPG_SH_LINK_TAB');
                    this.getShareText().then(() => {
                        this.copyText(this.shareText);
                    });
                }
            }, {
                text: '分享长图',
                image: 'http://img.souche.com/f2e/65c5084b97976788672ddc8b81bb3878.png',
                event: () => {
                    this.showTab = false;
                    this.$bury('XYPG_SH_POSTER_TAB');
                    this.screenshot = true;
                    setTimeout(() => {
                        Tower.screenShot().then((res) => {
                            this.path = res;
                            this.showShareWX = true;
                        }).finally(() => {
                            this.showTab = true;
                        });
                    }, 1000);
                }
            }]);
        },
        // 获取当前gps
        getPosition() {
            this.$getPosition().then((res) => {
                this.longitude = res.longitude;
                this.latitude = res.latitude;
                this.getData();
            }).catch(() => {
                this.getData();
            });
        },
        getData() {
            if (!this.productIdList) {
                this.getAlipayQRCodeListLogin();
            } else {
                this.getQrRoutingRule();
            }
        },
        async setData(index) {
            let tab = this.tabs[index];
            if (index === 1) {
                if (tab && !tab.data) {
                    let opt = {};
                    if (this.isOutOfTown) {
                        opt = {
                            pickUpCarShopName: this.shopName,
                            pickUpCarShopCode: this.shopCode,
                            offsitePickUpCar: this.isOutOfTown === '1'
                        };
                    }
                    if (this.qrProductType) {
                        opt.qrProductType = this.qrProductType;
                    }
                    if (this.tmallsInfo.length && this.isShowTmallQrTypeStr === '1') {
                        const tmallQrCode = await this.getTmallQrCodeLogin(this.tmallsInfo.join(','), opt);
                        this.tabs[index] = {
                            ...this.tabs[1],
                            data: tmallQrCode
                        };
                        tab = this.tabs[index];
                    }
                }
            }
            this.screenshot = false;
            this.showShareWX = false;
            const { bgColor, data, qrType } = tab;
            this.normalInfo = data;
            this.qrId = data.qrId;
            this.qrType = qrType;
            this.$setBodyBack(bgColor);
        },
        getAlipayQRCodeListLogin() {
            // 获取支付宝二维码、车辆、销售、活动信息
            let opt = {};
            if (this.isOutOfTown) {
                opt = {
                    pickUpCarShopName: this.shopName,
                    pickUpCarShopCode: this.shopCode,
                    offsitePickUpCar: this.isOutOfTown === '1'
                };
            }
            if (this.qrProductType) {
                opt.qrProductType = this.qrProductType;
            }
            Api.lease.alipay_v1_alipayqrcodeapi_getAlipayQRCodeListLogin({
                productId: this.productId,
                carId: this.carId,
                longitude: this.longitude,
                latitude: this.latitude,
                specifyVin: this.vin,
                ...opt
            }).then((res) => {
                let tabs = this.getTabs();
                // 按照服务端的顺序展示二维码
                this.tabs = res.map((data) => {
                    const tab = tabs.find(item => item.qrType === +data.qrType);
                    return {
                        ...tab,
                        data
                    };
                });
                this.setData(0);
            });
        },
        getQrRoutingRule() {
            let ruleOpt = {};
            if (this.isOutOfTown) {
                ruleOpt = {
                    pickUpCarShopCode: this.shopCode
                };
            }

            if (this.qrProductType) {
                ruleOpt.qrProductType = this.qrProductType;
            }
            Api.lease.getQrRoutingRuleLogin({
                carId: this.carId,
                specifyVin: this.vin,
                productIds: this.productIdList,
                ...ruleOpt
            }).then(async (res) => {
                let notTmalls = [];
                const productIdList = this.productIdList.split(',');
                res.forEach((item, index) => {
                    if (item.match) {
                        if (item.channels.indexOf('NOT_TMALL') !== -1) {
                            notTmalls.push(productIdList[index]);
                        }
                        if (item.channels.indexOf('TMALL') !== -1) {
                            this.tmallsInfo.push(productIdList[index]);
                        }
                    }
                });
                this.tabs = this.getTabs();
                let opt = {};
                if (this.isOutOfTown) {
                    opt = {
                        pickUpCarShopName: this.shopName,
                        pickUpCarShopCode: this.shopCode,
                        offsitePickUpCar: this.isOutOfTown === '1'
                    };
                }
                if (this.qrProductType) {
                    opt.qrProductType = this.qrProductType;
                }
                if (!(this.tmallsInfo.length && this.isShowTmallQrTypeStr === '1')) {
                    this.tabs.splice(1, 1);
                }
                if (notTmalls.length) {
                    const alipayQrCode = await this.getAlipayQrCodeLogin(notTmalls.join(','), opt);
                    this.tabs[0] = {
                        ...this.tabs[0],
                        data: alipayQrCode
                    };
                } else {
                    this.tabs.splice(0, 1);
                }
                this.setData(0);
                const localKey = 'car-credit-asseddment-show-tip';
                const flag = localStorage.getItem(localKey) === '1';
                if (this.productIdList && !flag) {
                    const briefPlanList = this.normalInfo.briefPlanList || [];
                    if (briefPlanList.length) {
                        this.showAssessmentFinance = true;
                    }
                    localStorage.setItem(localKey, '1');
                }
            });
        },    
        getTmallQrCodeLogin(productIds, opt) {
            return Api.lease.getTmallQrCodeLogin({
                carId: this.carId,
                specifyVin: this.vin,
                longitude: this.longitude,
                latitude: this.latitude,
                productIds,
                ...opt
            });
        },
        getAlipayQrCodeLogin(productIds, opt) {
            if (this.qrInstallmentPeriods) {
                opt.qrInstallmentPeriods = this.qrInstallmentPeriods;
            }
            return Api.lease.getAlipayQrCodeLogin({
                carId: this.carId,
                specifyVin: this.vin,
                longitude: this.longitude,
                latitude: this.latitude,
                productIds,
                ...opt
            });
        },
        getTabs() {
            this.$bury({
                typeId: 'TGCB_ORDER_CREDIT',
                shopCode: this.$store.state.userData.storeId
            });
            this.setMoreData();

            return [
                {
                    qrType: 1,
                    tabName: '支付宝码',
                    bgColor: 'rgb(0, 168, 242)'
                },
                {
                    qrType: 2,
                    tabName: '天猫码',
                    bgColor: '#fc7200'
                }
            ];
        }
    },
    created () {
        Tower.setWebViewTitle('信用评估');
        this.$setBodyBack('#00a8f2');
        this.getData();
        if (!this.alreadyReminded) {
            this.showShareTip = true;
            localStorage.setItem('QRTip', '1');
        }
        Tower.setRightBar({
            imageUrl: 'http://img.souche.com/f2e/0d149c6614f28054e8eafc7142400385.png',
            show: true
        }, () => {
            this.$bury('XYPG_SH_OPEN');
            Tower.showMorePage();
        });
    },
    components: {
        CoAssessmentFinance
    }
};

</script>
