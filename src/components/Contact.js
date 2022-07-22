import React from "react";
import '../App.css';

function Contact() {
  return (
    <div >
      <h1>Contact Page</h1>
      <div style={{paddingTop:"20px"}}>
       <h3> Kodluyoruz'a olan ilginizden dolayı teşekkür ederiz!</h3>
      </div>
      <div>
        <p>Bootcamp'ler ve iş birlikleriyle ilgili pek çok soru Sıkça Sorulan Sorular sayfamızda cevaplanmış durumda.</p>
        <p>Bir sorunuz olursa önce bu sayfayı incelemenizi öneririz</p>
        <p>Eğer sorunuza cevap bulamadıysanız, bize şu adreslerden ulaşabilirsiniz:</p>
        <ul style={{listStyle:"none"}}>
            <li>
                E-posta: info@kodluyoruz.org
            </li>
            <li>
                Adres: Zemin İstanbul
            </li>
            <li>
                Şahkulu, Şişhane Metro Durağı, Meşrutiyet Cd. No:125, 34421 Beyoğlu/İstanbul
            </li>
        </ul>

        

        <br></br>
      </div>
    </div>
  );
}

export default Contact;