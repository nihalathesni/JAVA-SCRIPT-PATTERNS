var a=" "


for(i=1;i<=5;1++){
    a=" "
    for(j=4;j>=i;j--){
        a=a+" "
    }
    for(k=1;k<=i;k++){
        a=a+"*"
    }

    console.log(a)
}