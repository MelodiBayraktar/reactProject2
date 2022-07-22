import React from "react";


export const Home = () => {
  return ( 
    <div>
      <h1>Kodluyoruz Nasıl Çalışır?</h1>
      <div style={{display:"flex"}}>
        <div>
            <img  style={{margin:"40px"}} src="https://cdn.sanity.io/images/9kdepi1d/production/294d797750d6b6b1a0e00fa8ab122997db92549e-863x574.svg?w=160&h=106&fit=crop&fm=webp" alt="picture"/>
            <h4>Becerilerini Geliştir</h4>
            <p>Ücretsiz bootcamp'lere katıl ve dünya çapındaki kaynaklarla becerilerini geliştir</p>
        </div>
        <div>
            <img style={{margin:"40px"}} src="https://cdn.sanity.io/images/9kdepi1d/production/6a5ed2a57036cbd99732311d8558882d2eaa6717-1088x826.svg?w=160&h=121&fit=crop&fm=webp" alt="picture2"/>
            <h4>Mezunlar Kulübü'ne Katıl</h4>
            <p>Bootcamp'lerden başarıyla mezun ol, diğer mezunlarla hayat boyu öğrenmek için bir araya gel</p>
        </div>
        <div>
            <img style={{margin:"40px"}} src="https://cdn.sanity.io/images/9kdepi1d/production/a0d5d919e567c1ca122529eea4a6350ac2997198-926x749.svg?w=160&h=129&fit=crop&fm=webp" alt="picture3"/>
            <h4>Şirketlerle Buluş</h4>
            <p>Hayalindeki kariyere adım atmak isteyen mezunlarımız için sağladığımız desteklerden yararlan</p>
        </div>
      </div>
   </div>
  )
}