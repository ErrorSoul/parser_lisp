var Sniffer = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || '';
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| false;
		this.os = this.searchString(this.dataOS) || '';
		this.osVersion = this.searchOSVersion(navigator.userAgent)
			|| this.searchVersion(navigator.platform)
			|| false;
		this.setClasses();
	},
	setClasses: function() {
		var tag = document.getElementsByTagName('html')[0];
		var classNames = [tag.className, this.browser, this.os].join(' ');

		if (this.browser != 'ie') classNames += ' no-ie';
		if (this.os == 'android' && this.osVersion <= 2.3) classNames += ' android-old';
		if (this.os == 'kindle' || (this.os == 'winphone' && this.osVersion < 8)) {
			classNames = classNames.replace('fontface','no-fontface');
		}

		tag.className = classNames;
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	searchOSVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "omniweb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "safari",
			versionSearch: "Version"
		},
		{
			string: navigator.userAgent,
			subString: "WebKit",
			identity: "webkit"
		},
		{
			prop: window.opera,
			identity: "opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "icab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "ie",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "mozilla",
			versionSearch: "rv"
		},
		{		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.userAgent,
			subString: "Windows Phone",
			identity: "winphone",
			versionSearch: "Windows Phone"
		},
		{
			string: navigator.platform,
			subString: "Win",
			identity: "win"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "mac"
		},
		{
			string: navigator.userAgent,
			subString: "iPhone",
			identity: "ios"
		},
		{
			string: navigator.userAgent,
			subString: "Android",
			identity: "android",
			versionSearch: "Android"
		},
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "linux"
		},
		{
			string: navigator.userAgent,
			subString: "Kindle",
			identity: "kindle"
		}
	]
};

Sniffer.init();