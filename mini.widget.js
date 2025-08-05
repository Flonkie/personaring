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
        <div><img class="pminisize" src="https://flonkie.neocities.org/nekoimages/personawbr/plogos.png"></div>
                <div class="pminidirections">
                    <a class="pminisml" href="https://{prev.host}"> {prev.username}</a>
                    <a class="pminisml" href="https://flonkie.nekoweb.org/other/persona">Webring</a>
                    <a class="pminisml" href="https://{next.host}">{next.username}</a>
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
        
      
    .pminidirections{display:flex; flex-direction: column; justify-content: space-between; margin: auto 35px auto auto;}
    .pminisml{order:2;height:fit-content; margin:-1px 0; padding:0; font-family: "Verdana"; font-weight:bold!important; font-size: 19px; transition: all 0.75s; text-align: center;display:block; text-decoration:none;}
    .pminisml:hover{font-size:22px; margin:3px 0; color:#000; background:#FFF;}
    .pminisize{height:15px; margin:3px 0;width: max-content; overflow: visible; filter: drop-shadow(0px -1px 0 #000) drop-shadow(1px 0px 0 #000) drop-shadow(0px 1px 0 #000) drop-shadow(-1px 0px 0 #000) drop-shadow(0px -1px 0 #000) drop-shadow(1px 0px 0 #000) drop-shadow(0px 1px 0 #000) drop-shadow(-1px 0px 0 #000);}
    
    .pminimaincard{
     display: flex;
     flex-direction: column;
     justify-content: center;
      height: 100px;
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