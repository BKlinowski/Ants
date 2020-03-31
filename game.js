document.addEventListener("DOMContentLoaded", function (event) {
  gameLevels = {
    block1: "img/block1.png",
    block2: "img/block2.png",
    block3: "img/block3.png",
    block4: "img/block4.png",
    block5: "img/block5.png",
    itemsChapter1: [
      {
        name: "ant",
        type: "player",
        width: 48,
        height: 32,
        image: "img/ant_down1.png",
        x: 304,
        y: 0,
        update: true,
        imgData: null,
        top: true,
        bot: true,
        left: true,
        right: true,
        key: {}
      },
      {
        name: "key",
        type: "tool",
        width: 32,
        height: 16,
        image: "img/key.png",
        x: 416,
        y: 160,
        functions(key) {
          var ant = game.player
          var a = setInterval(function () {
            if (key.x <= ant.x + ant.width &&
              key.x + key.width >= ant.x &&
              key.y <= ant.y + ant.height &&
              key.height + key.y >= ant.y) {
              game.context.fillStyle = "black";
              game.context.fillRect(key.x, key.y, key.width, key.height);
              clearInterval(a)
              var b = setInterval(function () {

                //  console.log(game.player.y+32, game.player.x+16)
                if (game.player.y + 32 == 240 && game.player.x + 16 == 192) {
                  
                  game.blocksTab[13][14].remove()
                  game.blocksTab[14][14].remove()
                  game.blocksTab[13][14] = null;
                  game.blocksTab[14][14] = null;
                  ant.right = true;
                  console.log(ant.right)
                  clearInterval(b)
                  console.log("done")
                }
              }, 16)
            }
          }, 16)
        }
      },
      {
        name: "key2",
        type: "tool",
        width: 32,
        height: 16,
        image: "img/key.png",
        x: 560,
        y: 222,
        functions(key) {
          var ant = game.player
          var a = setInterval(function () {
            if (key.x <= ant.x + ant.width &&
              key.x + key.width >= ant.x &&
              key.y <= ant.y + ant.height &&
              key.height + key.y >= ant.y) {
              game.context.fillStyle = "black";
              game.context.fillRect(key.x, key.y, key.width, key.height);
              clearInterval(a)
              var b = setInterval(function () {
                console.log(game.player.y + 32, game.player.x + 16)
                if (game.player.y + 32 == 272 && game.player.x + 16 == 32) {
                  ant.bot = true;
                  game.blocksTab[17][1].remove()
                  game.blocksTab[17][2].remove()
                  game.blocksTab[17][3].remove()
                  game.blocksTab[17][1] = null;
                  game.blocksTab[17][2] = null;
                  game.blocksTab[17][3] = null;
                  clearInterval(b)
                  console.log("done")
                }
              }, 16)
            }
          }, 16)
        }
      },
      /* {
        name: "diamond",
        type: "tool",
        width: 32,
        height: 32,
        image: "img/diamond.png",
        x: 282,
        y: 123,
      }, */
      /*  {
         name: "scorpion1",
         type: "cancer",
         width: 48,
         height: 32,
         image: "img/scorpion_right_green2.png",
         x: 102,
         y: 128,
         update: true,
         imgData: null,
         direction: 0,
         blockRand: true,
         randBlockTab: [false,false,false,false]
       }, */
      /* {
        name: "scorpion2",
        type: "cancer",
        width: 48,
        height: 32,
        image: "img/scorpion_right_green2.png",
        x: 482,
        y: 144,
        update: true,
        imgData: null,
        direction: 0,
        blockRand: true,
        randBlockTab: [false,false,false,false]
      }, */
      {
        name: "yellow_scorpion3",
        type: "cancer",
        width: 48,
        height: 32,
        image: "img/scorpion_right_yellow2.png",
        x: 402,
        y: 208,
        update: true,
        imgData: null,
        direction: 0,
        blockRand: false
      }
    ],
    chapter1: [
      [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
      [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4],
      [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4],
      [4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 4, 4],
      [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 4, 4],
      [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 4, 4, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 4, 4, 0, 0, 0, 4, 0, 0, 0, 4, 4],
      [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 0, 0, 0, 0, 4, 4, 0, 0, 0, 4, 0, 0, 0, 4, 4],
      [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 0, 0, 0, 4, 4, 0, 0, 0, 4, 0, 0, 0, 4, 4],
      [4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4],
      [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4],
      [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
      [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 4, 4],
      [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 3, 3],
      [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 3, 3],
      [3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3],
      [3, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3],
      [3, 5, 5, 5, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
    ],
    chapter2: [
      []
    ],
    chapter3: [
      []
    ],
    chapter4: [
      []
    ],
    chapter5: [
      []
    ],
    chapter6: [
      []
    ],
    chapter7: [
      []
    ],
    chapter8: [
      []
    ],
  }

  game = {
    start: function () {

      this.canvas = document.getElementById("root");
      this.context = this.canvas.getContext("2d");
      // console.log(x)
      this.context.fillStyle = "black";
      this.context.fillRect(0, 0, 640, 288);
    },
    clear: function () {
      this.context.cleart(0, 0, this.canvas.width, this.canvas.height);
    },
    makeLevel: async function (chapter, itemsChapter) {
      this.toolTab = [];
      this.randBlockTab = [false, false, false, false];
      this.cancerTab = [];
      this.blocksTab = []
      this.player = null;
      // console.log(itemsChapter)
      var x = 0;
      var y = 0;
      for (var i = 0; i < 18; i++) {
        // console.log(this.blocksTab)
        this.blocksTab.push([])
        x = 0;
        for (var j = 0; j < 40; j++) {
          switch (chapter[i][j]) {
            case 1: {
              // console.log(this.blocksTab)
              this.blocksTab[i][j] = await Block.create(gameLevels.block1, 16, 16, x, y)
              //console.log()
              //  draw(16, 16, gameLevels.block1, x, y)
              break;
            }

            case 2: {
              //  console.log(this.blocksTab)
              this.blocksTab[i][j] = await Block.create(gameLevels.block2, 16, 16, x, y)
              //   draw(16, 16, gameLevels.block2, x, y)
              //console.log(x + " " + y)
              break;
            }

            case 3: {
              //  console.log(this.blocksTab)
              this.blocksTab[i][j] = await Block.create(gameLevels.block3, 16, 16, x, y)
              // draw(16, 16, gameLevels.block3, x, y)
              break;
            }

            case 4: {
              //  console.log(this.blocksTab)
              this.blocksTab[i][j] = await Block.create(gameLevels.block4, 16, 16, x, y)
              // draw(16, 16, gameLevels.block4, x, y)
              break;
            }

            case 5: {
              // console.log(this.blocksTab)
              this.blocksTab[i][j] = await Block.create(gameLevels.block5, 16, 16, x, y)
              //  draw(16, 16, gameLevels.block5, x, y)
            }
              break;
            default: {
            }
              break;
          }
          x += 16;
        }
        y += 16;
      }

      for (var i = 0; i < itemsChapter.length; i++) {
        switch (itemsChapter[i].type) {
          case "player": {
            //console.log(itemsChapter[i].type)
            //console.log("AAA")
            this.player = await Player.create(itemsChapter[i].name, itemsChapter[i].type, itemsChapter[i].width, itemsChapter[i].height,
              itemsChapter[i].image, itemsChapter[i].x, itemsChapter[i].y, itemsChapter[i].update, itemsChapter[i].imgData, itemsChapter[i].top, itemsChapter[i].bot, itemsChapter[i].left,
              itemsChapter[i].right, itemsChapter[i].key);
          }
            break;
          case "tool": {
            this.toolTab.push(await Tool.create(itemsChapter[i].name, itemsChapter[i].type, itemsChapter[i].width, itemsChapter[i].height,
              itemsChapter[i].image, itemsChapter[i].x, itemsChapter[i].y, itemsChapter[i].functions));
          }
            break;
          case "cancer": {

            //console.log("AAA")
            this.cancerTab.push(await Cancer.create(itemsChapter[i].name, itemsChapter[i].type, itemsChapter[i].width, itemsChapter[i].height,
              itemsChapter[i].image, itemsChapter[i].x, itemsChapter[i].y, itemsChapter[i].update, itemsChapter[i].imgData, itemsChapter[i].direction, itemsChapter[i].blockRand, itemsChapter[i].randBlockTab));
          }
        }
      }
      //console.log(this.cancerTab)

    }
  }

  function switchValues(val1, val2) {
    var tmp = val1;
    val1 = val2;
    val2 = tmp;
  }

  class Tool {
    constructor(name, type, width, height, img, x, y, functions) {
      this.name = name;
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.img = img;
      this.functions = functions;
    }

    async initialize() {
      var image = new Image()
      image.src = this.img
      var that = this
      function a() {
        image.onload = function () {
          game.context.drawImage(image, that.x, that.y);
        }
      }
      await a();
    }

    static async create(name, type, width, height, img, x, y, functions) {
      const o = new Tool(name, type, width, height, img, x, y, functions);
      await o.initialize();
      o.functions(o);
      return o;
    }
  }

  class Block {
    constructor(img, width, height, x, y) {
      this.img = img;
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
    }

    hitBox() {

      // console.log(game.player)
      var that = this;
      var a = setInterval(check, 4)
      function check() {
        var ant = game.player;
        if (ant != null) {
          //console.log(ant.x + " " + ant.y + that.x + " " + that.y)
          if (that.x <= ant.x + ant.width &&
            that.x + that.width >= ant.x &&
            that.y <= ant.y + ant.height &&
            that.height + that.y >= ant.y) {
            //console.log("TRUE")
            //console.log(ant.x + " " + ant.y + "    " + that.x + " " + that.y)
            if (that.x < ant.x + ant.width && ant.y + ant.height > that.y && ant.y < that.y + that.height) {
              // console.log((ant.x + ant.width) + "    " + that.x)
              // console.log((ant.y + ant.height) +" jest wieksze od "+ (that.y+2)+ " a "+ (ant.y + 18) +" jest mniejsze od " +(that.y + that.height))
              game.player.left = false;
              //console.log(ant)
              //  console.log("LEWO")

            }
            if (that.x + that.width > ant.x && ant.y + ant.height > that.y && ant.y < that.y + that.height) {
              // console.log(ant.x + "    " + (that.x + that.width))
              //   console.log((ant.y + ant.height) +" jest wieksze od "+ (that.y+2)+ " a "+ (ant.y + 18) +" jest mniejsze od " +(that.y + that.height))
              game.player.right = false;
              //console.log(ant)
              //   console.log("PRAWO")
            }
            if (that.y >= ant.y + ant.height && ant.x + ant.width > that.x && ant.x < that.x + that.width) {
              game.player.bot = false;
              //   console.log((ant.x + ant.width) +" jest wieksze od "+ that.x+ " a "+ (ant.x +18) +" jest mniejsze od " +(that.x + that.width))
              // console.log(ant)
              //    console.log("DOL")
            }
            if (that.height + that.y <= ant.y && ant.x + ant.width > that.x && ant.x < that.x + that.width) {
              //  console.log((ant.x + ant.width) +" jest wieksze od "+ that.x+ " a "+ (ant.x +18) +" jest mniejsze od " +(that.x + that.width))
              game.player.top = false;
              // console.log(ant)
              //    console.log("GORA")
            }
          }
        }


        if (game.cancerTab.length == 1) {
          //console.log("kolizja")
          for (var i = 0; i < 1; i++) {
            if (that.x <= game.cancerTab[i].x + game.cancerTab[i].width &&
              that.x + that.width >= game.cancerTab[i].x &&
              that.y <= game.cancerTab[i].y + game.cancerTab[i].height &&
              that.height + that.y >= game.cancerTab[i].y) {
              // console.log("kolizja")
              if (game.cancerTab[i].name.slice(0, 6) == "yellow") {

                if (that.x + that.width > game.cancerTab[i].x && game.cancerTab[i].y + game.cancerTab[i].height > that.y && game.cancerTab[i].y < that.y + that.height) {

                  game.cancerTab[i].direction = 0;
                  //console.log(game.cancerTab[i].direction)
                }
                if (that.x < game.cancerTab[i].x + game.cancerTab[i].width && game.cancerTab[i].y + game.cancerTab[i].height > that.y && game.cancerTab[i].y < that.y + that.height) {
                  game.cancerTab[i].direction = 2;
                  // console.log(game.cancerTab[i].direction)
                }
              }

              else if (game.cancerTab[i].blockRand == false) {

                //kolizja z lewą sciana
                if (that.x + that.width > game.cancerTab[i].x && game.cancerTab[i].y + game.cancerTab[i].height > that.y && game.cancerTab[i].y < that.y + that.height) {
                  game.cancerTab[i].randBlockTab[2] = true;
                  if (game.cancerTab[i].direction == 2) {
                    var rand = 2;
                    while (rand == 2) {
                      rand = Math.floor((Math.random() * 4) + 0);
                      if (game.cancerTab[i].randBlockTab[rand] == true) rand = 2
                    }
                    game.cancerTab[i].direction = rand;
                    game.cancerTab[i].blockRand = true;
                    return;
                    //console.log(game.cancerTab[i].direction)
                  }
                }/*else{
                  game.cancerTab[i].randBlockTab[2] = false;
                }*/

                //kolizja z prawą sciana
                if (that.x < game.cancerTab[i].x + game.cancerTab[i].width && game.cancerTab[i].y + game.cancerTab[i].height > that.y && game.cancerTab[i].y < that.y + that.height) {
                  game.cancerTab[i].randBlockTab[0] = true;
                  if (game.cancerTab[i].direction == 0) {
                    var rand = 0;
                    while (rand == 0) {
                      rand = Math.floor((Math.random() * 4) + 0);
                      if (game.cancerTab[i].randBlockTab[rand] == true) rand = 0
                    }
                    game.cancerTab[i].direction = rand;
                    game.cancerTab[i].blockRand = true;
                    return;
                    // console.log(game.cancerTab[i].direction)
                  }
                }/*else game.cancerTab[i].randBlockTab[0] = false;*/

                //kolizja z dolną sciana
                if (that.height + that.y <= game.cancerTab[i].y && game.cancerTab[i].x + game.cancerTab[i].width >= that.x && game.cancerTab[i].x <= that.x + that.width) {
                  game.cancerTab[i].randBlockTab[1] = true;
                  if (game.cancerTab[i].direction == 1) {
                    var rand = 1;
                    while (rand == 1) {
                      rand = Math.floor((Math.random() * 4) + 0);
                      if (game.cancerTab[i].randBlockTab[rand] == true) rand = 1
                    }
                    game.cancerTab[i].direction = rand;
                    game.cancerTab[i].blockRand = true;
                    return;
                    // console.log(game.cancerTab[i].direction)
                  }
                }/* else game.cancerTab[i].randBlockTab[1] = false;*/

                //kolizja z górną sciana
                if (that.y >= game.cancerTab[i].y + game.cancerTab[i].height && game.cancerTab[i].x + game.cancerTab[i].width >= that.x && game.cancerTab[i].x <= that.x + that.width) {
                  // console.log("BLOKADA DOLU")
                  game.cancerTab[i].randBlockTab[3] = true;
                  if (game.cancerTab[i].direction == 3) {
                    var rand = 3;
                    while (rand == 3) {
                      rand = Math.floor((Math.random() * 4) + 0);
                      if (game.cancerTab[i].randBlockTab[rand] == true) rand = 3
                    }
                    game.cancerTab[i].direction = rand;
                    game.cancerTab[i].blockRand = true;
                    return;
                    //console.log(game.cancerTab[i].direction)
                  }
                  /*else game.cancerTab[i].randBlockTab[3] = false;*/
                  //game.cancerTab[i].direction = Math.floor((Math.random() * 3) + 0)
                }
              }
            }
          }
        }

        if (that.end) {
          clearInterval(a)
          console.log("Zatrzymane " + that)
        }
        //console.log(ant)
      }


    }

    async initialize() {
      //console.log("test")
      var image = new Image()
      image.src = this.img
      var that = this
      function a() {
        image.onload = function () {
          // console.log("ELEOELOE")
          //console.log(image+ "  " + that.x+ "  " + that.y+ "  " + that.width+ "  " + that.height)
          game.context.drawImage(image, that.x, that.y);
        }
      }
      await a();
    }

    remove() {
      game.context.fillStyle = "black"
      game.context.fillRect(this.x, this.y, this.width, this.height)
      this.end = true
      delete this;
      console.log(this)
    }

    static async create(img, width, height, x, y) {
      const o = new Block(img, width, height, x, y);
      // console.log(img+ "  " + x+ "  " + y+ "  " + width+ "  " + height)
      await o.initialize();
      o.end = false;
      o.hitBox()
      return o;
    }
  }

  class Cancer {
    constructor(name, type, width, height, img, x, y, update, imgData, direction, blockRand, randBlockTab) {
      this.name = name;
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.img = img;
      this.update = update;
      this.imgData = imgData;
      this.type = type;
      this.direction = direction;
      this.blockRand = blockRand;
      this.randBlockTab = randBlockTab;
    }

    heartBeat(component) {
      var that = this;
      var imgSwitch = false;
      var ctx = game.context;
      var ant = game.player
      var a;
      function live() {
        // console.log(that.img)
        if (component.name.slice(0, 6) == "yellow") {
          // console.log("YELLOW")
          // console.log(component.imgData)
          if (component.x-4 < ant.x + 48 &&
            component.x + component.width+4 > ant.x &&
            component.y < ant.y + 32 &&
            component.height + component.y > ant.y) {
            clearInterval(a)
            game.player.dead(function (data) {
              if (data) {
                console.log("CZESC")
                //component.imgData = ctx.getImageData(component.x, component.y, component.width, component.height);
                game.context.fillRect(component.x-2, component.y, 36, 32)
                a = setInterval(live, 16)
              }
            });
            console.log("KOLIZJA")
          }
          if (component.direction == 2) {
            component.x += 1;
            ctx.putImageData(component.imgData, component.x - 1, component.y);
          } else {
            component.x -= 1;
            ctx.putImageData(component.imgData, component.x + 1, component.y);
          }
          //console.log(component.name)
          if (component.x % 16 == 0) {
            imgSwitch = !imgSwitch
          }
          if (imgSwitch) {
            if (component.direction == 2) {
              component.img = "img/scorpion_right_yellow2.png"
            } else {
              component.img = "img/scorpion_left_yellow2.png"
            }
          }
          else {
            if (component.direction == 2) {
              component.img = "img/scorpion_right_yellow1.png"
            } else {
              component.img = "img/scorpion_left_yellow1.png"
            }
          }
        } else if (component.name.slice(0, 6) != "yellow"  /*&& component.blockRand == true */) {
          //console.log(component.randBlockTab[0], component.randBlockTab[1], component.randBlockTab[2], component.randBlockTab[3])
          /*var _czy = true
          while(_czy){
            var rand = Math.floor((Math.random() * 4) + 0);
            if(component.randBlockTab[rand] == false) _czy = false;
          }*/
          //component.direction = rand
          if (component.direction == 0 /*&& component.randBlockTab[0] == false*/) {
            component.x -= 1;
            component.blockRand = false;
            ctx.putImageData(component.imgData, component.x + 1, component.y);
            if (component.x % 16 == 0) {
              imgSwitch = !imgSwitch
            }
            if (imgSwitch) {
              component.img = "img/scorpion_left_green1.png"
            }
            else {
              component.img = "img/scorpion_left_green2.png"
            }
            for (var i = 0; i < 4; i++) {
              component.randBlockTab[i] = false;
            }
          }

          else if (component.direction == 3 /*&& component.randBlockTab[1] == false*/) {
            component.y -= 1;
            component.blockRand = false;
            ctx.putImageData(component.imgData, component.x, component.y + 1);
            if (component.y % 16 == 0) {
              imgSwitch = !imgSwitch
            }
            if (imgSwitch) {
              component.img = "img/scorpion_up_green1.png"
            }
            else {
              component.img = "img/scorpion_up_green2.png"
            }
            for (var i = 0; i < 4; i++) {
              component.randBlockTab[i] = false;
            }
          }
          else if (component.direction == 2/* && component.randBlockTab[2] == false*/) {
            component.x += 1;
            component.blockRand = false;
            ctx.putImageData(component.imgData, component.x - 1, component.y);
            if (component.x % 16 == 0) {
              imgSwitch = !imgSwitch
            }
            if (imgSwitch) {
              component.img = "img/scorpion_right_green1.png"
            }
            else {
              component.img = "img/scorpion_right_green2.png"
            }
            for (var i = 0; i < 4; i++) {
              component.randBlockTab[i] = false;
            }
          }
          else if (component.direction == 1 /*&& component.randBlockTab[3] == false*/) {
            component.y += 1;
            component.blockRand = false;
            ctx.putImageData(component.imgData, component.x, component.y - 1);
            if (component.y % 16 == 0) {
              imgSwitch = !imgSwitch
            }
            if (imgSwitch) {
              component.img = "img/scorpion_down_green1.png"
            }
            else {
              component.img = "img/scorpion_down_green2.png"
            }
            for (var i = 0; i < 4; i++) {
              component.randBlockTab[i] = false;
            }
          }
        }

        ctx.fillStyle = "black";
        var image = new Image()
        image.src = that.img;
        component.imgData = ctx.getImageData(component.x, component.y, component.width, component.height);
        ctx.drawImage(image, component.x, component.y);/* , component.width, component.height */

      }
      a = setInterval(live, 16)
    }

    async initialize(o) {
      var image = new Image()
      image.src = this.img
      var that = this
      function a() {
        image.onload = function () {
          that.imgData = game.context.getImageData(that.x, that.y, that.width, that.height)
          //console.log(that.imgData)
          game.context.drawImage(image, that.x, that.y);
          o.heartBeat(o)
        }
      }
      await a();
    }

    static async create(name, type, width, height, img, x, y, update, imgData, direction, blockRand, randBlockTab) {
      const o = new Cancer(name, type, width, height, img, x, y, update, imgData, direction, blockRand, randBlockTab);
      await o.initialize(o);
      // o.heartBeat(o);
      return o;
    }
  }

  class Player {
    constructor(name, type, width, height, img, x, y, update, imgData, top, bot, left, right, key) {
      this.name = name;
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.img = img;
      this.update = update;
      this.imgData = imgData;
      this.type = type;
      this.top = top;
      this.bot = bot;
      this.left = left;
      this.right = right;
      this.key = key;
    }

    dead(data) {
      this.top = false;
      this.bot = false;
      this.left = false;
      this.right = false;
      var that = this;
      var i = 0;
      var j = 0;
      game.context.fillStyle = "black"
      var imgTab = ["img/ant_down1.png", "img/ant_left1.png", "img/ant_up1.png", "img/ant_right1.png"]
      function cos() {
        setTimeout(function () {
          game.context.fillRect(that.x, that.y, 48, 32)
          var image = new Image()
          image.src = imgTab[i];
          game.context.drawImage(image, that.x, that.y);
          i++;
          if (i == 4) {
            i = 0;
            j++;
          }
          if (j == 2) {
            game.context.fillRect(that.x, that.y, 48, 32)
            var image = new Image()
            image.src = "img/ant_down1.png";
            game.context.drawImage(image, 304, 0);
            that.top = true;
            that.bot = true;
            that.left = true;
            that.right = true;
            that.x = 304;
            that.y = 0
          }
          else cos()
          console.log("TIMEOUT")
        }, 100)
      }
      cos()
      setTimeout(function(){
        if (j == 2) return data(true);
      }, 900)
      
    }


    playerMovement(player) {
      var keyState = {};
      window.addEventListener("keydown", function (e) {
        player.key[e.keyCode || e.which] = true;
        //console.log(e.keyCode + " " + e.which)
      })
      window.addEventListener("keyup", function (e) {
        player.key[e.keyCode || e.which] = false;
      })
    }

    heartBeat(component) {
      var imgSwitch = false;
      function enableDirections() {
        component.right = true;
        component.left = true;
        component.bot = true;
        component.top = true;
      }
      function live() {
        var ctx = game.context;
        ctx.fillStyle = "black";
        if (component.key[65] == true && component.left == true) {
          component.x -= 1;
          if (component.x % 16 == 0) {
            imgSwitch = !imgSwitch
          }
          if (imgSwitch) {
            component.img = "img/ant_left1.png"
          }
          else {
            component.img = "img/ant_left2.png"
          }
          //  console.log("TEST")

          ctx.putImageData(component.imgData, component.x + 1, component.y);

          enableDirections()
        }
        else if (component.key[83] == true && component.bot == true) {
          component.y += 1;
          if (component.y % 16 == 0) {
            imgSwitch = !imgSwitch
          }
          if (imgSwitch) {
            component.img = "img/ant_down1.png"
          }
          else {
            component.img = "img/ant_down2.png"
          }
          // console.log("TEST")
          //   console.log(component.imgData.data)
          ctx.putImageData(component.imgData, component.x, component.y - 1);
          enableDirections()
        }
        else if (component.key[68] == true && component.right == true) {
          component.x += 1;
          if (component.x % 16 == 0) {
            imgSwitch = !imgSwitch
          }
          if (imgSwitch) {
            component.img = "img/ant_right1.png"
          }
          else {
            component.img = "img/ant_right2.png"
          }
          //   console.log("TEST")
          ctx.putImageData(component.imgData, component.x - 1, component.y);
          enableDirections()
        }
        else if (component.key[87] == true && component.top == true) {
          component.y -= 1;
          if (component.y % 16 == 0) {
            imgSwitch = !imgSwitch
          }
          if (imgSwitch) {
            component.img = "img/ant_up1.png"
          }
          else {
            component.img = "img/ant_up2.png"
          }
          //   console.log("TEST")
          ctx.putImageData(component.imgData, component.x, component.y + 1);
          enableDirections()
        }
        if (component.key[87] == true && component.top == true || component.key[65] == true && component.left == true || component.key[83] == true && component.bot == true || component.key[68] == true && component.right == true) {
          // console.log("TEST2")
          component.imgData = ctx.getImageData(component.x, component.y, component.width, component.height);
          var image = new Image()
          image.src = component.img;
          ctx.drawImage(image, component.x, component.y);
        }

      }
      setInterval(live, 16)
    }

    async initialize() {
      var image = new Image()
      image.src = this.img
      var that = this
      function a() {
        image.onload = function () {
          //   console.log("dzialaj pliz")
          that.imgData = game.context.getImageData(that.x, that.y, that.width, that.height)
          //console.log(that.imgData.data)
          game.context.drawImage(image, that.x, that.y);
        }
      }

      await a();

    }

    static async create(name, type, width, height, img, x, y, update, imgData, top, bot, left, right, key) {
      const o = new Player(name, type, width, height, img, x, y, update, imgData, top, bot, left, right, key);
      await o.initialize();
      o.heartBeat(o);
      o.playerMovement(o);
      // console.log(o)
      return o;
    }

  }

  window.onload = function () {
    game.start();
    game.makeLevel(gameLevels.chapter1, gameLevels.itemsChapter1)
  }

})
