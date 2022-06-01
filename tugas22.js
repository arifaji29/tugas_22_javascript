function panggilforEach(){
    var data = "Saya ingin belajar bersama"
    var result = data.split(" ");
    return result.forEach(function(item,index){
       console.log("item:", item,"index ke", index);
    //    console.log(array);
    })
}
    panggilforEach()