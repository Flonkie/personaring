export default {
  match: 'host',
  value: location.host,
  
  defaultWidget: `
      <div class="center">
      <img src="https://flonkie.neocities.org/nekoimages/personawbr/Who.png" class="size" style="margin: 3px auto; height: 17px;">
      <div>
      <img src="https://flonkie.neocities.org/nekoimages/personawbr/thou.png" class="size">
      <a href="https://flonkie.nekoweb.org/other/persona"><img src="https://flonkie.neocities.org/nekoimages/personawbr/webr.png" class="size"></a></div>
      </div>
  `,

  widget: `
    <div class="blabord p3maincard">
                <div class="p3directions">
                    <a class="sml sk1" href="https://{prev.host}"> {prev.username}</a>
                    <a class="sml sk2" href="https://flonkie.nekoweb.org/other/persona">Webring</a>
                    <a class="sml sk3" href="https://{next.host}">{next.username}</a>
                </div>
    </div>
  `,

  style: `
    :webring {
      margin:0.5vw;
      position:relative;
      font-family: Franklin Gothic,Arial, sans-serif;
      display:flex;
      flex-direction:column;
      justify-content: center;
      flex-wrap:wrap;
      height: 232px;
        text-decoration: none !important;
        
      
    .p3directions{display:flex; flex-direction: column; justify-content: space-between; margin: auto 35px auto auto;}
    .sml{order:2;height:fit-content; margin:-1px 0; padding:0; font-family: "Verdana"; color: #FFFFFF; font-weight:bold!important; font-size: 19px; transition: all 0.75s; text-align: center;display:block; text-decoration:none;}
    .sml:hover{font-size:22px; margin:3px 0; color:#000; background:#FFF;}
    .size{height:15px; margin:3px 0;width: max-content; overflow: visible; filter: drop-shadow(0px -1px 0 #000) drop-shadow(1px 0px 0 #000) drop-shadow(0px 1px 0 #000) drop-shadow(-1px 0px 0 #000) drop-shadow(0px -1px 0 #000) drop-shadow(1px 0px 0 #000) drop-shadow(0px 1px 0 #000) drop-shadow(-1px 0px 0 #000);}
    .sk1{transform: skew(-20deg) rotate(-10deg); margin:-1px 0;}
    .sk2{transform: skew(-17deg) rotate(-15deg); margin:-1px 0;}
    .sk3{transform: skew(-7deg) rotate(-12deg); margin:-1px 0;}
    
    
    
    .p3maincard{
     background-image: url(https://flonkie.neocities.org/nekoimages/personawbr/base3.gif);
     display: flex;
     flex-direction: column;
     justify-content: center;
      height: 220px;
     width: 300px;
     max-width: 300px;
     max-height: 220px;
      }
     .blabord {border:5px solid #ffffff}
        
    }
    .center{ display: flex; flex-wrap: wrap; flex-direction: column; justify-content: center; width: 300px; max-width: 300px;}
    }
    :webring>div{margin:0 auto!important;}
  `
}