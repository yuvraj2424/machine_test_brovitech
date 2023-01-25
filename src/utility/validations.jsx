
export const formValidation =(params)=>{
  const fields =Object.entries(params);
  var errorData = [];
  for(var i = 0 ; i < fields.length;i++){
      if(fields[i][1] == "" || Object.keys(fields[i][1]).length == 0){
          errorData.push({
              "name":fields[i][0],
              "value": `Please enter ${fields[i][0]}`
          })
      }

      if(fields[i][1] != "" && fields[i][0] == "email" && (fields[i][1].indexOf("@")<1 || fields[i][1].lastIndexOf(".")<fields[i][1].indexOf("@")+2 || fields[i][1].lastIndexOf(".")+2>=fields[i][1].length)){
          errorData.push({
              "name":fields[i][0],
              "value": `Please enter valid email`
          })
      }
  }
  return errorData;
}
