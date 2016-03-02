/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var prevId = 'main';
var tabName = "Tabs";
var tabExpires = 5;

if (detectMobile())
{
    print("Mobile Mode");
    switchCss("mobile");
}
else
{
    print("Browser Mode");
    switchCss("browser");
}
window.onload = function()
{
	if (getCookie(tabName) === "")
	{
	    print("No Cookie Found starting One with Id: " + prevId);
	    setCookie(tabName, prevId, tabExpires);
	}
	setupTabs();
	
    if (window.addEventListener) {
    	window.addEventListener("keydown",keyChange);
    }
};
function keyChange(event) {
	switch(event.keyCode) {
		case 65:
			changePage('about');
			break;
		case 77:
			changePage('main');
			break;
		case 80:
			changePage('portfolio');
			break;
		case 68:
			changePage('documents');
			break;
	}
}
function print(x)
{
    console.log(x);
}
function setupTabs()
{
    prevId = getCookie(tabName);

    var childTabs = document.getElementById('tabs').childNodes;
    var childContent = document.getElementById('tabsContent').childNodes;
    for (var i = 0; i < childTabs.length; i++)
    {
        if (childTabs[i].id !== undefined && childTabs[i].id !== null)
        {

            if (childTabs[i].id === prevId + 'Tab')
            {
                childTabs[i].className = "selectedTab";
            }
            else
            {
                childTabs[i].className = "unselectedTab";
            }
        }
    }
    for (var i = 0; i < childContent.length; i++)
    {
        if (childContent[i].id !== undefined && childContent[i].id !== null)
        {
            if (childContent[i].id === prevId)
            {
                childContent[i].className = "selectedContent";
            }
            else
            {
                childContent[i].className = "unselectedContent";
            }
        }
    }
}
function setCookie(cname, cvalue, exdays)
{
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++)
    {
        var c = ca[i].trim();
        if (c.indexOf(name) === 0)
            return c.substring(name.length, c.length);
    }
    return "";
}
function changePage(curId)
{
    prevId = getCookie(tabName);
    if (curId === prevId)
        return;
    var prevTabId = prevId + 'Tab';
    var curTabId = curId + 'Tab';

    var prevTab = document.getElementById(prevTabId);
    var curTab = document.getElementById(curTabId);
    var prevTabContent = document.getElementById(prevId);
    var curTabContent = document.getElementById(curId);
    prevTabContent.style.display = 'none';
    curTabContent.style.display = 'block';
    setCookie(tabName, curId, tabExpires);
    curTab.className = "selectedTab";
    prevTab.className = prevTab.className.replace("selectedTab", "unselectedTab");

    prevId = curId;
}
function destroyCookie()
{
    document.cookie = "";
}
function switchCss(sheet)
{
    var i;
    var tag = document.getElementsByTagName("link");
    for (i = 0; i < tag.length; i++)
    {
        if (tag[i].rel.indexOf("stylesheet") !== -1 && tag[i].title)
        {
            if (tag[i].title === sheet)
            {
                tag[i].disabled = false;
            }
            else
            {
                tag[i].disabled = true;
            }
        }
        //print(tag[i].title+":"+sheet+" dis:"+tag[i].disabled);
    }
}
function detectMobile()
{
    var uagent = navigator.userAgent.toLocaleLowerCase();
    var devices = ["iphone", "ipod", "palm", "android", "windows phone"];
    for (var i = 0; i < devices.length; i++)
    {
        if (uagent.search(devices[i]) > -1)
            return true;
        else
            return false;
    }
}

