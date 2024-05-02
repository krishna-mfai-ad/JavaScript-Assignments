var a=[1,2,3,4]
var b=[3,4,5,6]
var ans=[]
for (let i = 0; i < a.length; i++) {
    for (let j = 0;j < b.length; j++) {
        if(a[i]==b[j])
            ans.push(a[i])
    }   
}
console.log(ans);