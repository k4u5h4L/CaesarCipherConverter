//The function for cipher
function show_cipher() {
    let str = document.getElementById('plain').value;
    let cipher = '';
    let key;     // taking the key as length of the plain text

    let keyValue = document.getElementById('key1').value;
    console.log(keyValue);

    let typeValue = document.getElementById('type').value;
    console.log(typeValue);

    if (keyValue == "Take Key as Length") {
      key = str.length;     // taking the key as length of the plain text
    }
    else {
      key = parseInt(document.getElementById('CustomKey').value);
    }

    console.log(key); // when key = length

    if (typeValue == "Encrypt") {
    //cipher the string
      for(let i = 0; i < str.length; i++) {
        //if letter is uppercase then add uppercase letters
        
          if(isUpperCase(str[i])) {
            cipher += String.fromCharCode((str.charCodeAt(i) + key - 65) % 26 + 65);
          }                                                                      
          else {
            //else add lowercase letters
            cipher += String.fromCharCode((str.charCodeAt(i) + key - 97) % 26 + 97);
          }
        
      }
    }
    else if(typeValue == "Decrypt") {
      //decipher the string
      for(let i = 0; i < str.length; i++) {
        //if letter is uppercase then add uppercase letters
        if(isUpperCase(str[i])) {
          cipher += String.fromCharCode((str.charCodeAt(i) - key - 65) % 26 + 65);
        }                                                               
        else {
          //else add lowercase letters
          cipher += String.fromCharCode((str.charCodeAt(i) - key - 97) % 26 + 97);
        }
      }
    }
    else {
      console.error("Please choose a valid encryption/decryption.");
    }

    console.log(cipher);
    document.getElementById('show').value = cipher;
}

function isUpperCase(str) {
  return str === str.toUpperCase();
}
