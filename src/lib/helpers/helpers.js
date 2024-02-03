export function convertTimeStamp(time){

    /* Due to less time i did it in a bad way */
    const timestamp = time;
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = date.getMonth();
    const res = date.toLocaleDateString('en-US', { day:"numeric", month:"long"})
    const sp = res.split(" ")
    return sp;
}

export function stringShortener(str,len=10){
    let newStr = "";
    for(let i=0;i<len;i++){
        newStr+=str[i]
    }
    let res = newStr;
    newStr="";
    return res+"...";
}