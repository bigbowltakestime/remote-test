function findUserAndCallBack(id, cd){
  const user = {
    id : id,
    name : "user" + id,
    email : id + "@test.com"

  };
  cd(user);
}

findUserAndCallBack(1,function(user){
  console.log("user:" ,user);
});