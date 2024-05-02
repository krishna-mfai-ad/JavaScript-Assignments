var arr=[1,2,3,3,4,5]
var ans=[]
for(var i=0;i<arr.length;i++){
    if(arr[i]!=arr[i+1]){
        ans+=arr[i]
    }
}
console.log(ans);
