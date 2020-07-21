function updateObjectWithKeyAndValue(o,k,v){
  return o=Object.assign({},o,{[k]:v})
}
function destructivelyUpdateObjectWithKeyAndValue(o,k,v){
  o[k]=v
  return o
}
function deleteFromObjectByKey(o,k){
  
}
