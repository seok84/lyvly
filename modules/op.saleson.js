/**
 * SalesOn3 API Client
 *
 * @Date 2019.10.07.
 * @Author skc@onlinepowers.com
 * @type {{exception: Saleson.exception, redirect: Saleson.redirect, init: Saleson.init, debug: Saleson.debug, const: {SAVED_LOGIN_ID: string, CATEGORY: string, TOKEN: string}, notFoundException: Saleson.notFoundException, log: Saleson.log, callbackAlert: Saleson.callbackAlert, error: Saleson.error, confirm: Saleson.confirm, isLogin: (function(): (*|boolean)), authenticationException: Saleson.authenticationException, pages: {LOGIN: string, INDEX: string, isAllowAnonymous: (function(): boolean)}, handleException: Saleson.handleException, requestContext: {}, alert: Saleson.alert, config: {cdnDomain: string, apiDomain: string, HMACSecretKey: string}}}
 */

module.exports = {
    install(Vue, modules) {
        const cryptoJS = modules.cryptoJS;
        const CircuitBreaker = modules.circuitBreaker;

        let $s = Vue.prototype.$saleson = {
            axios: null,
            auth: null,
            store: null,
            config: {
                apiDomain: process.env.API,
                cdnDomain: process.env.BACK_OFFICE,
                virtualDomain: process.env.HOST,

                // SNS
                kakaoLoginAppId: '6de9a20634452ef8db02f78fd0bc7ea8',
                facebookLoginAppId: '401997661768610',
                naverLoginAppId: 'Qnet1GaSzqf2m48fnnY1',
                naverLoginCallback: '/users/sns/naver-callback',
                appleClientId: '',
                appleRedirectUri: '',
                noImage: '/static/images/thumb.png',
                loadingImage: '/static/images/loadingpage.gif'
            },
            const: {
                SALESON_ID: 'salesonId',
                TOKEN: 'token',
                TOKEN_STATUS: 'tokenStatus',
                TOKEN_TYPE: 'tokenType',
                CATEGORY: 'category',
                CATEGORY_UPDATED_DATE: 'categoryUpdatedDate',
                SAVED_LOGIN_ID: 'savedLoginId',
                CAMPAIGN_CODE: 'campaignCode',
                VISIT: 'visit',
                VISIT_EXPIRE_DATE: 'visitExpireDate',
                LATELY_ITEM: 'latelyItem',
                LATELY_SEARCH: 'latelySearch',
                BUY_ORDER: 'buyOrder',
                KAKAO_SHARE_INIT_FLAG: 'kakaoShareInitFlag',
                GNB_MENU_TARGET: 'gnbMenuTarget'
            },

            requestContext: {},
            pages: {
                INDEX: "/",
                LOGIN: "/user/login",
                FIND_ID_PW: "/user/find-idpw",
                JOIN: "/user/join",
                JOIN_COMPLETE: "/user/join-complete",
                SLEEP_USER: "/user/sleep-user",
                EXPIRED_PASSWORD: "/user/expired-password",
                TEMP_PASSWORD: "/user/change-password",
                MYPAGE_ORDER: "/mypage/order",

                /**
                 * 비회원 접속이 가능한 페이지인가?
                 * @returns {boolean}
                 */
                isAllowAnonymous() {
                    let allowAnonymous = [
                        $s.pages.LOGIN,
                        $s.pages.FIND_ID_PW,
                        $s.pages.JOIN,
                        $s.pages.JOIN_COMPLETE,
                        $s.pages.SLEEP_USER,
                        $s.pages.EXPIRED_PASSWORD,
                        $s.pages.TEMP_PASSWORD
                    ];
                    let requestUri = $s.requestContext.requestUri;
                    let isMatched = false;

                    for (let i = 0; i < allowAnonymous.length; i++) {
                        if (allowAnonymous[i] == requestUri) {
                            isMatched = true;
                            break;
                        }
                    }

                    return isMatched;
                },
            },
            initVueModule(vue) {
                $s.store = vue.$store;
                $s.auth = vue.$auth;
                $s.axios = vue.$axios;
                $s.router = vue.$router;
            },
            init(options) {

                $api = $s.api;
                $c = $s.const;
                $p = $s.pages;

                $s.core.setState('mobileFlag', navigator.userAgent.indexOf("Mobi") > -1);

                $s.core.setState($s.const.GNB_MENU_TARGET, '');

                this.requestContext = this.core.parseUrl(location.href);

                $s.debug(this.requestContext);

                // 인증설정
                try {

                    let isLoginPage = false;
                    let isGuestLoginPage = false;

                    if (typeof options != 'undefined') {
                        try {
                            isLoginPage = options.loginPage;
                            isGuestLoginPage = options.guestLoginPage;
                        } catch (e) {
                        }
                    }

                    $s.setCampaignCode();

                    $s.api.salesonId(function () {
                    }, function (error) {
                        $s.error(error);
                    })

                    /*$s.core.authenticationFilter(function () {

                        if (!$s.pages.isAllowAnonymous()) {

                            let alertFlag;

                            if (isGuestLoginPage) {
                                alertFlag = !$s.isGuestLogin();
                            } else {
                                alertFlag = isLoginPage;
                            }

                            if (alertFlag) {
                                $s.authenticationException('로그인 후 이용이 가능합니다.');
                            }
                        }
                    });*/

                    $s.ga.init();
                    $s.ev.init();

                    if ($s.isLogin()) {
                        $s.api.getSessionTimeout(function(data) {
                            try {
                                let timeout = data.timeout;
                                if (timeout > 0) {

                                    timeout = 1;

                                    setTimeout(function() {
                                        $s.logout();
                                    }, timeout * 1000 * 60);
                                }
                            } catch (e){}
                        },function(error) {
                            $s.error(error);
                        });
                    }

                } catch (e) {
                    this.handleException(e);
                    return;
                }
            },
            cleanToken() {
                $s.auth.setUserToken(null);
            },
            setToken(token) {

                $s.auth.setUserToken(token);

            },
            getHashInBase64(hmacMessage) {
                let hash = cryptoJS.HmacSHA256(hmacMessage, $s.config.apiDomain);
                return cryptoJS.enc.Base64.stringify(hash);
            },

            logout(url) {

                $s.auth.logout().then(function () {
                    $s.core.setState($s.const.SALESON_ID, null);

                    $s.auth.logout().then(function () {
                        if (typeof url != 'undefined' && url != '') {
                            $s.redirect(url);
                        } else {
                            $s.redirect($s.pages.INDEX);
                        }
                    });
                });
            },

            isLogin() {
                return $s.core.isAuthenticated() && 'ROLE_USER' == $s.core.getTokenType();
            },

            isGuestLogin() {
                return $s.core.isAuthenticated() && 'ROLE_GUEST' == $s.core.getTokenType();
            },

            authenticationException(msg) {
                let err = {
                    exception: 'AuthenticationException',
                    message: msg
                };
                $s.debug(err);
                throw JSON.stringify(err);
            },
            exception(msg) {
                let err = {
                    exception: 'Exception',
                    message: msg
                };
                $s.debug(err);
                throw JSON.stringify(err);
            },
            notFoundException(msg) {
                let err = {
                    exception: 'PageNotFoundException',
                    message: msg
                };
                $s.debug(err);
                location.replace('/public/error/404.html');
                throw JSON.stringify(err);
            },

            handleException(e) {
                this.log("[handleException] " + e);

                try {
                    let ex = JSON.parse(e);

                    if ('AuthenticationException' === ex.exception) {
                        //alert(ex.message);
                        this.redirect($s.pages.LOGIN + "?target=" + encodeURIComponent($s.requestContext.requestFullUri));
                        return;
                    }
                    if ('PageNotFoundException' === ex.exception) {
                        //alert(ex.message);
                        location.replace('/public/error/404.html');
                        return;
                    } else {
                        this.error(ex);
                    }

                } catch (e) {
                    this.error(e);
                }

            },

            alert(message, callback) {

                $s.callbackAlert = $s.core.isFunction(callback) ? callback : $s.closeAlert;

                let $alert = $('#op-alert');

                $alert.find('.modal-body p').text(message);
                $alert.find('.confirm-type').hide();
                $alert.find('.alert-type').show();

                $alert.modal('show');

                setTimeout(function () {
                    $alert.find('.op-modal-ok').focus();
                }, 500)

            },
            confirm(message, callback) {

                $s.callbackAlert = $s.core.isFunction(callback) ? callback : $s.closeAlert;

                let $alert = $('#op-alert');

                $alert.find('.modal-body p').text(message);
                $alert.find('.alert-type').hide();
                $alert.find('.confirm-type').show();

                $alert.modal('show');
            },

            closeAlert() {
                $('#op-alert').modal('hide');
            },

            callbackAlert() {


            },

            toast(message) {

                let $toast = $('#op-toast .toast_bg');
                let fadeIn = 300;
                let fadeOut = 1000;

                $toast.find('.toast_wrap p').text(message);

                $toast.delay(fadeIn).fadeIn();
                $toast.delay(fadeOut).fadeOut();

            },

            log(message) {
                console.log("[SALESON] LOG - " + message);
            },
            debug(message) {
                console.debug("[SALESON] DEBUG - " + message);
            },
            error(message) {
                console.error("[SALESON] ERROR - " + message);
            },
            redirect(uri) {
                location.href = uri;
            },

            addZero(y, s) {
                let stringValue = "" + y;
                if (s > stringValue.length) {
                    for (let i = 0; i < s - stringValue.length; i++) y = "0" + y;
                }

                return y;
            },
            DateEvent: {
                set(element, character, sInput, eInput) {
                    sInput = sInput == undefined ? 'input[name="startDate"]' : sInput;
                    eInput = eInput == undefined ? 'input[name="endDate"]' : eInput;
                    character = character == undefined ? '' : character;
                    if ($(element).length > 0 && $(sInput).length > 0 && $(eInput).length > 0) {
                        let date = new Date();
                        let eDate = date.getFullYear() + character + $s.addZero((date.getMonth() + 1), 2) + character + $s.addZero(date.getDate(), 2);
                        $(element).change(function (e) {
                            let val = e.target.value;
                            let step = undefined;
                            let mode = 'today';

                            if  ('' == val || 'clear' == val ) {
                                $(sInput).val('');
                                $(eInput).val('');
                            } else {

                                if (val.indexOf('week-') == 0) {
                                    step = val.replace('week-', '');
                                    mode = 'week';
                                } else if (val.indexOf('day-') == 0) {
                                    step = val.replace('day-', '');
                                    mode = 'day';
                                } else if (val.indexOf('month-') == 0) {
                                    step = val.replace('month-', '');
                                    mode = 'month';
                                } else if (val.indexOf('year-') == 0) {
                                    step = val.replace('year-', '');
                                    mode = 'year';
                                } else if (val.indexOf('clear-') == 0) {
                                    $(sInput).val('');
                                    $(eInput).val('');
                                } else { // today
                                    $(sInput).val(eDate);
                                    $(eInput).val(eDate);
                                }
                                $(sInput).val($s.DateEvent.getDiffDate(mode, step, character));
                                $(eInput).val(eDate);
                            }

                        });
                    }
                },
                // 날짜를 계산해서 리턴..
                getDiffDate: function getDiffDate(mode, value, character) {
                    let date = new Date();
                    if (mode == 'week') {
                        date.setDate(date.getDate() - (value * 7));
                    } else if (mode == 'day') {
                        date.setDate(date.getDate() - value);
                    } else if (mode == 'month') {
                        date.setMonth(date.getMonth() - value);
                    } else if (mode == 'year') {
                        date.setFullYear(date.getFullYear() - value);
                    }
                    return date.getFullYear() + character + $s.addZero((date.getMonth() + 1), 2) + character + $s.addZero(date.getDate(), 2);
                }
            },
            isMobile() {
                    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Browser_detection_using_the_user_agent
                    //return navigator.userAgent.indexOf("Mobi") > -1;
                if (process.server) {
                    return false;
                }
                return $s.core.getState('mobileFlag');
            },

            setCampaignCode() {
                let code = $s.core.getParameter("campaign_code");

                if (code != '') {
                    $s.core.setState($s.const.CAMPAIGN_CODE, code);
                }
            },

            getCampaignCode() {
                return $s.core.getState($s.const.CAMPAIGN_CODE);
            },

            getCookie: function(name) {
                name = name + "=";
                let decodedCookie = decodeURIComponent(document.cookie);
                let ca = decodedCookie.split(';');
                for(let i = 0; i <ca.length; i++) {
                    let c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }
        };

        $s.api = {
            domain: $s.config.apiDomain,

            /**
             * 인증 토큰 발행
             *
             * URI: /api/auth/token
             * @HeaderParam Hmac
             * @JsonPath loginType
             * @JsonPath loginId
             * @JsonPath password
             */
            getAuthToken(req, successHandler, failureHandler) {
                if (req == null) {
                    return;
                }

                let hmacMessage = JSON.stringify(req);
                $s.debug(hmacMessage);

                let hashInBase64 = $s.getHashInBase64(hmacMessage);
                $s.debug("HMAC" + hashInBase64);

                let url = '/api/auth/token';
                try {
                    url += '?uid='+$s.ev.getUid();
                } catch(e) {}

                $s.axios
                    .post(url, req, {
                        headers: {
                            Hmac: hashInBase64
                        }
                    })
                    .then(function (response) {
                        $s.setToken(response.data.token);

                        if ("SLEEP_USER" === response.data.code) { // 휴면 회원
                            $s.alert("휴면 전환된 계정입니다.", function () {
                                $s.redirect($s.pages.SLEEP_USER);
                            });
                            return;
                        }

                        if ("PASSWORD_EXPIRED" === response.data.code) { // 패스워드 기간 만료
                            $s.alert("패스워드 기간이 만료 되었습니다.", function () {
                                $s.redirect($s.pages.EXPIRED_PASSWORD);
                            });
                            return;
                        }

                        if ("TEMP_PASSWORD" === response.data.code) { // 패스워드 기간 만료
                            $s.redirect($s.pages.TEMP_PASSWORD);
                            return;
                        }


                        if ($s.core.isFunction(successHandler)) {
                            successHandler();
                        }
                    })
                    .catch(function (error) {
                        if ($s.core.isFunction(failureHandler)) {
                            failureHandler(error);
                        } else {
                            $s.api.handleApiExeption(error, failureHandler);
                        }
                    });
            },

            getAuthGuestToken(req, successHandler, failureHandler) {

                let hmacMessage = JSON.stringify(req);
                $s.debug(hmacMessage);

                let hashInBase64 = $s.getHashInBase64(hmacMessage);
                $s.debug("HMAC" + hashInBase64);

                $s.axios
                    .post("/api/auth/guest-token", req, {
                        headers: {
                            Hmac: hashInBase64
                        }
                    })
                    .then(function (response) {
                        $s.setToken(response.data.token);

                        if ($s.core.isFunction(successHandler)) {
                            successHandler();
                        }
                    })
                    .catch(function (error) {
                        if ($s.core.isFunction(failureHandler)) {
                            failureHandler(error);
                        } else {
                            $s.api.handleApiExeption(error, failureHandler);
                        }
                    });
            },

            /**
             * SNS 인증 토큰 발행
             *
             * URI: /api/auth/sns-token
             * @HeaderParam Hmac
             * @JsonPath snsType
             * @JsonPath snsId
             * @JsonPath email
             * @JsonPath snsName
             */
            getAuthSnsToken(req, successHandler, failureHandler) {
                if (req == null) {
                    $s.alert('인증 정보가 존재하지 않습니다.');
                    return;
                }

                let hmacMessage = JSON.stringify(req);
                let hashInBase64 = $s.getHashInBase64(hmacMessage);

                let url = '/api/auth/sns-token';
                try {
                    url += '?uid='+$s.ev.getUid();
                } catch(e) {}

                $s.axios
                    .post(url, req, {
                        headers: {
                            Hmac: hashInBase64
                        }
                    })
                    .then(function (response) {
                        $s.setToken(response.data.token);

                        if ($s.core.isFunction(successHandler)) {
                            successHandler();
                        }
                    })
                    .catch(function (error) {
                        if ($s.core.isFunction(failureHandler)) {
                            failureHandler(error);
                        } else {
                            $s.api.handleApiExeption(error, failureHandler);
                        }
                    });
            },

            salesonId(callback, failureHandler) {

                let id = $s.core.getState($s.const.SALESON_ID);
                if (id != null && id != '') {
                    return;
                }

                $s.axios
                    .get("/api/auth/saleson-id", {}, {})
                    .then(function (response) {
                        $s.core.setState($s.const.SALESON_ID, response.data.id);
                    })
                    .catch(function (error) {
                        if ($s.core.isFunction(failureHandler)) {
                            failureHandler(error);
                        } else {
                            $s.api.handleApiExeption(error, failureHandler);
                        }
                    });
            },
            getSessionTimeout(callback, failureHandler) {
                const url = "/api/auth/session-timeout";

                $s.axios
                    .get(url, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            salesOnLogout(callback, failureHandler) {

                $s.axios
                    .get("/op_security_logout", {}, {})
                    .then(function (response) {

                    })
                    .catch(function (error) {
                        if ($s.core.isFunction(failureHandler)) {
                            failureHandler(error);
                        } else {
                            $s.api.handleApiExeption(error, failureHandler);
                        }
                    });

            },

            sendAuthNumber(params, callback, failureHandler) {
                $s.axios
                    .post("/api/auth/send-auth-number", params, {})
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            checkAuthNumber(params, callback, failureHandler) {
                $s.axios
                    .post("/api/auth/check-auth-number", params, {})
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 회원가입
            joinMember(param, callback, failureHandler) {
                $s.axios
                    .post("/api/auth/join", param, {})
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 휴면 계정 복구
            recovery(callback, failureHandler) {
                $s.axios
                    .post("/api/auth/recovery", {}, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            getCategoriesUpdatedCheck(callback, failureHandler) {

                let d = $s.core.getState($s.const.CATEGORY_UPDATED_DATE);

                $s.axios
                    .get("/api/category/updated-check", {
                        params: {d:d},
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 카테고리 목록
            getCategories(callback, failureHandler) {
                $s.axios
                    .get("/api/category", {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 현재 카테고리 목록
            getCurrentCategories(params, callback, failureHandler) {
                $s.axios
                    .get("/api/category/current", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 카테고리 상품 금액 리스트
            getPriceAreaList (params, callback, failureHandler) {
                $s.axios
                    .get("/api/category/price-areas", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 카테고리 필터 목록
            getCurrentCategoriesFilter(params, callback, failureHandler) {
                $s.axios
                    .get("/api/category/filter", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            getItems(params, callback, failureHandler) {
                $s.axios
                    .get("/api/item", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            getItemReviewsForDetail(params, callback, failureHandler) {
                $s.axios
                    .get("/api/item/reviews", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 등록된 상품후기 리스트
            getItemReviews(params, callback, failureHandler) {
                $s.axios
                    .get("/api/mypage/reviews", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            addItemReviewLike (id, callback, failureHandler) {
                $s.axios
                    .post("/api/item/review/add-like/"+id, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            getItemReviewInfo (id, callback, failureHandler) {
                $s.axios
                    .get("/api/item/review/info/"+id, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 미등록 상품후기 리스트
            getUnregisteredItemReviews(params, callback, failureHandler) {
                $s.axios
                    .get("/api/mypage/nonregistered-reviews", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            // 이용후기 삭제
            deleteReview(itemReviewId, callback, failureHandler) {

                let url = '/api/mypage/delete-review/' + itemReviewId;

                $s.axios
                    .post(url, {}, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 상품문의 리스트
            getItemInquiries(params, callback, failureHandler) {
                $s.axios
                    .get("/api/qna/item-inquiry", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 상품문의 삭제
            delItemInquiry(params, callback, failureHandler) {
                $s.axios
                    .post("/api/qna/delete-item-inquiry", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            // 1:1문의
            getInquiries(params, callback, failureHandler) {
                $s.axios
                    .get("/api/qna/inquiry", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            // 1:1문의 작성
            createInquiry(params, callback, failureHandler) {
                $s.axios
                    .post("/api/qna/inquiry", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            // 1:1문의 삭제
            deleteInquiry(params, callback, failureHandler) {
                $s.axios
                    .post("/api/qna/delete-inquiry", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            // 개인정보보호정책
            getPrivacy(params, callback, failureHandler) {
                $s.axios
                    .get("/api/policy/protect", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            // 이용약관
            getPolicy(params, callback, failureHandler) {
                $s.axios
                    .get("/api/policy/clause", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            // 회사소개
            getAbout(params, callback, failureHandler) {
                $s.axios
                    .get("/api/common/about-us", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            // 입점문의 작성
            createStoreInquiry(formData, callback, failureHandler) {
                $s.axios
                    .post("/api/store-inquiry", formData, {
                        headers: this.getMultipartHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            getItem(itemUserCode, callback, failureHandler) {
                $s.axios
                    .get("/api/item/" + itemUserCode, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 장바구니 목록
            getCartItems(callback, failureHandler) {
                $s.axios
                    .get("/api/cart", {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 장바구니 담기
            addToCart(params, callback, failureHandler) {
                $s.axios
                    .post("/api/cart/add", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);

                        $s.ga.addToCart(params.arrayRequiredItems);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 장바구니 삭제
            deleteCart(cartId, callback, failureHandler) {
                $s.axios
                    .post("/api/cart/delete", {id: cartId}, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 장바구니 수량 변경
            updateCartQuantity(params, callback, failureHandler) {
                $s.axios
                    .post("/api/cart/update-quantity", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 장바구니 배송비 지불방법 변경
            updateShippingPaymentType(params, callback, failureHandler) {
                $s.axios
                    .post("/api/cart/shipping-payment-type", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 상품 찜하기
            addToWishList(itemId, callback, failureHandler) {

                if (!$s.isLogin()) {
                    $s.toast('로그인 후 등록이 가능합니다.');
                    return;
                }

                $s.axios
                    .post("/api/item/wishlist", {itemId: itemId}, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 상품 주문
            buyOrder(params, callback, failureHandler) {
                $s.axios
                    .post("/api/order/buy", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 마이페이지
            getMypage(callback, failureHandler) {
                $s.axios
                    .get("/api/mypage", {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 주문목록
            getOrderList(params, callback, failureHandler) {
                $s.axios
                    .get("/api/order", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 주문상세
            getOrder(orderCode, callback, failureHandler) {
                $s.axios
                    .get("/api/order/detail?orderCode=" + orderCode, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 쿠폰목록
            getCoupon(params, callback, failureHandler) {
                $s.axios
                    .get("/api/coupon", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 배송비 쿠폰목록
            getShippingCoupon(params, callback, failureHandler) {
                $s.axios
                    .get("/api/coupon/shipping-coupons", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            offlineCouponExchange(params, callback, failureHandler) {
                $s.axios
                    .get("/api/coupon/exchange-offline-coupon", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 쿠폰 적용가능상품
            getAppliesTo(params, callback, failureHandler) {
                $s.axios
                    .get("/api/coupon/applies-to/" + params.couponId + "/coupon-user", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 적립금 목록
            getPoints(params, callback, failureHandler) {
                $s.axios
                    .get("/api/mypage/points", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 배송지 목록
            getShipping(callback, failureHandler) {
                $s.axios
                    .get("/api/shipping", {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 배송지 추가&수정
            saveShipping(params, callback, failureHandler) {
                $s.axios
                    .post("/api/shipping", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 배송지 상태 변경 (목록)
            shippingListAction(params, callback, failureHandler) {
                let url = params.mode === "mod" ? "base-shipping" : "delete";

                $s.axios
                    .post("/api/shipping/" + url, params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 배송완료
            confirmPurchase(params, callback, failureHandler) {
                $s.axios
                    .post("/api/order/confirm-purchase", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 주문취소
            orderCancel(params, callback, failureHandler) {
                $s.axios
                    .post("/api/order/cancel", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 상품후기 작성
            review(formData, callback, failureHandler) {
                let url = "/review";
                $s.axios
                    .post("/api/item" + url, formData, {
                        headers: this.getMultipartHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 공지사항 목록
            getNotice(params, callback, failureHandler) {
                $s.axios
                    .get("/api/notice", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // SNS 연동 정보 확인
            getSnsInfo(callback, failureHandler) {
                $s.axios
                    .get("/api/auth/sns-info", {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 비밀번호 확인
            checkPassword(params, callback, failureHandler) {
                $s.axios
                    .post("/api/auth/check-password", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 회원정보조회
            getMember(callback, failureHandler) {
                $s.axios
                    .get("/api/auth/me", {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 회원정보수정
            updateMember(params, callback, failureHandler) {
                $s.axios
                    .post("/api/auth/me", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 회원탈퇴
            secedeMember(params, callback, failureHandler) {
                $s.axios
                    .post("/api/auth/secede", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // SNS 가입 정보 확인
            checkSnsJoin(params, callback, failureHandler) {
                $s.axios
                    .post("/api/auth/check-sns-join", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // SNS 계정 연동
            snsJoin(params, callback, failureHandler) {
                $s.axios
                    .post("/api/auth/sns-join", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // SNS 계정 연동 해제
            disconnectSns(params, callback, failureHandler) {
                $s.axios
                    .post("/api/auth/disconnect-sns", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // FAQ 목록
            getFaq(params, callback, failureHandler) {
                $s.axios
                    .get("/api/faq", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 다운가능한 상품쿠폰 리스트
            downloadItemCouponList(params, callback, failureHandler) {
                $s.axios
                    .get("/api/item/coupons", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            downloadAllItemCouponList(params, callback, failureHandler) {
                $s.axios
                    .post("/api/item/download-all-coupons", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            downloadCouponList(params, callback, failureHandler) {
                $s.axios
                    .get("/api/coupon/download-coupons", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            downloadAllCoupons(params, callback, failureHandler) {
                $s.axios
                    .post("/api/coupon/download-all-coupons", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            // 쿠폰 다운로드
            couponDownload(params, callback, failureHandler) {
                $s.axios
                    .post("/api/coupon/download", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 공통 - 장바구니 정보
            getCartInfo(callback, failureHandler) {
                $s.axios
                    .get("/api/common/cart-info", {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            findId(params, callback, failureHandler) {
                $s.axios
                    .post("/api/auth/find-id", params, {})
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 반품신청 정보
            getReturnPop(params, callback, failureHandler) {
                $s.axios
                    .get("/api/order/return-apply", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 반품신청
            returnProcess(params, callback, failureHandler) {
                $s.axios
                    .post("/api/order/return-apply", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 교환신청 정보
            getExchangePop(params, callback, failureHandler) {
                $s.axios
                    .get("/api/order/exchange-apply", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 교환신청
            exchangeProcess(params, callback, failureHandler) {
                $s.axios
                    .post("/api/order/exchange-apply", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 취소신청 정보
            getCancelPop(params, callback, failureHandler) {
                $s.axios
                    .get("/api/order/cancel-apply", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 취소신청 상세정보
            getRefundAmount(params, callback, failureHandler) {
                $s.axios
                    .post("/api/order/refund-amount", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 취소신청
            cancelProcess(params, callback, failureHandler) {
                $s.axios
                    .post("/api/order/cancel-apply", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            findPasswordStep1(params, callback, failureHandler) {
                $s.axios
                    .post("/api/auth/find-password-step1", params, {})
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            changePassword(params, callback, failureHandler) {
                $s.axios
                    .post("/api/auth/change-password", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            delayChangePassword(callback, failureHandler) {
                $s.axios
                    .post("/api/auth/delay-change-password", {}, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 관심상품 목록
            getWishlist(params, callback, failureHandler) {
                $s.axios
                    .get("/api/mypage/wishlist", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 관심상품 삭제
            delWishlist(params, callback, failureHandler) {
                $s.axios
                    .post("/api/mypage/delete-wishlist", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 회원 등급 및 혜택안내
            getGrade(callback, failureHandler) {
                $s.axios
                    .get("/api/mypage/grade", {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            getQuickInfo(callback, failureHandler) {
                $s.axios
                    .get("/api/common/quick-info", {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    });
            },

            getBestKeyword(callback, failureHandler) {
                $s.axios
                    .get("/api/search/best-keyword", {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    });
            },

            getRecommendKeyword(callback, failureHandler) {
                $s.axios
                    .get("/api/search/recommend-keyword", {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    });
            },

            getBankInfo(callback, failureHandler) {
                $s.axios
                    .get("/api/common/bank-info", {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    });
            },

            getPromotion(callback, failureHandler) {
                $s.axios
                    .get("/api/display/promotion", {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    });
            },
            getMdItems(params, callback, failureHandler) {

                return $s.axios
                    .get("/api/display/md", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    });

            },


            getNewItems(params, callback, failureHandler) {
                $s.axios
                    .get("/api/display/new", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    });
            },

            // 그룹별 베스트 상품 리스트
            getGroupBestItems(params, callback, failureHandler) {
                $s.axios
                    .get("/api/display/group-best", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    });
            },

            getEvent(params, callback, failureHandler) {
                $s.axios
                    .get("/api/event", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    });
            },

            getLatelyItems(params, callback, failureHandler) {
                $s.axios
                    .get("/api/display/lately", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    });
            },

            // 베스트 상품 목록 조회
            getBestItems(params, callback, failureHandler) {
                $s.axios
                    .get("/api/display/best", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    });
            },

            // 스팟 상품 조회
            getSpotItems(params, callback, failureHandler) {
                $s.axios
                    .get("/api/event/spot", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    });
            },

            // 이벤트 상세
            getEventDetail(featuredUrl, callback, failureHandler) {
                $s.axios
                    .get("/api/event/" + featuredUrl, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            naverPay (params, callback, failureHandler) {
                $s.axios
                    .post("/api/open-market/checkOutReturn", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            naverZzim (params, callback, failureHandler) {
                $s.axios
                    .post("/api/open-market/checkOutWishReturn", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            naverApiPayment(params, callback, failureHandler) {
                $s.axios
                    .post("/api/order/naverpay/payment", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            getDisplayStyleBooks(callback, failureHandler) {
                $s.axios
                    .get("/api/display/style-book", {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 스타일북 목록 조회
            getStyleBooks(page, callback, failureHandler) {
                $s.axios
                    .get("/api/style-book", {
                        params: {'page': page},
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    });
            },

            getStyleBookById(id, callback, failureHandler) {
                $s.axios
                    .get("/api/style-book/" + id, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    });
            },

            getIslandType(params, callback, failureHandler) {
                $s.axios
                    .get("/api/common/island-info", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    });
            },

            // 이벤트 댓글 목록
            getEventReply(params, callback, failureHandler) {
                $s.axios
                    .get("/api/event/replies", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 이벤트 댓글 작성
            createEventReply(params, callback, failureHandler) {
                $s.axios
                    .post("/api/event/reply", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 통합검색
            getSearchResult(params, callback, failureHandler) {

                if (params != null && params.query != null && params.query != '') {
                    params.query = decodeURIComponent(params.query);
                    params.query = encodeURIComponent(params.query);
                }

                $s.axios
                    .get("/api/search/result", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            viewItemRelations(params, callback, failureHandler) {
                $s.axios
                    .get("/api/item/relation", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            /**
             * 결제화면 API
             * @param params
             * @param callback
             * @param failureHandler
             */
            paymentStep(params, callback, failureHandler) {
                $s.axios
                    .post("/api/order/payment-step", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            /**
             * 결제주문 저장 API
             * @param params
             * @param callback
             * @param failureHandler
             */
            orderSave(params, callback, failureHandler) {
                $s.axios
                    .post("/api/order/save", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            /**
             * 결제처리 API
             * @param params
             * @param callback
             * @param failureHandler
             */
            pay(params, callback, failureHandler) {
                $s.axios
                    .post("/api/order/pay", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 팝업 리스트 조회
            getPopups: function(callback, failureHandler) {
                $s.axios
                    .get("/api/popup/list", {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 팝업 조회 (ID)
            getPopupById: function(params, callback, failureHandler) {
                $s.axios
                    .get("/api/popup/index/" + params.id, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            /**
             * 팝업 띄우기
             */
            popup: {
                popupClose: function(popupType, popupId) {
                    if (popupType === '1' && !$s.isMobile()) {
                        self.close();
                    } else {
                        $('#popup_' + popupId).hide();
                    }
                },
                setCookie: function(popupType, popupId) {
                    let expire = new Date();

                    // 쿠키 저장
                    expire.setDate(expire.getDate() + 1);
                    document.cookie = "popup_check_" + popupId + "=1; expires=" + expire.toGMTString() + "; path=/";

                    // 팝업 닫기
                    $s.api.popup.popupClose(popupType, popupId);
                },
                makePopup: function(list, vue) {
                    try {
                        let openLayerPopups = [];

                        if (typeof list !== 'undefined' && list !== null) {
                            for (let i = 0; i < list.length; i++) {
                                let popup = list[i];


                                // 쿠키 정보 - 오늘 하루 이 창을 열지 않음 (1)
                                let cookie = $s.getCookie('popup_check_' + popup.popupId);

                                if (cookie !== '1') {
                                    if ($s.isMobile()) {
                                        popup.popupStyle = '';
                                        popup.handleStyle = '';

                                        openLayerPopups.push(popup);
                                    } else if (popup.popupType === '1') {           // 윈도우 팝업 띄우기
                                        $s.api.popup.open("/popup/" + popup.popupId, 'openPopup' + popup.popupId,
                                            popup.width + 17, popup.height + 117, 0, popup.leftPosition, popup.topPosition);

                                    } else if (popup.popupType === '2') {           // 레이어 팝업 정보 세팅
                                        popup.popupStyle = 'position:absolute;' +
                                            'left:' + popup.leftPosition + 'px;' +
                                            'top:' + popup.topPosition + 'px;' +
                                            'z-index:9999;' +
                                            'width:' + (popup.width + 20) + 'px;' +
                                            'height:' + popup.height + 'px;';

                                        popup.handleStyle = 'width:' + (popup.width + 20) + 'px;' +
                                            'height:15px;cursor:move;' +
                                            'background:' + popup.backgroundColor + ';';

                                        openLayerPopups.push(popup);
                                    }
                                }
                            }

                            // 레이어 팝업 띄우기
                            if (openLayerPopups.length > 0) {
                                let child = vue.getChild("layout-popup");
                                if (child !== null) {
                                    child.makeLayerPopup(openLayerPopups);
                                }
                            }
                        }
                    } catch (e) {
                        console.error('saleson make popup error', e);
                    }
                },
                open: function(url, popupName, width, height, scrollbars, xPosition, yPosition) {

                    if ($s.isMobile()) {

                        if ($('.op-app-popup-wrap').size() == 0) {
                            $('body').wrapInner('<div class="op-app-popup-wrap"></div>');
                        }

                        $('.op-app-popup-wrap').hide();
                        $('.op-app-popup-content').remove();

                        let $div = $('<div class="op-app-popup-content" style="height:'+ window.innerHeight +'px;width:100%"><iframe src="'+ url +'" name="'+ popupName +'" height="100%" width="100%" scrolling="yes" /></div>');
                        $('body').append($div);

                    } else {
                        let xP = 0, yP = 0, xC = 0, yC = 0, scr = 0, zero = 0, one = 1;
                        let target = url == null || url == '' ? '' : url;
                        let w = width == null || width == '' ? 400 : width;
                        let h = height == null || height == '' ? 400 : height;

                        if (parseInt(navigator.appVersion) >= 4) {
                            xC = (screen.width - w) / 2;
                            yC = (screen.height - h) / 2;
                        }

                        xP = xPosition == null || xPosition == 'c' ? xC : xPosition;
                        yP = yPosition == null || yPosition == 'c' ? yC : yPosition;
                        scr = scrollbars == null || scrollbars == 'n' ? 0 : scrollbars;

                        let parameters = 'location=' + zero +
                            ',menubar=' + zero +
                            ',height=' + h +
                            ',width=' + w +
                            ',toolbar=' + zero +
                            ',scrollbars=' + scr +
                            ',status=' + zero +
                            ',resizable=' + one +
                            ',left=' + xP +
                            ',screenX=' + xP +
                            ',top=' + yP +
                            ',screenY=' + yP;

                        popupName = popupName.replaceAll("-", "_");
                        let newWin = window.open(target, popupName, parameters);

                        if (newWin) {
                            newWin.focus();
                        }

                        //return newWin;
                    }
                }
            },

            /**
             * sns 공유
             */
            social: {
                twitter(title, description, imageUrl, link) {

                    let ranNum = Math.floor(Math.random() * 10);
                    let url = 'http://twitter.com/share' +
                        '?url=' + encodeURIComponent(link)
                        + '&text=' + encodeURIComponent(title)
                        + "&nocache=" + ranNum;

                    $s.api.social.popup(url);
                },
                kakao(title, description, imageUrl, link) {

                    try {
                        let initFlag = $s.core.getState($s.const.KAKAO_SHARE_INIT_FLAG);

                        if (typeof initFlag =='undefined' || initFlag == null  || initFlag == 'false') {
                            Kakao.init($s.config.kakaoLoginAppId);
                            $s.core.setState($s.const.KAKAO_SHARE_INIT_FLAG, 'true');
                        }

                        if (typeof description =='undefined' || description == null ) {
                            description = '';
                        }

                        Kakao.Link.sendDefault({
                            objectType: 'feed',
                            content: {
                                title: title,
                                description: description,
                                imageUrl: imageUrl,
                                link: {
                                    webUrl: link,
                                    mobileWebUrl: link,
                                },
                            },
                            success: function(response) {
                                console.log(response);
                            },
                            fail: function(error) {
                                console.log(error);
                            }
                        });
                    } catch (e) {
                        $s.toast('카카오 공유에 실패 했습니다');
                        $s.error('kakao share error: ' + e);
                    }

                },
                facebook: function(link) {
                    try {

                        FB.init({
                            appId		: $s.config.facebookLoginAppId,
                            xfbml		: true,
                            version		: 'v6.0'
                        });

                        console.log($s.config.virtualDomain + link);

                        FB.ui({
                            method: 'share',
                            href: $s.config.virtualDomain + link
                        });

                    } catch (e) {
                        $s.toast('페이스북 공유에 실패 했습니다');
                        $s.error('facebook share error: ' + e);
                    }
                },
                kakaoStory(title, description, imageUrl, link) {

                    let ranNum = Math.floor(Math.random() * 10);
                    let url = 'https://story.kakao.com/share' +
                        '?url=' + encodeURIComponent(link)
                        + '&text=' + encodeURIComponent(title)
                        + "&nocache=" + ranNum;

                    $s.api.social.popup(url);

                },
                naverBand(title, description, imageUrl, link) {

                    let ranNum = Math.floor(Math.random() * 10);
                    let url = 'http://band.us/plugin/share' +
                        '?url=' + encodeURIComponent(link)
                        + '&text=' + encodeURIComponent(title)
                        + "&nocache=" + ranNum;

                    $s.api.social.popup(url);

                },
                popup(url) {
                    let win = window.open(url, 'sharer', 'toolbar=0, status=0, width=626, height=436');

                    if (win) {
                        win.focus();
                    }
                }
            },
            // 사용 가능한 쿠폰 목록
            getCoupons(callback, failureHandler) {
                $s.axios
                    .get("/api/order/coupons", {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            // 입점문의 작성시 전화번호 앞자리, 이메일주소 뒷자리 리스트
            getStoreInquiry(callback, failureHandler) {
                $s.axios
                    .get("/api/store-inquiry", {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            getItemQna(param, callback, failureHandler) {
                $s.axios
                    .get("/api/item/qna", {
                        params: param,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            createItemQna(params, callback, failureHandler) {
                $s.axios
                    .post("/api/qna/item-inquiry", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 재입고 알림
            getRestockNotice(params, callback, failureHandler) {
                $s.axios
                    .get("/api/item/restock", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 재입고 알림 신청
            restockNotice(params, callback, failureHandler) {
                $s.axios
                    .post("/api/item/restock", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            // 마케팅이용약관
            getPolicyMarketing(params, callback, failureHandler) {
                $s.axios
                    .get("/api/policy/marketing", {
                        params: params,
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            // 온라인 입금계좌
            getAccountNumbers(callback, failureHandler) {
                $s.axios
                    .get("/api/common/account-numbers", {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    });
            },

            /**
             * Header Authorization Bearer
             * @returns {{headers: {Authorization: string}}}
             */
            getAuthorizationHeader() {
                let token = $s.core.getToken();
                let salesOnId = $s.core.getState($s.const.SALESON_ID);
                return {
                    'Authorization': token,
                    'SALESONID': salesOnId
                }
            },

            getMultipartHeader() {
                let token = $s.core.getToken();
                let salesOnId = $s.core.getState($s.const.SALESON_ID);
                return {
                    'Authorization': token,
                    'SALESONID': salesOnId,
                    'Content-type': 'multipart/form-data'
                }
            },

            saveVisitData(params, callback, failureHandler) {
                $s.axios
                    .post("/api/common/visit", params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            googleAnalyticsCommonTrackingScript: function(callback, failureHandler) {
                $s.axios
                    .get("/api/google-analytics/common-tracking-script", {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },

            googleAnalyticsPurchase: function(params, callback, failureHandler) {

                let url = "/api/google-analytics/purchase";

                $s.axios
                    .post(url, params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            googleAnalyticsAddToCart: function(params, callback, failureHandler) {

                let url = "/api/google-analytics/add-to-cart";

                $s.axios
                    .post(url, params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            googleAnalyticsRemoveFromCart: function(params, callback, failureHandler) {

                let url = "/api/google-analytics/remove-from-cart";

                $s.axios
                    .post(url, params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            googleAnalyticsChangeFromCartQuantity: function(params, callback, failureHandler) {

                let url = "/api/google-analytics/change-from-cart-quantity";

                $s.axios
                    .post(url, params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            googleAnalyticsDetail: function(params, callback, failureHandler) {

                let url = "/api/google-analytics/detail";

                $s.axios
                    .post(url, params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            googleAnalyticsCheckout: function(params, callback, failureHandler) {

                let url = "/api/google-analytics/checkout";

                $s.axios
                    .post(url, params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            eventlogItem(params, callback, failureHandler) {
                let url = "/api/event-log/item";

                $s.axios
                    .post(url, params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            eventlogOrder(params, callback, failureHandler) {
                let url = "/api/event-log/order";

                $s.axios
                    .post(url, params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            eventlogFeatued(params, callback, failureHandler) {
                let url = "/api/event-log/featured";

                $s.axios
                    .post(url, params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            eventlogJoinUser(params, callback, failureHandler) {
                let url = "/api/event-log/join-user";

                $s.axios
                    .post(url, params, {
                        headers: this.getAuthorizationHeader()
                    })
                    .then(function (response) {
                        callback(response.data);
                    })
                    .catch(function (error) {
                        $s.api.handleApiExeption(error, failureHandler);
                    })
            },
            handleApiExeption(error, failureHandler) {
                // console.log(error);
                if ($s.core.isFunction(failureHandler)) {
                    failureHandler(error);
                } else {
                    if (error.response) {
                        /*console.log('data', error.response.data);
						console.log('status', error.response.status);
						console.log('headers', error.response.headers);*/

                        $s.core.setState($s.const.TOKEN_STATUS, error.response.status);

                        if (error.response.status === 401) {        // 토큰만료

                            if ("SLEEP_USER" === error.response.data.code) { // 휴면 회원
                                $s.alert("휴면 전환된 계정입니다.", function () {
                                    $s.redirect($s.pages.SLEEP_USER);
                                });
                                return;
                            }

                            if ("PASSWORD_EXPIRED" === error.response.data.code) { // 패스워드 기간 만료

                                if ($s.requestContext.requestUri === $s.pages.EXPIRED_PASSWORD) {
                                    return;
                                }

                                $s.alert("패스워드 기간이 만료 되었습니다.", function () {
                                    $s.redirect($s.pages.EXPIRED_PASSWORD);
                                });
                                return;
                            }

                            if ("TEMP_PASSWORD" === error.response.data.code) { // 패스워드 기간 만료

                                if ($s.requestContext.requestUri === $s.pages.TEMP_PASSWORD) {
                                    return;
                                }
                                $s.redirect($s.pages.TEMP_PASSWORD);
                                return;
                            }

                            $s.alert("로그인 후 이용이 가능합니다.", function () {
                                const url = $s.pages.LOGIN + "?target=" + encodeURIComponent($s.requestContext.requestFullUri);
                                $s.logout(url);
                            });
                            return;
                        }
                        // $s.alert(error.response.data.description);
                        let erd = error.response.data;
                        $s.alert(erd.message==null||erd.message==""?erd.description:erd.message);
                    } else {
                        $s.alert(error);
                    }
                }
            },
        };


        $s.core = {
            const: {
                TOKEN: 'token'
            },


            authenticationContext: {},
            authenticationFilter(guestHandler, authHandler) {
                // 인증정보 처리
                if ($s.isLogin()) {
                    this.authenticationContext.accessToken = $s.core.getToken();
                    //$s.log("authContext : " + JSON.stringify(this.authenticationContext));

                    if (this.isFunction(authHandler)) {
                        authHandler();
                    }

                } else {
                    if (this.isFunction(guestHandler)) {
                        guestHandler();
                    }

                }


            },
            isAuthenticated() {
                return $s.auth.loggedIn;
            },
            isFunction(func) {
                return func != null && typeof func === 'function' ? true : false;
            },
            getToken() {
                return $s.auth.strategy.token.get()
            },
            getTokenType() {

                try {
                    if ($s.core.isAuthenticated()) {
                        const user = $s.auth.user;
                        if (typeof user != 'undefined' && user != null) {
                            const type = user.type;
                            if (typeof type != 'undefined' && type != null && type != '') {
                                return type;
                            }
                        }
                    }
                } catch (e) {}
                return '';
            },
            getState(key) {
                let states = $s.store.getters['get'];
                return states[key];
            },
            setState(key, value) {
                $s.store.commit(key, value);
            },
            parseUrl(url) {
                let parser = document.createElement("a");
                parser.href = url;

                // IE 8 and 9 dont load the attributes "protocol" and "host" in case the source URL
                // is just a pathname, that is, "/example" and not "http://domain.com/example".
                parser.href = parser.href;

                // IE 7 and 6 wont load "protocol" and "host" even with the above workaround,
                // so we take the protocol/host from window.location and place them manually
                if (parser.host === "") {
                    let newProtocolAndHost = window.location.protocol + "//" + window.location.host;
                    if (url.charAt(1) === "/") {
                        parser.href = newProtocolAndHost + url;
                    } else {
                        // the regex gets everything up to the last "/"
                        // /path/takesEverythingUpToAndIncludingTheLastForwardSlash/thisIsIgnored
                        // "/" is inserted before because IE takes it of from pathname
                        let currentFolder = ("/" + parser.pathname).match(/.*\//)[0];
                        parser.href = newProtocolAndHost + currentFolder + url;
                    }
                }

                // copies all the properties to this object
                let properties = ['host', 'hostname', 'hash', 'href', 'port', 'protocol', 'search'];
                for (let i = 0, n = properties.length; i < n; i++) {
                    this[properties[i]] = parser[properties[i]];
                }

                // pathname is special because IE takes the "/" of the starting of pathname
                this.pathname = (parser.pathname.charAt(0) !== "/" ? "/" : "") + parser.pathname;

                // requestUri
                this.requestUri = this.pathname;
                this.requestFullUri = this.pathname + this.search;

                return this;
            },

            getParameter(name) {
                name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
                let results = regex.exec(location.search);
                return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
            },

            salesonId() {

            },
            getCircuitBreaker(axios, option) {

                if (typeof CircuitBreaker !== undefined && typeof axios !== undefined) {

                    if (typeof option === undefined || option == null) {
                        option = {
                            timeout: 3000,
                            errorThresholdPercentage: 50,
                            resetTimeout: 30000,
                        };
                    }

                    return new CircuitBreaker(axios,option);
                }

                return;
            }
        };

        $s.validator = {
            patterns: {
                number: /^[\-|0-9]+$/,
                number_negative: /^(0|[-]?[1-9][0-9]*)+$/,
                number_comma: /^[0-9\,]+$/,
                number_only: /^[0-9]+$/,
                minlength: /^[0-9]+$/,
                length: /^[0-9]+$/,
                min: /^[0-9]+$/,
                max: /^[0-9]+$/,
                korean: /^[가-힝]+$/,
                phone: /^0\d{2}[-]{0,1}\d{3,4}[-]{0,1}\d{4}$/,
                tel: /^\d{0,3}[-]{0,1}\d{3,4}[-]{0,1}\d{4}$/,
                last_phone: /^\d{3,4}[-]{0,1}\d{4}$/,
                date: /^\d{1,4}\d((0?\d)|(1[012]))\d([012]?\d|30|31)$/,
                email: /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,3}$/,
                first_email: /^([0-9a-zA-Z_\.-]+)$/,
                last_email: /^([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,3}$/,
                emailAt : /^@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,3}$/,
                id: /^([a-z]{1})([0-9a-z_@\.\-]{5,29})$/,
                password: /(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?]).{8,20}$/,
                emoji: /^[^\uD83C-\uDBFF\uDC00-\uDFFF]+$/
            },
            messages: {
                number: '숫자로만 입력해 주세요.',
                number_negative: '숫자로만 입력해 주세요.',
                number_comma: '숫자로만 입력해 주세요.',
                number_only: '숫자로만 입력해 주세요.',
                korean: '한글로만 입력해 주세요.',
                phone: '정확히 입력해 주세요.',
                tel: '정확히 입력해 주세요.',
                last_phone: '7~8자리의 숫자만 입력해 주세요.',
                date: '날짜 형식을 YYYYMMDD 형태로 정확히 입력해 주세요.',
                email: '이메일 주소를 정확히 입력해 주십시오.',
                first_email: '이메일 처음 부분에 한글을 입력할 수 없습니다.',
                last_email: '이메일 마지막 부분에 한글을 입력할 수 없습니다.',
                id: '아이디는 영문으로 시작하고, 영문(소문자), 숫자, 특수문자("@","-","_",".") 조합으로 6~30글자로 입력해 주십시오.',
                password: '비밀번호는 영문/숫자/특수문자를 혼합하여 8자 이상 20자 이하로 입력하세요.',
                password_confirm: '비밀번호가 일치하지 않습니다.',
                emoji: '에는 이모티콘을 추가할 수 없습니다.'
            }
        };

        $s.ev = {
            const: {
                EVENT_VIEW_UID : '_FRONTEND_EVENT_VIEW_UID',
                EVENT_VIEW_QUERY_STRING : '_FRONTEND_EVENT_VIEW_QUERY_STRING'
            },
            init: function() {

                let uid = $s.ev.getUid();

                if (typeof uid == 'undefined' || uid == '') {

                    let paramUid = $s.core.getParameter('uid');

                    if (typeof paramUid != 'undefined' && paramUid != '') {
                        set($s.ev.const.EVENT_VIEW_UID, paramUid);

                        let queryString = $s.ev.getQueryString();

                        if (typeof queryString == 'undefined' || queryString == '' ) {
                            let qs = location.search.replace('?','');
                            set($s.ev.const.EVENT_VIEW_QUERY_STRING, qs);
                        }
                    }
                }

                function set(cname, cvalue) {
                    let time = 30 * 60 * 1000,
                        d = new Date();

                    d.setTime(d.getTime() + time);

                    let expires = "expires="+ d.toUTCString();

                    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
                }
            },
            getUid: function() {
                return $s.getCookie($s.ev.const.EVENT_VIEW_UID);
            },
            getQueryString: function() {
                return $s.getCookie($s.ev.const.EVENT_VIEW_QUERY_STRING);
            },
            log : {
                getParamMap : function() {

                    return make($s.ev.getQueryString());

                    function make(qs) {
                        let map = [];

                        if (typeof qs != 'undefined' && qs != null) {
                            let params = qs.split('&');

                            for (let i=0; i<params.length; i++) {

                                let param = params[i],
                                    array = param.split('=');

                                if (typeof array != 'undefined' && array != null) {
                                    if (array.length == 2) {
                                        map[array[0]]= array[1];
                                    }else if (array.length == 1) {
                                        map[array[0]]= '';
                                    }
                                }
                            }
                        }

                        return map;
                    }
                },
                getParamValue : function(map, key) {
                    let value = map[key];
                    return typeof value == 'undefined' || value == null ? '' : value;
                },
                getLog : function(id, items) {
                    let paramMap = $s.ev.log.getParamMap();

                    let log = {
                        eventCode : $s.ev.log.getParamValue(paramMap, 'ec'),
                        uid : $s.ev.getUid(),
                        sourceUserId : $s.ev.log.getParamValue(paramMap, 'source_user_id'),
                        utmSource : $s.ev.log.getParamValue(paramMap, 'utm_source'),
                        utmMedium : $s.ev.log.getParamValue(paramMap, 'utm_medium'),
                        utmCampaign : $s.ev.log.getParamValue(paramMap, 'utm_campaign'),
                        utmItem : $s.ev.log.getParamValue(paramMap, 'utm_item'),
                        utmContent : $s.ev.log.getParamValue(paramMap, 'utm_content')
                    };

                    if (typeof id != 'undefined' && id != null) {
                        log['id'] = id;
                    }

                    if (typeof items != 'undefined' && items != null && Array.isArray(items)) {
                        log['items'] = items;
                    }

                    return log;
                },
                item : function(itemUserCode) {

                    let params = $s.ev.log.getLog(itemUserCode);

                    $s.api.eventlogItem(params, function () {
                    }, function (error) {
                        $s.error(error);
                    });
                },
                order : function(orderCode, itemUserCodes) {

                    let params = $s.ev.log.getLog(orderCode, itemUserCodes);

                    $s.api.eventlogOrder(params, function () {
                    }, function (error) {
                        $s.error(error);
                    });

                },
                featured : function(itemUserCodes) {

                    let params = $s.ev.log.getLog('', itemUserCodes);

                    $s.api.eventlogFeatued(params, function () {
                    }, function (error) {
                        $s.error(error);
                    });
                },
                joinUser : function(userId) {

                    console.log('joinUser', userId);

                    let params = $s.ev.log.getLog(userId);

                    $s.api.eventlogJoinUser(params, function () {
                    }, function (error) {
                        $s.error(error);
                    });

                }
            }
        }

        $s.ga = {
            const: {
                CHECKOUT_INIT_STEP:1,
                CHECKOUT_INPUT_USER_STEP:2,
                CHECKOUT_INPUT_PAYMENT_STEP:3,
                CHECKOUT_CONFIRM_ORDER_STEP:4,
                CHECKOUT_PURCHASE_STEP:5,
            },
            init: function() {

                let head = document.head;

                $s.api.googleAnalyticsCommonTrackingScript(function (response) {

                    try {
                        let commonTrackingScript = response.script;

                        if (typeof commonTrackingScript != 'undefined' && commonTrackingScript != null) {

                            let element = document.createElement('script');
                            element.src = commonTrackingScript.src;
                            head.appendChild(element);

                            let element2 = document.createElement('script');
                            element2.insertAdjacentText('beforeend',commonTrackingScript.run);
                            head.appendChild(element2);

                        }

                    } catch (e) {
                        $s.error(e);
                    }

                }, function (error) {
                    $s.error(error);
                });
            },
            purchase: function(orderCode, orderSequence) {
                try {

                    let params = $s.ga.initParams();
                    params['orderCode'] = orderCode;
                    params['orderSequence'] = orderSequence;

                    $s.api.googleAnalyticsPurchase(params, function() {
                    }, function(error) {
                        $s.error(error);
                    });
                } catch (e) {
                    $s.error(e);
                }

            },
            addToCart: function(cartArrayRequiredItems) {

                try {
                    let params = $s.ga.initParams();
                    params['cartArrayRequiredItems'] = cartArrayRequiredItems;

                    $s.api.googleAnalyticsAddToCart(params, function() {
                    }, function(error) {
                        $s.error(error);
                    });
                } catch (e) {
                    $s.error(e);
                }
            },
            removeFromCart: function(items) {

                try {
                    if (typeof items == 'undefined' || items == null) {
                        return false;
                    }

                    let params = $s.ga.initParams(items);

                    $s.api.googleAnalyticsRemoveFromCart(params, function () {
                    }, function (error) {
                        $s.error(error);
                    });
                } catch (e) {
                    $s.error(e);
                }
            },
            changeFromCartQuantity: function(items, addQuantityFlag) {

                try {
                    if (typeof items == 'undefined' || items == null) {
                        return false;
                    }

                    if (typeof addQuantityFlag == 'undefined' || addQuantityFlag == null) {
                        return false;
                    }

                    let params = $s.ga.initParams(items);
                    params['addQuantityFlag'] = addQuantityFlag;

                    $s.api.googleAnalyticsChangeFromCartQuantity(params, function () {
                    }, function (error) {
                        $s.error(error);
                    });
                } catch (e) {
                    $s.error(e);
                }
            },
            detail: function(itemUserCode) {

                try {
                    if (typeof itemUserCode == 'undefined' || itemUserCode == null) {
                        return false;
                    }

                    let params = $s.ga.initParams();
                    params['itemUserCode'] = itemUserCode;

                    $s.api.googleAnalyticsDetail(params, function () {
                    }, function (error) {
                        $s.error(error);
                    });
                } catch (e) {
                    $s.error(e);
                }
            },
            checkout: function(step) {

                try {

                    if (step == $s.ga.const.CHECKOUT_INIT_STEP) {
                        let params = $s.ga.initParams();

                        $s.api.googleAnalyticsCheckout(params, function () {
                        }, function (error) {
                            $s.error(error);
                        });
                    } else {

                        if (typeof gtag == 'function') {
                            gtag('event', 'checkout_progress', {
                                "checkout_step": step,
                            });
                        }

                    }


                } catch (e) {
                    $s.error(e);
                }
            },
            initParams: function(items) {

                let params = {
                    cid : $s.ga.getCid(),
                    page : $s.requestContext.requestUri,
                }

                if (typeof items != 'undefined' && items != null) {
                    params['products'] = items;
                }

                return params

            },
            getCid: function() {

                /*
				GA1.1.1019322984.1593591448
				[0] 쿠키포멧
				[1] 도메인 구성요소
				[2] 임의의 고유 ID
				[3] 타임스탬프
				*/

                try {
                    let _ga = $s.getCookie('_ga');

                    if (typeof _ga != 'undefined' && _ga != '') {
                        let array = _ga.split('.'),
                            length = 4;

                        if (typeof array != 'undefined' && array != null && array.length == length) {
                            return array[2]+'.'+array[3];
                        }
                    }

                } catch (e) {
                    $s.error(e);
                }

                return '';
            },
            select: function(items) {

                try {

                    if (typeof gtag == 'function' && typeof items != 'undefined' && items != null) {
                        gtag("event",  "select_content", {
                            "content_type": "product", "items" : items
                        });
                    }
                } catch (e) {
                    $s.error(e);
                }

            },
            impression: function(items) {

                try {

                    if (typeof gtag == 'function' && typeof items != 'undefined' && items != null) {
                        gtag("event",  "view_item_list", {"items" : items});
                    }
                } catch (e) {
                    $s.error(e);
                }
            },
            getImpressionsItem(id, name, listName, brand, category, listPosition, price) {

                let item = null;

                if (isValid(id) ||isValid(name) ) {

                    item = {};

                    if (isValid(id)) {
                        item['id'] = id;
                    }

                    if (isValid(name)) {
                        item['name'] = name;
                    }

                    if (isValid(listName)) {
                        item['list_name'] = listName;
                    }

                    if (isValid(brand)) {
                        item['brand'] = brand;
                    }

                    if (isValid(category)) {
                        item['category'] = category;
                    }

                    if (listPosition == 0 || listPosition > 0) {
                        item['list_position'] = listPosition;
                    }

                    price = price+'';

                    if (isValid(price)) {
                        item['price'] = price;
                    }
                }

                return item;

                function isValid(value) {
                    return typeof value != 'undefined' && value != null && value != ''
                }
            }
        }

    }
}