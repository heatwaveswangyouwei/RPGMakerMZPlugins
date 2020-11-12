/*:
 * @target MZ
 * @plugindesc 变量精灵显示插件
 * @author Ives
 * @version 1.0.0
 *
 * @command variableDisplay
 * @text 设置变量精灵
 * @desc 设置变量精灵
 *
 * @arg 基础设置
 * @arg id
 * @parent 基础设置
 * @type number
 * @min 1
 * @max 255
 * @text id
 * @desc 该地图内变量精灵显示的唯一指标
 *
 * @arg x
 * @parent 基础设置
 * @type number
 * @min 0
 * @max 5000
 * @default 0
 * @text x坐标
 * @desc 变量精灵的x坐标
 *
 * @arg y
 * @parent 基础设置
 * @type number
 * @min 0
 * @max 5000
 * @default 0
 * @text y坐标
 * @desc 变量精灵的y坐标
 *
 * @arg width
 * @parent 基础设置
 * @type number
 * @min 24
 * @max 5000
 * @default 48
 * @text 宽
 * @desc 宽度
 *
 * @arg height
 * @parent 基础设置
 * @type number
 * @min 24
 * @max 5000
 * @default 24
 * @text 高
 * @desc 高度
 *
 * @arg background_color
 * @parent 基础设置
 * @type string
 * @default transparent
 * @text 背景色
 * @desc 默认透明,支持十六进制色、RGB颜色、RGBA颜色、HSL颜色、HSLA颜色
 *
 * @arg hidden
 * @parent 基础设置
 * @type boolean
 * @default false
 * @text 隐藏/显示
 * @desc 图片的隐藏状态, 默认为false(显示)
 *
 * @arg commonEventId
 * @parent 基础设置
 * @type common_event
 * @min 1
 * @max 2000
 * @text 公共事件Id
 * @desc 点击执行的公共事件
 *
 * @arg 文本设置
 * @arg text
 * @parent 文本设置
 * @type multiline_string
 * @text 显示内容
 * @desc 显示的内容,可用事件指令[显示对话]中的控制字符如\C[n] \V[n] \N[n]等
 *
 * @arg 窗口设置
 * @arg windowskin
 * @parent 窗口设置
 * @type file
 * @dir img/system/
 * @text 窗口皮肤
 * @desc 自定义的窗口皮肤,默认为系统窗口皮肤
 *
 * @arg backgroundType
 * @parent 窗口设置
 * @type select
 * @option 窗口
 * @value 0
 * @option 暗淡
 * @value 1
 * @option 透明
 * @value 2
 * @default 2
 * @text 背景样式
 * @desc 背景样式,默认透明
 *
 * @arg 字体设置
 * @arg fontSize
 * @parent 字体设置
 * @type number
 * @min 4
 * @max 200
 * @text 字体大小
 * @desc 文本内字体大小,默认为游戏系统设置的字体大小
 *
 * @arg fontBold
 * @parent 字体设置
 * @type boolean
 * @default false
 * @text 字体加粗
 * @desc 字体是否加粗,默认不加粗
 *
 * @arg fontItalic
 * @parent 字体设置
 * @type boolean
 * @default false
 * @text 斜体
 * @desc 字体是否倾斜,默认不倾斜
 *
 * @arg textColor
 * @parent 字体设置
 * @type string
 * @default #ffffff
 * @text 字体颜色
 * @desc 字体颜色,默认白色,支持十六进制色、RGB颜色、RGBA颜色、HSL颜色、HSLA颜色
 *
 * @arg outlineColor
 * @parent 字体设置
 * @type string
 * @default rgba(0, 0, 0, 0.5)
 * @text 轮廓颜色
 * @desc 字体轮廓颜色,默认透明,支持十六进制色、RGB颜色、RGBA颜色、HSL颜色、HSLA颜色
 *
 * @arg outlineWidth
 * @parent 字体设置
 * @type number
 * @min 0
 * @max 100
 * @default 3
 * @text 轮廓宽度
 * @desc 字体轮廓宽度,默认3
 *
 * @command hide
 * @text 隐藏变量精灵
 * @desc 隐藏变量精灵
 *
 * @arg id
 * @type number
 * @min 1
 * @max 255
 * @default
 * @text id
 * @desc 该地图内变量精灵显示的唯一指标
 *
 * @command show
 * @text 显示变量精灵
 * @desc 需要显示的变量精灵
 *
 * @arg id
 * @type number
 * @min 1
 * @max 255
 * @default
 * @text id
 * @desc 该地图内变量精灵显示的唯一指标
 *
 *
 * @command remove
 * @text 删除变量精灵
 * @desc 需要删除的变量精灵
 *
 * @arg id
 * @type number
 * @min 1
 * @max 255
 * @default
 * @text id
 * @desc 该地图内变量精灵显示的唯一指标
 *
 * @help Ives_variableDisplay.js
 * 帮助说明:
 *    变量显示插件
 */

(function () {
  "use strict";

  const pluginName = "Ives_variableDisplay";

  PluginManager.registerCommand(pluginName, "variableDisplay", (args) => {
    args = Object.assign({}, args);
    creatVariablesSprite.bind(SceneManager._scene)(args);
  });

  PluginManager.registerCommand(pluginName, "hide", (args) => {
    args = Object.assign({}, args);
    let variablesSprite = SceneManager._scene._variablesSprite;
    hideVariablesSprite.bind(variablesSprite)(args);
  });

  PluginManager.registerCommand(pluginName, "show", (args) => {
    args = Object.assign({ hidden: "false" }, args);
    let variablesSprite = SceneManager._scene._variablesSprite;
    showVariablesSprite.bind(variablesSprite)(args);
  });

  PluginManager.registerCommand(pluginName, "remove", (args) => {
    args = Object.assign({ hidden: "false" }, args);
    let variablesSprite = SceneManager._scene._variablesSprite;
    removeVariablesSprite.bind(variablesSprite)(args);
  });

  function hideVariablesSprite(args) {
    args = Object.assign({ hidden: "true" }, args);
    let childSprite = isValidSprite(this, args.id);
    if (childSprite) {
      childSprite.hide();
    }
    saveVariableSpriteData.bind($gameSystem)(args);
  }

  function showVariablesSprite(args) {
    args = Object.assign({ hidden: "false" }, args);
    let childSprite = isValidSprite(this, args.id);
    if (childSprite) {
      childSprite.show();
    }
    saveVariableSpriteData.bind($gameSystem)(args);
  }

  function removeVariablesSprite(args) {
    let childSprite = isValidSprite(this, args.id);
    if (childSprite) {
      this.removeChild(childSprite);
    }
    let list = $gameSystem._variablesList[$gameMap.mapId()];
    if (list && list[args.id]) {
      delete list[args.id];
    }
  }

  var Game_System_initialize = Game_System.prototype.initialize;
  Game_System.prototype.initialize = function () {
    Game_System_initialize.apply(this, arguments);
    this._variablesList = {};
  };

  var Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded;
  Scene_Map.prototype.onMapLoaded = function () {
    Scene_Map_onMapLoaded.apply(this, arguments);
    let variablesList = $gameSystem._variablesList;
    if (variablesList && variablesList[$gameMap.mapId()]) {
      for (let args of variablesList[$gameMap.mapId()]) {
        args && recover(args);
      }
    }
  };

  function recover(args) {
    let variablesSprite = SceneManager._scene._variablesSprite;
    let childSprite = isValidSprite(variablesSprite, args.id);
    if (childSprite) {
      refreshVariableSprite.bind(childSprite)(args);
    } else {
      creatVariablesSprite.bind(SceneManager._scene)(args);
    }
  }

  function creatVariablesSprite(args) {
    let variablesSprite = SceneManager._scene._variablesSprite;
    let childSprite = isValidSprite(variablesSprite, args.id);
    if (childSprite) {
      refreshVariableSprite.bind(childSprite)(args);
    } else {
      creatVariableSprite.bind(SceneManager._scene)(args);
    }
  }

  function isValidSprite(s, id) {
    return s && s.getChildByName("negative_" + id);
  }

  function creatVariableSprite(args) {
    if (!this._variablesSprite) {
      this._variablesSprite = new Sprite_Clickable();
      this.addChild(this._variablesSprite);
    }
    let variablesChildSprite = new Sprite_Clickable();
    creatChildVariableSprite.bind(variablesChildSprite)(args);
    this._variablesSprite.addChild(variablesChildSprite);
    saveVariableSpriteData.bind($gameSystem)(args);
    this.addChild(this._variablesSprite);
  }

  function creatChildVariableSprite(args) {
    this.name = "negative_" + args.id;
    creatBitmap.bind(this)(args);
  }

  function Window_Variables() {
    this.initialize(...arguments);
  }

  Window_Variables.prototype = Object.create(Window_Base.prototype);

  Window_Variables.prototype.constructor = Window_Variables;

  var _Window_Variables_initialize = Window_Variables.prototype.initialize;
  Window_Variables.prototype.initialize = function () {
    _Window_Variables_initialize.apply(this, arguments);
    this._padding = 4;
  };

  Window_Variables.prototype.lineHeight = function () {
    return 28;
  };

  Window_Variables.prototype.itemPadding = function () {
    return 0;
  };

  Window_Variables.prototype.updatePadding = function () {
    this.padding = 4;
  };

  Window_Variables.prototype.makeFontBigger = function () {
    if (this.contents.fontSize <= 96) {
      this.contents.fontSize += 4;
    }
  };

  Window_Variables.prototype.makeFontSmaller = function () {
    if (this.contents.fontSize >= 24) {
      this.contents.fontSize -= 4;
    }
  };

  function creatBitmap(args) {
    var { x, y, width, height, hidden, text, commonEventId } = args;
    this._windowBase && this.removeChild(this._windowBase);
    this._windowBase = new Window_Variables(new Rectangle(0, 0, width, height));
    windowBaseAttribute.bind(this._windowBase)(args);
    let rect = this._windowBase.baseTextRect();
    this._windowBase.drawTextEx(text, rect.x, rect.y, rect.width);
    this.addChild(this._windowBase);
    this._commonEventId = commonEventId;
    this.onClick = function () {
      this._commonEventId && $gameTemp.reserveCommonEvent(this._commonEventId);
    };
    if (String(hidden) === "true") {
      this._windowBase.close();
      this.hide();
    } else if (String(hidden) === "false") {
      this._windowBase.open();
      this.show();
    }
    this.bitmap = new Bitmap(width, height);
    this.bitmap.fillAll(args.background_color || "transparent");
    Utils.isOptionValid("test") && sizeTips.bind(this)(args);
    this.move(Number(x), Number(y));
  }

  function sizeTips(args) {
    let { id, text, width, height } = args;
    this.onMouseEnter = function () {
      let params = this._windowBase.textSizeEx(text);
      params.width += this._windowBase.padding * 2;
      params.width = Math.round(params.width);
      params.height += this._windowBase.padding;
      params.height = Math.round(params.height);
      let isTips = params.width != width || params.height != height;
      if (isTips) {
        let text1 = "推荐" + id + "变量精灵大小为:";
        let text2 = "宽:" + params.width + "高:" + params.height;
        console.info(text1, text2);
      }
    };
  }

  function windowBaseAttribute(args) {
    var { backgroundType, fontBold, fontItalic, fontSize } = args;
    var { outlineColor, outlineWidth, textColor, windowskin } = args;
    if (windowskin) {
      this.windowskin = ImageManager.loadSystem(windowskin);
    }
    this.setBackgroundType(Number(backgroundType));
    this.backColor = function () {
      return args.background_color || "transparent";
    };
    this.contents.fontBold = String(fontBold) === "true" ? true : false;
    this.contents.fontItalic = String(fontItalic) === "true" ? true : false;
    this.resetFontSettings = function () {
      this.contents.fontFace = $gameSystem.mainFontFace();
      this.contents.fontSize = Number(fontSize) || $gameSystem.mainFontSize();
      this.resetTextColor();
    };
    this.resetTextColor = function () {
      this.changeTextColor(textColor);
      this.changeOutlineColor(outlineColor);
      this.contents.outlineWidth = Number(outlineWidth);
    };
  }

  function refreshVariableSprite(args) {
    creatBitmap.bind(this)(args);
    saveVariableSpriteData.bind($gameSystem)(args);
  }

  function saveVariableSpriteData(args) {
    let id = args.id;
    this._variablesList[$gameMap.mapId()] = this._variablesList[
      $gameMap.mapId()
    ] || [null];
    if (this._variablesList[$gameMap.mapId()][id]) {
      let keys = Object.keys(args);
      for (let key of keys) {
        this._variablesList[$gameMap.mapId()][id][key] = args[key];
      }
    } else {
      this._variablesList[$gameMap.mapId()][id] = args;
    }
  }
})();
