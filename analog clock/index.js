setInterval(() => {
    let d=new Date();
    let hours=d.getHours();
    let min=d.getMinutes();
    let sec=d.getSeconds();
    hrot=(30*hours)+(min/2);
    mrot=6*min;
    srot=6*sec;
    


    hour.style.transform=`rotate(${hrot}deg)`;
    minute.style.transform=`rotate(${mrot}deg)`;
    second.style.transform=`rotate(${srot}deg)`;
}, 1000);