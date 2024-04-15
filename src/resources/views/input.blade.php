<!doctype html>
<html lang="ja">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta http-equiv="Cache-Control" content="no-cache">
  <title>寄付申し込み入力フォーム｜届け隊</title>
  <meta name="description" content="" />
  <meta name="Keywords" content="" />
  <script src="jquery-3.2.1.min.js"></script>
  <link rel="stylesheet" href="app.css" />
</head>
<body data-step="1" data-comp=""> <a id="pagetop" name="pagetop"></a>
  <div class="f-container">
    <header id="header" class="c-header">
      <div class="f-s-lr-pd c-header__w">
        <h1><img src="" alt="届け隊" /></h1>
        <div class="c-header__step">
          <ol>
            <li>寄付内容の入力</li>
            <li>入力内容の確認</li>
            <li>申し込み完了</li>
          </ol>
        </div>
      </div>
    </header>
    <script>
      donate_type = 1;
          campaign_cd = 14;
          min_application_amount = 2000;
    </script>
    <main class="c-main">
      <div class="f-sw">
        <div class="c-basics-container p-donate-input m-case-shikin c-inputs">
          <h1>寄付申し込み入力フォーム</h1>
          <div class="p-donate-input__contents">
            <form method="post" accept-charset="utf-8" class="app_form" name="form" action="/donate/confirm">
              <div style="display:none;"><input type="hidden" name="_method" value="POST" /><input type="hidden" name="_csrfToken" autocomplete="off" value="b9f39addf3ed0a691704647295a4a3fd4f096d86047438a2f76b72c1c63b9904e27d03a8da034cb08d1b03b57283274902e7e0c5296cf137805648e59999ac7f" /></div> 
              <input type="hidden" name="member_id" id="member-id" /><input type="hidden" name="campaign_cd" id="campaign-cd" value="14" /><input type="hidden" name="token" id="token" value="" /><input type="hidden" name="credit" id="credit" value="" />
              <input type="hidden" name="amount_layout" id="amount-layout" value="1" /> <input type="hidden" name="continueDefault" id="continuedefault" value="1" /><input type="hidden" name="mediaCd_Default" id="mediacd-default" />
              <input type="hidden" name="jrcEntryDefault" id="jrcentrydefault" value="1" /><input type="hidden" name="card_brand" id="card-brand" /> <input type="hidden" name="amzn_mypage_msg" id="amzn-mypage-msg" />
              <input type="hidden" name="amzn_signin_msg" id="amzn-signin-msg" /><input type="hidden" name="isAmazonLogined" id="isamazonlogined" /><input type="hidden" name="amazon_login_flag" id="amazon-login-flag" value="0" />
              <input type="hidden" name="amazon_buyer_id" id="amazon-buyer-id" />
              <!--ランディングページCMS化対応-->
              <div class="p-donate-input__case">
                <dl> <dt><span>ご寄付のつかいみち</span></dt>
                  <dd class="has-en">災害支援活動資金（クレジットカード）</dd>
                </dl>
              </div>
              <div class="p-donate-input__amount">
                <div class="p-donate-input__read">
                  <p class="p-donate-input__message"> 
                    <strong>
                      <span>当団体では、災害支援に関する支援金を募集しております。</span>
                      <span>皆様から頂いた支援金は被災者支援に必要な物資や、</span>
                      <span>輸送に必要な経費等に活用させていただきます。</span>
                    </strong> 
                  </p>
                </div>
                <h2>＜あなたのご支援でできることの一例＞</h2>
                <div class="p-shien__eg m-donate m-sm">
                  <div class="p-shien__eg__row">
                  
                    <div class="p-shien__eg__u p-shien__eg__1">
                      <div class="p-shien__eg__gaku">
                        <p class="p-shien__eg__tatoeba m-bgc sw-eg-show" data-tgt="#eg-1">今回被災者支援</p>
                        <p class="p-shien__eg__month"><strong class="m-c">1,000</strong><span class="p-shien__eg__yen">円</span><br> </div>
                      <div class="p-shien__select-btn"> <label class="c-check-button"><input type="radio" name="application_amount_radio" value="1000" id="application-amount-radio-1000" checked="checked" class="jrc-as"><button>選択</button></label> </div>
                    </div>
                    
                    <div class="p-shien__eg__u p-shien__eg__2">
                      <div class="p-shien__eg__gaku">
                        <p class="p-shien__eg__tatoeba m-bgc sw-eg-show" data-tgt="#eg-2">医療品購入</p>
                        <p class="p-shien__eg__month"><strong class="m-c">3,000</strong><span class="p-shien__eg__yen">円</span><br> </div>
                      <div class="p-shien__select-btn"> <label class="c-check-button"><input type="radio" name="application_amount_radio" value="3000" id="application-amount-radio-3000" checked="checked" class="jrc-as"><button>選択</button></label> </div>
                    </div>
                    
                    <div class="p-shien__eg__u p-shien__eg__3">
                      <div class="p-shien__eg__gaku">
                        <p class="p-shien__eg__tatoeba m-bgc sw-eg-show" data-tgt="#eg-3">レスキュー車の購入</p>
                        <p class="p-shien__eg__month"><strong class="m-c">5,000</strong><span class="p-shien__eg__yen">円</span><br> </div>
                      <div class="p-shien__select-btn"> <label class="c-check-button"><input type="radio" name="application_amount_radio" value="5000" id="application-amount-radio-5000" checked="checked" class="jrc-as"><button>選択</button></label> </div>
                    </div>
                    
                  </div>
                </div>
                <div class="p-shien__eg m-donate m-md sw-eg-wrap">
                  <div class="sm-mdl-close"><button>閉じる</button></div>
                  
                  <div class="p-shien__eg__row">
                    <div id="eg-1" class="p-shien__eg__u p-shien__eg__1">
                      <div class="p-shien__eg__gaku">
                        <p class="p-shien__eg__tatoeba m-bgc"> 被災者支援 </p>
                        <p class="p-shien__eg__month"> <strong class="m-c">1,000</strong><span class="p-shien__eg__yen">円</span><br> <span class="p-shien__eg__ga"></span> </p>
                      </div>
                      <div class="p-shien__eg__catch mdf-2l">
<!--                        <p style="text-align: center;"> 避難所で使う毛布を<br> <strong>１</strong>人分備える </p> -->
                      </div>
                      <div class="p-shien__eg__txt">
                        <p>　被災者支援として欠かせない「毛布」の購入う費用に充てさせていただきます。</p>
                      </div>
                      <div class="p-shien__select-btn "> <label class="c-check-button"><input type="radio" name="application_amount_radio" value="1000" id="application-amount-radio-1000" checked="checked" class="jrc-as"><button>選択</button></label>
                        <div class="c-sm-eg-sw c-sm-eg-sw--prev sw-eg-show" data-tgt="#eg-4"></div>
                        <div class="c-sm-eg-sw c-sm-eg-sw--next sw-eg-show" data-tgt="#eg-2"></div>
                        <div class="has-en bottom-center"><small>JPY 1,000</small></div>
                      </div>
                    </div>
                    
                    <div id="eg-2" class="p-shien__eg__u p-shien__eg__2">
                      <div class="p-shien__eg__gaku">
                        <p class="p-shien__eg__tatoeba m-bgc"> 医療品購入 </p>
                        <p class="p-shien__eg__month"> <strong class="m-c">3,000</strong><span class="p-shien__eg__yen">円</span><br> <span class="p-shien__eg__ga"></span> </p>
                      </div>
                      <div class="p-shien__eg__catch mdf-2l">
<!--                        <p style="text-align: center;"> 避難所で使う毛布を<br> <strong>１</strong>人分備える </p> -->
                      </div>
                      <div class="p-shien__eg__txt">
                        <p>　被災者に対する医療備品の購入に充てさせていただきます。</p>
                      </div>
                      <div class="p-shien__select-btn "> <label class="c-check-button"><input type="radio" name="application_amount_radio" value="3000" id="application-amount-radio-3000" checked="checked" class="jrc-as"><button>選択</button></label>
                        <div class="c-sm-eg-sw c-sm-eg-sw--prev sw-eg-show" data-tgt="#eg-4"></div>
                        <div class="c-sm-eg-sw c-sm-eg-sw--next sw-eg-show" data-tgt="#eg-2"></div>
                        <div class="has-en bottom-center"><small>JPY 3,000</small></div>
                      </div>
                    </div>
                    
                    <div id="eg-3" class="p-shien__eg__u p-shien__eg__3">
                      <div class="p-shien__eg__gaku">
                        <p class="p-shien__eg__tatoeba m-bgc"> レスキュー車の購入</p>
                        <p class="p-shien__eg__month"> <strong class="m-c">5,000</strong><span class="p-shien__eg__yen">円</span><br> <span class="p-shien__eg__ga"></span> </p>
                      </div>
                      <div class="p-shien__eg__catch mdf-2l">
<!--                        <p style="text-align: center;"> 避難所で使う毛布を<br> <strong>１</strong>人分備える </p> -->
                      </div>
                      <div class="p-shien__eg__txt">
                        <p>　支援に欠かせない、レスキュー車の購入、メンテナンス費用に充てさせていただきます。</p>
                      </div>
                      <div class="p-shien__select-btn "> <label class="c-check-button"><input type="radio" name="application_amount_radio" value="5000" id="application-amount-radio-5000" checked="checked" class="jrc-as"><button>選択</button></label>
                        <div class="c-sm-eg-sw c-sm-eg-sw--prev sw-eg-show" data-tgt="#eg-4"></div>
                        <div class="c-sm-eg-sw c-sm-eg-sw--next sw-eg-show" data-tgt="#eg-2"></div>
                        <div class="has-en bottom-center"><small>JPY 5,000</small></div>
                      </div>
                    </div>
                    
                    
                  </div>
                                    
                </div>
              </div>
              </script>
              <div class="p-donate-input__basic">
                <table class="p-donate-input__table" id="donate-input-table">
                  <tbody>
                    
                    
                    <!--#####受領証の発行希望#####-->
                    <tr>
                      <th><span>受領証の発行希望</span></th>
                      <td>
                        <ul class="c-check-line c-select-next-input m-tab-radios"> <input type="hidden" name="receipt_flag" value="" />
                          <li><label class="c-check"><input type="radio" name="receipt_flag" value="0" id="receipt-flag-0" checked="checked"><span>希望しない</span></label></li>
                          <li><label class="c-check"><input type="radio" name="receipt_flag" value="1" id="receipt-flag-1"><span>希望する</span></label></li>
                        </ul>
                        <div> 
                          <small>
                            【受領証発行について】<br>
                            <div style="margin-bottom: 8px;">以下の内容について、ご了承いただいたうえでご協力をお願いいたします。</div>
                            <ul>
                            <li style="list-style-type: disc; margin-bottom: 6px;">
                            原則として、ご選択いただいた発行方式（郵送・メール送付）の変更はできません。
                            </li>
                            <li style="list-style-type: disc; margin-bottom: 6px;">
                            １件のご寄付（ご入金）に対して複数の受領証を分割して発行することはできません。 <br>２回以上に分けてのご寄付（ご入金）をお願いします。
                            </li>
                            <li style="list-style-type: disc; margin-bottom: 6px;">
                            都度（一回のみ）のご寄付については、ご入金ごとに受領証を発行いたします。 尚、国内外での大規模な災害・紛争発生時には、いずれの方法でも３～４ヶ月以上お時間をいただくことがございます。
                            </li>
                            </ul>
                            【受領証の日付についてご注意ください】
                            <ul>
                            <li style="list-style-type: disc; margin-bottom: 6px;">
                            ご寄付については、 クレジット会社等を通じた●●●●への着金日でお取り扱いいたしますので、 <br>
                            受領証の日付は決済日（申込日）ではなく、決済から数ヶ月後の日付となります。 
                            <span style="font-weight: 800;">
                            従いまして、12月（及び一部11月）に決済いただくご寄付については、弊社への着金が翌年１月以降になった場合、確定申告も翌年分の対象となります。
                            </span>
                            </li>
                            </ul>
                          </small>
                        </div>
                      </td>
                    </tr>
                    
                    <tr>
                      <th class="m-ico-arr"><span>初めての方・</span><span>情報登録をしていない方</span></th>
                      <td class="m-tab-limit">
                        <p>個人情報・その他情報をご入力ください</p>
                        <p style="font-size: .9em;">「<span class="u-require">*</span>」は必須入力項目です。</p>
                        <ul class="c-check-line c-select-next-input m-tab-radios">
                          <div class="input radio">
                            <li><label class="c-check"><span><input type="radio" name="donator_type" value="1" data-tgt="#donor-1" eng="individual" id="donator-type-1" checked="checked"><span><span class="has-en">個人<small>individual</small></span></span></span></label></li>
                          </div>
                          <div class="input radio">
                            <li><label class="c-check"><span><input type="radio" name="donator_type" value="2" data-tgt="#donor-2" eng="cooperation" id="donator-type-2"><span><span class="has-en">法人<small>cooperation</small></span></span></span></label></li>
                          </div>
                          <div class="input radio">
                            <li><label class="c-check"><span><input type="radio" name="donator_type" value="3" data-tgt="#donor-2" eng="group" id="donator-type-3"><span><span class="has-en">団体<small>group</small></span></span></span></label></li>
                          </div>
                        </ul>
                        <div id="donor-1" class="m-tab-tgt">
                          <dl class="c-input-line"> <dt class="dt-has-en">お名前<small>(漢字)</small><small class="u-require u-require__wrap required__privacy">*</small><div class="ex-txt"><small>Name</small></div></dt>
                            <dd class="m-u2 check-fill-in">
                              <div><input type="text" name="last_personal_name" class="jrc-as" placeholder="姓/Last Name" id="last-personal-name" /></div>
                              <div><input type="text" name="first_personal_name" class="jrc-as" placeholder="名/First Name" id="first-personal-name" /></div>
                            </dd>
                          </dl>
                          <dl class="c-input-line"> <dt class="dt-has-en">お名前<small>(カナ)</small><small class="u-require u-require__wrap required__privacy">*</small><div class="ex-txt"><small>Name</small></div></dt>
                            <dd class="m-u2 check-fill-in">
                              <div><input type="text" name="last_personal_name_kana" class="jrc-as" placeholder="セイ/Last Name" id="last-personal-name-kana" /></div>
                              <div><input type="text" name="first_personal_name_kana" class="jrc-as" placeholder="メイ/First Name" id="first-personal-name-kana" /></div>
                            </dd>
                          </dl>
                          <dl class="c-input-line"> <dt class="dt-has-en">性別<div class="ex-txt"><small>Gender</small></div></dt>
                            <dd class="m-u2">
                              <div class="c-select" style="width: 160px;">
                                <div><select name="sex" id="sex"><option value="0" selected="selected"></option><option value="1">男性=male</option><option value="2">女性=female</option><option value="3">その他=other</option></select></div>
                              </div>
                            </dd>
                          </dl>
                          <dl class="c-input-line"> <dt class="dt-has-en">生年月日<div class="ex-txt"><small>Birthday</small></div></dt>
                            <dd class="m-date c-input-line__flex">
                              <div class="m-date__u" style="width:125px;">
                                <div class="c-select">
                                  <div><select name="year" id="year"><option value="1900">1900</option><option value="1901">1901</option><option value="1902">1902</option><option value="1903">1903</option><option value="1904">1904</option><option value="1905">1905</option><option value="1906">1906</option><option value="1907">1907</option><option value="1908">1908</option><option value="1909">1909</option><option value="1910">1910</option><option value="1911">1911</option><option value="1912">1912</option><option value="1913">1913</option><option value="1914">1914</option><option value="1915">1915</option><option value="1916">1916</option><option value="1917">1917</option><option value="1918">1918</option><option value="1919">1919</option><option value="1920">1920</option><option value="1921">1921</option><option value="1922">1922</option><option value="1923">1923</option><option value="1924">1924</option><option value="1925">1925</option><option value="1926">1926</option><option value="1927">1927</option><option value="1928">1928</option><option value="1929">1929</option><option value="1930">1930</option><option value="1931">1931</option><option value="1932">1932</option><option value="1933">1933</option><option value="1934">1934</option><option value="1935">1935</option><option value="1936">1936</option><option value="1937">1937</option><option value="1938">1938</option><option value="1939">1939</option><option value="1940">1940</option><option value="1941">1941</option><option value="1942">1942</option><option value="1943">1943</option><option value="1944">1944</option><option value="1945">1945</option><option value="1946">1946</option><option value="1947">1947</option><option value="1948">1948</option><option value="1949">1949</option><option value="1950">1950</option><option value="1951">1951</option><option value="1952">1952</option><option value="1953">1953</option><option value="1954">1954</option><option value="1955">1955</option><option value="1956">1956</option><option value="1957">1957</option><option value="1958">1958</option><option value="1959">1959</option><option value="1960">1960</option><option value="1961">1961</option><option value="1962">1962</option><option value="1963">1963</option><option value="1964">1964</option><option value="1965">1965</option><option value="1966">1966</option><option value="1967">1967</option><option value="1968">1968</option><option value="1969">1969</option><option value="0" selected="selected"></option><option value="1970">1970</option><option value="1971">1971</option><option value="1972">1972</option><option value="1973">1973</option><option value="1974">1974</option><option value="1975">1975</option><option value="1976">1976</option><option value="1977">1977</option><option value="1978">1978</option><option value="1979">1979</option><option value="1980">1980</option><option value="1981">1981</option><option value="1982">1982</option><option value="1983">1983</option><option value="1984">1984</option><option value="1985">1985</option><option value="1986">1986</option><option value="1987">1987</option><option value="1988">1988</option><option value="1989">1989</option><option value="1990">1990</option><option value="1991">1991</option><option value="1992">1992</option><option value="1993">1993</option><option value="1994">1994</option><option value="1995">1995</option><option value="1996">1996</option><option value="1997">1997</option><option value="1998">1998</option><option value="1999">1999</option><option value="2000">2000</option><option value="2001">2001</option><option value="2002">2002</option><option value="2003">2003</option><option value="2004">2004</option><option value="2005">2005</option><option value="2006">2006</option><option value="2007">2007</option><option value="2008">2008</option><option value="2009">2009</option><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option><option value="2021">2021</option><option value="2022">2022</option><option value="2023">2023</option><option value="2024">2024</option></select></div>
                                </div>年 </div>
                              <div class="m-date__u" style="width:90px;">
                                <div class="c-select">
                                  <div><select name="month" id="month"><option value="0" selected="selected"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></div>
                                </div>月 </div>
                              <div class="m-date__u" style="width:90px;">
                                <div class="c-select">
                                  <div><select name="day" id="day"><option value="0" selected="selected"></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option><option value="14">14</option><option value="15">15</option><option value="16">16</option><option value="17">17</option><option value="18">18</option><option value="19">19</option><option value="20">20</option><option value="21">21</option><option value="22">22</option><option value="23">23</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option></select></div>
                                </div>日 </div>
                            </dd>
                          </dl>
                          <dl class="c-input-line"> <dt class="dt-has-en">郵便番号<small class="u-require u-require__wrap required__privacy">*</small><span style="vertical-align:middle;font-size:0.7em;">(ハイフンなし)</span><div class="ex-txt"><small>Postal code</small></div></dt>
                            <dd class="m-postal">
                              <div style="width:225px;"> <input type="text" name="zip_code" placeholder="例）000XXXX ﾊｲﾌﾝ不要" maxlength="10" id="zip-code" /> </div> <button type="button" style="width:130px;" onClick="AjaxZip3.zip2addr('zip_code','','pref_cd','address1');"><strong>「住所」</strong>に反映</button></dd>
                          </dl>
                          <dl class="c-input-line"> <dt class="dt-has-en">都道府県<small class="u-require u-require__wrap required__privacy">*</small><div class="ex-txt"><small>Prefecture</small></div></dt>
                            <dd class="m-u2">
                              <div style="width:250px;">
                                <div class="c-select" style="width:180px;">
                                  <div><select name="pref_cd" class="jrc-as" id="pref-cd"><option value="">ご選択ください</option><option value="00">海外/overseas</option><option value="01">北海道</option><option value="02">青森県</option><option value="03">岩手県</option><option value="04">宮城県</option><option value="05">秋田県</option><option value="06">山形県</option><option value="07">福島県</option><option value="08">茨城県</option><option value="09">栃木県</option><option value="10">群馬県</option><option value="11">埼玉県</option><option value="12">千葉県</option><option value="13">東京都</option><option value="14">神奈川県</option><option value="15">新潟県</option><option value="16">富山県</option><option value="17">石川県</option><option value="18">福井県</option><option value="19">山梨県</option><option value="20">長野県</option><option value="21">岐阜県</option><option value="22">静岡県</option><option value="23">愛知県</option><option value="24">三重県</option><option value="25">滋賀県</option><option value="26">京都府</option><option value="27">大阪府</option><option value="28">兵庫県</option><option value="29">奈良県</option><option value="30">和歌山県</option><option value="31">鳥取県</option><option value="32">島根県</option><option value="33">岡山県</option><option value="34">広島県</option><option value="35">山口県</option><option value="36">徳島県</option><option value="37">香川県</option><option value="38">愛媛県</option><option value="39">高知県</option><option value="40">福岡県</option><option value="41">佐賀県</option><option value="42">長崎県</option><option value="43">熊本県</option><option value="44">大分県</option><option value="45">宮崎県</option><option value="46">鹿児島県</option><option value="47">沖縄県</option></select></div>
                                </div>
                              </div>
                            </dd>
                          </dl>
                          <dl class="c-input-line"> <dt class="dt-has-en">市区町村番地<small class="u-require u-require__wrap required__privacy">*</small><div class="ex-txt"><small>Address</small></div></dt>
                            <dd class=" check-fill-in">
                              <div><input type="text" name="address1" class="jrc-as" placeholder="例）港区芝大門1-1-3" maxlength="255" id="address1" /></div>
                            </dd>
                          </dl>
                          <dl class="c-input-line"> <dt class="dt-has-en">建物名・号室等<div class="ex-txt"><small>B.L.D. Name, room number</small></div></dt>
                            <dd>
                              <div><input type="text" name="address2" class="jrc-as" placeholder="例）○○○ハウス123" maxlength="255" id="address2" /></div>
                            </dd>
                          </dl>
                          <dl class="c-input-line"> <dt class="dt-has-en">電話番号<small class="u-require u-require__wrap required__privacy">*</small><span style="vertical-align:middle;font-size:0.7em;">(ハイフンなし)</span><div class="ex-txt"><small>Phone Number</small></div></dt>
                            <dd>
                              <div><input type="text" name="tel" class="jrc-as" placeholder="例）090XXXX0000　括弧, ﾊｲﾌﾝ等 不要" maxlength="255" id="tel" /></div>
                            </dd>
                          </dl>
                          <dl class="c-input-line"> <dt class="dt-has-en">メールアドレス<small class="u-require u-require__wrap required__privacy">*</small><div class="ex-txt"><small>E-mail address</small></div></dt>
                            <dd>
                              <div><input type="text" name="email" class="jrc-as" placeholder="例）abcd@efgh.jp" maxlength="255" id="email" /></div>
                            </dd>
                          </dl>
                          <dl class="c-input-line"> <dt class="dt-has-en">メールアドレス<small class="u-require u-require__wrap required__privacy">*</small><span style="vertical-align:middle;font-size:0.7em;">(確認)</span><div class="ex-txt"><small>E-mail address</small></div></dt>
                            <dd>
                              <div><input type="text" name="email_confirm" placeholder="確認のためもう一度ご入力ください" id="email-confirm" /></div>
                            </dd>
                          </dl>
                          <dl class="c-input-block" hidden> <dt>ご希望などをご記入ください</dt>
                            <dd>
                              <div><textarea name="applicant_remarks" rows="5" id="applicant-remarks"></textarea></div>
                            </dd>
                          </dl>
                        </div>
                        <div id="donor-2" class="m-tab-tgt">
                          <dl class="c-input-line"> <dt class="dt-has-en">法人名・団体名<small>(漢字)</small><small class="u-require u-require__wrap required__privacy">*</small><div class="ex-txt"><small>Cooperate name</small></div></dt>
                            <dd class="check-fill-in">
                              <div><input type="text" name="organization_name" class="jrc-as" maxlength="255" id="organization-name" /></div>
                            </dd>
                          </dl>
                          <dl class="c-input-line"> <dt class="dt-has-en">法人名・団体名<small>(カナ)</small><small class="u-require u-require__wrap required__privacy">*</small><div class="ex-txt"><small>Cooperate name</small></div></dt>
                            <dd class="check-fill-in">
                              <div><input type="text" name="organization_name_kana" class="jrc-as" maxlength="255" id="organization-name-kana" /></div>
                            </dd>
                          </dl>
                          <dl class="c-input-line"> <dt class="dt-has-en">部署<div class="ex-txt"><small>Department</small></div></dt>
                            <dd>
                              <div><input type="text" name="dept_title" placeholder="必要な場合のみ、ご入力ください" maxlength="255" id="dept-title" /></div>
                            </dd>
                          </dl>
                          <dl class="c-input-line"> <dt class="dt-has-en">担当者・役職名<div class="ex-txt"><small>Person in charge</small></div></dt>
                            <dd>
                              <div><input type="text" name="contact_title_name" placeholder="必要な場合のみ、ご入力ください" maxlength="255" id="contact-title-name" /></div>
                            </dd>
                          </dl>
                          <dl class="c-input-line"> <dt class="dt-has-en">郵便番号<small class="u-require u-require__wrap required__privacy">*</small><span style="vertical-align:middle;font-size:0.7em;">(ハイフンなし)</span><div class="ex-txt"><small>Postal code</small></div></dt>
                            <dd class="m-postal">
                              <div style="width:225px;">
                                <div><input type="text" name="organization_zip_code" placeholder="例）000XXXX ﾊｲﾌﾝ不要" maxlength="10" id="organization-zip-code" /></div>
                              </div> <button type="button" style="width:130px;" onClick="AjaxZip3.zip2addr('organization_zip_code','','organization_pref_cd','organization_address1');"><strong>「住所」</strong>に反映</button></dd>
                          </dl>
                          <dl class="c-input-line"> <dt class="dt-has-en">都道府県<small class="u-require u-require__wrap required__privacy">*</small><div class="ex-txt"><small>Prefecture</small></div></dt>
                            <dd class="m-u2">
                              <div class="c-select">
                                <div><select name="organization_pref_cd" class="jrc-as" id="organization-pref-cd"><option value="">ご選択ください</option><option value="00">海外/overseas</option><option value="01">北海道</option><option value="02">青森県</option><option value="03">岩手県</option><option value="04">宮城県</option><option value="05">秋田県</option><option value="06">山形県</option><option value="07">福島県</option><option value="08">茨城県</option><option value="09">栃木県</option><option value="10">群馬県</option><option value="11">埼玉県</option><option value="12">千葉県</option><option value="13">東京都</option><option value="14">神奈川県</option><option value="15">新潟県</option><option value="16">富山県</option><option value="17">石川県</option><option value="18">福井県</option><option value="19">山梨県</option><option value="20">長野県</option><option value="21">岐阜県</option><option value="22">静岡県</option><option value="23">愛知県</option><option value="24">三重県</option><option value="25">滋賀県</option><option value="26">京都府</option><option value="27">大阪府</option><option value="28">兵庫県</option><option value="29">奈良県</option><option value="30">和歌山県</option><option value="31">鳥取県</option><option value="32">島根県</option><option value="33">岡山県</option><option value="34">広島県</option><option value="35">山口県</option><option value="36">徳島県</option><option value="37">香川県</option><option value="38">愛媛県</option><option value="39">高知県</option><option value="40">福岡県</option><option value="41">佐賀県</option><option value="42">長崎県</option><option value="43">熊本県</option><option value="44">大分県</option><option value="45">宮崎県</option><option value="46">鹿児島県</option><option value="47">沖縄県</option></select></div>
                              </div>
                            </dd>
                          </dl>
                          <dl class="c-input-line"> <dt class="dt-has-en">市区町村番地<small class="u-require u-require__wrap required__privacy">*</small><div class="ex-txt"><small>Address</small></div></dt>
                            <dd class="check-fill-in">
                              <div><input type="text" name="organization_address1" class="jrc-as" placeholder="例）港区芝大門1-1-3" id="organization-address1" /></div>
                            </dd>
                          </dl>
                          <dl class="c-input-line"> <dt class="dt-has-en">建物名・号室等<div class="ex-txt"><small>B.L.D. Name, room number</small></div></dt>
                            <dd>
                              <div><input type="text" name="organization_address2" class="jrc-as" placeholder="例）○○○ハウス123" id="organization-address2" /></div>
                            </dd>
                          </dl>
                          <dl class="c-input-line"> <dt class="dt-has-en">電話番号<small class="u-require u-require__wrap required__privacy">*</small><span style="vertical-align:middle;font-size:0.7em;">(ハイフンなし)</span><div class="ex-txt"><small>Phone Number</small></div></dt>
                            <dd>
                              <div><input type="text" name="organization_tel" class="jrc-as" placeholder="例）0300000000　括弧, ﾊｲﾌﾝ等 不要" id="organization-tel" /></div>
                            </dd>
                          </dl>
                          <dl class="c-input-line"> <dt class="dt-has-en">メールアドレス<small class="u-require u-require__wrap required__privacy">*</small><div class="ex-txt"><small>E-mail address</small></div></dt>
                            <dd>
                              <div><input type="text" name="organization_email" class="jrc-as" placeholder="例）abcd@efgh.jp" id="organization-email" /></div>
                            </dd>
                          </dl>
                          <dl class="c-input-line"> <dt class="dt-has-en">メールアドレス<small class="u-require u-require__wrap required__privacy">*</small><span style="vertical-align:middle;font-size:0.7em;">(確認)</span><div class="ex-txt"><small>E-mail address</small></div></dt>
                            <dd>
                              <div><input type="text" name="organization_email_confirm" placeholder="確認のためもう一度ご入力ください" id="organization-email-confirm" /></div>
                            </dd>
                          </dl>
                          <dl class="c-input-block" hidden> <dt>ご希望などをご記入ください</dt>
                            <dd>
                              <div><textarea name="organization_applicant_remarks" rows="5" id="organization-applicant-remarks"></textarea></div>
                            </dd>
                          </dl>
                        </div>
                      </td>
                    </tr>
                    <script type="text/javascript">
                      $(function() {
                          var donator_type = $("input[name=donator_type]:checked").data("tgt");
                          $($(donator_type), $("input[name=donator_type]:checked").closest(".m-tab-limit")).addClass("is-show");
                          if ($("input[name=save]:checked").val() == 1) $(".p-donate-signup").slideDown(); else $(".p-donate-signup").slideUp();
                          if ($("input[name=organization_save]:checked").val() == 1) $(".o-p-donate-signup").slideDown(); else $(".o-p-donate-signup").slideUp();
                      });
                    </script>
                    <style>
                      dd.check-fill-in
                      {
                          position : relative;
                          margin-top : 10px;
                      }
                      dd.check-fill-in::before
                      {
                          content : "↓表記にお間違いがないかご確認ください↓";
                          font-weight: 800;
                          font-size : 0.775rem;
                          color : #EA2201;
                          position : absolute;
                          top : -16px;
                          left : 30%;
                          transform : translatex(-20%);
                      }
                    </style>
                    <!--#####個人情報の取扱いについて#####-->
                    <tr>
                      <th>
                        <div class="u-sm_dt_acc">個人情報の取扱いについて</div>
                      </th>
                      <td>
                        <section id="LayerContentsBody">
                          <h2>会費・寄付金等へのご協力にかかる個人情報の取り扱いについて</h2>
                          <p class="indent-one">日本赤十字社は、会費、寄付金（「海外たすけあい」を含む）、海外救援金及び国内災害義援金へのご協力に際して取得する個人情報について、厳重に管理・保護を行うとともに、下記のとおり取り扱います。</p>
                          <h3>１．個人情報の利用目的</h3>
                          <p class="indent-one">上記において取得する個人情報は、日本赤十字社（本社及び都道府県支部）の行う以下のような広報活動や事業資金等の募集活動の目的のためにのみ使用します。また、ご本人の承諾がない限り、利用目的以外に個人情報を使用することはありません。</p>
                          <ul>
                            <li>会員や寄付者の皆さまのご協力実績を記録するため。</li>
                            <li>受領証やお礼状、収支決算、活動報告等の情報をお届けするため。</li>
                            <li>会費、寄付金（「海外たすけあい」を含む）、海外救援金及び国内災害義援金に関するご案内及びご協力のお願いをお届けするため。</li>
                            <li>その他、皆さまへ重要なご連絡をする必要が生じた場合のため。</li>
                          </ul>
                          <h3>２．個人情報の第三者提供について</h3>
                          <p class="indent-one">個人情報はご本人の承諾がない限り、第三者に提供することはありません。</p>
                          <h3>３．個人情報の開示、訂正、追加又は利用停止（削除）について</h3>
                          <p class="indent-one">お申し出があった時は、ご本人であることの確認に加え、訂正、追加または利用停止（削除）のお申し出にあっては、その理由を確認し、登録された情報の開示、訂正、追加または利用停止（削除）を行います。</p>
                          <h3>４．適用除外について</h3>
                          <p class="indent-one">日本赤十字社は皆さまの個人情報を上記のとおり取り扱いますが、（1）法令に定めがあるとき、（2）本人または第三者の生命、身体または財産の保護のために必要がある場合であって、緊急かつやむを得ないときのいずれかに該当するときは、上記の取り扱いを適用しない場合があります。</p>
                          <h3>５．関係法令、ガイドライン等の遵守についてて</h3>
                          <p class="indent-one">個人情報保護法、特定個人情報の取り扱いに関する法令および関係ガイドラインなどにのっとり、個人情報を適正に取り扱います。</p>
                          <h3>６．個人情報の安全管理について</h3>
                          <p class="indent-one">日本赤十字社は皆さまからお預かりした個人情報について、漏えい、滅失またはき損を防止するために、日本赤十字社の保有する個人情報保護規程ほか、社内規程に基づき厳重な安全管理対策を実施します。なお、業務遂行上、やむを得ず個人情報の取り扱いを外部に委託する場合には、日本赤十字社の監督の下で十分な安全対策が確保できる業者と契約を締結の上、委託します。</p>
                          <h3>７．クレジットカード決済にかかる個人情報の第三者提供について</h3>
                          <p class="indent-one">（１）日本赤十字社は、利用者がクレジットカードによる決済をお申し出いただいた場合、犯罪防止や財産保護のために、当該ご入力いただいたクレジットカードの第三者による不正利用、クレジットカードを使用した詐欺行為の検知またはこれらの予防（以下、総称して「不正等防止」といいます）に必要な措置を講じます。</p>
                          <p class="indent-one">（２）利用者は、利用者がクレジットカードによる決済を申し出た場合、日本赤十字社が取得した利用者に関するアに掲げる情報を不正等防止に必要な範囲で利用すること、及びかかる不正等防止のためにイに掲げる第三者に対して提供することにつき、同意するものとします。</p> <small>
        <p class="indent-one">
        <ul>
            <li>ア　個人情報
                <ul>
                    <li>（ア）利用者が本サイトで商品を購入される際に使用している氏名、メールアドレス、端末情報（IPアドレス等）</li>
                    <li>（イ）支払手段として指定しているクレジットカード番号の一部</li>
                </ul>
            </li>
            <li>イ　個人情報を提供する第三者
                <ul>
                    <li>（ア）会社名：株式会社アクル</li>
                    <li>（イ）所在地：東京都港区六本木1丁目9番9号六本木ファーストビル14階</li>
                    <li>（ウ）連絡先：p-info@akuru-inc.com</li>
                    <li>（エ）当該第三者における提供した個人情報の取扱いについては、同社のプライバシーポリシーをご確認ください。<a href="https://akuru-inc.com/privacy/" target="_blank">https://akuru-inc.com/privacy/</a></li>
                </ul>
            </li>
        </ul>
        </p>
        </small>
                          <p class="indent-one">（３）利用者は、不正等防止に必要な範囲で、前項イに定める第三者から利用者が申込したクレジットカードにかかる不正確認の結果を日本赤十字社が取得すること、また、日本赤十字社が取得した個人情報を不正等防止に必要な範囲で日本赤十字社が保有する利用者の個人情報と突合して利用することにつき、同意するものとします。</p>
                          <p class="indent-one">（４）日本赤十字社は、不正等防止に必要な業務の全部又は一部を、守秘義務契約を締結した委託先に委託することがあります。</p>
                          <p class="indent-one">（５）前各項に定める個人情報の利用、取得、提供にご同意いただけない場合には、本サービスにおいてクレジットカードによる決済をご利用いただくことができません。この場合には、クレジットカードによる決済以外の支払方法をお選びいただく必要がございます。</p>
                        </section>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <div class="u-sm_dt_acc">会費・寄付金等の取扱いについて</div>
                      </th>
                      <td> <small>下記の2～4は、「今回のみ」「義援金」「救援金」「海外たすけあい」の寄付には該当いたしません。</small>
                        <section id="LayerContentsBody2">
                          <h2>会費・寄付金等の取扱いについて</h2>
                          <h3>１．日本赤十字社に入金された寄付は原則として返金いたしかねます。</h3>
                          <h3>２．寄付者は、赤十字活動資金に対する「毎月または毎年」の継続的な寄付（以下、継続寄付という）に申し込むことにより、申し込み後、継続して毎月または毎年1回の寄付に同意したものとみなします。</h3>
                          <h3>３．継続寄付の申し込みをした寄付者は、本人からの解約の申し出がない限り、指定の期日に初回申込金額が継続して決済されることに同意するものとします。</h3>
                          <h3>４．継続寄付は、日本赤十字社が解散した場合、自動解約となります。</h3>
                        </section> <label class="c-check" for="jrc-info-offer-flag"><input type="hidden" name="jrc_info_offer_flag" value="0"/><input type="checkbox" name="jrc_info_offer_flag" value="1" id="jrc-info-offer-flag"><span style="font-weight:bold;">個人情報の取扱いおよび会費・寄付金等の取扱いについて同意しました</span></label> </td>
                    </tr><input type="hidden" name="info_agreement" id="info-agreement" value="1" />

                    
                    
                    <tr id="createPaymentForm">
                      <th>
                        <div class="u-sm_dt_acc">お支払情報</div>
                      </th>
                      <td class="m-tab-limit">
                        <ul style="display:none" class="c-check-line c-select-next-input-Card-Amazon m-tab-radios"> <input type="hidden" name="application_payment_type" value="" />
                          <li style="display:none"><label class="c-check"><input type="radio" name="application_payment_type" value="4" data-tgt="#pay-1" id="application-payment-type-4" checked="checked"><span>クレジット</span></label></li>
                        </ul>
                        <!--クレジットカード-->
                        <div id="pay-1" class="m-tab-tgt"> 
                          <small>
                            「<span class="u-require">*</span>」は必須入力項目です。<br><br>
                          </small>
                          <dl class="c-input-line"> <dt class="dt-has-en">カード番号<small class="u-require u-require__wrap">*</small><div class="ex-txt"><small>Card Number</small></div></dt>
                            <dd>
                              <div><input type="text" name="creditNumber4" class="jrc-as" id="creditNumber4" maxlength="19" placeholder="半角数字" /></div>
                            </dd>
                          </dl>
                          <dl class="c-input-line"> <dt class="dt-has-en">有効期限(月/年)<small class="u-require u-require__wrap">*</small><div class="ex-txt"><small>Expiration</small></div></dt>
                            <dd class="m-date c-input-line__flex">
                              <div class="m-date__u">
                                <div class="c-select" style="width: 75px;">
                                  <div><select name="Month4" class="jrc-as" id="Month4"><option value="">--</option><option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option value="12">12</option></select></div>
                                </div>　／ </div>
                              <div class="m-date__u">
                                <div class="c-select" style="width: 75px;">
                                  <div><select name="Year4" class="jrc-as" id="Year4"><option value="">--</option><option value="24">24</option><option value="25">25</option><option value="26">26</option><option value="27">27</option><option value="28">28</option><option value="29">29</option><option value="30">30</option><option value="31">31</option><option value="32">32</option><option value="33">33</option><option value="34">34</option><option value="35">35</option><option value="36">36</option></select></div>
                                </div>
                              </div>
                            </dd>
                          </dl>
                          <dl class="c-input-line"> <dt class="dt-has-en">セキュリティコード<small class="u-require u-require__wrap">*</small><div class="ex-txt"><small>Security code (cvv/cvc)</small></div></dt>
                            <dd>
                              <div><input type="text" name="csc4" id="csc4" style="width:100px;" maxlength="4" placeholder="半角数字" /></div>
                            </dd>
                          </dl>
                          <dl class="c-input-line"> <dt class="dt-has-en">カード名義<small class="u-require u-require__wrap">*</small><div class="ex-txt"><small>name on the card</small></div></dt>
                            <dd>
                              <div><input type="text" name="cardHolder4" class="jrc-as" id="cardHolder4" maxlength="45" placeholder="半角英大文字" /></div>
                            </dd>
                          </dl>
                          <div> 
                          <small>
                              <br>
                              <span style="font-weight: 800;">
                              当サイトは、カード情報の不正使用を未然に防止するため、3Dセキュア2.0（本人認証サービス）を導入しています。
                              ご利用前に、お手元のクレジットカードが 3Dセキュア2.0 に対応されているかご確認ください。
                              なお、非対応の場合は、お手続きいただけない恐れがございますので、ご利用のカード発行会社へお問い合わせください。
                              </span>
                          </small> 
                          </div>
                        </div>
                      </td>
                    </tr>
                    <script type="text/javascript">
                      $(function() {
                          var application_payment_type = $("input[name=application_payment_type]:checked").data('tgt');
                          $($(application_payment_type), $("input[name=application_payment_type]:checked").closest('.m-tab-limit')).addClass('is-show');
                      });
                    </script>
                    <!--#####初めての方・情報登録をしていない方#####-->

                  </tbody>
                </table>
              </div>
              <!--ランディングページCMS化対応-->
              <div class="p-donate-input__next-button"> <button class="c-button--lg" type="button" id="donation_confirmation" disabled="true" name="">入力内容を確認する</button> </div>
              <!-- Google reCAPTCHA --><input type="hidden" name="recaptcha_response" id="recaptchaResponse">
              <div style="display: none;">
                <!-- ASUKA//from --><input type="hidden" name="jrc-email-address" id="jrc-email-address" /> <input type="hidden" name="jrc-card-number" id="jrc-card-number" /> <input type="hidden" name="jrc-card-expiry" id="jrc-card-expiry" /> <input type="hidden" name="jrc-card-holder" id="jrc-card-holder" /> <input type="hidden" name="jrc-settlement-amount" id="jrc-settlement-amount" /> <input type="hidden" name="jrc-telephone-number" id="jrc-telephone-number" /> <input type="hidden" name="as-username" id="as-username" /> <input type="hidden" name="as-username-kana" id="as-username-kana" /> <input type="hidden" name="as-useraddress" id="as-useraddress" />
                <!-- to//ASUKA -->
              </div>
              <div class="veritrans4g" data-mdk="bdce7c8a-3d8c-427f-8b08-4d8eedfbbec8" style="display: none;">
                <!--VeriTrans4G-->
              </div>
            </form> <input type="hidden" name="client_ip" id="client-ip" value="18.176.105.136" />
            <div class="white-popup mfp-hide" id="password_remind_popup" name="password_remind_popup">
              <div class="f-sw">
                <div class="c-plggd-center c-basics-container c-inputs">
                  <div class="c-mypage-body">
                    <div class="c-mypage-body__row">
                      <section class="c-mypage__contents">
                        <div class="" name="password_reset_mail_request">
                          <p>パスワード再登録用URLのお知らせメールをお送りします。</p>
                          <p>ご登録のログインID（メールアドレス）と郵便番号を入力して、<br>メール送信ボタンをクリックしてください。</p>
                          <form method="post" accept-charset="utf-8" action="/">
                            <div style="display:none;"><input type="hidden" name="_method" value="POST" /><input type="hidden" name="_csrfToken" autocomplete="off" value="b9f39addf3ed0a691704647295a4a3fd4f096d86047438a2f76b72c1c63b9904e27d03a8da034cb08d1b03b57283274902e7e0c5296cf137805648e59999ac7f" /></div>
                            <dl class="c-input-line"> <dt>ログインID</dt>
                              <div>
                                <dd style="margin-bottom:0px;"> <input type="text" name="remind_login_id" style="width:310px;" placeholder="ログインID（メールアドレス）" id="remind-login-id" /> </dd>
                                <p name="my_login_id_error" style="height:13px;text-align:left;color:#FF0000;margin-top:0px;font-size:small;"></p>
                              </div>
                            </dl>
                            <dl class="c-input-line"> <dt>郵便番号</dt>
                              <div>
                                <dd style="margin-bottom:0px;"> <input type="text" name="remind_zip_code" style="width:310px;" placeholder="例）000XXXX ﾊｲﾌﾝなし" maxlength="10" id="remind-zip-code" /> </dd>
                                <p name="my_zip_code_error" style="height:13px;text-align:left;color:#FF0000;margin-top:0px;font-size:small;"></p>
                              </div>
                            </dl>
                            <div name="password_remind_error" style="text-align:center;color:#FF0000;"></div>
                            <div style="text-align: center;padding-top:50px;"> <button type="button" class="c-button--md c-button--no-ico" id="email_submit">メール送信</button> </div>
                          </form>
                        </div>
                        <div class="plggd-popup-hide" name="password_reset_mail_result">
                          <p>パスワード再登録用URLのお知らせメールを送信いたしました。</p>
                          <p>送られてきたメールに書かれたURLへアクセスして頂き、<br>パスワード再登録を完了してください。</p>
                          <p>※URLの有効期限は、24時間以内となります。</p>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/themes/base/jquery-ui.min.css">
    <footer class="c-footer">
      <div class="f-s-lr-pd">
        <h3><span> スマートビリングサービス株式会社 </span><span></span></h3>
        <dl class="p-contact"> <dt>所在地<span>：</span></dt>
          <dd>〒171-0021　東京都豊島区西池袋1丁目4番10号</dd>
        </dl>
        <dl class="p-contact"> <dt>お問い合わせ<span>：</span></dt>
          <dd>
            <ul>
              <li><a href="tel:0570-666-943">0570-666-943</a></li>
            </ul> <small>平日 10：00～18：00(土日祝祭日・その他弊社指定の休日を除く)</small> </dd>
        </dl>
        <div class="c-copyright"> Copyright © 2024 Smart Billing Service All Rights Reserved. </div>
      </div>
      <div class="scrollTo c-pagetop"><a href="#pagetop">TOP</a></div>
    </footer>
  </div>
  <script src="underscore-min.js"></script>
  <link rel="stylesheet" href="magnific-popup.css" />
  <script src="app-donate.js"></script>
  <script src="common.js"></script>
  <script>
    $('input[name="receipt_flag"]').click(function() {
        var r = $('input[name="receipt_flag"]:checked').val();
        console.log(r);
        if(r == 1){
            $('.required__privacy').show();
        }else{
            $('.required__privacy').hide();
        }

    })
    $('#jrc-info-offer-flag').change(function() {
      var r = $('#jrc-info-offer-flag').val();
      if($("#jrc-info-offer-flag").prop("checked") == true){
            console.log(1);
            $('#donation_confirmation').prop('disabled', false);
        }else{
            console.log(2);
            $('#donation_confirmation').prop('disabled', true);
        }
    })

  </script>
  <style>
    .required__privacy {
      display : none;
    }
    [class^=c-button--lg]:disabled {
      background-color: #AAB2BD;
    }
    [class^=c-button--lg]:hover:disabled {
      background-color: #AAB2BD;
    }
</body>
</html>