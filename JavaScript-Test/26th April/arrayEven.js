var arr=[1,2,3,4,5,6]
var ans=[]
for(var i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        ans+=arr[i]
    }
}
console.log(ans)