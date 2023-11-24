import React,{ useState ,useEffect}  from "react";

export default function Erreurs(props)
{
  /*  var list = props.validation.map((item) => {
        <li key={item}>{item}</li>
   })  */ 
   
   var data = props.validation; 
   
   if(Array.isArray(data))
   {
    var list = data.map((item,index) => (
      <li key={index} className = 'error-msg'>{item.message}</li>
    ));
    return (
        <div className="alert alert-danger print-error-msg"> 
            <ul style={{listStyle :'number',paddingLeft:'5px'}}>
               {list}
            </ul>
        </div>);
   }
   else if(typeof data === 'object'){
    var list = Object.entries(data).map(([key, value]) => (
        <li key={key} className = 'error-msg'>{value}</li>
      ));
      return (
          <div className="alert alert-danger print-error-msg"> 
              <ul style={{listStyle :'number',paddingLeft:'5px'}}>
                 {list}
              </ul>
          </div>);
   }
   else
   { 
       return null;
   }
   
}
