var words = ["FWmcfgAWxe","KnFJXGcACq","cCYApSPiX0","iHwbq2giBx","X5Ebl6sjLf","Rxc2oFCgI4","jFtFONF7NK","b8iIhVOJl6","aGlxlytbic","30e8YSgLzd","0oj65bHiHZ","NtykZPC0DH","qgj6THRgT0","rFM7G7SJbB","lcu5UKrj7w","xurxryxn5u","7XDXFJ8Axh","RuQU6EeJyi","go3SD5CYYT","c8sOoXTa59","Vh0QfTkdKk","rrYBTg4sWc","CmeWiA73ig","iM8MD2IXle","SQk4WlTLiE","wn3JhYo93i","Hlh1Amt1jo","Rd6hiOekcE","LMKIBsBBmQ","nb72pL5LKQ","8GufbXPMRb","OO5OnLzsdP","hLddf4izXl","6x8suntNs6","8VATvVOQZR","jxL8zSOcZN","87YqnuB6Mc","sqr1WbVsWv","fLC17MbW59","tJ6Z5r6mDd","iiEffxACk7","C6w4k9AS2N","9rQTNM8xmG","x4JQLDr6hd","3bYXSm7Zgo","phTYCmMxOW","isl31Fd0SN","CZItvlfdqW"];
var str = 'FWmcfgAWxe';
function find(words, str){
    str = str.split('');
    return words.filter(function(word) {
        return str.every(function(char) {
            return word.includes(char);
        });
    });
}
const output = find(words, str);
console.log(output);






// function kusonseetäht(word, letter) {
//    var index = word.indexof(letter) > -1;
// }


const data = ["FWmcfgAWxe","KnFJXGcACq","cCYApSPiX0","iHwbq2giBx","X5Ebl6sjLf","Rxc2oFCgI4","jFtFONF7NK","b8iIhVOJl6","aGlxlytbic","30e8YSgLzd","0oj65bHiHZ","NtykZPC0DH","qgj6THRgT0","rFM7G7SJbB","lcu5UKrj7w","xurxryxn5u","7XDXFJ8Axh","RuQU6EeJyi","go3SD5CYYT","c8sOoXTa59","Vh0QfTkdKk","rrYBTg4sWc","CmeWiA73ig","iM8MD2IXle","SQk4WlTLiE","wn3JhYo93i","Hlh1Amt1jo","Rd6hiOekcE","LMKIBsBBmQ","nb72pL5LKQ","8GufbXPMRb","OO5OnLzsdP","hLddf4izXl","6x8suntNs6","8VATvVOQZR","jxL8zSOcZN","87YqnuB6Mc","sqr1WbVsWv","fLC17MbW59","tJ6Z5r6mDd","iiEffxACk7","C6w4k9AS2N","9rQTNM8xmG","x4JQLDr6hd","3bYXSm7Zgo","phTYCmMxOW","isl31Fd0SN","CZItvlfdqW"];
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('w3resource.com', 'o'));





var data = ["FWmcfgAWxe","KnFJXGcACq","cCYApSPiX0","iHwbq2giBx","X5Ebl6sjLf","Rxc2oFCgI4","jFtFONF7NK","b8iIhVOJl6","aGlxlytbic","30e8YSgLzd","0oj65bHiHZ","NtykZPC0DH","qgj6THRgT0","rFM7G7SJbB","lcu5UKrj7w","xurxryxn5u","7XDXFJ8Axh","RuQU6EeJyi","go3SD5CYYT","c8sOoXTa59","Vh0QfTkdKk","rrYBTg4sWc","CmeWiA73ig","iM8MD2IXle","SQk4WlTLiE","wn3JhYo93i","Hlh1Amt1jo","Rd6hiOekcE","LMKIBsBBmQ","nb72pL5LKQ","8GufbXPMRb","OO5OnLzsdP","hLddf4izXl","6x8suntNs6","8VATvVOQZR","jxL8zSOcZN","87YqnuB6Mc","sqr1WbVsWv","fLC17MbW59","tJ6Z5r6mDd","iiEffxACk7","C6w4k9AS2N","9rQTNM8xmG","x4JQLDr6hd","3bYXSm7Zgo","phTYCmMxOW","isl31Fd0SN","CZItvlfdqW"];
for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
  }



  var str = ["FWmcfgAWxe","KnFJXGcACq","cCYApSPiX0","iHwbq2giBx","X5Ebl6sjLf","Rxc2oFCgI4","jFtFONF7NK","b8iIhVOJl6","aGlxlytbic","30e8YSgLzd","0oj65bHiHZ","NtykZPC0DH","qgj6THRgT0","rFM7G7SJbB","lcu5UKrj7w","xurxryxn5u","7XDXFJ8Axh","RuQU6EeJyi","go3SD5CYYT","c8sOoXTa59","Vh0QfTkdKk","rrYBTg4sWc","CmeWiA73ig","iM8MD2IXle","SQk4WlTLiE","wn3JhYo93i","Hlh1Amt1jo","Rd6hiOekcE","LMKIBsBBmQ","nb72pL5LKQ","8GufbXPMRb","OO5OnLzsdP","hLddf4izXl","6x8suntNs6","8VATvVOQZR","jxL8zSOcZN","87YqnuB6Mc","sqr1WbVsWv","fLC17MbW59","tJ6Z5r6mDd","iiEffxACk7","C6w4k9AS2N","9rQTNM8xmG","x4JQLDr6hd","3bYXSm7Zgo","phTYCmMxOW","isl31Fd0SN","CZItvlfdqW"];
  for (var i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
  }













for (let x = 0; x <= 0; x++) console.log(x)
    
work =(x < 100)
while(work){
  console.log(x);
  if (new date().getMinutes() >= 30)
    work = false;
}

const data = ["FWmcfgAWxe","KnFJXGcACq","cCYApSPiX0","iHwbq2giBx","X5Ebl6sjLf","Rxc2oFCgI4","jFtFONF7NK","b8iIhVOJl6","aGlxlytbic","30e8YSgLzd","0oj65bHiHZ","NtykZPC0DH","qgj6THRgT0","rFM7G7SJbB","lcu5UKrj7w","xurxryxn5u","7XDXFJ8Axh","RuQU6EeJyi","go3SD5CYYT","c8sOoXTa59","Vh0QfTkdKk","rrYBTg4sWc","CmeWiA73ig","iM8MD2IXle","SQk4WlTLiE","wn3JhYo93i","Hlh1Amt1jo","Rd6hiOekcE","LMKIBsBBmQ","nb72pL5LKQ","8GufbXPMRb","OO5OnLzsdP","hLddf4izXl","6x8suntNs6","8VATvVOQZR","jxL8zSOcZN","87YqnuB6Mc","sqr1WbVsWv","fLC17MbW59","tJ6Z5r6mDd","iiEffxACk7","C6w4k9AS2N","9rQTNM8xmG","x4JQLDr6hd","3bYXSm7Zgo","phTYCmMxOW","isl31Fd0SN","CZItvlfdqW"];
function countCode(letter){
    console.log('data')
}







