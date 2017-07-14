chrome.browserAction.onClicked.addListener(function(tab) {
	  // No tabs or host permissions needed!
	  chrome.tabs.executeScript({
                  code: '\
                        if(document.getElementById("ifr")){\
                                var ifr = document.getElementById("ifr");\
                                document.body.removeChild(ifr);\
                        }else{\
                                var iframe = document.createElement("iframe");\
                                iframe.setAttribute("src", "https://m.timepill.net");\
                                iframe.setAttribute("frameborder", "0");\
                                iframe.setAttribute("id", "ifr");\
                                iframe.setAttribute("width", "360px");\
                                iframe.setAttribute("height", "580px");\
                                iframe.style.position = "fixed";\
                                iframe.style.top = "30px";\
                                iframe.style.right = "30px";\
                                iframe.style.background = "#fff";\
                                iframe.style.boxShadow = "0px 2px 10px rgba(0,0,0,0.3)";\
                                iframe.style.border = "1px solid #eee";\
                                iframe.style.zIndex = "9999";\
                                document.body.append(iframe)\
                        }\
                '
	  });
	});