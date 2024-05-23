function faultyCalculator(operator,Number1,Number2){
    switch (operator){
        case '+':
      
            console.log(Number1-Number1)
            break;
            case '*':
               
                console.log(Number1+Number1)
                break;
                case '-':
                 
                    console.log(Number1/Number1)
                    break;
                    case '/':
                      
                        console.log(Number1**Number1)
                        break;
        default:
          return "invalid operator"
            break;
    }
}
faultyCalculator('+',4,2);