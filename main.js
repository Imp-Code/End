const Title = document.getElementById('Title');
const FB = document.getElementById('FB');
const Switch = document.getElementById('Switch');

if (localStorage.getItem('Mode')) {
} else {
  localStorage.setItem('Mode', "Encryption");
}

if (localStorage.getItem('Mode') == "Decryption") {
   Title.innerHTML = "Decryption";
   FB.innerHTML = "Decryption";

   Title.classList.remove("Mode");
   Title.classList.add('Mode2');

   FB.classList.remove("FunctionButton");
   FB.classList.add('FunctionButton2');

   Switch.classList.remove("Switch");
   Switch.classList.add('Switch2');
}

if (localStorage.getItem('Mode') == "Encryption") {
    Title.innerHTML = "Encryption";
    FB.innerHTML = "Encryption";
 
    Title.classList.remove("Mode2");
    Title.classList.add('Mode');
 
    FB.classList.remove("FunctionButton2");
    FB.classList.add('FunctionButton');
 
    Switch.classList.remove("Switch2");
    Switch.classList.add('Switch');
 }

 function SwitchMode() {
    if (localStorage.getItem('Mode') == "Encryption") {
        localStorage.setItem('Mode', "Decryption");

        Title.innerHTML = "Decryption";
        FB.innerHTML = "Decryption";

        Title.classList.remove("Mode");
        Title.classList.add('Mode2');

        FB.classList.remove("FunctionButton");
        FB.classList.add('FunctionButton2');

        Switch.classList.remove("Switch");
        Switch.classList.add('Switch2');
    } else {
        localStorage.setItem('Mode', "Encryption");

        Title.innerHTML = "Encryption";
        FB.innerHTML = "Encryption";
 
        Title.classList.remove("Mode2");
        Title.classList.add('Mode');
 
        FB.classList.remove("FunctionButton2");
        FB.classList.add('FunctionButton');

        Switch.classList.remove("Switch2");
        Switch.classList.add('Switch');
    }
 }

 function stringToBinary(string) {
    let binary = "";
    for (let i = 0; i < string.length; i++) {
      const charCode = string.charCodeAt(i);
      const binaryChar = charCode.toString(2).padStart(8, '0');
      binary += binaryChar;
    }
    return binary;
  }
  
  function binaryToString(binaryText) {
    let string = "";
    for (let i = 0; i < binaryText.length; i += 8) {
      const byte = binaryText.slice(i, i + 8);
      const decimal = parseInt(byte, 2);
      const char = String.fromCharCode(decimal);
      string += char;
    }
    return string;
  }
  
  
  //const inputString = "sarosh yee";
  //const binaryString = stringToBinary(inputString);
  //console.log(binaryString);

  function Encrypt() {
    const InputKey = parseInt(document.getElementById('InputKEY').value, 10);
    const InputText = document.getElementById('InputMSG').value;
    const EncryptedMSG = encryptMessage(InputText, InputKey);
    document.getElementById('InputMSG').value = EncryptedMSG;
  }
  
  function Decrypt() {
    const InputKey = parseInt(document.getElementById('InputKEY').value, 10);
    const InputText = document.getElementById('InputMSG').value;
    const DecryptedMSG = decryptMessage(InputText, InputKey);
    document.getElementById('InputMSG').value = DecryptedMSG;
  }
  
  function encryptMessage(message, key) {
    let encrypted = "";
    for (let i = 0; i < message.length; i++) {
      const char = message[i];
      const binaryChar = char.charCodeAt(0).toString(2);
      const encryptedChar = parseInt(binaryChar, 2) * key;
      encrypted += encryptedChar + " ";
    }
    return encrypted.trim();
  }
  
  function decryptMessage(encryptedMessage, key) {
    let decrypted = "";
    const encryptedChars = encryptedMessage.trim().split(" ");
    for (let i = 0; i < encryptedChars.length; i++) {
      const encryptedChar = parseInt(encryptedChars[i], 10);
      const decryptedChar = (encryptedChar / key).toString(2);
      const charCode = parseInt(decryptedChar, 2);
      const char = String.fromCharCode(charCode);
      decrypted += char;
    }
    return decrypted;
  }
  

  function Endcrypt() {
    if (localStorage.getItem("Mode") == "Encryption") {
        Encrypt();
    }

    if (localStorage.getItem('Mode') == "Decryption") {
        Decrypt();
    }
  }