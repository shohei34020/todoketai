!function(s) {
    var t = {};
    function e(n) {
        if (t[n]) return t[n].exports;
        var i = t[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        s[n].call(i.exports, i, i.exports, e);
        i.loaded = !0;
        return i.exports;
    }
    e.m = s;
    e.c = t;
    e.p = "";
    e(0);
}([ function(s, t, e) {
    e(1);
    e(2)();
    e(3)();
    e(4)();
}, function(s, t) {
    s.exports = jQuery;
}, function(s, t) {
    var e = function() {
        $(".sw-donate-signup label").click(function() {
            if ($('input[name="save"]:eq(0)').prop('checked')) $(".p-donate-signup").slideDown(); else $(".p-donate-signup").slideUp();
        });
        $(".o-sw-donate-signup label").click(function() {
            if ($('input[name="organization_save"]:eq(0)').prop('checked')) $(".o-p-donate-signup").slideDown(); else $(".o-p-donate-signup").slideUp();
        });
    };
    s.exports = e;
}, function(s, t) {
    var e = function() {
        $('.m-tab-radios input[type="radio"]').change(function() {
			d = $('input[type="radio"][name="application_payment_type"]:checked').val();
            var s = $(this).data("tgt");
            $(this).closest(".m-tab-limit").children(".m-tab-tgt").removeClass("is-show");
            $($(s), $(this).closest(".m-tab-limit")).addClass("is-show");
			//------------------------------------------------------------------//(#1795)竊�
			console.log('s : ' + s);
			if (s.match(/^#donor/)) {//縲径pplication_payment_type縲阪�蝣ｴ蜷医�縺ｿ螳溯｡�
				$('[id$="_signup"]').removeClass("is-show");
				$($(s+'_signup')).addClass("is-show");
			}
			//------------------------------------------------------------------//(#1795)竊�
			//驫陦後�蝣ｴ蜷医≠繧上○縺ｦ豢ｻ蜍戊ｳ�≡繧帝國縺�
			var step = $('body').data('step');
			if (((step == 1)||(step == 2))&&(campaign_cd == 13)) {//if ((step == 1)&&(campaign_cd == 13)) {
				if (d == 3) {
					$('#m-awasete').removeClass("is-show");
					$('input[type="radio"][name="application_amount_radio"]').prop('checked', false);
					$('input[type="text"][name="application_amount_text"]').val('');
				} else {
					$('#m-awasete').addClass("is-show");
				}
			}
			//------------------------------------------------------------------
        });
    };
    s.exports = e;
}, function(s, t) {
    var e = function() {
        $(".sw-eg-show").click(function() {
            var s = $(this).data("tgt");
            $(".sw-eg-wrap").addClass("is-show");
            $(s).addClass("is-show");
            $(this).closest(".is-show").removeClass("is-show");
        });
        $(".p-shien__eg__u").click(function(s) {
            s.stopPropagation();
        });
        $(".sw-eg-wrap").click(function() {
            $(".p-donate-input__amount .is-show").removeClass("is-show");
        });
        $('.m-donate input[name="shien_select"]').click(function() {
            $(this).parents(".is-show").removeClass("is-show");
            var s = "#" + $(this).closest(".p-shien__eg__u").attr("id");
            $('.m-donate.m-sm input[data-tgt="' + s + '"]').prop("checked", !0);
        });
        $('.m-donate.m-sm input[name="shien_select__sm"]').click(function() {
            var s = $(this).data("tgt");
            $(s + ' input[name="shien_select"]').prop("checked", !0);
        });
        $('.sw-eg-wrap input[name="shien_select"], .m-donate.m-sm input[name="shien_select__sm"]').change(function() {
            $("#selectKeizoku").focus();
        });
        $("#hokanoKingaku").blur(function() {
            $("#selectKeizoku").focus();
        });
        $(".sm-mdl-close").click(function() {
            $(".p-donate-input__amount .is-show").removeClass("is-show");
        });
    };
    s.exports = e;
} ]);
$(document).ready(function() {
	var ua = navigator.userAgent;
	//--------------------------------------------------------------------------
	//縲梧擲譌･譛ｬ螟ｧ髴�⊃鄒ｩ謠ｴ驥代阪↓縺ｦ繝舌Μ繝��繧ｷ繝ｧ繝ｳ繝√ぉ繝�け縺ｧ謌ｻ縺｣縺滄圀縲�
	//縲碁橿陦梧険霎ｼ縲阪�蝣ｴ蜷医↓縲瑚ｿｽ蜉�蟇�ｻ倥阪′陦ｨ遉ｺ縺輔ｌ縺ｦ縺励∪縺��繧帝亟縺�
	var step = $('body').data('step');
	var comp = $('body').data('comp');
	if (((step == 1)||(step == 2))&&(campaign_cd == 13)) {
		if ($('input[type="radio"][name="application_payment_type"]:checked').val() == 3) {
			$('#m-awasete').removeClass("is-show");
			$('input[type="radio"][name="application_amount_radio"]').prop('checked', false);
			$('input[type="text"][name="application_amount_text"]').val('');
		} else {
			$('#m-awasete').addClass("is-show");
		}
	}
	//--------------------------------------------------------------------------
	var flag_donation_application = false;
	// 縲梧綾繧九阪′謚ｼ縺輔ｌ縺溘ｉ
	$('#donation_return').on('click', function() {
		//莠悟ｺｦ謚ｼ縺励ｒ謚第ｭ｢
		if (!flag_donation_application) {
			flag_donation_application = true;
		} else {
			return false;
		}
		$(this).parents('form.app_form').attr('action', '/');//'/donate/index'窶ｻ縺薙％縺ｧ繧ｯ繧ｨ繝ｪ繧ｹ繝医Μ繝ｳ繧ｰ縺ｫ'jcb'繧剃ｻ倥￠繧具ｼ�
		$(this).parents('form.app_form').submit();
	});
	//----------------------------------------------------------------------------------------------
	// 縲後％縺ｮ蜀�ｮｹ縺ｧ逕ｳ縺苓ｾｼ繧縲阪′謚ｼ縺輔ｌ縺溘ｉ
	$('#donation_application').on('click', function() {
		//莠悟ｺｦ謚ｼ縺励ｒ謚第ｭ｢
		if (flag_donation_application) {
			return false;
		}
		flag_donation_application = true;
	});
	//----------------------------------------------------------------------------------------------
	// 縲悟�蜉帛�螳ｹ繧堤｢ｺ隱阪☆繧九阪′謚ｼ縺輔ｌ縺溘ｉ
	var flag_donation_confirmation = false;
    $('#donation_confirmation').on('click', function() {
		//莠悟ｺｦ謚ｼ縺励ｒ謚第ｭ｢
		if (!flag_donation_confirmation) {
			flag_donation_confirmation = true;
		} else {
			return false;
		}
		//------------------------------------------------------------------------------------------
		var apRd = $('input[type="radio"][name="application_amount_radio"]:checked').val();
		var apTx = $('input[type="text"][name="application_amount_text"]').val();
		var apEx = $('input[type="text"][name="application_amount_ex"]').val();
		switch(donate_type) {
			case 1://莨夊ｲｻ
			case 2://蟇�ｻ倬≡�育┌謖�ｮ夲ｼ�
			case 3://蟇�ｻ倬≡�亥嵜蜀�ｽｿ騾疲欠螳夲ｼ�
				if ((typeof apRd === 'undefined') && (apTx === '')) {
					alert("蟇�ｻ倬≡鬘阪′驕ｸ謚槭＆繧後※縺�↑縺�°縲∝�蜉帙＆繧後※縺�∪縺帙ｓ縲�\n繝壹�繧ｸ譛荳企Κ繧偵＃遒ｺ隱阪￥縺�縺輔＞縲�");
					flag_donation_confirmation = false;
					return false;
				}
				break;
			case 4://豬ｷ螟匁舞謠ｴ驥�
			case 5://鄒ｩ謠ｴ驥�
			default:
				if (apEx==='') {
					alert("蟇�ｻ倬≡鬘阪′蜈･蜉帙＆繧後※縺�∪縺帙ｓ縲�\n繝壹�繧ｸ譛荳企Κ繧偵＃遒ｺ隱阪￥縺�縺輔＞縲�");
					flag_donation_confirmation = false;
					return false;
				}
				break;
		}
		//------------------------------------------------------------------------------------------
		apRd = (typeof apRd !== 'undefined') ? Number(apRd) : 0;
		apTx = ((typeof apTx !== 'undefined')&&(apTx != '')) ? Number(apTx) : 0;
		apEx = ((typeof apEx !== 'undefined')&&(apEx != '')) ? Number(apEx) : 0;
		//------------------------------------------------------------------------------------------
		var grecaptchaTokenNG = false;
		var recaptchaResponse = $('input#recaptchaResponse');
		function submitFunc()
		{
			grWait = setInterval(
				function() {
					console.log('recaptchaResponse.val : '+recaptchaResponse.val());
					console.log('grecaptchaTokenNG : '+grecaptchaTokenNG);
					if (recaptchaResponse.val() != '' || grecaptchaTokenNG == true) {
						clearInterval(grWait);
						document.form.submit();
					}
				},
				100
			);
		}
		grecaptcha.ready(function () {
			grecaptcha.execute(recaptcha_site_key, { action: 'donateConfirm' }).then(
				function(token) {
					console.log('grecaptcha.execut OK : '+token);
					recaptchaResponse.val(token);
				},
				function(reason) {
					console.log('grecaptcha.execut NG : '+reason);
					recaptchaResponse.val(null);
					grecaptchaTokenNG = true;
				}
			);
		});
		//----------------------------------------------------------------------
        var application_payment_type = $("input[name=application_payment_type]:checked").val();
        console.log('application_payment_type : ' + application_payment_type);
		switch(Number(application_payment_type)) {
			case 14://繧｢繝槭だ繝ｳ繝壹う�井ｸ蝗橸ｼ�
			case 17://繧｢繝槭だ繝ｳ繝壹う�域ｯ取怦��
			case 18://繧｢繝槭だ繝ｳ繝壹う�域ｯ主ｹｴ��
				//----------------------------------------------------------------------------------
				var continue_type	= $('input[type="radio"][name="continue_type"]:checked').val();
				var donator_type	= $('input[type="radio"][name="donator_type"]:checked').val();
				var mypage_save		= (Number(donator_type)===1) ? $('input[type="radio"][name="save"]:checked').val() : $('input[type="radio"][name="organization_save"]:checked').val();
				console.log('continue_type = ' + continue_type);
				console.log('mypage_save = ' + mypage_save);
				if ((Number(continue_type)===1||Number(continue_type)===2) && (Number(mypage_save)===2)) {
					alert("縲檎ｶ咏ｶ壽婿豕輔阪〒縲梧ｯ取怦縲阪∪縺溘�縲梧ｯ主ｹｴ縲阪ｒ縺秘∈謚槭�蝣ｴ蜷医�縲―n縲後�繧､繝壹�繧ｸ逋ｻ骭ｲ縲阪〒縲檎匳骭ｲ縺吶ｋ縲阪′蠢��医↓縺ｪ繧翫∪縺吶�");
					flag_donation_confirmation = false;
					return false;
				}
				//----------------------------------------------------------------------------------
				submitFunc();
				break;
			case 4://繧ｯ繝ｬ繧ｸ繝�ヨ�井ｸ蝗橸ｼ�
			case 7://繧ｯ繝ｬ繧ｸ繝�ヨ�域ｯ取怦��
			case 8://繧ｯ繝ｬ繧ｸ繝�ヨ�域ｯ主ｹｴ��
				//----------------------------------------------------------------------------------
				var continue_type	= $('input[type="radio"][name="continue_type"]:checked').val();
				var donator_type	= $('input[type="radio"][name="donator_type"]:checked').val();
				var mypage_save		= (Number(donator_type)===1) ? $('input[type="radio"][name="save"]:checked').val() : $('input[type="radio"][name="organization_save"]:checked').val();
				console.log('continue_type = ' + continue_type);
				console.log('mypage_save = ' + mypage_save);
				if ((Number(continue_type)===1||Number(continue_type)===2) && (Number(mypage_save)===2)) {
					alert("縲檎ｶ咏ｶ壽婿豕輔阪〒縲梧ｯ取怦縲阪∪縺溘�縲梧ｯ主ｹｴ縲阪ｒ縺秘∈謚槭�蝣ｴ蜷医�縲―n縲後�繧､繝壹�繧ｸ逋ｻ骭ｲ縲阪〒縲檎匳骭ｲ縺吶ｋ縲阪′蠢��医↓縺ｪ繧翫∪縺吶�");
					flag_donation_confirmation = false;
					return false;
				}
				//----------------------------------------------------------------------------------
				var card_error = [];
				//----------------------------------------------------------------------------------
				//繧ｫ繝ｼ繝臥分蜿ｷ
				var cardNumber	= check_cardNumber($('#creditNumber' + application_payment_type).val());
				if (!cardNumber) {
					card_error.push("繧ｫ繝ｼ繝臥分蜿ｷ縺ｮ蜈･蜉帙↓隱､繧翫′縺ゅｊ縺ｾ縺吶�");
				}
				//譛牙柑譛滄剞�域怦��
				var month		= $('#Month' + application_payment_type).val();
				if (!month) {
					card_error.push("譛牙柑譛滄剞�域怦�峨′驕ｸ謚槭＆繧後※縺�∪縺帙ｓ縲�");
				}
				//譛牙柑譛滄剞�亥ｹｴ��
				var year		= $('#Year'  + application_payment_type).val();
				if (!year) {
					card_error.push("譛牙柑譛滄剞�亥ｹｴ�峨′驕ｸ謚槭＆繧後※縺�∪縺帙ｓ縲�");
				}
				//繧ｻ繧ｭ繝･繝ｪ繝�ぅ繧ｳ繝ｼ繝�
				var csc			= check_csc($('#csc' + application_payment_type).val());
				if (!csc) {
					card_error.push("繧ｻ繧ｭ繝･繝ｪ繝�ぅ繧ｳ繝ｼ繝峨�蜈･蜉帙↓隱､繧翫′縺ゅｊ縺ｾ縺吶�");
				}
				//繧ｫ繝ｼ繝牙錐鄒ｩ
				var cardHolder	= check_cardHolder($('#cardHolder' + application_payment_type).val());
				if (!cardHolder) {
					card_error.push("繧ｫ繝ｼ繝牙錐鄒ｩ縺ｮ蜈･蜉帙↓隱､繧翫′縺ゅｊ縺ｾ縺吶�");
				}
				//----------------------------------------------------------------------------------
				if (card_error.length > 0) {
					alert(card_error.join("\n"));
					flag_donation_confirmation = false;
					return false;
				}
				//----------------------------------------------------------------------------------
				var credit = $('#credit').val();
				var card = $('#creditNumber' + application_payment_type).val();
				card = card.slice(0,2);
				if (Number(credit)===1) { // JCB髯仙ｮ�
					if (Number(card)!==35) {
						alert('JCB縺ｮ繧ｫ繝ｼ繝峨ｒ蜈･蜉帙＠縺ｦ縺上□縺輔＞縲�');
						flag_donation_confirmation = false;
						return false;
					}
				}
				//----------------------------------------------------------------------------------
				//豎ｺ貂磯≡鬘�
				var amount = apRd + apTx + apEx;
				$('[name="jrc-settlement-amount"]').val(amount);
				//窶ｻ豌丞錐縲∽ｽ乗園縲√Γ繧｢繝峨�崕隧ｱ逡ｪ蜿ｷ
				var name	= null;
				var kana	= null;
				var pref	= null;
				var addr1	= null;
				var addr2	= null;
				var email	= null;
				var tel		= null;
				if ($('[name="donator_type"]:checked').val() == 1) {
					name	= $('[name="last_personal_name"]').val() + $('[name="first_personal_name"]').val();
					kana	= $('[name="last_personal_name_kana"]').val() + $('[name="first_personal_name_kana"]').val();
					pref	= ($('[name="pref_cd"] option:selected').val()!=='') ? $('[name="pref_cd"] option:selected').text() : '';
					addr1	= $('[name="address1"]').val();
					addr2	= $('[name="address2"]').val();
					email	= $('[name="email"]').val();
					tel		= $('[name="tel"]').val();
				} else {
					name	= $('[name="organization_name"]').val();
					kana	= $('[name="organization_name_kana"]').val();
					pref	= ($('[name="organization_pref_cd"] option:selected').val()!=='') ? $('[name="organization_pref_cd"] option:selected').text() : '';
					addr1	= $('[name="organization_address1"]').val();
					addr2	= $('[name="organization_address2"]').val();
					email	= $('[name="organization_email"]').val();
					tel		= $('[name="organization_tel"]').val();
				}
				//豕ｨ譁��ｰ丞錐�壹ヵ繝ｫ�域ｼ｢蟄暦ｼ�
				$('[name="as-username"]').val(name);
				//豕ｨ譁��ｰ丞錐�壹ヵ繝ｫ�医ヵ繝ｪ繧ｬ繝奇ｼ�
				$('[name="as-username-kana"]').val(kana);
				//豕ｨ譁��ｽ乗園
				$('[name="as-useraddress"]').val(pref + addr1 + addr2);
				//繝｡繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ
				$('[name="jrc-email-address"]').val(email);
				//髮ｻ隧ｱ逡ｪ蜿ｷ
				$('[name="jrc-telephone-number"]').val(tel);
				//繧ｫ繝ｼ繝臥分蜿ｷ
				$('[name="jrc-card-number"]').val($('[name="creditNumber4"]').val());
				//繧ｫ繝ｼ繝画怏蜉ｹ譛滄剞
				var year = $('[name="Year4"] option:selected').val();
				var month = $('[name="Month4"] option:selected').val();
				$('[name="jrc-card-expiry"]').val(''+month+year);
				//繧ｫ繝ｼ繝牙錐鄒ｩ莠ｺ
				$('[name="jrc-card-holder"]').val($('[name="cardHolder4"]').val());
				//----------------------------------------------------------------------------------
				var _payment_type = 4;//荳蝗�
				switch(Number(continue_type)) {
					case 1:	//豈取怦
						_payment_type = 7;
						break;
					case 2:	//豈主ｹｴ
						_payment_type = 8;
						break;
					default:
						break;
				}
				//----------------------------------------------------------------------------------
				var nums = $('[name="jrc-card-number"]').val().match(/^(\d{6})(\d+)(\d{3})$/);
				var checkScore_params = {
					"ip_address"				: $('input#client-ip').val(),
					"check_type"				: 2,
					"check_result"				: null,
					"card_number"				: nums[1] + '*'.repeat(nums[2].length) + nums[3],
					"email"						: $('[name="jrc-email-address"]').val(),
					"name"						: $('[name="as-username"]').val(),
					"kana"						: $('[name="as-username-kana"]').val(),
					"application_payment_type"	: _payment_type,
					"amount"					: $('[name="jrc-settlement-amount"]').val(),
					"address"					: $('[name="as-useraddress"]').val(),
					"tel"						: $('[name="jrc-telephone-number"]').val(),
					"expiry"					: $('[name="jrc-card-expiry"]').val(),
					"holder"					: $('[name="jrc-card-holder"]').val(),
					"remarks"					: null
				};
				//----------------------------------------------------------------------------------
				var token_api_url = 'https://api.veritrans.co.jp/4gtoken';
				var chkmsg = {
					'LRT'  : 'ASUKA隱崎ｨｼ謌仙粥�壹Μ繧ｹ繧ｯ�井ｽ趣ｼ�',
					'BIAT' : 'ASUKA隱崎ｨｼ謌仙粥�壹Μ繧ｹ繧ｯ�井ｸｭ��',
					'MM'   : 'ASUKA繧ｷ繧ｹ繝�Β荳榊ｙ�哂SUKA繧ｵ繝ｼ繝舌�繝｡繝ｳ繝�リ繝ｳ繧ｹor蜃ｦ逅�≦蟒ｶor髫懷ｮｳ遲�',
					'NMV'  : 'ASUKA繧ｷ繧ｹ繝�Β荳榊ｙ�啾erosmith繧､繝ｳ繧ｹ繧ｿ繝ｳ繧ｹ縺御ｸ榊ｮ悟�',
					'SGE'  : 'ASUKA繧ｷ繧ｹ繝�Β荳榊ｙ�喞heckScore蠢懃ｭ皮┌縺熔r繧ｯ繝ｩ繧､繧｢繝ｳ繝亥�繧ｿ繧､繝�繧｢繧ｦ繝�',
				//	'UB'   : '繧ｵ繝昴�繝亥ｯｾ雎｡螟悶ヶ繝ｩ繧ｦ繧ｶ',
				};
				//----------------------------------------------------------------------------------
				//(#1947)ASUKA荳榊�蜷亥ｯｾ蠢懶ｼ�'aerosmith'縺梧悴螳夂ｾｩ縺ｮ蝣ｴ蜷医↓蜃ｦ逅�′荳ｭ譁ｭ縺吶ｋ縺薙→蝗樣∩縺輔○繧�
				if ((typeof aerosmith !== 'undefined')&&(aerosmith != null)) {
					console.log('aerosmith.checkScore');
					aerosmith.checkScore(
						(reason) => {//ASUKA隱崎ｨｼ謌仙粥
							//checkScore縺茎uccess縺ｮ蝣ｴ蜷�
							//reason繧ｳ繝ｼ繝峨→豎ｺ貂亥�逅�ｮ溯｡後�蜿ｯ蜷ｦ�亥ｮ溯｡鯉ｼ壺雷or笆ｳ��
							//	LRT	�壺雷�壹Μ繧ｹ繧ｯ菴�
							//	BIAT�壺雷�壹Μ繧ｹ繧ｯ荳ｭ縲縺九▽縲隱崎ｨｼ謌仙粥
							//	MM	�壺無�哂SUKA繧ｵ繝ｼ繝舌�繝｡繝ｳ繝�リ繝ｳ繧ｹ縲∝�逅�≦蟒ｶ縲�囿螳ｳ遲�
							//	NMV	�壺無�啾erosmith繧､繝ｳ繧ｹ繧ｿ繝ｳ繧ｹ縺御ｸ榊ｮ悟�
							//	SGE	�壺無�喞heckScore蠢懃ｭ皮┌縺励√け繝ｩ繧､繧｢繝ｳ繝亥�繧ｿ繧､繝�繧｢繧ｦ繝�
							//	UB	�堙暦ｼ壹し繝昴�繝亥ｯｾ雎｡螟悶ヶ繝ｩ繧ｦ繧ｶ�亥次蜑�匱逕溘＠縺ｪ縺�ｼ�
							checkScore_params['check_result'] = reason;
							if ($.inArray(reason, ['LRT', 'BIAT', 'MM', 'NMV', 'SGE'])<0) {
								flag_donation_confirmation = false;
								console.log('ASUKA隱崎ｨｼ螟ｱ謨�');
								Ajax.exec('/api/illegalAccess', 'json', checkScore_params);
								location.href = '/donate/auth_fail';
								return false;
							}
							console.log(chkmsg[reason]);//console.log('ASUKA隱崎ｨｼ謌仙粥');
							Ajax.exec('/api/illegalAccess', 'json', checkScore_params);
							//VeriTrans4G MDK 繝医�繧ｯ繝ｳ蜿門ｾ暦ｽ曦orm螳溯｡�
							var xhr = new XMLHttpRequest();
							xhr.open('POST', token_api_url, true);
							xhr.setRequestHeader('Accept', 'application/json');
							xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
							xhr.addEventListener('loadend', function() {
								if (xhr.status === 0) {
									var errmsg = "繧ｵ繝ｼ繝舌�縺ｨ縺ｮ謗･邯壹↓荳榊�蜷医′逋ｺ逕溘＠縺溷庄閭ｽ諤ｧ縺後≠繧翫∪縺吶�\n縺頑焔謨ｰ繧偵♀縺九￠縺怜､ｧ螟臥筏縺苓ｨｳ縺斐＊縺�∪縺帙ｓ縺後―n騾壻ｿ｡迥ｶ豕∫ｭ峨ｒ縺皮｢ｺ隱阪�荳翫∝�蠎ｦ縺ｮ縺泌�蜉帙ｒ縺企｡倥＞縺�◆縺励∪縺吶�";
									alert(errmsg);
									flag_donation_confirmation = false;
									return false;
								}
								//------------------------------------------------------------------
								var response = JSON.parse(xhr.response);
								//------------------------------------------------------------------
								if (xhr.status !== 200) {
									var errmsg = response.code+"\n"+response.message;
									alert(errmsg);
									flag_donation_confirmation = false;
									return false;
								}
								//------------------------------------------------------------------
								if ((typeof response.token === 'undefined')||(response.token === null)) {
									var errmsg = "繧ｵ繝ｼ繝舌�縺ｨ縺ｮ謗･邯壹↓荳榊�蜷医′逋ｺ逕溘＠縺溷庄閭ｽ諤ｧ縺後≠繧翫∪縺吶�\n縺頑焔謨ｰ繧偵♀縺九￠縺怜､ｧ螟臥筏縺苓ｨｳ縺斐＊縺�∪縺帙ｓ縺後―n騾壻ｿ｡迥ｶ豕∫ｭ峨ｒ縺皮｢ｺ隱阪�荳翫∝�蠎ｦ縺ｮ縺泌�蜉帙ｒ縺企｡倥＞縺�◆縺励∪縺吶�";
									alert(errmsg);
									flag_donation_confirmation = false;
									return false;
								}
								//------------------------------------------------------------------
								var mdk_token = response.token;
								console.log('mdk_token : ' + mdk_token);
								//------------------------------------------------------------------
								$('#token').val(mdk_token);
								$('#creditNumber'	+ application_payment_type).val('');
								$('#Month'			+ application_payment_type).val('');
								$('#Year'			+ application_payment_type).val('');
								$('#csc'			+ application_payment_type).val('');
								$('#cardHolder'		+ application_payment_type).val('');
								//------------------------------------------------------------------
								$('[name="as-username"]').val('');          //豕ｨ譁��ｰ丞錐�壹ヵ繝ｫ�域ｼ｢蟄暦ｼ�
								$('[name="as-username-kana"]').val('');     //豕ｨ譁��ｰ丞錐�壹ヵ繝ｫ�医ヵ繝ｪ繧ｬ繝奇ｼ�
								$('[name="as-useraddress"]').val('');       //豕ｨ譁��ｽ乗園
								$('[name="jrc-email-address"]').val('');    //繝｡繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ
								$('[name="jrc-telephone-number"]').val(''); //髮ｻ隧ｱ逡ｪ蜿ｷ
								$('[name="jrc-card-number"]').val('');      //繧ｫ繝ｼ繝臥分蜿ｷ
								$('[name="jrc-card-expiry"]').val('');      //繧ｫ繝ｼ繝画怏蜉ｹ譛滄剞
								$('[name="jrc-card-holder"]').val('');      //繧ｫ繝ｼ繝牙錐鄒ｩ莠ｺ
								$('[name="jrc-settlement-amount"]').val('');//豎ｺ貂磯≡鬘�
								//------------------------------------------------------------------
								submitFunc();
							});
							var mdk_data = {
								card_number     : $('#creditNumber' + application_payment_type).val(),//繧ｫ繝ｼ繝臥分蜿ｷ
								card_expire     : $('#Month'        + application_payment_type).val() + '/' + $('#Year' + application_payment_type).val(),//繧ｫ繝ｼ繝画怏蜉ｹ譛滄剞
								security_code   : $('#csc'          + application_payment_type).val(),//繧ｻ繧ｭ繝･繝ｪ繝�ぅ繧ｳ繝ｼ繝�
								cardholder_name : $('#cardHolder'   + application_payment_type).val(),//繧ｫ繝ｼ繝我ｿ晄怏閠�錐
								token_api_key   : $('.veritrans4g').data('mdk'),//繝医�繧ｯ繝ｳAPI繧ｭ繝ｼ
								lang            : "ja"//蠢懃ｭ秘崕譁��"message"縺ｮ險隱�
							};
							console.log(mdk_data);
							xhr.send(JSON.stringify(mdk_data));//窶ｻ繝医�繧ｯ繝ｳ蜿門ｾ怜ｮ溯｡�
						},
						(reason) => {//ASUKA隱崎ｨｼ螟ｱ謨�
							flag_donation_confirmation = false;
							console.log('ASUKA隱崎ｨｼ螟ｱ謨�');
							checkScore_params['check_result'] = reason;
							Ajax.exec('/api/illegalAccess','json', checkScore_params);
							location.href = '/donate/auth_fail';
							return false;
						}
					);
				} else {
					console.log('ASUKA隱崎ｨｼ譛ｪ驕�');
					//VeriTrans4G MDK 繝医�繧ｯ繝ｳ蜿門ｾ暦ｽ曦orm螳溯｡�
					var xhr = new XMLHttpRequest();
					xhr.open('POST', token_api_url, true);
					xhr.setRequestHeader('Accept', 'application/json');
					xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8');
					xhr.addEventListener('loadend', function() {
						if (xhr.status === 0) {
							var errmsg = "繧ｵ繝ｼ繝舌�縺ｨ縺ｮ謗･邯壹↓荳榊�蜷医′逋ｺ逕溘＠縺溷庄閭ｽ諤ｧ縺後≠繧翫∪縺吶�\n縺頑焔謨ｰ繧偵♀縺九￠縺怜､ｧ螟臥筏縺苓ｨｳ縺斐＊縺�∪縺帙ｓ縺後―n騾壻ｿ｡迥ｶ豕∫ｭ峨ｒ縺皮｢ｺ隱阪�荳翫∝�蠎ｦ縺ｮ縺泌�蜉帙ｒ縺企｡倥＞縺�◆縺励∪縺吶�";
							alert(errmsg);
							flag_donation_confirmation = false;
							return false;
						}
						//--------------------------------------------------------------------------
						var response = JSON.parse(xhr.response);
						//--------------------------------------------------------------------------
						if (xhr.status !== 200) {
							var errmsg = response.code+"\n"+response.message;
							alert(errmsg);
							flag_donation_confirmation = false;
							return false;
						}
						//--------------------------------------------------------------------------
						if ((typeof response.token === 'undefined')||(response.token === null)) {
							var errmsg = "繧ｵ繝ｼ繝舌�縺ｨ縺ｮ謗･邯壹↓荳榊�蜷医′逋ｺ逕溘＠縺溷庄閭ｽ諤ｧ縺後≠繧翫∪縺吶�\n縺頑焔謨ｰ繧偵♀縺九￠縺怜､ｧ螟臥筏縺苓ｨｳ縺斐＊縺�∪縺帙ｓ縺後―n騾壻ｿ｡迥ｶ豕∫ｭ峨ｒ縺皮｢ｺ隱阪�荳翫∝�蠎ｦ縺ｮ縺泌�蜉帙ｒ縺企｡倥＞縺�◆縺励∪縺吶�";
							alert(errmsg);
							flag_donation_confirmation = false;
							return false;
						}
						//--------------------------------------------------------------------------
						var mdk_token = response.token;
						console.log('mdk_token : ' + mdk_token);
						//--------------------------------------------------------------------------
						$('#token').val(mdk_token);
						$('#creditNumber'	+ application_payment_type).val('');
						$('#Month'			+ application_payment_type).val('');
						$('#Year'			+ application_payment_type).val('');
						$('#csc'			+ application_payment_type).val('');
						$('#cardHolder'		+ application_payment_type).val('');
						//--------------------------------------------------------------------------
						$('[name="as-username"]').val('');          //豕ｨ譁��ｰ丞錐�壹ヵ繝ｫ�域ｼ｢蟄暦ｼ�
						$('[name="as-username-kana"]').val('');     //豕ｨ譁��ｰ丞錐�壹ヵ繝ｫ�医ヵ繝ｪ繧ｬ繝奇ｼ�
						$('[name="as-useraddress"]').val('');       //豕ｨ譁��ｽ乗園
						$('[name="jrc-email-address"]').val('');    //繝｡繝ｼ繝ｫ繧｢繝峨Ξ繧ｹ
						$('[name="jrc-telephone-number"]').val(''); //髮ｻ隧ｱ逡ｪ蜿ｷ
						$('[name="jrc-card-number"]').val('');      //繧ｫ繝ｼ繝臥分蜿ｷ
						$('[name="jrc-card-expiry"]').val('');      //繧ｫ繝ｼ繝画怏蜉ｹ譛滄剞
						$('[name="jrc-card-holder"]').val('');      //繧ｫ繝ｼ繝牙錐鄒ｩ莠ｺ
						$('[name="jrc-settlement-amount"]').val('');//豎ｺ貂磯≡鬘�
						//--------------------------------------------------------------------------
						submitFunc();
					});
					var mdk_data = {
						card_number     : $('#creditNumber' + application_payment_type).val(),//繧ｫ繝ｼ繝臥分蜿ｷ
						card_expire     : $('#Month'        + application_payment_type).val() + '/' + $('#Year' + application_payment_type).val(),//繧ｫ繝ｼ繝画怏蜉ｹ譛滄剞
						security_code   : $('#csc'          + application_payment_type).val(),//繧ｻ繧ｭ繝･繝ｪ繝�ぅ繧ｳ繝ｼ繝�
						cardholder_name : $('#cardHolder'   + application_payment_type).val(),//繧ｫ繝ｼ繝我ｿ晄怏閠�錐
						token_api_key   : $('.veritrans4g').data('mdk'),//繝医�繧ｯ繝ｳAPI繧ｭ繝ｼ
						lang            : "ja"//蠢懃ｭ秘崕譁��"message"縺ｮ險隱�
					};
					console.log(mdk_data);
					xhr.send(JSON.stringify(mdk_data));//窶ｻ繝医�繧ｯ繝ｳ蜿門ｾ怜ｮ溯｡�
				}
				//----------------------------------------------------------------------------------//(#1947)ASUKA荳榊�蜷亥ｯｾ蠢懶ｼ壻ｿｮ豁｣蠕娯�縺薙％縺九ｉ竊�
//窶ｻASUKA譌ｧ莉墓ｧ�
//				if ((typeof aerosmith !== 'undefined')&&(aerosmith != null)) {
//					console.log('aerosmith.checkScore');
//					aerosmith.checkScore(
//						function() {//ASUKA隱崎ｨｼ謌仙粥
//							console.log('ASUKA隱崎ｨｼ謌仙粥');
//							aerosmith_params["check_result"] = "OK";
//							console.log(aerosmith_params);
//							Ajax.exec('/api/illegalAccess', 'json', aerosmith_params);
//							var mdk_token = submitToken(cardNumber, month, year, csc, cardHolder, token_api_key, token_api_url);
//							if (!mdk_token) {
//								flag_donation_confirmation = false;
//								return false;
//							}
//							$('#token').val(mdk_token);
//							$('#creditNumber'	+ application_payment_type).val('');
//							$('#Month'			+ application_payment_type).val('');
//							$('#Year'			+ application_payment_type).val('');
//							$('#csc'			+ application_payment_type).val('');
//							$('#cardHolder'		+ application_payment_type).val('');
//							$('#creditUpper6').val($('#creditNumber' + application_payment_type).val().substr(0,6));//荳肴ｭ｣繧｢繧ｯ繧ｻ繧ｹ蟇ｾ蠢懶ｼ壹け繝ｬ繧ｫ逡ｪ蜿ｷ鬆ｭ6譯�
//							submitFunc();
//						},
//						function(reason) {//ASUKA隱崎ｨｼ螟ｱ謨�
//							flag_donation_confirmation = false;
//							console.log('ASUKA隱崎ｨｼ螟ｱ謨�');
//							console.log('reason : '+reason);
//							aerosmith_params["check_result"] = reason;
//							console.log(aerosmith_params);
//							Ajax.exec('/api/illegalAccess','json',aerosmith_params);
//							location.href = '/donate/auth_fail';
//							return false;
//						}
//					);
//				} else {
//					var mdk_token = submitToken(cardNumber, month, year, csc, cardHolder, token_api_key, token_api_url);
//					if (!mdk_token) {
//						flag_donation_confirmation = false;
//						return false;
//					}
//					$('#token').val(mdk_token);
//					$('#creditNumber'	+ application_payment_type).val('');
//					$('#Month'			+ application_payment_type).val('');
//					$('#Year'			+ application_payment_type).val('');
//					$('#csc'			+ application_payment_type).val('');
//					$('#cardHolder'		+ application_payment_type).val('');
//					$('#creditUpper6').val($('#creditNumber' + application_payment_type).val().substr(0,6));//荳肴ｭ｣繧｢繧ｯ繧ｻ繧ｹ蟇ｾ蠢懶ｼ壹け繝ｬ繧ｫ逡ｪ蜿ｷ鬆ｭ6譯�
//					submitFunc();
//				}
				//----------------------------------------------------------------------------------//(#1947)ASUKA荳榊�蜷亥ｯｾ蠢懶ｼ壻ｿｮ豁｣蠕娯�縺薙％縺ｾ縺ｧ竊�
				break;
			case 5://繧ｳ繝ｳ繝薙ル
				var store = $('input[type="radio"][name="store"]:checked').val();
				if (!store) {
					alert('繧ｳ繝ｳ繝薙ル驕ｸ謚槭〒縲∽ｽ輔ｌ繧る∈謚槭＆繧後※縺�∪縺帙ｓ縲�');
					flag_donation_confirmation = false;
					return false;
				}
				submitFunc();
				break;
			case 6://繝壹う繧ｸ繝ｼ
				submitFunc();
				break;
			case 3://驫陦梧険霎ｼ
				submitFunc();
				break;
			default:
				console.log('unknown application_payment_type : ' + application_payment_type);
				flag_donation_confirmation = false;
				return false;
		}
    });
	//----------------------------------------------------------------------------------------------
	function check_cardNumber(num)
	{
		var regexp = /^(\d{14,19})$/;
		var chk = regexp.test(num);
		return (chk) ? num : false;
	}
	function check_csc(num)
	{
		var regexp = /^(\d{3,4})$/;
		var chk = regexp.test(num);
		return (chk) ? num : false;
	}
	function check_cardHolder(str)
	{
		var regexp = /^([A-Z]+)( )([A-Z]+)$/;
		var chk = regexp.test(str);
		return (chk) ? str : false;
	}
	//----------------------------------------------------------------------------------------------
	//縺頑険霎ｼ縺ｿ莠亥ｮ壽律�磯橿陦梧険霎ｼ��
    var dateToday = new Date();
    $(".c-datePicker-input").datepicker({
        dateFormat: "yy-mm-dd",
        showOn: "button",
        buttonText: "",
        beforeShow: function(input, inst) {
            inst.dpDiv.css({marginTop: -65 + 'px', marginLeft: 0 + 'px'});
        },
        minDate: dateToday
    });
	//----------------------------------------------------------------------------------------------
	//縲後ヱ繧ｹ繝ｯ繝ｼ繝峨ｒ縺雁ｿ倥ｌ縺ｮ譁ｹ縺ｯ 縺薙■繧峨�
	var my_login_id		= $('input[type="text"][name="login_id"]');
	var remind_login_id	= $('input[type="text"][name="remind_login_id"]');
	var remind_zip_code	= $('input[type="text"][name="remind_zip_code"]');
	var login_id_error	= $('[name="my_login_id_error"]');
	var zip_code_error	= $('[name="my_zip_code_error"]');
	var popup_request	= $('div[name="password_reset_mail_request"]');
	var popup_result	= $('div[name="password_reset_mail_result"]');
	var ajax_error		= $('div[name="password_remind_error"]');
	$('.open-popup-link').magnificPopup({
		type:'inline'
	});
	//----------------------------------------------------------------------------------------------
	$('#password_remind_guide').on('click', function() {
		remind_login_id.val('');
		remind_zip_code.val('');
		login_id_error.text('');
		zip_code_error.text('');
		ajax_error.text('');
		if (my_login_id.val().length > 0) {
			console.log('my_login_id:'+my_login_id.val());
			remind_login_id.val(my_login_id.val());
		}
		popup_request.removeClass('plggd-popup-hide');
		popup_result.addClass('plggd-popup-hide');
	});
	//----------------------------------------------------------------------------------------------
	remind_login_id.on('click', function() {login_id_error.text('');});
	remind_zip_code.on('click', function() {zip_code_error.text('');});
	//----------------------------------------------------------------------------------------------
	$('#email_submit').on('click', function() {
		login_id_error.text('');
		zip_code_error.text('');
		ajax_error.text('');
		var _LoginId = remind_login_id.val().replace(/^\s+|\s+$/g, '');
		var _ZipCode = remind_zip_code.val().replace(/^\s+|\s+$/g, '').replace(/(\s|=|�掟_|-|繝ｼ|�鋼窶怖窶�)/g, '');
		console.log('login_id:' + _LoginId);
		console.log('zip_code:' + _ZipCode);
		if ((_LoginId === '')||(_ZipCode === '')) {
			if (_LoginId === '') login_id_error.text('繝ｭ繧ｰ繧､繝ｳID縺ｫ菴輔ｂ蜈･蜉帙＆繧後※縺�∪縺帙ｓ');
			if (_ZipCode === '') zip_code_error.text('驛ｵ萓ｿ逡ｪ蜿ｷ縺ｫ縺ｪ縺ｫ繧ょ�蜉帙＆繧後※縺�∪縺帙ｓ');
			return false;
		}
		var param = {
			login_id: _LoginId,
			zip_code: _ZipCode
		};
		console.log('login_id:' + param.login_id);
		console.log('zip_code:' + param.zip_code);
		//----------------------------------------------------------------------
		Ajax.exec('/api/memberAjax/index', 'json', param, function(json) {
			var results = json.results;
			var errmsg = json.errmsg;
			console.log('result:' + results);
			console.log('errmsg:' + errmsg);
			if (results === 1) {
				popup_request.addClass('plggd-popup-hide');
				popup_result.removeClass('plggd-popup-hide');
			} else {
				$('[name="password_remind_error"]').text(errmsg)
			}
		});
	});
	//--------------------------------------------------------------------------
	//(#1795)莨壼藤蜉�蜈･諢乗晉｢ｺ隱榊ｯｾ蠢懈隼菫ｮ
	if ((step == 1)||(step == 2)) {//蟇�ｻ倡筏霎ｼ逕ｻ髱｢縺ｧ螳溯｡後☆繧九∫｢ｺ隱咲判髱｢縺ｧ縺ｯ螳溯｡後＠縺ｪ縺�
		console.log('step : ' + step);
		console.log('comp : ' + comp);
		//----------------------------------------------------------------------
		var jrc_entry_flag = $('input[name="jrc_entry_flag"]');//譛ｪ遒ｺ隱�(2),蜉�蜈･縺吶ｋ(1),蜉�蜈･縺励↑縺�(0)
		var jrc_entry_need = $('input[name="jrc_entry_need"]');//莨壼藤蜉�蜈･諢乗晉｢ｺ隱阪ヵ繝ｩ繧ｰ縺ｮ隕∝凄
//		//----------------------------------------------------------------------
//		//(#2609)蜿鈴�倩ｨｼ髮ｻ蟄仙喧
//		var donator_type = $('input[type="radio"][name="donator_type"]');
//		var receipt_flag = $('input[name="receipt_flag"]');
//		var continueType = $('input[name="continue_type"]');
		//----------------------------------------------------------------------
		var mypage_save = $('input[name$="save"]');
		var jrc_entry_agreement = $('input[name="jrc_entry_agreement"]');
		//----------------------------------------------------------------------
		function checkJrcEntryFlag()
		{
			var entry_agreement_show = false;
			console.log('top : jrc_entry_flag : ' + jrc_entry_flag.val());
			console.log('top : jrc_entry_need : ' + jrc_entry_need.val());
			switch(parseInt(jrc_entry_flag.val())) {
				case 0://蜉�蜈･縺励↑縺�
				case 1://蜉�蜈･縺吶ｋ
					$('#tr_jrc_entry').hide();
					jrc_entry_need.val(0);
					console.log('entry_agreement_show : ' + entry_agreement_show);
					console.log('end : jrc_entry_flag : ' + jrc_entry_flag.val());
					console.log('end : jrc_entry_need : ' + jrc_entry_need.val());
					return false;//遒ｺ隱肴ｸ医�蝣ｴ蜷医�蜃ｦ逅�┌縺励〒邨ゆｺ�
				default://譛ｪ遒ｺ隱�
					break;
			}
			//------------------------------------------------------------------
			var member_id					= $('input[name="member_id"]').val();//繝ｭ繧ｰ繧､繝ｳ譎ゅ�蟇�ｻ倩�ID
			var user_login					= (member_id) ? true : false;
			//------------------------------------------------------------------
			var donator_type				= ((step==1)||(comp=='')) ? $('input[name="donator_type"]:checked').val()				: $('input[name="donator_type"]').val();			//蛟倶ｺｺ(1)縲∵ｳ穂ｺｺ(2)
			var application_payment_type	= ((step==1)||(comp=='')) ? $('input[name="application_payment_type"]:checked').val()	: $('input[name="application_payment_type"]').val();//繧ｯ繝ｬ繧ｸ繝�ヨ繧ｫ繝ｼ繝�(4,7,8)
			var application_amount_radio	= ((step==1)||(comp=='')) ? $('input[name="application_amount_radio"]:checked').val()	: $('input[name="application_amount_radio"]').val();//蜈･蜉帙�譛臥┌
			//------------------------------------------------------------------
			var application_amount_text		= $('input[name="application_amount_text"]').val();			//蜈･蜉帙�譛臥┌
			var donator_type_check			= false;
			var payment_type_check			= false;
			var application_amount_check	= false;
			//------------------------------------------------------------------
			var save_clicked = null;
			switch(parseInt(donator_type)) {
				case 1://蛟倶ｺｺ
					donator_type_check = true;
					save_clicked = $('input[name="save"]:checked').val();
					break;
				case 2://豕穂ｺｺ
					donator_type_check = true;
					save_clicked = $('input[name="organization_save"]:checked').val();
					break;
				default:
					break;
			}
			switch (parseInt(application_payment_type)) {
				case 4://繧ｯ繝ｬ繧ｸ繝�ラ(莉雁屓縺ｮ縺ｿ)
				case 7://繧ｯ繝ｬ繧ｸ繝�ラ(豈取怦)
				case 8://繧ｯ繝ｬ繧ｸ繝�ラ(豈主ｹｴ)
				case 14://Amazon Pay(莉雁屓縺ｮ縺ｿ)
				case 17://Amazon Pay(豈取怦)
				case 18://Amazon Pay(豈主ｹｴ)
					payment_type_check = true;
					break;
				default:
					break;
			}
			if ((typeof application_amount_radio !== 'undefined') || ((typeof application_amount_text !== 'undefined')&&(application_amount_text != ''))) {//(#1928)
				application_amount_check = true;
			}
			//------------------------------------------------------------------
			console.log('member_id : ' + member_id);
			console.log('user_login : ' + user_login);
			console.log('donator_type : ' + donator_type);
			console.log('application_payment_type : ' + application_payment_type);
			console.log('application_amount_radio : ' + application_amount_radio);
			console.log('application_amount_text : ' + application_amount_text);
			console.log('donator_type_check : ' + donator_type_check);
			console.log('payment_type_check : ' + payment_type_check);
			console.log('application_amount_check : ' + application_amount_check);
			//------------------------------------------------------------------
			entry_agreement_show = donator_type_check && payment_type_check && application_amount_check;
			console.log('entry_agreement_show : ' + entry_agreement_show);
			//------------------------------------------------------------------
			if (entry_agreement_show) {
				if ((save_clicked == 2) && (jrc_entry_agreement.is(':checked'))) {
					jrc_entry_agreement.prop('checked', false);
				}
				$('#tr_jrc_entry').show();
				jrc_entry_need.val(1);
			} else {
				$('#tr_jrc_entry').hide();
				jrc_entry_need.val(0);
			}
			//------------------------------------------------------------------
			console.log('end : jrc_entry_flag : ' + jrc_entry_flag.val());
			console.log('end : jrc_entry_need : ' + jrc_entry_need.val());
			//------------------------------------------------------------------
		}
		//----------------------------------------------------------------------
		//(#2609)蜿鈴�倩ｨｼ髮ｻ蟄仙喧
		var donatorType		= $('input[type="radio"][name="donator_type"]');
		var receiptFlag		= $('input[type="radio"][name="receipt_flag"]');
		var continueType	= $('input[type="radio"][name="continue_type"]');
		donatorType.on('change', function() {
			var type_changed = $(this).val();//繧ｯ繝ｪ繝�け縺励◆繝ｩ繧ｸ繧ｪ繝懊ち繝ｳ縺ｮ蛟､
			if (type_changed == 1) {
				//蛟倶ｺｺ繧帝∈謚�
				$('input[type="radio"][name="save"][value="1"]').prop('checked', true)
				$(".p-donate-signup").slideDown();
			} else {
				//豕穂ｺｺ縺ｾ縺溘�蝗｣菴薙ｒ驕ｸ謚�
				$('input[type="radio"][name="organization_save"][value="1"]').prop('checked', true);
				$(".o-p-donate-signup").slideDown();
			}
		});
		receiptFlag.on('click', function() {
			var flag_clicked = $(this).val();//繧ｯ繝ｪ繝�け縺励◆繝ｩ繧ｸ繧ｪ繝懊ち繝ｳ縺ｮ蛟､
			if (flag_clicked == 2) {//縲後ム繧ｦ繝ｳ繝ｭ繝ｼ繝峨�
				if ($('input[name="amount_layout"]').val() == 1) {//縲御ｼ夊ｲｻ縲阪ヱ繧ｿ繝ｼ繝ｳ縺ｮ蝣ｴ蜷�
					if ($('input[name="continue_type"]:checked').val() != 3) {
						alert('縲檎ｶ咏ｶ壽婿豕輔阪〒縲梧ｯ取怦縲阪∪縺溘�縲梧ｯ主ｹｴ縲阪ｒ驕ｸ謚槭＠縺ｦ縺�ｋ蝣ｴ蜷医�縲―n縲悟女鬆倩ｨｼ縺ｮ逋ｺ陦後阪〒縲後ム繧ｦ繝ｳ繝ｭ繝ｼ繝峨阪�驕ｸ謚槭〒縺阪∪縺帙ｓ縲�');
						return false;
					}
				}
				var donator_type	= $('input[type="radio"][name="donator_type"]:checked').val();
				var mypage_save		= (Number(donator_type)===1) ? $('input[type="radio"][name="save"]:checked').val() : $('input[type="radio"][name="organization_save"]:checked').val();
				if (mypage_save == 2) {//繝槭う繝壹�繧ｸ逋ｻ骭ｲ縲檎匳骭ｲ縺励↑縺��
					alert('縲後�繧､繝壹�繧ｸ逋ｻ骭ｲ縲阪〒縲檎匳骭ｲ縺励↑縺�阪ｒ驕ｸ謚槭＠縺ｦ縺�ｋ蝣ｴ蜷医�縲―n縲悟女鬆倩ｨｼ縺ｮ逋ｺ陦後阪〒縲後ム繧ｦ繝ｳ繝ｭ繝ｼ繝峨阪�驕ｸ謚槭〒縺阪∪縺帙ｓ縲�');
					return false;
				}
			}
		});
		continueType.on('click', function() {
			var type_clicked = $(this).val();//繧ｯ繝ｪ繝�け縺励◆繝ｩ繧ｸ繧ｪ繝懊ち繝ｳ縺ｮ蛟､
			if (type_clicked != 3) {
				if ($('input[name="receipt_flag"]:checked').val() == 2) {
					alert('縲悟女鬆倩ｨｼ縺ｮ逋ｺ陦後阪〒縲後ム繧ｦ繝ｳ繝ｭ繝ｼ繝峨阪ｒ驕ｸ謚槭＠縺ｦ縺�ｋ蝣ｴ蜷医�縲―n縲檎ｶ咏ｶ壽婿豕輔阪〒縲梧ｯ取怦縲榊所縺ｳ縲梧ｯ主ｹｴ縲阪�驕ｸ謚槭〒縺阪∪縺帙ｓ縲�');
					return false;
				}
			}
		});
		//----------------------------------------------------------------------
		checkJrcEntryFlag();
		$('input[name="donator_type"], input[name="application_payment_type"], input[name="application_amount_radio"], input[name="application_amount_text"]').on('change', function() {
			checkJrcEntryFlag();
		});
		$('input[name="application_amount_text"]').on('blur', function() {
			checkJrcEntryFlag();
		});
		//----------------------------------------------------------------------
		mypage_save.on('click', function() {
			console.log('top : jrc_entry_flag : ' + jrc_entry_flag.val());
			console.log('top : jrc_entry_need : ' + jrc_entry_need.val());
			var flag = false;
			var save_clicked = $(this).val();//繧ｯ繝ｪ繝�け縺励◆繝ｩ繧ｸ繧ｪ繝懊ち繝ｳ縺ｮ蛟､
			var member_id					= $('input[name="member_id"]').val();//繝ｭ繧ｰ繧､繝ｳ譎ゅ�蟇�ｻ倩�ID
			var user_login					= (member_id) ? true : false;
			var donator_type				= $('input[name="donator_type"]:checked').val();			//蛟倶ｺｺ(1)縲∵ｳ穂ｺｺ(2)
			var application_payment_type	= $('input[name="application_payment_type"]:checked').val();//繧ｯ繝ｬ繧ｸ繝�ヨ繧ｫ繝ｼ繝�(4,7,8)
			var application_amount_radio	= $('input[name="application_amount_radio"]:checked').val();//蜈･蜉帙�譛臥┌
			var application_amount_text		= $('input[name="application_amount_text"]').val();			//蜈･蜉帙�譛臥┌
			var donator_type_check			= false;
			var payment_type_check			= false;
			var application_amount_check	= false;
			switch(parseInt(donator_type)) {
				case 1://蛟倶ｺｺ
					donator_type_check = true;
					break;
				case 2://豕穂ｺｺ
					donator_type_check = true;
					break;
				default:
					break;
			}
			switch (parseInt(application_payment_type)) {
				case 4://繧ｯ繝ｬ繧ｸ繝�ラ(莉雁屓縺ｮ縺ｿ)
				case 7://繧ｯ繝ｬ繧ｸ繝�ラ(豈取怦)
				case 8://繧ｯ繝ｬ繧ｸ繝�ラ(豈主ｹｴ)
				case 14://Amazon Pay(莉雁屓縺ｮ縺ｿ)
				case 17://Amazon Pay(豈取怦)
				case 18://Amazon Pay(豈主ｹｴ)
					payment_type_check = true;
					break;
				default:
					break;
			}
			if ((typeof application_amount_radio !== 'undefined') || ((typeof application_amount_text !== 'undefined')&&(application_amount_text != ''))) {//(#1928)
				application_amount_check = true;
			}
			//------------------------------------------------------------------
			console.log('radio : ' + save_clicked);
			console.log('checkbox : ' + jrc_entry_agreement.is(':checked'));
			console.log('member_id : ' + member_id);
			console.log('user_login : ' + user_login);
			console.log('donator_type : ' + donator_type);
			console.log('application_payment_type : ' + application_payment_type);
			console.log('application_amount_radio : ' + application_amount_radio);
			console.log('application_amount_text : ' + application_amount_text);
			console.log('donator_type_check : ' + donator_type_check);
			console.log('payment_type_check : ' + payment_type_check);
			console.log('application_amount_check : ' + application_amount_check);
			//------------------------------------------------------------------
			flag = donator_type_check && payment_type_check && application_amount_check;
			console.log('flag : ' + flag);
			console.log('end : jrc_entry_flag : ' + jrc_entry_flag.val());
			console.log('end : jrc_entry_need : ' + jrc_entry_need.val());
			//------------------------------------------------------------------
			if (flag) {
				if ((save_clicked == 2) && (jrc_entry_agreement.is(':checked'))) {
					alert('縲御ｼ壼藤蜉�蜈･諢乗晉｢ｺ隱阪阪〒縲悟刈蜈･縺吶ｋ縲阪ｒ驕ｸ謚槭＠縺ｦ縺�ｋ蝣ｴ蜷医�縲―n縲後�繧､繝壹�繧ｸ逋ｻ骭ｲ縲阪〒縲檎匳骭ｲ縺励↑縺�阪�驕ｸ謚槭〒縺阪∪縺帙ｓ縲�');
					return false;
				}
			}
			if (save_clicked == 2) {//(#2609)蜿鈴�倩ｨｼ髮ｻ蟄仙喧
				if ($('input[name="receipt_flag"]:checked').val() == 2) {
					alert('縲悟女鬆倩ｨｼ縺ｮ逋ｺ陦後阪〒縲後ム繧ｦ繝ｳ繝ｭ繝ｼ繝峨阪ｒ驕ｸ謚槭＠縺ｦ縺�ｋ蝣ｴ蜷医�縲―n縲後�繧､繝壹�繧ｸ逋ｻ骭ｲ縲阪〒縲檎匳骭ｲ縺励↑縺�阪�驕ｸ謚槭〒縺阪∪縺帙ｓ縲�');
					return false;
				}
			}
		});
		//----------------------------------------------------------------------
		jrc_entry_agreement.on('click', function() {
			console.log('top : jrc_entry_flag : ' + jrc_entry_flag.val());
			console.log('top : jrc_entry_need : ' + jrc_entry_need.val());
			var flag = false;
			var checkbox_checked = $(this).prop('checked');//繝√ぉ繝�け繝懊ャ繧ｯ繧ｹ縺ｮ迥ｶ諷�(螟画峩蜑阪�迥ｶ諷�)
			var member_id					= $('input[name="member_id"]').val();//繝ｭ繧ｰ繧､繝ｳ譎ゅ�蟇�ｻ倩�ID
			var user_login					= (member_id) ? true : false;
			var donator_type				= $('input[name="donator_type"]:checked').val();			//蛟倶ｺｺ(1)縲∵ｳ穂ｺｺ(2)
			var application_payment_type	= $('input[name="application_payment_type"]:checked').val();//繧ｯ繝ｬ繧ｸ繝�ヨ繧ｫ繝ｼ繝�(4,7,8)
			var application_amount_radio	= $('input[name="application_amount_radio"]:checked').val();//蜈･蜉帙�譛臥┌
			var application_amount_text		= $('input[name="application_amount_text"]').val();			//蜈･蜉帙�譛臥┌
			var donator_type_check			= false;
			var payment_type_check			= false;
			var application_amount_check	= false;
			var save_clicked = null;
			switch(parseInt(donator_type)) {
				case 1://蛟倶ｺｺ
					donator_type_check = true;
					save_clicked = $('input[type="radio"][name="save"]:checked').val();
					break;
				case 2://豕穂ｺｺ
					donator_type_check = true;
					save_clicked = $('input[type="radio"][name="organization_save"]:checked').val();
					break;
				default:
					break;
			}
			switch (parseInt(application_payment_type)) {
				case 4://繧ｯ繝ｬ繧ｸ繝�ラ(莉雁屓縺ｮ縺ｿ)
				case 7://繧ｯ繝ｬ繧ｸ繝�ラ(豈取怦)
				case 8://繧ｯ繝ｬ繧ｸ繝�ラ(豈主ｹｴ)
				case 14://Amazon Pay(莉雁屓縺ｮ縺ｿ)
				case 17://Amazon Pay(豈取怦)
				case 18://Amazon Pay(豈主ｹｴ)
					payment_type_check = true;
					break;
				default:
					break;
			}
			if ((typeof application_amount_radio !== 'undefined') || ((typeof application_amount_text !== 'undefined')&&(application_amount_text != ''))) {//(#1928)
				application_amount_check = true;
			}
			//------------------------------------------------------------------
			console.log('radio : ' + save_clicked);
			console.log('checkbox : ' + checkbox_checked);
			console.log('member_id : ' + member_id);
			console.log('user_login : ' + user_login);
			console.log('donator_type : ' + donator_type);
			console.log('application_payment_type : ' + application_payment_type);
			console.log('application_amount_radio : ' + application_amount_radio);
			console.log('application_amount_text : ' + application_amount_text);
			console.log('donator_type_check : ' + donator_type_check);
			console.log('payment_type_check : ' + payment_type_check);
			console.log('application_amount_check : ' + application_amount_check);
			//------------------------------------------------------------------
			flag = donator_type_check && payment_type_check && application_amount_check;
			console.log('flag : ' + flag);
			console.log('end : jrc_entry_flag : ' + jrc_entry_flag.val());
			console.log('end : jrc_entry_need : ' + jrc_entry_need.val());
			//------------------------------------------------------------------
			if (flag) {
				if ((save_clicked == 2) && (checkbox_checked)) {
					alert('縲御ｼ壼藤蜉�蜈･諢乗晉｢ｺ隱阪阪〒縲悟刈蜈･縺吶ｋ縲阪�蝣ｴ蜷医�\n縲後�繧､繝壹�繧ｸ逋ｻ骭ｲ縲阪〒縲檎匳骭ｲ縺吶ｋ縲阪′蠢��医↓縺ｪ繧翫∪縺吶�');
					return false;
				}
			}
		});
		$('input[name="application_payment_type"]').on('change', function() {
			set_amount_placeholder();
		});
		function set_amount_placeholder() {
			var application_payment_type = parseInt($('input[name="application_payment_type"]:checked').val());
			var def_application_amount = (application_payment_type == 3) ? 1 : 2000;
			var tmp_application_amount = def_application_amount;
			if (typeof min_application_amount !== 'undefined') {
				if (def_application_amount > min_application_amount) {
					tmp_application_amount = min_application_amount;
				}
			}
			var ph = tmp_application_amount+'�橸ｼ亥濠隗呈焚蟄励�縺ｿ��';
			$('input[name="application_amount_text"]').attr('placeholder', ph);
			$('input[name="application_amount_ex"]').attr('placeholder', ph);
		}
		set_amount_placeholder();
		//------------------------------------------------------------------------------------------
		$(document).on('click', '#AmazonPaySignIn', function() {
			var temp_continue_type            = $('[name="continue_type"]:checked').val();
			var temp_application_amount_radio = $('[name="application_amount_radio"]:checked').val();
			var temp_application_amount_text  = $('[name="application_amount_text"]').val();
			var temp_aux_summary_key          = $('[name="aux_summary_key"]').val();
			var temp_application_amount_ex    = $('[name="application_amount_ex"]').val();
			//--------------------------------------------------------------------------------------
			var amzn_continue_type            = (typeof temp_continue_type !== 'undefined')            ? temp_continue_type : null;
			var amzn_application_amount_radio = (typeof temp_application_amount_radio !== 'undefined') ? temp_application_amount_radio : null;
			var amzn_application_amount_text  = (typeof temp_application_amount_text !== 'undefined')  ? temp_application_amount_text : "";
			var amzn_aux_summary_key          = (typeof temp_aux_summary_key !== 'undefined')          ? temp_aux_summary_key : "";
			var amzn_application_amount_ex    = (typeof temp_application_amount_ex !== 'undefined')    ? temp_application_amount_ex : "";
			//--------------------------------------------------------------------------------------
			document.cookie = 'amzn_continue_type='            + amzn_continue_type + ';';
			document.cookie = 'amzn_application_amount_radio=' + amzn_application_amount_radio + ';';
			document.cookie = 'amzn_application_amount_text='  + amzn_application_amount_text + ';';
			document.cookie = 'amzn_aux_summary_key='          + amzn_aux_summary_key + ';';
			document.cookie = 'amzn_application_amount_ex='    + amzn_application_amount_ex + ';';
			//--------------------------------------------------------------------------------------
			console.log('amzn_continue_type::'            + amzn_continue_type);
			console.log('amzn_application_amount_radio::' + amzn_application_amount_radio);
			console.log('amzn_application_amount_text::'  + amzn_application_amount_text);
			console.log('amzn_aux_summary_key::'          + amzn_aux_summary_key);
			console.log('amzn_application_amount_ex::'    + amzn_application_amount_ex);
		})
		//------------------------------------------------------------------------------------------
		var tmpCookie = document.cookie;
		var arrCookie = tmpCookie.split(';');
		if (Array.isArray(arrCookie) && (arrCookie.length>0)) {
			arrCookie.forEach(val => {
				var item = val.split('=');
				var myKey = item[0].trim();
				var myVal = item[1].trim();
				switch(myKey) {
					case 'amzn_continue_type':
						$('[id="continue-type-' + myVal + '"]').attr('checked', true);
						document.cookie = 'amzn_continue_type='+myVal+'; max-age=0';
						console.log('cookie::' + myKey + '::' + myVal);
						break;
					case 'amzn_application_amount_radio':
						if (myVal) {
							$('[name="application_amount_text"]').val('');
						}
						$('[id="application-amount-radio-' + myVal + '"]').attr('checked', true);
						document.cookie = 'amzn_application_amount_radio='+myVal+'; max-age=0';
						console.log('cookie::' + myKey + '::' + myVal);
						break;
					case 'amzn_application_amount_text':
						if (myVal) {
							$('[name="application_amount_radio"]').attr('checked', false);
						}
						$('[name="application_amount_text"]').val(myVal);
						document.cookie = 'amzn_application_amount_text='+myVal+'; max-age=0';
						console.log('cookie::' + myKey + '::' + myVal);
						break;
					case 'amzn_aux_summary_key':
						$('[name="aux_summary_key"]').val(myVal);
						document.cookie = 'amzn_aux_summary_key='+myVal+'; max-age=0';
						console.log('cookie::' + myKey + '::' + myVal);
						break;
					case 'amzn_application_amount_ex':
						$('[name="application_amount_ex"]').val(myVal);
						document.cookie = 'amzn_application_amount_ex='+myVal+'; max-age=0';
						console.log('cookie::' + myKey + '::' + myVal);
						break;
					default:
						break;
				}
			});
		}
	}
	//----------------------------------------------------------------------------------------------
});