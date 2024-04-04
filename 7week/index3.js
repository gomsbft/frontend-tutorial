function checkSpam(str) {
    let tempStr = str.toLowerCase();
    tempStr.includes('xxx');
    tempStr.includes('viagra');
    
}

checkSpam('buy ViAgRA now') == true;
checkSpam('free xxxx') == true;
checkSpam('innocent rabbit') == false;