import  encryptText  from './modules/encrypt.js';

const app = document.getElementById('app');
const shift = document.getElementById('shift');
const plaintext =  document.getElementById('plaintext');
const encryptedtext =  document.getElementById('encryptedtext');
 
let shiftOption;
const getOption = (e)=> {
   return shiftOption = e.target.value; 
  }

shift.addEventListener('change',  (e)=> {
  getOption(e);
  });
  let textValue;
  const getText= (e)=> {
     return textValue = e.target.value; 
    }
plaintext.addEventListener('keyup', (e)=> {
  getText(e);
    encryptedtext.innerHTML = encryptText(textValue, shiftOption);
  });
  

  let image = document.createElement('img'); 
  image.id = "image";

  let link = document.createElement('a'); 
  link.href = 'https://en.wikipedia.org/wiki/Caesar_cipher';
  var linkText = document.createTextNode("https://en.wikipedia.org/wiki/Caesar_cipher");
  link.appendChild(linkText);



  let description = document.createElement('h4'); 
  description.id = "description";
  description.innerHTML = 'More info & history on inovation : ';
  description.appendChild(link);

  let header = document.createElement('h1');
  header.innerHTML = 'Caesar’s cipher ';
  header.id = "header";
 
  
  let section = document.createElement('section');
  section.id = 'section';
  section.innerHTML = `
  <h1 class='section-header'> How the cipher works </h1>
   <ol >
   <li>Step one: select number from shifr</li>
   <li>Step two: write a word you want to cipher</li>
   </ol>
   <p>Enjoy ciphering your words and passing secret messages</p>
  
   <p>P.S. don't forget to pass this game to your participant to send you secret messages too </p>
  `;
 

  let container = document.createElement('div');
  container.id = "container";
  container.appendChild(image);
  container.appendChild(header);
  container.appendChild(section);

  app.insertBefore(header, app.firstChild);
  app.appendChild(container);
  
  app.appendChild(description);

  


