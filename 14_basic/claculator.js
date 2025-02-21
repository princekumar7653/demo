function calculator(a, b, action){
    switch(action){
      case "div":
        return  a / b
        
        case "sub":
        return  a - b
        
        case "mul":
        return  a * b
        
        default:
        return a + b
        
    }
  }
  
  console.log(calculator(2 , 4,"mul"));
  