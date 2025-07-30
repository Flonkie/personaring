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
  <div class="small"><div class="tv"></div></div>
    <div class="maincard">
    <div class="small"><div class="static"></div></div>
      <div class="small"><div class="circlsel"></div></div> 
        <div class="directions">
                <a class="sml" href="https://{prev.host}"> {prev.username}</a>
                <a class="sml webrpage" href="https://flonkie.nekoweb.org/other/persona">Webring</a>
                <a class="sml" href="https://{next.host}">{next.username}</a>
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
      text-decoration: none !important;
      max-width: 310px;
      max-height: 300px;
       
    .small{height:0px; width:0px}
        
    .tv{float: left;
        background-image: url(https://flonkie.neocities.org/nekoimages/personawbr/TV.png);
        background-size: cover;
        width: 304px;
        height: 280px;
        bottom: 5px;
        filter: drop-shadow(-1px 0px 0 #000);
        z-index: 1;
        position: relative;}
        
    .directions{display:flex; flex-direction: column; justify-content: space-between; margin:60px auto auto 80px; z-index:3;gap:5px}
    
    .sml{order:2;
        height:fit-content;
        margin:0; 
        padding:0; 
        font-family: "Verdana"; 
        color: #000; 
        font-weight:bold!important; 
        font-size: 19px; 
        transition: all 0.75s; 
        text-align:left;
        display:block; 
        text-decoration:none;
        background: linear-gradient(90deg,#f6fd06 45%, rgba(246,253,6,0) 90%);
    }
    .sml:hover{margin-left:-13px; color:#FFF; background:#0f0e1c; text-shadow: none;}
    
    .webrpage{margin-left:5px}
    
    .static{background-image: url(https://flonkie.neocities.org/nekoimages/personawbr/crt.gif);
        mix-blend-mode: soft-light;
        pointer-events: none;
        opacity: 1;
        height: 165px;
         width: 240px;
         background-size: contain;
             right: 5px;
    position: relative;
    }
    
    .circlsel{
        background-image: url(https://flonkie.neocities.org/nekoimages/personawbr/circ.png);
        height: 167px;
        width: 87px;
        background-size: 100%;}
    
    .maincard{
        background-size: cover;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 165px;
        width: 240px;
        max-width: 300px;
        max-height: 220px;
        margin: 100px 60px 10px 10px;
        background-image: url(https://flonkie.neocities.org/nekoimages/personawbr/p4.jpg);
      }
        
    }
    .size{height:15px; margin:3px 0;width: max-content; overflow: visible; filter: drop-shadow(0px -1px 0 #000) drop-shadow(1px 0px 0 #000) drop-shadow(0px 1px 0 #000) drop-shadow(-1px 0px 0 #000) drop-shadow(0px -1px 0 #000) drop-shadow(1px 0px 0 #000) drop-shadow(0px 1px 0 #000) drop-shadow(-1px 0px 0 #000);}
    .center{ display: flex; flex-wrap: wrap; flex-direction: column; justify-content: center; width: 300px; max-width: 300px;}
    }
  `
}