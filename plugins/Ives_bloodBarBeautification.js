/*:
 * @target MZ
 * @plugindesc 地图血条显示美化插件
 * @author Ives && Grover
 * @version 1.0.0
 *
 * @url https://docs.google.com/document/d/176S5ldh330fltOy9IEsrcAfeIWGkelWa/edit
 * 
 * @command creatHPLine
 * @text 生成血条
 * @desc 生产血条
 *
 * @arg baseSetting
 * @text 基础设置
 * @desc 血条基础设置
 *
 * @arg id
 * @parent baseSetting
 * @type number
 * @min 1
 * @max 255
 * @default
 * @text 血条ID
 * @desc 该地图内血条的唯一标识
 *
 * @arg x
 * @parent baseSetting
 * @type number
 * @min 0
 * @max 2000
 * @default 20
 * @text X坐标
 * @desc 血条的X坐标
 *
 * @arg y
 * @parent baseSetting
 * @type number
 * @min 0
 * @max 2000
 * @default 20
 * @text Y坐标
 * @desc 血条的X坐标
 *
 * @arg hpVariableId
 * @parent baseSetting
 * @type variable
 * @default
 * @text HP变量
 * @desc 当前HP值
 *
 * @arg maxHPVariableId
 * @parent baseSetting
 * @type variable
 * @default
 * @text MHP变量
 * @desc 最大HP值
 *
 * @arg hidden
 * @parent baseSetting
 * @type boolean
 * @default false
 * @text 隐藏血条
 * @desc 血条的隐藏状态, 默认为false(显示血条)
 *
 * @arg hpGauge
 * @text 血槽设置
 * @desc 血槽相关设置
 *
 * @arg hpGauge_Name
 * @parent hpGauge
 * @type file
 * @dir img/system
 * @default
 * @text 血条底槽
 * @desc 血条底槽图片名
 *
 * @arg hpGauge_hue
 * @parent hpGauge
 * @type number
 * @min -360
 * @max 360
 * @default 0
 * @text 色相
 * @desc 血槽的色相,范围[-360~360]
 *
 * @arg hpLine
 * @text 血条设置
 * @desc 血条相关设置
 *
 * @arg hpLine_Name
 * @parent hpLine
 * @type file
 * @dir img/system
 * @default
 * @text 血条填充条图片
 * @desc 血条填充条图片名
 *
 * @arg hpLine_hue
 * @parent hpLine
 * @type number
 * @min -360
 * @max 360
 * @default 0
 * @text 色相
 * @desc 血槽的色相,范围[-360~360]
 *
 * @arg hpLine_padding_top
 * @parent hpLine
 * @type number
 * @decimals 1
 * @min -100.0
 * @max 200.0
 * @default 0
 * @text 上内边距
 * @desc 血条与血槽的上内边距
 *
 * @arg hpLine_padding_left
 * @parent hpLine
 * @type number
 * @decimals 1
 * @min -100.0
 * @max 200.0
 * @default 0
 * @text 左内边距
 * @desc 血条与血槽的左内边距
 *
 * @arg hpLine_speed
 * @parent hpLine
 * @type number
 * @min 1
 * @max 999
 * @default 100
 * @text 变化速度
 * @desc 血条变化速度,变化范围[1~999],数值越来大减血速度越快(999为瞬间减血)
 *
 * @arg hpLine_changeMode
 * @parent hpLine
 * @type select
 * @option 标准的
 * @value normal
 * @option 水平_右左(←→)
 * @value ←→
 * @option 纵向_上下(↑↓)
 * @value ↑↓
 * @default normal
 * @text 血条衰减方向
 * @desc 血条衰减时变化方式,默认为跟随系统,可与缩放镜像搭配使用
 *
 * @arg scale
 * @text 缩放设置
 * @desc 缩放相关设置
 *
 * @arg scale_x
 * @parent scale
 * @type number
 * @decimals 2
 * @min -2.00
 * @max 2.00
 * @default 1.00
 * @text 水平缩放
 * @desc 血条与血槽水平缩放功能,范围[-2~2],绝对值大于1为放大,绝对值小于1为缩放,负值为镜像
 *
 * @arg scale_y
 * @parent scale
 * @type number
 * @decimals 2
 * @min -2.00
 * @max 2.00
 * @default 1.00
 * @text 纵向缩放
 * @desc 血条与血槽纵向缩放功能,范围[-2~2],绝对值大于1为放大,绝对值小于1为缩放,负值为镜像
 *
 *
 * @command move
 * @text 移动血条
 * @desc 移动血条
 *
 * @arg baseSetting
 * @text 基础设置
 * @desc 血条基础设置
 *
 * @arg id
 * @parent baseSetting
 * @type number
 * @min 1
 * @max 255
 * @default
 * @text 血条ID
 * @desc 该地图内血条的唯一标识
 *
 * @arg x
 * @parent baseSetting
 * @type number
 * @min 0
 * @max 2000
 * @default <inherit>
 * @text X坐标
 * @desc 血条的X坐标
 *
 * @arg y
 * @parent baseSetting
 * @type number
 * @min 0
 * @max 2000
 * @default <inherit>
 * @text Y坐标
 * @desc 血条的X坐标
 *
 * @arg hpVariableId
 * @parent baseSetting
 * @type variable
 * @default <inherit>
 * @text HP变量
 * @desc 当前HP值
 *
 * @arg maxHPVariableId
 * @parent baseSetting
 * @type variable
 * @default <inherit>
 * @text MHP变量
 * @desc 最大HP值
 *
 * @arg hpGauge
 * @text 血槽设置
 * @desc 血槽相关设置
 *
 * @arg hpGauge_Name
 * @parent hpGauge
 * @type file
 * @dir img/system
 * @default <inherit>
 * @text 血条底槽
 * @desc 血条底槽图片名,默认继承之前对应id的血槽图片
 *
 * @arg hpGauge_hue
 * @parent hpGauge
 * @type number
 * @min -360
 * @max 360
 * @default <inherit>
 * @text 色相
 * @desc 血槽的色相,范围[-360~360],默认继承之前对应id的血槽图片色相
 *
 * @arg hpLine
 * @text 血条设置
 * @desc 血条相关设置
 *
 * @arg hpLine_Name
 * @parent hpLine
 * @type file
 * @dir img/system
 * @default <inherit>
 * @text 血条填充条图片
 * @desc 血条填充条图片名,默认继承之前对应id的血条图片
 *
 * @arg hpLine_hue
 * @parent hpLine
 * @type number
 * @min -360
 * @max 360
 * @default <inherit>
 * @text 色相
 * @desc 血条的色相,范围[-360~360],默认继承之前对应id的血条图片色相
 *
 * @arg hpLine_padding_top
 * @parent hpLine
 * @type number
 * @decimals 1
 * @min -100.0
 * @max 200.0
 * @default <inherit>
 * @text 上内边距
 * @desc 血条与血槽的上内边距,默认继承之前对应id的血条与血槽的上内边距
 *
 * @arg hpLine_padding_left
 * @parent hpLine
 * @type number
 * @decimals 1
 * @min -100.0
 * @max 200.0
 * @default <inherit>
 * @text 左内边距
 * @desc 血条与血槽的左内边距,默认继承之前对应id的血条与血槽的左内边距
 *
 * @arg hpLine_speed
 * @parent hpLine
 * @type number
 * @min 1
 * @max 999
 * @default <inherit>
 * @text 变化速度
 * @desc 血条变化速度,变化范围[1~999],数值越来大减血速度越快(999为瞬间减血)
 *
 * @arg hpLine_changeMode
 * @parent hpLine
 * @type select
 * @option 标准的
 * @value normal
 * @option 水平_右左(←→)
 * @value ←→
 * @option 纵向_上下(↑↓)
 * @value ↑↓
 * @default normal
 * @text 血条衰减方向
 * @desc 血条衰减时变化方式,默认为跟随系统,可与镜像搭配使用
 *
 * @arg scale
 * @text 缩放设置
 * @desc 缩放相关设置
 *
 * @arg scale_x
 * @parent scale
 * @type number
 * @decimals 2
 * @min -2.00
 * @max 2.00
 * @default <inherit>
 * @text 水平缩放
 * @desc 血条与血槽水平缩放功能,范围[-2~2],绝对值大于1为放大,绝对值小于1为缩放,负值为镜像,默认继承之前对应id的水平缩放数值
 *
 * @arg scale_y
 * @parent scale
 * @type number
 * @decimals 2
 * @min -2.00
 * @max 2.00
 * @default <inherit>
 * @text 纵向缩放
 * @desc 血条与血槽纵向缩放功能,范围[-2~2],绝对值大于1为放大,绝对值小于1为缩放,负值为镜像,默认继承之前对应id的纵向缩放数值
 *
 *
 * @command hide
 * @text 隐藏血条
 * @desc 隐藏血条
 *
 * @arg id
 * @type number
 * @min 1
 * @max 255
 * @default
 * @text 血条ID
 * @desc 该地图内血条的唯一标识
 *
 *
 * @command show
 * @text 显示血条
 * @desc 显示血条
 *
 * @arg id
 * @type number
 * @min 1
 * @max 255
 * @default
 * @text 血条ID
 * @desc 该地图内血条的唯一标识
 *
 *
 * @command remove
 * @text 废除血条
 * @desc 废除血条
 *
 * @arg id
 * @type number
 * @min 1
 * @max 255
 * @default
 * @text 血条ID
 * @desc 该地图内血条的唯一标识
 *
 *
 * @help Ives_bloodBarBeautification.js
 * 帮助说明:
 *    1.移动血条指令中,默认参数为<inherit>,表示继承创建时的属性
 *    2.血条衰减方向和水平/纵向缩放可以组合搭配
 *    3.如上面的组合还不满足，可手动旋转处理相关素材
 */

(function () {
  "use strict";

  const pluginName = "Ives_bloodBarBeautification";

  function idErrorTips(id) {
    if (!id && Utils.isOptionValid("test")) {
      let text = "血条Id不存在, 地图:%1";
      console.info(text.format($dataMapInfos[$gameMap.mapId()].name));
      return true;
    }
    return false;
  }

  PluginManager.registerCommand(pluginName, "creatHPLine", (args) => {
    args = Object.assign({}, args);
    if (!idErrorTips(args.id)) {
      let hpSprites = SceneManager._scene._hpSprites;
      let isValid = hpSprites && hpSprites.getChildByName("HP_" + args.id);
      if (isValid) {
        refreshHPSprite.bind(hpSprites)(args);
      } else {
        creatHPSprite.bind(SceneManager._scene)(args);
      }
    }
  });

  PluginManager.registerCommand(pluginName, "move", (args) => {
    args = Object.assign({}, args);
    if (!idErrorTips(args.id)) {
      let hpSprites = SceneManager._scene._hpSprites;
      let isValid = hpSprites && hpSprites.getChildByName("HP_" + args.id);
      if (isValid) {
        refreshHPSprite.bind(hpSprites)(args);
      } else if (Utils.isOptionValid("test")) {
        return console.info("ID为%1的血条不存在".format(args.id));
      }
    }
  });

  PluginManager.registerCommand(pluginName, "hide", (args) => {
    args = Object.assign({}, args);
    if (!idErrorTips(args.id)) {
      hideHPSprite.bind(SceneManager._scene._hpSprites)(args);
    }
  });

  PluginManager.registerCommand(pluginName, "show", (args) => {
    args = Object.assign({ hidden: "false" }, args);
    if (!idErrorTips(args.id)) {
      showHPSprite.bind(SceneManager._scene._hpSprites)(args);
    }
  });

  PluginManager.registerCommand(pluginName, "remove", (args) => {
    args = Object.assign({ hidden: "false" }, args);
    if (!idErrorTips(args.id)) {
      removeHPSprite.bind(SceneManager._scene._hpSprites)(args);
    }
  });

  function hideHPSprite(args) {
    args = Object.assign({ hidden: "true" }, args);
    let { id } = args;
    let hpSprite = this && this.getChildByName("HP_" + id);
    if (hpSprite) {
      hpSprite.hide();
    }
    saveHPSpriteData.bind($gameSystem)(args);
  }

  function showHPSprite(args) {
    args = Object.assign({ hidden: "false" }, args);
    let { id } = args;
    let hpSprite = this && this.getChildByName("HP_" + id);
    if (hpSprite) {
      hpSprite.show();
    }
    saveHPSpriteData.bind($gameSystem)(args);
  }

  function removeHPSprite(args) {
    let { id } = args;
    let hpSprite = this && this.getChildByName("HP_" + id);
    if (hpSprite) {
      this.removeChild(hpSprite);
    }
    let list = $gameSystem._hpList[$gameMap.mapId()];
    if (list && list[id]) {
      delete list[id];
    }
  }

  var Game_System_initialize = Game_System.prototype.initialize;
  Game_System.prototype.initialize = function () {
    Game_System_initialize.apply(this, arguments);
    this._hpList = {};
  };

  var Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded;
  Scene_Map.prototype.onMapLoaded = function () {
    Scene_Map_onMapLoaded.apply(this, arguments);
    if ($gameSystem._hpList && $gameSystem._hpList[$gameMap.mapId()]) {
      for (let args of $gameSystem._hpList[$gameMap.mapId()]) {
        args && recover(args);
      }
    }
  };

  function saveHPSpriteData(args) {
    let id = args.id;
    this._hpList[$gameMap.mapId()] = this._hpList[$gameMap.mapId()] || [null];
    if (this._hpList[$gameMap.mapId()][id]) {
      let keys = Object.keys(args);
      for (let key of keys) {
        if (args[key] === "<inherit>") {
          continue;
        }
        this._hpList[$gameMap.mapId()][id][key] = args[key];
      }
    } else {
      this._hpList[$gameMap.mapId()][id] = args;
    }
  }

  function recover(args) {
    let hpSprites = SceneManager._scene._hpSprites;
    let isValid = hpSprites && hpSprites.getChildByName("HP_" + args.id);
    if (isValid) {
      refreshHPSprite.bind(hpSprites)(args);
    } else {
      creatHPSprite.bind(SceneManager._scene)(args);
    }
  }

  function refreshHPSprite(args) {
    let { id, x, y, scale_x, scale_y, hidden } = args;
    const hpSprite = this.getChildByName("HP_" + id);
    if (hpSprite) {
      inheritParams.bind(hpSprite)(
        [scale_x, scale_y],
        "scale",
        callBack_Scale,
        true
      );
      inheritParams.bind(hpSprite)([x, y], "move", callBack_Move, true);
      inheritParams.bind(hpSprite)(
        hidden,
        "hide",
        function (e, v) {
          v && v.toString() === "true" && this[e]();
        },
        true
      );
      refreshGaugeSprite.bind(hpSprite._GaugeSprite)(args);
      refreshLineSprite.bind(hpSprite._LineSprite)(args);
      saveHPSpriteData.bind($gameSystem)(args);
    }
  }

  function refreshGaugeSprite(args) {
    let { hpGauge_Name, hpGauge_hue } = args;
    inheritParams.bind(this)(hpGauge_Name, "bitmap", function (e, f) {
      if (f) {
        this[e] = ImageManager.loadSystem(f);
      } else {
        this._gaugeNoBitmap = true;
      }
    });
    inheritParams.bind(this)(hpGauge_hue, "setHue", function (e, hue) {
      this[e](Number(hue));
    });
  }

  // this.getChildByName("HP_" + id)._LineSprite             hpSprite._LineSprite
  function refreshLineSprite(args) {
    let {
      hpVariableId,
      maxHPVariableId,
      hpLine_Name,
      hpLine_hue,
      hpLine_padding_top,
      hpLine_padding_left,
      hpLine_speed,
      hpLine_changeMode
    } = args;
    inheritParams.bind(this)(hpVariableId, "_hpVariableId");
    inheritParams.bind(this)(maxHPVariableId, "_maxHPVariableId");
    inheritParams.bind(this)(Number(hpLine_speed), "_speed");
    inheritParams.bind(this)(hpLine_changeMode, "_changeMode");
    inheritParams.bind(this)(hpLine_Name, "bitmap", function (e, f) {
      if (f) {
        this[e] = ImageManager.loadSystem(f);
      } else {
        noBitmapTips.bind(this)();
      }
    });
    inheritParams.bind(this)(hpLine_hue, "setHue", function (e, hue) {
      this[e](Number(hue));
    });
    inheritParams.bind(this)(
      [hpLine_padding_left, hpLine_padding_top],
      "move",
      callBack_Padding,
      true
    );
    this.update();
  }

  function callBack_Scale(e, args) {
    let [scale_x, scale_y] = args;
    let isChange = false;
    if (scale_x === "<inherit>") {
      scale_x = this.scale._x;
    } else {
      isChange = true;
    }
    if (scale_y === "<inherit>") {
      scale_y = this.scale._y;
    } else {
      isChange = true;
    }
    isChange && this[e].set(Number(scale_x), Number(scale_y));
    return isChange;
  }

  function callBack_Move(e, args) {
    let [x, y] = args;
    let isChange = false;
    if (x === "<inherit>") {
      x = this.x;
    } else {
      isChange = true;
    }
    if (y === "<inherit>") {
      y = this.y;
    } else {
      isChange = true;
    }
    isChange && this[e](Number(x), Number(y));
    return isChange;
  }

  function callBack_Padding(e, args) {
    let [padding_left, padding_top] = args;
    if (padding_left === "<inherit>") {
      padding_left = this._padding_left;
    }
    if (padding_top === "<inherit>") {
      padding_top = this._padding_top;
    }
    this[e](Number(padding_left), Number(padding_top));
  }

  function inheritParams(o, e, cb, iife) {
    try {
      if (iife && cb) {
        return cb.bind(this)(e, o);
      }
      if ("<inherit>" !== o) {
        if (!cb) {
          this[e] = o;
        } else {
          return cb.bind(this)(e, o);
        }
      }
    } catch (error) {
      Utils.isOptionValid("test") && console.warn("参数继承出错", error);
    }
  }false

  function creatHPSprite(args) {
    if (!this._hpSprites) {
      // 创建父精灵
      this._hpSprites = new Sprite_Clickable();
      this.addChild(this._hpSprites);
    }
    let hpChildSprite = new Sprite_Clickable();
    // 创建血槽和血条精灵
    creatChildHPSprite.bind(hpChildSprite)(args);
    this._hpSprites.addChild(hpChildSprite);
    // 存储当前血条管理数据
    saveHPSpriteData.bind($gameSystem)(args);
    this.addChild(this._hpSprites);
  }

  // hpChildSprite
  function creatChildHPSprite(args) {
    let { id, x, y, scale_x, scale_y, hidden } = args;
    this.name = "HP_" + id;
    scale_x = Number(scale_x);
    scale_y = Number(scale_y);
    this.scale.set(scale_x, scale_y);
    this.move(Number(x), Number(y));
    creatGaugeSprite.bind(this)(args);
    creatLineSprite.bind(this)(args);
    if (hidden.toString() === "true") {
      this.hide();
    }
  }

  function creatGaugeSprite(args) {
    let { hpGauge_Name, hpGauge_hue } = args;
    this._GaugeSprite = new Sprite_Clickable();
    this._GaugeSprite._gaugeNoBitmap = false;
    if (hpGauge_Name) {
      this._GaugeSprite.bitmap = ImageManager.loadSystem(hpGauge_Name);
    } else {
      this._GaugeSprite._gaugeNoBitmap = true;
    }
    hpGauge_hue && this._GaugeSprite.setHue(Number(hpGauge_hue));
    this.addChild(this._GaugeSprite);
  }

  // hpChildSprite
  function creatLineSprite(args) {
    let {
      hpVariableId,
      maxHPVariableId,
      hpLine_Name,
      hpLine_hue,
      hpLine_padding_top,
      hpLine_padding_left,
      hpLine_speed,
      hpLine_changeMode
    } = args;
    this._LineSprite = new Sprite_Clickable();
    this._LineSprite._hpVariableId = hpVariableId;
    this._LineSprite._maxHPVariableId = maxHPVariableId;
    this._LineSprite._changeMode = hpLine_changeMode;
    this._LineSprite._speed = Number(hpLine_speed);
    if (hpLine_Name) {
      this._LineSprite.bitmap = ImageManager.loadSystem(hpLine_Name);
    } else {
      noBitmapTips.bind(this._LineSprite)();
    }
    hpLine_hue && this._LineSprite.setHue(Number(hpLine_hue));
    this._LineSprite._padding_left = Number(hpLine_padding_left);
    this._LineSprite._padding_top = Number(hpLine_padding_top);
    this._LineSprite.move(
      Number(hpLine_padding_left),
      Number(hpLine_padding_top)
    );
    if (Utils.isOptionValid("test")) {
      checkTransparent.bind(this._LineSprite)();
    }
    changeUpdate.bind(this._LineSprite)();
    this._LineSprite.update();
    this.addChild(this._LineSprite);
  }

  function checkTransparent() {
    this.onMouseEnter = function () {
      if (!this.bitmap || !this.bitmap.isReady()) {
        return;
      }
      let { width, height } = this.bitmap;
      if (!this._bitmapTips) {
        this._bitmapTips = new Sprite_Clickable();
        let area = 0;
        let bitmap = new Bitmap(width, height);
        let direction = "y";
        let color = "rgba(255, 0, 0, 0.8)";
        let transparentArea = 0;
        bitmap.fillAll("rgba(0, 0, 0, 0.8)");
        if (this._changeMode === "normal") {
          if (this.bitmap.width <= this.bitmap.height) {
            direction = "x";
          }
        }
        if (["↑↓"].includes(this._changeMode)) {
          direction = "x";
        }
        for (let x = 0; x <= width; x++) {
          let isTransparent = true;
          for (let y = 0; y <= height; y++) {
            area++;
            if (this.bitmap.getAlphaPixel(x, y) === 0) {
              bitmap.clearRect(x, y, 1, 1);
              bitmap.fillRect(x, y, 1, 1, color);
            } else {
              isTransparent = false;
            }
          }
          if (direction === "y" && isTransparent) {
            transparentArea += direction === "y" ? height : width;
          }
        }
        if (transparentArea / area > 0.1) {
          let text = "请处理血条素材中过多的透明区域";
          bitmap.drawText(text, 0, 0, width, height, "center");
          this._bitmapTips.bitmap = bitmap;
          this._bitmapTips.move(0, height + 4);
          this.addChild(this._bitmapTips);
        } else {
          delete this._bitmapTips;
        }
      }
    };
    this.onMouseExit = function () {
      this._bitmapTips && this.removeChild(this._bitmapTips);
      delete this._bitmapTips;
    };
  }

  function noBitmapTips() {
    var bitmap = new Bitmap(200, 40);
    bitmap.fillAll("rgba(0, 0, 0, 0.8)");
    bitmap.drawText("请设置血条图片", 0, 0, 200, 40, "center");
    this.bitmap = bitmap;
  }

  function changeUpdate() {
    let _update = this.update;
    this.update = function () {
      _update.apply(this, arguments);
      if (!this.bitmap.isReady()) {
        return;
      }
      hpReduceSpeed.bind(this)();
      let ratio = this._currentHp / $gameVariables.value(this._maxHPVariableId);
      if (Number.isFinite(ratio) && !Number.isNaN(ratio)) {
        if (this._changeMode === "normal") {
          if (this.bitmap.width > this.bitmap.height) {
            return updateHorizonta.bind(this)(ratio);
          } else {
            return updateVertical.bind(this)(ratio);
          }
        }
        if (["←→"].includes(this._changeMode)) {
          updateHorizonta.bind(this)(ratio);
        }
        if (["↑↓"].includes(this._changeMode)) {
          updateVertical.bind(this)(ratio);
        }
      }
    };
  }

  function hpReduceSpeed() {
    let realHp = $gameVariables.value(this._hpVariableId);
    this._currentHp = this._currentHp || realHp;
    if (this._currentHp !== realHp) {
      let realMaxHp = $gameVariables.value(this._maxHPVariableId);
      let speed = (realMaxHp * this._speed) / 999;
      if (realHp > this._currentHp) {
        this._currentHp += Math.max(1, speed);
        this._currentHp = Math.min(realHp, ~~this._currentHp);
      } else {
        this._currentHp -= Math.max(1, speed);
        this._currentHp = Math.max(realHp, ~~this._currentHp);
      }
    }
  }

  function updateHorizonta(ratio) {
    let currentWidth = ratio * this.bitmap.width;
    this.setFrame(0, 0, currentWidth, this.bitmap.height);
  }

  function updateVertical(ratio) {
    let currentHeight = ratio * this.bitmap.height;
    this.setFrame(0, 0, this.bitmap.width, currentHeight);
  }
})();
