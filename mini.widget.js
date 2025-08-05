export default {
  match: 'host',
  value: location.host,
  
  defaultWidget: `
      <div class="pminicenter">
      <img src="https://flonkie.neocities.org/nekoimages/personawbr/Who.png" class="pminisize" style="margin: 3px auto; height: 17px;">
      <div>
      <img src="https://flonkie.neocities.org/nekoimages/personawbr/thou.png" class="pminisize">
      <a href="https://flonkie.nekoweb.org/other/persona"><img src="https://flonkie.neocities.org/nekoimages/personawbr/webr.png" class="pminisize"></a></div>
      </div>
  `,

  widget: `
    <div class="pminimaincard">
        <img src="https://flonkie.neocities.org/nekoimages/personawbr/plogos.png">
                <div class="pminidirections">
                    <a class="pminisml pminiblue" href="https://{prev.host}"> {prev.username}</a>
                    <a class="pminisml pminiyellow" href="https://flonkie.nekoweb.org/other/persona">Webring</a>
                    <a class="pminisml pminired" href="https://{next.host}">{next.username}</a>
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
      width: fit-content;
      text-decoration: none !important;
      background: #000;
      width: fit-content;
      padding: 5px;
      border-radius:7px;
        
      
    .pminidirections{display:flex; flex-direction: row; justify-content: space-around;}
    .pminisml{order:2;height:fit-content; margin:0; padding:0 5px; font-family: "Verdana"; font-weight:bold!important; font-size: 19px; text-align: center;display:block; text-decoration:none; color:#fff}

    .pminiblue, .pminired, .pminiyellow {transition: all 0.75s;padding: 0 5px;}
    .pminiblue:hover{background:#00a8eb60;padding:0 10px;}
    .pminired:hover {background:#a1030c60;padding-left:10px;}
    .pminiyellow:hover{background:#fff12260;padding-right:10px;} 

    .pminisize{height:15px; margin:3px 0;width: max-content; overflow: visible; filter: drop-shadow(0px -1px 0 #000) drop-shadow(1px 0px 0 #000) drop-shadow(0px 1px 0 #000) drop-shadow(-1px 0px 0 #000) drop-shadow(0px -1px 0 #000) drop-shadow(1px 0px 0 #000) drop-shadow(0px 1px 0 #000) drop-shadow(-1px 0px 0 #000);}
    
    .pminimaincard{
     display: flex;
     flex-direction: column;
     justify-content: center;
     height: 125px;
     width: 300px;
     max-width: 300px;
     max-height: 220px;
      }        
    }
    .pminicenter{ display: flex; flex-wrap: wrap; flex-direction: column; justify-content: center; width: 300px; max-width: 300px;}
    }
    :webring>div{margin:0 auto!important;}
  `
}