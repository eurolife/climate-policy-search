const csvToJson = (csv, debug) => {

  const start = 0;
  
  const lines=csv.split("\r\n");
  const result = [];
  const headers=lines[start].trim().split(",");
  

  for(let i=(start);i<lines.length;i++){
    const obj = {};

    const currentline=lines[i].split(",");
    
    if(currentline[0].length > 0 && i > 0){
      
      for(let j=0;j<headers.length;j++){
        if(debug){
          console.log(headers[j] + '------------');
          console.log(currentline[j]);
        }
        obj[headers[j]] = currentline[j]?.replace(/"/g, '').replace(/[^\x00-\x7F]/g, "");
        // add empty metadata
        obj['organisation'] = '';
        obj['location'] = '';
        obj['date'] = '';
        obj['concerns'] = '';


      }
      result.push(obj);
    }
	  
  }
  return result;
};
export default csvToJson;