const csvToJson = (csv, debug) => {

  const start = 0;
  
  const lines=csv.split("\r\n");
  const result = [];
  const headers=lines[start].trim().split(",");
  

  for(let i=(start);i<lines.length;i++){
    const obj = {};

    const currentline = handleCommas(lines[i])

    //const currentline=lines[i].split(",");
    
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

const handleCommas = (str) => {
  let s = '';
  let flag = 0
  for (let ch of str) {
    
    if (ch === '"' && flag === 0) {
      flag = 1
    }
    else if (ch === '"' && flag == 1) flag = 0
    if (ch === ',' && flag === 0) ch = '|'
    if (ch !== '"') s += ch
  }
  let properties = s.split("|")
  return properties;
}


export default csvToJson;