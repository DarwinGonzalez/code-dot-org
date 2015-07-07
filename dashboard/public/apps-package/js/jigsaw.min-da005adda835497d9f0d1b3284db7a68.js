require=function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({147:[function(a){(function(b){var c=a("../appMain");window.Jigsaw=a("./jigsaw"),"undefined"!=typeof b&&(b.Jigsaw=window.Jigsaw);var d=a("./blocks"),e=a("./levels"),f=a("./skins");window.jigsawMain=function(a){a.skinsModule=f,a.blocksModule=d,c(window.Jigsaw,e,a)}}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../appMain":9,"./blocks":142,"./jigsaw":144,"./levels":145,"./skins":148}],148:[function(a,b,c){var d=a("../skins"),e={jigsaw:{}};c.load=function(a,b){{var c=d.load(a,b);e[c.id]}return c.artist=c.assetUrl("artist.png"),c.blocks=c.assetUrl("blocks.png"),c.apple=c.assetUrl("apple.png"),c.smiley=c.assetUrl("smiley.png"),c.snail=c.assetUrl("snail.png"),c.elephant=c.assetUrl("elephant.png"),c.fish=c.assetUrl("fish.png"),c.doggie=c.assetUrl("doggie.png"),c.tree=c.assetUrl("tree.png"),c.flower=c.assetUrl("flower.png"),c.house=c.assetUrl("house.png"),c.computer=c.assetUrl("computer.png"),c.blank=c.assetUrl("blank.png"),c.smallStaticAvatar=c.blank,c.background=c.assetUrl("background.png"),c}},{"../skins":268}],144:[function(a,b){"use strict";function c(){var a=8,b=6,c=10;Blockly.BlockSvg.NOTCH_PATH_WIDTH=2*b+c,Blockly.BlockSvg.NOTCH_WIDTH=50;var d="l "+b+","+a+" "+c+",0 "+b+",-"+a,e="l -"+b+","+a+" -"+c+",0 -"+b+",-"+a,f=a,g=b+.5,h=c-1,i="l "+g+","+f+" "+h+",0 "+g+",-"+f;Blockly.Connection.NOTCH_PATHS_OVERRIDE={left:d,leftHighlight:i,right:e}}function d(){var a=e.goal.successCondition();a&&(Blockly.removeChangeListener(j.successListener),j.result=k.SUCCESS,j.onPuzzleComplete())}var e,f,g=a("../StudioApp").singleton,h=(a("../skins"),a("../templates/page.html.ejs")),i=a("../dom"),j=b.exports,k=g.ResultType,l=g.TestResults;g.setCheckForEmptyBlocks(!0),Blockly.BUMP_UNCONNECTED=!1,j.scale={snapRadius:1,stepSpeed:33};var m=function(){for(var a in e.scale)j.scale[a]=e.scale[a];j.MAZE_WIDTH=0,j.MAZE_HEIGHT=0,j.block1Clicked=!1},n=function(){var a=document.getElementById("visualizationColumn");a.style.display="none";var b=document.getElementById("visualizationResizeBar");b.style.display="none";var c=-Blockly.mainBlockSpace.getMetrics().viewLeft;if(e.ghost){var d=document.querySelectorAll(".blocklySvg")[0],f=Blockly.createSvgElement("rect",{fill:"url(#pat_"+e.id+"A)","fill-opacity":"0.2",width:e.image.width,height:e.image.height,transform:"translate("+(c+e.ghost.x)+", "+e.ghost.y+")"});d.insertBefore(f,d.childNodes[0])}};j.init=function(b){f=b.skin,e=b.level,m(),e.largeNotches&&c(),Blockly.SNAP_RADIUS=e.snapRadius||90,b.html=h({assetUrl:g.assetUrl,data:{localeDirection:g.localeDirection(),controls:a("./controls.html.ejs")({assetUrl:g.assetUrl}),editCode:e.editCode,blockCounterClass:"block-counter-default"}}),b.loadAudio=function(){g.loadAudio(f.winSound,"win"),g.loadAudio(f.startSound,"start"),g.loadAudio(f.failureSound,"failure")},b.afterInject=function(){Blockly.HSV_SATURATION=.6,n()},b.trashcan=!!e.toolbox,b.scrollbars=!1,b.enableShowCode=!1,b.enableShowBlockCount=!1,g.init(b),document.getElementById("runButton").style.display="none",j.successListener=Blockly.mainBlockSpaceEditor.addChangeListener(function(){d()});var k=document.querySelectorAll("[block-id='1']")[0];k&&i.addMouseDownTouchEvent(k,function(){j.block1Clicked=!0})};var o=function(){j.waitingForReport||g.displayFeedback({app:"Jigsaw",skin:f.id,feedbackType:j.testResults,response:j.response,level:e})};j.onReportComplete=function(a){j.response=a,j.waitingForReport=!1,o()},j.execute=function(){},j.onPuzzleComplete=function(){var a=j.result==k.SUCCESS;j.testResults=g.getTestResults(a,{allowTopBlocks:!0}),g.playAudio(j.testResults>=l.FREE_PLAY?"win":"failure");var b=Blockly.Xml.blockSpaceToDom(Blockly.mainBlockSpace),c=Blockly.Xml.domToText(b);j.waitingForReport=!0,g.report({app:"Jigsaw",level:e.id,result:j.result===k.SUCCESS,testResult:j.testResults,program:encodeURIComponent(c),onComplete:j.onReportComplete})}},{"../StudioApp":5,"../dom":108,"../skins":268,"../templates/page.html.ejs":296,"./controls.html.ejs":143}],143:[function(require,module,exports){module.exports=function(){var t=function anonymous(locals,filters,escape){escape=escape||function(a){return String(a).replace(/&(?!\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")};var buf=[];with(locals||{})!function(){buf.push("");require("./locale");buf.push("\n")}();return buf.join("")};return function(a){return t(a,require("ejs").filters)}}()},{"./locale":146,ejs:490}],142:[function(a,b,c){"use strict";function d(){return document.getElementById("blocklySvgDefs")?void h.addQueuedPatterns():void setTimeout(d,100)}function e(a,b,c,d,e,f){a.Blocks[c]={helpUrl:"",init:function(){this.setHSV.apply(this,d),this.appendDummyInput().appendTitle(new a.FieldImage(b.blank,e,54)),this.setPreviousStatement(!0),f&&this.appendStatementInput("child"),this.setNextStatement(!0)}}}function f(a,b,c){function d(c){var d="jigsaw_"+j+p[c],q="pat_"+j+p[c];a.Blocks[d]={helpUrl:"",init:function(){this.setHSV.apply(this,k),this.appendDummyInput().appendTitle(new a.FieldImage(b.blank,n,o)),this.setPreviousStatement(1!==c||l),this.setNextStatement(c!==h||l),this.setFillPattern(i(q,e,f,g,0,m*(c-1)))}}}for(var e=c.image,f=c.width,g=c.height,h=c.numBlocks,j=c.level,k=c.HSV,l=c.notchedEnds,m=g/h,n=f-20,o=m-10,p="-ABCDEFGHIJKLMNOPQRSTUVWXYZ",q=1;h>=q;q++)d(q)}var g=(a("./locale"),a("../dom"),a("./levels")),h={queued:[],created:{},addToQueue:function(a){this.queued.push(a)},addQueuedPatterns:function(){this.queued.forEach(function(a){i(a.id,a.imagePath,a.width,a.height,a.offsetX,a.offsetY)}),this.queued=[]},wasCreated:function(a){var b=!0,c=this.created[a.id];if(!c)return!1;if(Object.keys(a).forEach(function(d){a[d]!==c[d]&&(b=!1)}),!b)throw new Error("Can't add attribute of same id with different attributes");return!0},markCreated:function(a){if(this.created[a.id])throw new Error("Already have cached item with id: "+a.id);this.created[a.id]=a}},i=function(a,b,c,d,e,f){var g,i,j,k,l={id:a,imagePath:b,width:c,height:d,offsetX:e,offsetY:f},m=document.getElementById("blocklySvgDefs");return m?h.wasCreated(l)||(g="function"==typeof e?-e():-e,i="function"==typeof f?-f():-f,j=Blockly.createSvgElement("pattern",{id:a,patternUnits:"userSpaceOnUse",width:"100%",height:d,x:g,y:i},m),k=Blockly.createSvgElement("image",{width:c,height:d},j),k.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",b),h.markCreated(l)):h.addToQueue(l),a};c.install=function(a,b){var c=b.skin,h=[0,1,.98],j=Object.keys(a.Blocks);Object.keys(g).forEach(function(b){var d=g[b];if(f(a,c,{image:c[d.image.name],HSV:d.backgroundHSV||h,width:d.image.width,height:d.image.height,numBlocks:d.numBlocks,notchedEnds:d.notchedEnds,level:b}),0===d.numBlocks){var e="pat_"+d.id+"A";i(e,c[d.image.name],d.image.width,d.image.height,0,0)}}),e(a,c,"jigsaw_repeat",[322,.9,.95],100,!0),e(a,c,"jigsaw_green",[140,1,.74],80),e(a,c,"jigsaw_blue",[184,1,.74],80),e(a,c,"jigsaw_purple",[312,.32,.62],80);var k=a.Generator.get("JavaScript");a.JavaScript=k,Object.keys(a.Blocks).forEach(function(a){-1!==j.indexOf(a)||k[a]||(k[a]=function(){return"\n"})}),d(),delete a.Blocks.procedures_defreturn,delete a.Blocks.procedures_ifreturn}},{"../dom":108,"./levels":145,"./locale":146}],146:[function(a,b){b.exports=window.blockly.jigsaw_locale},{}],145:[function(a,b){var c=a("../block_utils").createToolbox,d=function(a,b,c,d,e){return f(a,b,c,d,e,!0)},e=function(a,b,c,d,e){return f(a,b,c,d,e,!1)},f=function(a,b,c,d,e,f){var g="";return b=b||0,c=c||0,e=e||"next","statement"===e&&(g=" name='child'"),'<block type="'+a+'" deletable="'+f+'" x="'+b+'" y="'+c+'">'+(d?"<"+e+g+">"+d+"</"+e+">":"")+"</block>"},g=function(a,b){var c;if(a)c=a.length;else{var d="-ABCDEFGHIJKLMNOPQRSTUVWXYZ",e=b.level;c=b.numBlocks,a=[];for(var f=1;c>=f;f++)a.push("jigsaw_"+e+d[f])}var g=Blockly.mainBlockSpace.getTopBlocks();if(1!==g.length)return!1;for(var h=0,i=g[0];c>h;){if(!i||i.type!==a[h])return!1;var j=i.getChildren();if(j.length>1)return!1;i=j[0],h++}return void 0!==i?!1:!0};b.exports={1:{instructionsIcon:"apple",aniGifURL:"/script_assets/k_1_images/instruction_gifs/click-block.gif",isK1:!0,image:{name:"apple",width:200,height:200},backgroundHSV:[41,1,.969],numBlocks:1,requiredBlocks:[],freePlay:!1,largeNotches:!0,goal:{successCondition:function(){return Jigsaw.block1Clicked}},startBlocks:e("jigsaw_1A",20,20)},2:{instructionsIcon:"smiley",aniGifURL:"/script_assets/k_1_images/instruction_gifs/drag-drop.gif",isK1:!0,image:{name:"smiley",width:200,height:200},backgroundHSV:[184,1,.733],ghost:{x:400,y:100},numBlocks:1,requiredBlocks:[],freePlay:!1,largeNotches:!0,goal:{successCondition:function(){if(Blockly.mainBlockSpace.dragMode)return!1;var a=Blockly.mainBlockSpace.getAllBlocks()[0].getRelativeToSurfaceXY(),b=Math.abs(400-a.x),c=Math.abs(100-a.y);return 80>b+c}},startBlocks:e("jigsaw_2A",20,20)},3:{instructionsIcon:"snail",aniGifURL:"/script_assets/k_1_images/instruction_gifs/drag-connect.gif",isK1:!0,image:{name:"snail",width:200,height:200},backgroundHSV:[36,1,.999],ghost:{x:400,y:100},numBlocks:2,requiredBlocks:[],freePlay:!1,largeNotches:!0,goal:{successCondition:function(){return g(null,{level:3,numBlocks:2})}},startBlocks:e("jigsaw_3A",400,100)+e("jigsaw_3B",100,220)},4:{instructionsIcon:"elephant",isK1:!0,image:{name:"elephant",width:200,height:200},backgroundHSV:[320,.6,.999],ghost:{x:400,y:100},numBlocks:2,requiredBlocks:[],freePlay:!1,largeNotches:!0,goal:{successCondition:function(){return g(null,{level:4,numBlocks:2})}},startBlocks:e("jigsaw_4A",100,140)+e("jigsaw_4B",400,200)},5:{instructionsIcon:"fish",isK1:!0,image:{name:"fish",width:200,height:200},backgroundHSV:[209,.57,.6],ghost:{x:400,y:100},numBlocks:3,requiredBlocks:[],freePlay:!1,largeNotches:!0,notchedEnds:!0,goal:{successCondition:function(){return g(null,{level:5,numBlocks:3})}},startBlocks:e("jigsaw_5A",100,20)+e("jigsaw_5B",100,140)+e("jigsaw_5C",100,280)},6:{instructionsIcon:"doggie",isK1:!0,image:{name:"doggie",width:200,height:200},backgroundHSV:[25,.57,.96],ghost:{x:400,y:100},numBlocks:3,requiredBlocks:[],freePlay:!1,largeNotches:!0,notchedEnds:!0,goal:{successCondition:function(){return g(null,{level:6,numBlocks:3})}},startBlocks:e("jigsaw_6B",100,20)+e("jigsaw_6A",100,140)+e("jigsaw_6C",100,280)},7:{instructionsIcon:"tree",isK1:!0,image:{name:"tree",width:200,height:200},backgroundHSV:[238,.51,.999],ghost:{x:400,y:100},numBlocks:3,requiredBlocks:[],freePlay:!1,largeNotches:!0,notchedEnds:!0,goal:{successCondition:function(){return g(null,{level:7,numBlocks:3})}},startBlocks:e("jigsaw_7B",100,20)+e("jigsaw_7A",100,140)+e("jigsaw_7C",100,280)},8:{instructionsIcon:"flower",isK1:!0,image:{name:"flower",width:200,height:200},backgroundHSV:[75,.8,.999],ghost:{x:400,y:100},numBlocks:3,requiredBlocks:[],freePlay:!1,largeNotches:!0,notchedEnds:!0,goal:{successCondition:function(){return g(null,{level:8,numBlocks:3})}},startBlocks:e("jigsaw_8C",100,20)+e("jigsaw_8B",100,140)+e("jigsaw_8A",100,280)},9:{instructionsIcon:"house",aniGifURL:"/script_assets/k_1_images/instruction_gifs/drag-disordered.gif",isK1:!0,image:{name:"house",width:200,height:200},backgroundHSV:[110,.56,.6],ghost:{x:400,y:100},numBlocks:3,requiredBlocks:[],freePlay:!1,notchedEnds:!0,largeNotches:!0,goal:{successCondition:function(){return g(null,{level:9,numBlocks:3})}},startBlocks:e("jigsaw_9B",100,20,e("jigsaw_9C",0,0,e("jigsaw_9A",0,0)))},10:{instructionsIcon:"computer",isK1:!0,image:{name:"computer",width:200,height:200},backgroundHSV:[300,.25,.8],ghost:{x:400,y:100},numBlocks:3,requiredBlocks:[],freePlay:!1,notchedEnds:!0,largeNotches:!0,goal:{successCondition:function(){return g(null,{level:10,numBlocks:3})}},startBlocks:e("jigsaw_10A",100,20,e("jigsaw_10C",0,0,e("jigsaw_10B",0,0)))},11:{instructionsIcon:"blocks",isK1:!0,image:{name:"blocks",width:131,height:286},ghost:{x:200,y:12},numBlocks:0,requiredBlocks:[],freePlay:!1,notchedEnds:!0,largeNotches:!1,snapRadius:30,goal:{successCondition:function(){return g(["jigsaw_repeat","jigsaw_purple","jigsaw_blue","jigsaw_green"],{})}},startBlocks:e("jigsaw_repeat",20,20,e("jigsaw_purple",0,0,e("jigsaw_blue")),"statement"),toolbox:c(d("jigsaw_green"))},12:{instructionsIcon:"blocks",isK1:!0,image:{name:"blocks",width:131,height:286},ghost:{x:200,y:12},numBlocks:0,requiredBlocks:[],freePlay:!1,notchedEnds:!0,largeNotches:!1,snapRadius:30,goal:{successCondition:function(){return g(["jigsaw_repeat","jigsaw_purple","jigsaw_blue","jigsaw_green"],{})}},startBlocks:e("jigsaw_repeat",20,20),toolbox:c(d("jigsaw_green")+d("jigsaw_purple")+d("jigsaw_blue"))},13:{instructionsIcon:"doggie",isK1:!0,image:{name:"doggie",width:200,height:200},ghost:{x:400,y:100},backgroundHSV:[25,.57,.96],numBlocks:3,requiredBlocks:[],freePlay:!1,largeNotches:!0,notchedEnds:!0,goal:{successCondition:function(){return g(null,{level:13,numBlocks:3})}},startBlocks:d("jigsaw_13C",100,20,d("jigsaw_13B",0,0,d("jigsaw_13A",0,0)))}}},{"../block_utils":76}]},{},[147]);