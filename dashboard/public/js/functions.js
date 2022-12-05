function DisableService(ServiceName)
{
	httpRequest = new XMLHttpRequest();
	httpRequest.open('GET', 'DisableService.php?action='+ServiceName, true);
	httpRequest.send();
}

function EnableService(ServiceName)
{
	httpRequest = new XMLHttpRequest();
	httpRequest.open('GET', 'EnableService.php?action='+ServiceName, true);
	httpRequest.send();
}

function RebootDevice()
{
	httpRequest = new XMLHttpRequest();
	httpRequest.open('GET', 'RebootDevice.php', true);
	httpRequest.send();
	httpRequest.onreadystatechange = function() {
		if(httpRequest.readyState == 4 && httpRequest.status == 200) {
			window.location.href = "/index.php?page=rebooting";
		}
	}
}

function ResetPasswordPrompt()
{
	var passwordbox = document.createElement("div");
	passwordbox.className = "closeable_prompt_overlay";
	passwordbox.innerHTML = '<div id="closeable_prompt"><div id="prompt_title"><h2>Reset Password</h2><button type="button" onclick="ClosePrompt()" value="Close" title="Close" id="CloseButton">X</button></div><div id="prompt_body"><div id="inputs"><label for="password">Password:</label><input type="password" minlength="6" maxlength="1024" autocomplete="off" placeholder="At least 6 characters" id="password" name="password"><br /><label for="confirm_password">Confirm Password:</label><input type="password" minlength="6" maxlength="1024" autocomplete="off" placeholder="At least 6 characters" name="confirm_password" id="confirm_password" /></div></div><div id="prompt_footer"><button id="reset_password_button" onclick="ResetPassword()"; type="button">Submit</button></div></div>';
	var body = document.body.appendChild(passwordbox);
}

function ResetPassword()
{
	var password = document.getElementById("password").value;
	var confirmpassword = document.getElementById("confirm_password").value;
	var params = 'password='+encodeURIComponent(password)+'&confirmpassword='+encodeURIComponent(confirmpassword);
	httpRequest = new XMLHttpRequest();
	httpRequest.open('POST', 'ResetPassword.php', true);
	httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	httpRequest.onreadystatechange = function() {
		if(httpRequest.readyState == 4 && httpRequest.status == 200) {
			alert(httpRequest.responseText);
			var password_box = document.getElementById("password_prompt_overlay");
			password_box.remove();
		}
	}

	httpRequest.send(params);
}

function SetWirelessPrompt()
{
	var wirelessbox = document.createElement("div");
	wirelessbox.className = "closeable_prompt_overlay";
	wirelessbox.innerHTML = '<div id="closeable_prompt"><div id="prompt_title"><h2>Set WiFi Details</h2><button type="button" onclick="ClosePrompt()" value="Close" title="Close" id="CloseButton">X</button></div><div id="prompt_body"><div id="inputs"><label for="SSID">SSID:</label><input type="text" id="SSID" name="SSID" /><br /><label for="password">Password:</label><input type="password" id="password" name="password" /><br /><label for="country">Country:</label><select id="country" name="country"><option></option><option value="AF">Afghanistan</option><option value="AX">Aland Islands</option><option value="AL">Albania</option><option value="DZ">Algeria</option><option value="AS">American Samoa</option><option value="AD">Andorra</option><option value="AO">Angola</option><option value="AI">Anguilla</option><option value="AQ">Antarctica</option><option value="AG">Antigua and Barbuda</option><option value="AR">Argentina</option><option value="AM">Armenia</option><option value="AW">Aruba</option><option value="AU">Australia</option><option value="AT">Austria</option><option value="AZ">Azerbaijan</option><option value="BS">Bahamas</option><option value="BH">Bahrain</option><option value="BD">Bangladesh</option><option value="BB">Barbados</option><option value="BY">Belarus</option><option value="BE">Belgium</option><option value="BZ">Belize</option><option value="BJ">Benin</option><option value="BM">Bermuda</option><option value="BT">Bhutan</option><option value="BO">Bolivia</option><option value="BQ">Bonaire, Sint Eustatius and Saba</option><option value="BA">Bosnia and Herzegovina</option><option value="BW">Botswana</option><option value="BV">Bouvet Island</option><option value="BR">Brazil</option><option value="IO">British Indian Ocean Territory</option><option value="BN">Brunei Darussalam</option><option value="BG">Bulgaria</option><option value="BF">Burkina Faso</option><option value="BI">Burundi</option><option value="KH">Cambodia</option><option value="CM">Cameroon</option><option value="CA">Canada</option><option value="CV">Cape Verde</option><option value="KY">Cayman Islands</option><option value="CF">Central African Republic</option><option value="TD">Chad</option><option value="CL">Chile</option><option value="CN">China</option><option value="CX">Christmas Island</option><option value="CC">Cocos (Keeling) Islands</option><option value="CO">Colombia</option><option value="KM">Comoros</option><option value="CG">Congo</option><option value="CD">Congo, Democratic Republic of the Congo</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="CI">Cote D\'Ivoire</option><option value="HR">Croatia</option><option value="CU">Cuba</option><option value="CW">Curacao</option><option value="CY">Cyprus</option><option value="CZ">Czech Republic</option><option value="DK">Denmark</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="EC">Ecuador</option><option value="EG">Egypt</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands (Malvinas)</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany</option><option value="GH">Ghana</option><option value="GI">Gibraltar</option><option value="GR">Greece</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HM">Heard Island and Mcdonald Islands</option><option value="VA">Holy See (Vatican City State)</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary</option><option value="IS">Iceland</option><option value="IN">India</option><option value="ID">Indonesia</option><option value="IR">Iran, Islamic Republic of</option><option value="IQ">Iraq</option><option value="IE">Ireland</option><option value="IM">Isle of Man</option><option value="IL">Israel</option><option value="IT">Italy</option><option value="JM">Jamaica</option><option value="JP">Japan</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="KP">Korea, Democratic People\'s Republic of</option><option value="KR">Korea, Republic of</option><option value="XK">Kosovo</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Lao People\'s Democratic Republic</option><option value="LV">Latvia</option><option value="LB">Lebanon</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LY">Libyan Arab Jamahiriya</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania</option><option value="LU">Luxembourg</option><option value="MO">Macao</option><option value="MK">Macedonia, the Former Yugoslav Republic of</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico</option><option value="FM">Micronesia, Federated States of</option><option value="MD">Moldova, Republic of</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MA">Morocco</option><option value="MZ">Mozambique</option><option value="MM">Myanmar</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands</option><option value="AN">Netherlands Antilles</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="NF">Norfolk Island</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway</option><option value="OM">Oman</option><option value="PK">Pakistan</option><option value="PW">Palau</option><option value="PS">Palestinian Territory, Occupied</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn</option><option value="PL">Poland</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="RE">Reunion</option><option value="RO">Romania</option><option value="RU">Russian Federation</option><option value="RW">Rwanda</option><option value="BL">Saint Barthelemy</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="MF">Saint Martin</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="ST">Sao Tome and Principe</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia</option><option value="CS">Serbia and Montenegro</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SX">Sint Maarten</option><option value="SK">Slovakia</option><option value="SI">Slovenia</option><option value="SB">Solomon Islands</option><option value="SO">Somalia</option><option value="ZA">South Africa</option><option value="GS">South Georgia and the South Sandwich Islands</option><option value="SS">South Sudan</option><option value="ES">Spain</option><option value="LK">Sri Lanka</option><option value="SD">Sudan</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SZ">Swaziland</option><option value="SE">Sweden</option><option value="CH">Switzerland</option><option value="SY">Syrian Arab Republic</option><option value="TW">Taiwan, Province of China</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania, United Republic of</option><option value="TH">Thailand</option><option value="TL">Timor-Leste</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TN">Tunisia</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="UG">Uganda</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom</option><option value="US">United States</option><option value="UM">United States Minor Outlying Islands</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VE">Venezuela</option><option value="VN">Viet Nam</option><option value="VG">Virgin Islands, British</option><option value="VI">Virgin Islands, U.s.</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option><option value="YE">Yemen</option><option value="ZM">Zambia</option><option value="ZW">Zimbabwe</option></select></div></div><div id="prompt_footer"><button id="set_wifi_button" onclick="SetWireless()"; type="button">Submit</button></div>';

	document.body.appendChild(wirelessbox);
}


function SetWireless()
{
	var ssid = document.getElementById("SSID").value;
	var password = document.getElementById("password").value;
	var country = document.getElementById("country").value;
	var params = 'SSID='+encodeURIComponent(ssid)+'&password='+encodeURIComponent(password)+'&country='+encodeURIComponent(country);
	httpRequest = new XMLHttpRequest();
	httpRequest.open('POST', 'SetWireless.php', true);
	httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	httpRequest.onreadystatechange = function() {
		if(httpRequest.readyState == 4 && httpRequest.status == 200) {
			alert(httpRequest.responseText);
			var prompt = document.getElementsByClassName("closeable_prompt_overlay");
			prompt[0].remove();
		}
	}

	httpRequest.send(params);
}


function StartMinerUpdate()
{
	httpRequest = new XMLHttpRequest();
	httpRequest.open('GET', '/index.php?page=updateminer&start=true', true);
	httpRequest.send();

	serviceRequest = new XMLHttpRequest();
	serviceRequest.open('GET', 'services.php?name=miner-update', true);
	serviceRequest.send();
	var logRefresh = setInterval(function() {
		serviceRequest.open('GET', 'services.php?name=miner-update', true);
		serviceRequest.send();
		serviceRequest.onreadystatechange = function() {


			if(serviceRequest.readyState == 4 && serviceRequest.status == 200)
			{
				logRequest = new XMLHttpRequest();
				logRequest.open('GET', 'logs.php?name=miner-update', true);
				logRequest.send();

				logRequest.onreadystatechange = function() {
					if(logRequest.readyState == 4 && logRequest.status == 200)
					{
						document.getElementById("log_output").innerHTML = logRequest.responseText;
					}
				}

				if(serviceRequest.responseText == 'stopped')
				{
					clearInterval(logRefresh);
				}
			}
		}
	}, 1000)
}


function StartDashboardUpdate()
{
	httpRequest = new XMLHttpRequest();
	httpRequest.open('GET', '/index.php?page=updatedashboard&start=true', true);
	httpRequest.send();

	serviceRequest = new XMLHttpRequest();
	serviceRequest.open('GET', 'services.php?name=dashboard-update', true);
	serviceRequest.send();
	var logRefresh = setInterval(function() {
		serviceRequest.open('GET', 'services.php?name=dashboard-update', true);
		serviceRequest.send();
		serviceRequest.onreadystatechange = function() {
			if(serviceRequest.readyState == 4 && serviceRequest.status == 200)
			{
				logRequest = new XMLHttpRequest();
				logRequest.open('GET', 'logs.php?name=dashboard-update', true);
				logRequest.send();

				logRequest.onreadystatechange = function() {
					if(logRequest.readyState == 4 && logRequest.status == 200)
					{
						document.getElementById("log_output").innerHTML = logRequest.responseText;
					}
				}

				if(serviceRequest.responseText == 'stopped')
				{
					clearInterval(logRefresh);
				}
			}
		}
	}, 1000)
}


function ClearBlockChainPrompt()
{
	var prompt = document.createElement("div");
	prompt.className = "closeable_prompt_overlay";
	prompt.innerHTML = '<div id="closeable_prompt"><div id="prompt_title"><h2>Clear BlockChain Data</h2><button type="button" onclick="ClosePrompt()" value="Close" title="Close" id="CloseButton">X</button></div><div id="prompt_body"><p>Are you sure you wish to clear your blockchain data?</p><p>You will have to re-sync.</p><p>You should only do this if your miner docker fails to start or your disk usage is high.</p></div><div id="prompt_footer"><button type="button" value="Yes" title="Yes" id="blockchain_clear_yes" onclick="ClearBlockChainRedirect()">Yes</button><button value="No" title="No" type="button" id="blockchain_clear_no" onclick="ClosePrompt()">No</button></div>'

	document.body.appendChild(prompt);
}


function StartBlockChainClear()
{
	httpRequest = new XMLHttpRequest();
	httpRequest.open('GET', '/index.php?page=clearblockchain&start=true', true);
	httpRequest.send();

	serviceRequest = new XMLHttpRequest();
	serviceRequest.open('GET', 'services.php?name=clear-blockchain', true);
	serviceRequest.send();
	var logRefresh = setInterval(function() {
		serviceRequest.open('GET', 'services.php?name=clear-blockchain', true);
		serviceRequest.send();
		serviceRequest.onreadystatechange = function() {
			if(serviceRequest.readyState == 4 && serviceRequest.status == 200)
			{
				logRequest = new XMLHttpRequest();
				logRequest.open('GET', 'logs.php?name=clear-blockchain', true);
				logRequest.send();

				logRequest.onreadystatechange = function() {
					if(logRequest.readyState == 4 && logRequest.status == 200)
					{
						document.getElementById("log_output").innerHTML = logRequest.responseText;
						document.getElementById("log_output").scrollTop = document.getElementById("log_output").scrollHeight
					}
				}

				if(serviceRequest.responseText == 'stopped')
				{
					clearInterval(logRefresh);
				}
			}
		}
	}, 1000)
}

function ClearBlockChainRedirect()
{
	window.location.replace("/index.php?page=clearblockchain");
}

function ClosePrompt()
{
	var prompt = document.getElementsByClassName("closeable_prompt_overlay");
	prompt[0].remove();
}

$(document).ready(function(){
	$("#live_height").text("Loading");
	$("#online_status").text("Loading");
	$.get("HeliumStatus.php",function(data){
		$("#live_height").text(data.live_height);
		$("#online_status").text(data.online_status);
	}).error(function(){
		$("#online_status").text("Maintenance");
		$("#live_height").text("Maintenance");
	})
})

function SetTimezonePrompt()
{
	var timezonebox = document.createElement("div");
	timezonebox.className = "closeable_prompt_overlay";
	timezonebox.innerHTML = '<div id="closeable_prompt"><div id="prompt_title"><h2>Set TimeZone</h2><button type="button" onclick="ClosePrompt()" value="Close" title="Close" id="CloseButton">X</button></div><div id="prompt_body"><div id="inputs"><label for="settimezone">Set Timezone:</label><select id="settimezone" name="settimezone"><option></option><option value="Africa/Abidjan">Africa/Abidjan</option> <option value="Africa/Accra">Africa/Accra</option> <option value="Africa/Addis_Ababa">Africa/Addis_Ababa</option> <option value="Africa/Algiers">Africa/Algiers</option> <option value="Africa/Asmara">Africa/Asmara</option> <option value="Africa/Asmera">Africa/Asmera</option> <option value="Africa/Bamako">Africa/Bamako</option> <option value="Africa/Bangui">Africa/Bangui</option> <option value="Africa/Banjul">Africa/Banjul</option> <option value="Africa/Bissau">Africa/Bissau</option> <option value="Africa/Blantyre">Africa/Blantyre</option> <option value="Africa/Brazzaville">Africa/Brazzaville</option> <option value="Africa/Bujumbura">Africa/Bujumbura</option> <option value="Africa/Cairo">Africa/Cairo</option> <option value="Africa/Casablanca">Africa/Casablanca</option> <option value="Africa/Ceuta">Africa/Ceuta</option> <option value="Africa/Conakry">Africa/Conakry</option> <option value="Africa/Dakar">Africa/Dakar</option> <option value="Africa/Dar_es_Salaam">Africa/Dar_es_Salaam</option> <option value="Africa/Djibouti">Africa/Djibouti</option> <option value="Africa/Douala">Africa/Douala</option> <option value="Africa/El_Aaiun">Africa/El_Aaiun</option> <option value="Africa/Freetown">Africa/Freetown</option> <option value="Africa/Gaborone">Africa/Gaborone</option> <option value="Africa/Harare">Africa/Harare</option> <option value="Africa/Johannesburg">Africa/Johannesburg</option> <option value="Africa/Juba">Africa/Juba</option> <option value="Africa/Kampala">Africa/Kampala</option> <option value="Africa/Khartoum">Africa/Khartoum</option> <option value="Africa/Kigali">Africa/Kigali</option> <option value="Africa/Kinshasa">Africa/Kinshasa</option> <option value="Africa/Lagos">Africa/Lagos</option> <option value="Africa/Libreville">Africa/Libreville</option> <option value="Africa/Lome">Africa/Lome</option> <option value="Africa/Luanda">Africa/Luanda</option> <option value="Africa/Lubumbashi">Africa/Lubumbashi</option> <option value="Africa/Lusaka">Africa/Lusaka</option> <option value="Africa/Malabo">Africa/Malabo</option> <option value="Africa/Maputo">Africa/Maputo</option> <option value="Africa/Maseru">Africa/Maseru</option> <option value="Africa/Mbabane">Africa/Mbabane</option> <option value="Africa/Mogadishu">Africa/Mogadishu</option> <option value="Africa/Monrovia">Africa/Monrovia</option> <option value="Africa/Nairobi">Africa/Nairobi</option> <option value="Africa/Ndjamena">Africa/Ndjamena</option> <option value="Africa/Niamey">Africa/Niamey</option> <option value="Africa/Nouakchott">Africa/Nouakchott</option> <option value="Africa/Ouagadougou">Africa/Ouagadougou</option> <option value="Africa/Porto-Novo">Africa/Porto-Novo</option> <option value="Africa/Sao_Tome">Africa/Sao_Tome</option> <option value="Africa/Timbuktu">Africa/Timbuktu</option> <option value="Africa/Tripoli">Africa/Tripoli</option> <option value="Africa/Tunis">Africa/Tunis</option> <option value="Africa/Windhoek">Africa/Windhoek</option> <option value="America/Adak">America/Adak</option> <option value="America/Anchorage">America/Anchorage</option> <option value="America/Anguilla">America/Anguilla</option> <option value="America/Antigua">America/Antigua</option> <option value="America/Araguaina">America/Araguaina</option> <option value="America/Argentina/Buenos_Aires">America/Argentina/Buenos_Aires</option> <option value="America/Argentina/Catamarca">America/Argentina/Catamarca</option> <option value="America/Argentina/ComodRivadavia">America/Argentina/ComodRivadavia</option> <option value="America/Argentina/Cordoba">America/Argentina/Cordoba</option> <option value="America/Argentina/Jujuy">America/Argentina/Jujuy</option> <option value="America/Argentina/La_Rioja">America/Argentina/La_Rioja</option> <option value="America/Argentina/Mendoza">America/Argentina/Mendoza</option> <option value="America/Argentina/Rio_Gallegos">America/Argentina/Rio_Gallegos</option> <option value="America/Argentina/Salta">America/Argentina/Salta</option> <option value="America/Argentina/San_Juan">America/Argentina/San_Juan</option> <option value="America/Argentina/San_Luis">America/Argentina/San_Luis</option> <option value="America/Argentina/Tucuman">America/Argentina/Tucuman</option> <option value="America/Argentina/Ushuaia">America/Argentina/Ushuaia</option> <option value="America/Aruba">America/Aruba</option> <option value="America/Asuncion">America/Asuncion</option> <option value="America/Atikokan">America/Atikokan</option> <option value="America/Atka">America/Atka</option> <option value="America/Bahia">America/Bahia</option> <option value="America/Bahia_Banderas">America/Bahia_Banderas</option> <option value="America/Barbados">America/Barbados</option> <option value="America/Belem">America/Belem</option> <option value="America/Belize">America/Belize</option> <option value="America/Blanc-Sablon">America/Blanc-Sablon</option> <option value="America/Boa_Vista">America/Boa_Vista</option> <option value="America/Bogota">America/Bogota</option> <option value="America/Boise">America/Boise</option> <option value="America/Buenos_Aires">America/Buenos_Aires</option> <option value="America/Cambridge_Bay">America/Cambridge_Bay</option> <option value="America/Campo_Grande">America/Campo_Grande</option> <option value="America/Cancun">America/Cancun</option> <option value="America/Caracas">America/Caracas</option> <option value="America/Catamarca">America/Catamarca</option> <option value="America/Cayenne">America/Cayenne</option> <option value="America/Cayman">America/Cayman</option> <option value="America/Chicago">America/Chicago</option> <option value="America/Chihuahua">America/Chihuahua</option> <option value="America/Coral_Harbour">America/Coral_Harbour</option> <option value="America/Cordoba">America/Cordoba</option> <option value="America/Costa_Rica">America/Costa_Rica</option> <option value="America/Creston">America/Creston</option> <option value="America/Cuiaba">America/Cuiaba</option> <option value="America/Curacao">America/Curacao</option> <option value="America/Danmarkshavn">America/Danmarkshavn</option> <option value="America/Dawson">America/Dawson</option> <option value="America/Dawson_Creek">America/Dawson_Creek</option> <option value="America/Denver">America/Denver</option> <option value="America/Detroit">America/Detroit</option> <option value="America/Dominica">America/Dominica</option> <option value="America/Edmonton">America/Edmonton</option> <option value="America/Eirunepe">America/Eirunepe</option> <option value="America/El_Salvador">America/El_Salvador</option> <option value="America/Ensenada">America/Ensenada</option> <option value="America/Fort_Nelson">America/Fort_Nelson</option> <option value="America/Fort_Wayne">America/Fort_Wayne</option> <option value="America/Fortaleza">America/Fortaleza</option> <option value="America/Glace_Bay">America/Glace_Bay</option> <option value="America/Godthab">America/Godthab</option> <option value="America/Goose_Bay">America/Goose_Bay</option> <option value="America/Grand_Turk">America/Grand_Turk</option> <option value="America/Grenada">America/Grenada</option> <option value="America/Guadeloupe">America/Guadeloupe</option> <option value="America/Guatemala">America/Guatemala</option> <option value="America/Guayaquil">America/Guayaquil</option> <option value="America/Guyana">America/Guyana</option> <option value="America/Halifax">America/Halifax</option> <option value="America/Havana">America/Havana</option> <option value="America/Hermosillo">America/Hermosillo</option> <option value="America/Indiana/Indianapolis">America/Indiana/Indianapolis</option> <option value="America/Indiana/Knox">America/Indiana/Knox</option> <option value="America/Indiana/Marengo">America/Indiana/Marengo</option> <option value="America/Indiana/Petersburg">America/Indiana/Petersburg</option> <option value="America/Indiana/Tell_City">America/Indiana/Tell_City</option> <option value="America/Indiana/Vevay">America/Indiana/Vevay</option> <option value="America/Indiana/Vincennes">America/Indiana/Vincennes</option> <option value="America/Indiana/Winamac">America/Indiana/Winamac</option> <option value="America/Indianapolis">America/Indianapolis</option> <option value="America/Inuvik">America/Inuvik</option> <option value="America/Iqaluit">America/Iqaluit</option> <option value="America/Jamaica">America/Jamaica</option> <option value="America/Jujuy">America/Jujuy</option> <option value="America/Juneau">America/Juneau</option> <option value="America/Kentucky/Louisville">America/Kentucky/Louisville</option> <option value="America/Kentucky/Monticello">America/Kentucky/Monticello</option> <option value="America/Knox_IN">America/Knox_IN</option> <option value="America/Kralendijk">America/Kralendijk</option> <option value="America/La_Paz">America/La_Paz</option> <option value="America/Lima">America/Lima</option> <option value="America/Los_Angeles">America/Los_Angeles</option> <option value="America/Louisville">America/Louisville</option> <option value="America/Lower_Princes">America/Lower_Princes</option> <option value="America/Maceio">America/Maceio</option> <option value="America/Managua">America/Managua</option> <option value="America/Manaus">America/Manaus</option> <option value="America/Marigot">America/Marigot</option> <option value="America/Martinique">America/Martinique</option> <option value="America/Matamoros">America/Matamoros</option> <option value="America/Mazatlan">America/Mazatlan</option> <option value="America/Mendoza">America/Mendoza</option> <option value="America/Menominee">America/Menominee</option> <option value="America/Merida">America/Merida</option> <option value="America/Metlakatla">America/Metlakatla</option> <option value="America/Mexico_City">America/Mexico_City</option> <option value="America/Miquelon">America/Miquelon</option> <option value="America/Moncton">America/Moncton</option> <option value="America/Monterrey">America/Monterrey</option> <option value="America/Montevideo">America/Montevideo</option> <option value="America/Montreal">America/Montreal</option> <option value="America/Montserrat">America/Montserrat</option> <option value="America/Nassau">America/Nassau</option> <option value="America/New_York">America/New_York</option> <option value="America/Nipigon">America/Nipigon</option> <option value="America/Nome">America/Nome</option> <option value="America/Noronha">America/Noronha</option> <option value="America/North_Dakota/Beulah">America/North_Dakota/Beulah</option> <option value="America/North_Dakota/Center">America/North_Dakota/Center</option> <option value="America/North_Dakota/New_Salem">America/North_Dakota/New_Salem</option> <option value="America/Ojinaga">America/Ojinaga</option> <option value="America/Panama">America/Panama</option> <option value="America/Pangnirtung">America/Pangnirtung</option> <option value="America/Paramaribo">America/Paramaribo</option> <option value="America/Phoenix">America/Phoenix</option> <option value="America/Port-au-Prince">America/Port-au-Prince</option> <option value="America/Port_of_Spain">America/Port_of_Spain</option> <option value="America/Porto_Acre">America/Porto_Acre</option> <option value="America/Porto_Velho">America/Porto_Velho</option> <option value="America/Puerto_Rico">America/Puerto_Rico</option> <option value="America/Punta_Arenas">America/Punta_Arenas</option> <option value="America/Rainy_River">America/Rainy_River</option> <option value="America/Rankin_Inlet">America/Rankin_Inlet</option> <option value="America/Recife">America/Recife</option> <option value="America/Regina">America/Regina</option> <option value="America/Resolute">America/Resolute</option> <option value="America/Rio_Branco">America/Rio_Branco</option> <option value="America/Rosario">America/Rosario</option> <option value="America/Santa_Isabel">America/Santa_Isabel</option> <option value="America/Santarem">America/Santarem</option> <option value="America/Santiago">America/Santiago</option> <option value="America/Santo_Domingo">America/Santo_Domingo</option> <option value="America/Sao_Paulo">America/Sao_Paulo</option> <option value="America/Scoresbysund">America/Scoresbysund</option> <option value="America/Shiprock">America/Shiprock</option> <option value="America/Sitka">America/Sitka</option> <option value="America/St_Barthelemy">America/St_Barthelemy</option> <option value="America/St_Johns">America/St_Johns</option> <option value="America/St_Kitts">America/St_Kitts</option> <option value="America/St_Lucia">America/St_Lucia</option> <option value="America/St_Thomas">America/St_Thomas</option> <option value="America/St_Vincent">America/St_Vincent</option> <option value="America/Swift_Current">America/Swift_Current</option> <option value="America/Tegucigalpa">America/Tegucigalpa</option> <option value="America/Thule">America/Thule</option> <option value="America/Thunder_Bay">America/Thunder_Bay</option> <option value="America/Tijuana">America/Tijuana</option> <option value="America/Toronto">America/Toronto</option> <option value="America/Tortola">America/Tortola</option> <option value="America/Vancouver">America/Vancouver</option> <option value="America/Virgin">America/Virgin</option> <option value="America/Whitehorse">America/Whitehorse</option> <option value="America/Winnipeg">America/Winnipeg</option> <option value="America/Yakutat">America/Yakutat</option> <option value="America/Yellowknife">America/Yellowknife</option> <option value="Antarctica/Casey">Antarctica/Casey</option> <option value="Antarctica/Davis">Antarctica/Davis</option> <option value="Antarctica/DumontDUrville">Antarctica/DumontDUrville</option> <option value="Antarctica/Macquarie">Antarctica/Macquarie</option> <option value="Antarctica/Mawson">Antarctica/Mawson</option> <option value="Antarctica/McMurdo">Antarctica/McMurdo</option> <option value="Antarctica/Palmer">Antarctica/Palmer</option> <option value="Antarctica/Rothera">Antarctica/Rothera</option> <option value="Antarctica/South_Pole">Antarctica/South_Pole</option> <option value="Antarctica/Syowa">Antarctica/Syowa</option> <option value="Antarctica/Troll">Antarctica/Troll</option> <option value="Antarctica/Vostok">Antarctica/Vostok</option> <option value="Arctic/Longyearbyen">Arctic/Longyearbyen</option> <option value="Asia/Aden">Asia/Aden</option> <option value="Asia/Almaty">Asia/Almaty</option> <option value="Asia/Amman">Asia/Amman</option> <option value="Asia/Anadyr">Asia/Anadyr</option> <option value="Asia/Aqtau">Asia/Aqtau</option> <option value="Asia/Aqtobe">Asia/Aqtobe</option> <option value="Asia/Ashgabat">Asia/Ashgabat</option> <option value="Asia/Ashkhabad">Asia/Ashkhabad</option> <option value="Asia/Atyrau">Asia/Atyrau</option> <option value="Asia/Baghdad">Asia/Baghdad</option> <option value="Asia/Bahrain">Asia/Bahrain</option> <option value="Asia/Baku">Asia/Baku</option> <option value="Asia/Bangkok">Asia/Bangkok</option> <option value="Asia/Barnaul">Asia/Barnaul</option> <option value="Asia/Beirut">Asia/Beirut</option> <option value="Asia/Bishkek">Asia/Bishkek</option> <option value="Asia/Brunei">Asia/Brunei</option> <option value="Asia/Calcutta">Asia/Calcutta</option> <option value="Asia/Chita">Asia/Chita</option> <option value="Asia/Choibalsan">Asia/Choibalsan</option> <option value="Asia/Chongqing">Asia/Chongqing</option> <option value="Asia/Chungking">Asia/Chungking</option> <option value="Asia/Colombo">Asia/Colombo</option> <option value="Asia/Dacca">Asia/Dacca</option> <option value="Asia/Damascus">Asia/Damascus</option> <option value="Asia/Dhaka">Asia/Dhaka</option> <option value="Asia/Dili">Asia/Dili</option> <option value="Asia/Dubai">Asia/Dubai</option> <option value="Asia/Dushanbe">Asia/Dushanbe</option> <option value="Asia/Famagusta">Asia/Famagusta</option> <option value="Asia/Gaza">Asia/Gaza</option> <option value="Asia/Harbin">Asia/Harbin</option> <option value="Asia/Hebron">Asia/Hebron</option> <option value="Asia/Ho_Chi_Minh">Asia/Ho_Chi_Minh</option> <option value="Asia/Hong_Kong">Asia/Hong_Kong</option> <option value="Asia/Hovd">Asia/Hovd</option> <option value="Asia/Irkutsk">Asia/Irkutsk</option> <option value="Asia/Istanbul">Asia/Istanbul</option> <option value="Asia/Jakarta">Asia/Jakarta</option> <option value="Asia/Jayapura">Asia/Jayapura</option> <option value="Asia/Jerusalem">Asia/Jerusalem</option> <option value="Asia/Kabul">Asia/Kabul</option> <option value="Asia/Kamchatka">Asia/Kamchatka</option> <option value="Asia/Karachi">Asia/Karachi</option> <option value="Asia/Kashgar">Asia/Kashgar</option> <option value="Asia/Kathmandu">Asia/Kathmandu</option> <option value="Asia/Katmandu">Asia/Katmandu</option> <option value="Asia/Khandyga">Asia/Khandyga</option> <option value="Asia/Kolkata">Asia/Kolkata</option> <option value="Asia/Krasnoyarsk">Asia/Krasnoyarsk</option> <option value="Asia/Kuala_Lumpur">Asia/Kuala_Lumpur</option> <option value="Asia/Kuching">Asia/Kuching</option> <option value="Asia/Kuwait">Asia/Kuwait</option> <option value="Asia/Macao">Asia/Macao</option> <option value="Asia/Macau">Asia/Macau</option> <option value="Asia/Magadan">Asia/Magadan</option> <option value="Asia/Makassar">Asia/Makassar</option> <option value="Asia/Manila">Asia/Manila</option> <option value="Asia/Muscat">Asia/Muscat</option> <option value="Asia/Nicosia">Asia/Nicosia</option> <option value="Asia/Novokuznetsk">Asia/Novokuznetsk</option> <option value="Asia/Novosibirsk">Asia/Novosibirsk</option> <option value="Asia/Omsk">Asia/Omsk</option> <option value="Asia/Oral">Asia/Oral</option> <option value="Asia/Phnom_Penh">Asia/Phnom_Penh</option> <option value="Asia/Pontianak">Asia/Pontianak</option> <option value="Asia/Pyongyang">Asia/Pyongyang</option> <option value="Asia/Qatar">Asia/Qatar</option> <option value="Asia/Qostanay">Asia/Qostanay</option> <option value="Asia/Qyzylorda">Asia/Qyzylorda</option> <option value="Asia/Rangoon">Asia/Rangoon</option> <option value="Asia/Riyadh">Asia/Riyadh</option> <option value="Asia/Saigon">Asia/Saigon</option> <option value="Asia/Sakhalin">Asia/Sakhalin</option> <option value="Asia/Samarkand">Asia/Samarkand</option> <option value="Asia/Seoul">Asia/Seoul</option> <option value="Asia/Shanghai">Asia/Shanghai</option> <option value="Asia/Singapore">Asia/Singapore</option> <option value="Asia/Srednekolymsk">Asia/Srednekolymsk</option> <option value="Asia/Taipei">Asia/Taipei</option> <option value="Asia/Tashkent">Asia/Tashkent</option> <option value="Asia/Tbilisi">Asia/Tbilisi</option> <option value="Asia/Tehran">Asia/Tehran</option> <option value="Asia/Tel_Aviv">Asia/Tel_Aviv</option> <option value="Asia/Thimbu">Asia/Thimbu</option> <option value="Asia/Thimphu">Asia/Thimphu</option> <option value="Asia/Tokyo">Asia/Tokyo</option> <option value="Asia/Tomsk">Asia/Tomsk</option> <option value="Asia/Ujung_Pandang">Asia/Ujung_Pandang</option> <option value="Asia/Ulaanbaatar">Asia/Ulaanbaatar</option> <option value="Asia/Ulan_Bator">Asia/Ulan_Bator</option> <option value="Asia/Urumqi">Asia/Urumqi</option> <option value="Asia/Ust-Nera">Asia/Ust-Nera</option> <option value="Asia/Vientiane">Asia/Vientiane</option> <option value="Asia/Vladivostok">Asia/Vladivostok</option> <option value="Asia/Yakutsk">Asia/Yakutsk</option> <option value="Asia/Yangon">Asia/Yangon</option> <option value="Asia/Yekaterinburg">Asia/Yekaterinburg</option> <option value="Asia/Yerevan">Asia/Yerevan</option> <option value="Atlantic/Azores">Atlantic/Azores</option> <option value="Atlantic/Bermuda">Atlantic/Bermuda</option> <option value="Atlantic/Canary">Atlantic/Canary</option> <option value="Atlantic/Cape_Verde">Atlantic/Cape_Verde</option> <option value="Atlantic/Faeroe">Atlantic/Faeroe</option> <option value="Atlantic/Faroe">Atlantic/Faroe</option> <option value="Atlantic/Jan_Mayen">Atlantic/Jan_Mayen</option> <option value="Atlantic/Madeira">Atlantic/Madeira</option> <option value="Atlantic/Reykjavik">Atlantic/Reykjavik</option> <option value="Atlantic/South_Georgia">Atlantic/South_Georgia</option> <option value="Atlantic/St_Helena">Atlantic/St_Helena</option> <option value="Atlantic/Stanley">Atlantic/Stanley</option> <option value="Australia/ACT">Australia/ACT</option> <option value="Australia/Adelaide">Australia/Adelaide</option> <option value="Australia/Brisbane">Australia/Brisbane</option> <option value="Australia/Broken_Hill">Australia/Broken_Hill</option> <option value="Australia/Canberra">Australia/Canberra</option> <option value="Australia/Currie">Australia/Currie</option> <option value="Australia/Darwin">Australia/Darwin</option> <option value="Australia/Eucla">Australia/Eucla</option> <option value="Australia/Hobart">Australia/Hobart</option> <option value="Australia/LHI">Australia/LHI</option> <option value="Australia/Lindeman">Australia/Lindeman</option> <option value="Australia/Lord_Howe">Australia/Lord_Howe</option> <option value="Australia/Melbourne">Australia/Melbourne</option> <option value="Australia/NSW">Australia/NSW</option> <option value="Australia/North">Australia/North</option> <option value="Australia/Perth">Australia/Perth</option> <option value="Australia/Queensland">Australia/Queensland</option> <option value="Australia/South">Australia/South</option> <option value="Australia/Sydney">Australia/Sydney</option> <option value="Australia/Tasmania">Australia/Tasmania</option> <option value="Australia/Victoria">Australia/Victoria</option> <option value="Australia/West">Australia/West</option> <option value="Australia/Yancowinna">Australia/Yancowinna</option> <option value="Brazil/Acre">Brazil/Acre</option> <option value="Brazil/DeNoronha">Brazil/DeNoronha</option> <option value="Brazil/East">Brazil/East</option> <option value="Brazil/West">Brazil/West</option> <option value="CET">CET</option> <option value="CST6CDT">CST6CDT</option> <option value="Canada/Atlantic">Canada/Atlantic</option> <option value="Canada/Central">Canada/Central</option> <option value="Canada/Eastern">Canada/Eastern</option> <option value="Canada/Mountain">Canada/Mountain</option> <option value="Canada/Newfoundland">Canada/Newfoundland</option> <option value="Canada/Pacific">Canada/Pacific</option> <option value="Canada/Saskatchewan">Canada/Saskatchewan</option> <option value="Canada/Yukon">Canada/Yukon</option> <option value="Chile/Continental">Chile/Continental</option> <option value="Chile/EasterIsland">Chile/EasterIsland</option> <option value="Cuba">Cuba</option> <option value="EET">EET</option> <option value="EST5EDT">EST5EDT</option> <option value="Egypt">Egypt</option> <option value="Eire">Eire</option> <option value="Etc/GMT">Etc/GMT</option> <option value="Etc/GMT+0">Etc/GMT+0</option> <option value="Etc/GMT+1">Etc/GMT+1</option> <option value="Etc/GMT+10">Etc/GMT+10</option> <option value="Etc/GMT+11">Etc/GMT+11</option> <option value="Etc/GMT+12">Etc/GMT+12</option> <option value="Etc/GMT+2">Etc/GMT+2</option> <option value="Etc/GMT+3">Etc/GMT+3</option> <option value="Etc/GMT+4">Etc/GMT+4</option> <option value="Etc/GMT+5">Etc/GMT+5</option> <option value="Etc/GMT+6">Etc/GMT+6</option> <option value="Etc/GMT+7">Etc/GMT+7</option> <option value="Etc/GMT+8">Etc/GMT+8</option> <option value="Etc/GMT+9">Etc/GMT+9</option> <option value="Etc/GMT-0">Etc/GMT-0</option> <option value="Etc/GMT-1">Etc/GMT-1</option> <option value="Etc/GMT-10">Etc/GMT-10</option> <option value="Etc/GMT-11">Etc/GMT-11</option> <option value="Etc/GMT-12">Etc/GMT-12</option> <option value="Etc/GMT-13">Etc/GMT-13</option> <option value="Etc/GMT-14">Etc/GMT-14</option> <option value="Etc/GMT-2">Etc/GMT-2</option> <option value="Etc/GMT-3">Etc/GMT-3</option> <option value="Etc/GMT-4">Etc/GMT-4</option> <option value="Etc/GMT-5">Etc/GMT-5</option> <option value="Etc/GMT-6">Etc/GMT-6</option> <option value="Etc/GMT-7">Etc/GMT-7</option> <option value="Etc/GMT-8">Etc/GMT-8</option> <option value="Etc/GMT-9">Etc/GMT-9</option> <option value="Etc/GMT0">Etc/GMT0</option> <option value="Etc/Greenwich">Etc/Greenwich</option> <option value="Etc/UCT">Etc/UCT</option> <option value="Etc/UTC">Etc/UTC</option> <option value="Etc/Universal">Etc/Universal</option> <option value="Etc/Zulu">Etc/Zulu</option> <option value="Europe/Amsterdam">Europe/Amsterdam</option> <option value="Europe/Andorra">Europe/Andorra</option> <option value="Europe/Astrakhan">Europe/Astrakhan</option> <option value="Europe/Athens">Europe/Athens</option> <option value="Europe/Belfast">Europe/Belfast</option> <option value="Europe/Belgrade">Europe/Belgrade</option> <option value="Europe/Berlin">Europe/Berlin</option> <option value="Europe/Bratislava">Europe/Bratislava</option> <option value="Europe/Brussels">Europe/Brussels</option> <option value="Europe/Bucharest">Europe/Bucharest</option> <option value="Europe/Budapest">Europe/Budapest</option> <option value="Europe/Busingen">Europe/Busingen</option> <option value="Europe/Chisinau">Europe/Chisinau</option> <option value="Europe/Copenhagen">Europe/Copenhagen</option> <option value="Europe/Dublin">Europe/Dublin</option> <option value="Europe/Gibraltar">Europe/Gibraltar</option> <option value="Europe/Guernsey">Europe/Guernsey</option> <option value="Europe/Helsinki">Europe/Helsinki</option> <option value="Europe/Isle_of_Man">Europe/Isle_of_Man</option> <option value="Europe/Istanbul">Europe/Istanbul</option> <option value="Europe/Jersey">Europe/Jersey</option> <option value="Europe/Kaliningrad">Europe/Kaliningrad</option> <option value="Europe/Kiev">Europe/Kiev</option> <option value="Europe/Kirov">Europe/Kirov</option> <option value="Europe/Lisbon">Europe/Lisbon</option> <option value="Europe/Ljubljana">Europe/Ljubljana</option> <option value="Europe/London">Europe/London</option> <option value="Europe/Luxembourg">Europe/Luxembourg</option> <option value="Europe/Madrid">Europe/Madrid</option> <option value="Europe/Malta">Europe/Malta</option> <option value="Europe/Mariehamn">Europe/Mariehamn</option> <option value="Europe/Minsk">Europe/Minsk</option> <option value="Europe/Monaco">Europe/Monaco</option> <option value="Europe/Moscow">Europe/Moscow</option> <option value="Europe/Nicosia">Europe/Nicosia</option> <option value="Europe/Oslo">Europe/Oslo</option> <option value="Europe/Paris">Europe/Paris</option> <option value="Europe/Podgorica">Europe/Podgorica</option> <option value="Europe/Prague">Europe/Prague</option> <option value="Europe/Riga">Europe/Riga</option> <option value="Europe/Rome">Europe/Rome</option> <option value="Europe/Samara">Europe/Samara</option> <option value="Europe/San_Marino">Europe/San_Marino</option> <option value="Europe/Sarajevo">Europe/Sarajevo</option> <option value="Europe/Saratov">Europe/Saratov</option> <option value="Europe/Simferopol">Europe/Simferopol</option> <option value="Europe/Skopje">Europe/Skopje</option> <option value="Europe/Sofia">Europe/Sofia</option> <option value="Europe/Stockholm">Europe/Stockholm</option> <option value="Europe/Tallinn">Europe/Tallinn</option> <option value="Europe/Tirane">Europe/Tirane</option> <option value="Europe/Tiraspol">Europe/Tiraspol</option> <option value="Europe/Ulyanovsk">Europe/Ulyanovsk</option> <option value="Europe/Uzhgorod">Europe/Uzhgorod</option> <option value="Europe/Vaduz">Europe/Vaduz</option> <option value="Europe/Vatican">Europe/Vatican</option> <option value="Europe/Vienna">Europe/Vienna</option> <option value="Europe/Vilnius">Europe/Vilnius</option> <option value="Europe/Volgograd">Europe/Volgograd</option> <option value="Europe/Warsaw">Europe/Warsaw</option> <option value="Europe/Zagreb">Europe/Zagreb</option> <option value="Europe/Zaporozhye">Europe/Zaporozhye</option> <option value="Europe/Zurich">Europe/Zurich</option> <option value="GB">GB</option> <option value="GB-Eire">GB-Eire</option> <option value="GMT">GMT</option> <option value="GMT0">GMT0</option> <option value="Greenwich">Greenwich</option> <option value="Hongkong">Hongkong</option> <option value="Iceland">Iceland</option> <option value="Indian/Antananarivo">Indian/Antananarivo</option> <option value="Indian/Chagos">Indian/Chagos</option> <option value="Indian/Christmas">Indian/Christmas</option> <option value="Indian/Cocos">Indian/Cocos</option> <option value="Indian/Comoro">Indian/Comoro</option> <option value="Indian/Kerguelen">Indian/Kerguelen</option> <option value="Indian/Mahe">Indian/Mahe</option> <option value="Indian/Maldives">Indian/Maldives</option> <option value="Indian/Mauritius">Indian/Mauritius</option> <option value="Indian/Mayotte">Indian/Mayotte</option> <option value="Indian/Reunion">Indian/Reunion</option> <option value="Iran">Iran</option> <option value="Israel">Israel</option> <option value="Jamaica">Jamaica</option> <option value="Japan">Japan</option> <option value="Kwajalein">Kwajalein</option> <option value="Libya">Libya</option> <option value="MET">MET</option> <option value="MST7MDT">MST7MDT</option> <option value="Mexico/BajaNorte">Mexico/BajaNorte</option> <option value="Mexico/BajaSur">Mexico/BajaSur</option> <option value="Mexico/General">Mexico/General</option> <option value="NZ">NZ</option> <option value="NZ-CHAT">NZ-CHAT</option> <option value="Navajo">Navajo</option> <option value="PRC">PRC</option> <option value="PST8PDT">PST8PDT</option> <option value="Pacific/Apia">Pacific/Apia</option> <option value="Pacific/Auckland">Pacific/Auckland</option> <option value="Pacific/Bougainville">Pacific/Bougainville</option> <option value="Pacific/Chatham">Pacific/Chatham</option> <option value="Pacific/Chuuk">Pacific/Chuuk</option> <option value="Pacific/Easter">Pacific/Easter</option> <option value="Pacific/Efate">Pacific/Efate</option> <option value="Pacific/Enderbury">Pacific/Enderbury</option> <option value="Pacific/Fakaofo">Pacific/Fakaofo</option> <option value="Pacific/Fiji">Pacific/Fiji</option> <option value="Pacific/Funafuti">Pacific/Funafuti</option> <option value="Pacific/Galapagos">Pacific/Galapagos</option> <option value="Pacific/Gambier">Pacific/Gambier</option> <option value="Pacific/Guadalcanal">Pacific/Guadalcanal</option> <option value="Pacific/Guam">Pacific/Guam</option> <option value="Pacific/Honolulu">Pacific/Honolulu</option> <option value="Pacific/Johnston">Pacific/Johnston</option> <option value="Pacific/Kiritimati">Pacific/Kiritimati</option> <option value="Pacific/Kosrae">Pacific/Kosrae</option> <option value="Pacific/Kwajalein">Pacific/Kwajalein</option> <option value="Pacific/Majuro">Pacific/Majuro</option> <option value="Pacific/Marquesas">Pacific/Marquesas</option> <option value="Pacific/Midway">Pacific/Midway</option> <option value="Pacific/Nauru">Pacific/Nauru</option> <option value="Pacific/Niue">Pacific/Niue</option> <option value="Pacific/Norfolk">Pacific/Norfolk</option> <option value="Pacific/Noumea">Pacific/Noumea</option> <option value="Pacific/Pago_Pago">Pacific/Pago_Pago</option> <option value="Pacific/Palau">Pacific/Palau</option> <option value="Pacific/Pitcairn">Pacific/Pitcairn</option> <option value="Pacific/Pohnpei">Pacific/Pohnpei</option> <option value="Pacific/Ponape">Pacific/Ponape</option> <option value="Pacific/Port_Moresby">Pacific/Port_Moresby</option> <option value="Pacific/Rarotonga">Pacific/Rarotonga</option> <option value="Pacific/Saipan">Pacific/Saipan</option> <option value="Pacific/Samoa">Pacific/Samoa</option> <option value="Pacific/Tahiti">Pacific/Tahiti</option> <option value="Pacific/Tarawa">Pacific/Tarawa</option> <option value="Pacific/Tongatapu">Pacific/Tongatapu</option> <option value="Pacific/Truk">Pacific/Truk</option> <option value="Pacific/Wake">Pacific/Wake</option> <option value="Pacific/Wallis">Pacific/Wallis</option> <option value="Pacific/Yap">Pacific/Yap</option> <option value="Poland">Poland</option> <option value="Portugal">Portugal</option> <option value="ROK">ROK</option> <option value="Singapore">Singapore</option> <option value="SystemV/AST4">SystemV/AST4</option> <option value="SystemV/AST4ADT">SystemV/AST4ADT</option> <option value="SystemV/CST6">SystemV/CST6</option> <option value="SystemV/CST6CDT">SystemV/CST6CDT</option> <option value="SystemV/EST5">SystemV/EST5</option> <option value="SystemV/EST5EDT">SystemV/EST5EDT</option> <option value="SystemV/HST10">SystemV/HST10</option> <option value="SystemV/MST7">SystemV/MST7</option> <option value="SystemV/MST7MDT">SystemV/MST7MDT</option> <option value="SystemV/PST8">SystemV/PST8</option> <option value="SystemV/PST8PDT">SystemV/PST8PDT</option> <option value="SystemV/YST9">SystemV/YST9</option> <option value="SystemV/YST9YDT">SystemV/YST9YDT</option> <option value="Turkey">Turkey</option> <option value="UCT">UCT</option> <option value="US/Alaska">US/Alaska</option> <option value="US/Aleutian">US/Aleutian</option> <option value="US/Arizona">US/Arizona</option> <option value="US/Central">US/Central</option> <option value="US/East-Indiana">US/East-Indiana</option> <option value="US/Eastern">US/Eastern</option> <option value="US/Hawaii">US/Hawaii</option> <option value="US/Indiana-Starke">US/Indiana-Starke</option> <option value="US/Michigan">US/Michigan</option> <option value="US/Mountain">US/Mountain</option> <option value="US/Pacific">US/Pacific</option> <option value="US/Pacific-New">US/Pacific-New</option> <option value="US/Samoa">US/Samoa</option> <option value="UTC">UTC</option> <option value="Universal">Universal</option> <option value="W-SU">W-SU</option> <option value="WET">WET</option> <option value="Zulu">Zulu</option> <option value="EST">EST</option> <option value="HST">HST</option> <option value="MST">MST</option></select></div></div><div id="prompt_footer"><button id="set_timezone_prompt_button" onclick="SetTimezone()"; type="button">Submit</button></div>';
		document.body.appendChild(timezonebox);
}

function SetTimezone()
{
	var settimezone = document.getElementById("settimezone").value;
	var params = 'settimezone='+encodeURIComponent(settimezone);
	httpRequest = new XMLHttpRequest();
	httpRequest.open('POST', 'SetTimezone.php', true);
	httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	httpRequest.onreadystatechange = function() {
		if(httpRequest.readyState == 4 && httpRequest.status == 200) {
			alert(httpRequest.responseText);
			var prompt = document.getElementsByClassName("closeable_prompt_overlay");
			prompt[0].remove();
		}
	}

	httpRequest.send(params);
}

function StartServerDetection()
{
	httpRequest = new XMLHttpRequest();
	httpRequest.open('GET', '/index.php?page=serverdetection&start=true', true);
	httpRequest.send();

	serviceRequest = new XMLHttpRequest();
	serviceRequest.open('GET', 'services.php?name=server-detection', true);
	serviceRequest.send();
	var logRefresh = setInterval(function() {
		serviceRequest.open('GET', 'services.php?name=server-detection', true);
		serviceRequest.send();
		serviceRequest.onreadystatechange = function() {
			if(serviceRequest.readyState == 4 && serviceRequest.status == 200)
			{
				logRequest = new XMLHttpRequest();
				logRequest.open('GET', 'logs.php?name=server-detection', true);
				logRequest.send();

				logRequest.onreadystatechange = function() {
					if(logRequest.readyState == 4 && logRequest.status == 200)
					{
						document.getElementById("log_output").innerHTML = logRequest.responseText;
					}
				}

				if(serviceRequest.responseText == 'stopped')
				{
					clearInterval(logRefresh);
				}
			}
		}
	}, 1000)
}
