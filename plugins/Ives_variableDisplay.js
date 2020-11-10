/*:
 * @target MZ
 * @plugindesc 变量显示插件
 * @author Ives
 * @version 1.0.0
 *
 * @command variableDisplay
 * @text 变量显示
 * @desc 变量显示
 *
 * @arg id
 * @type number
 * @min 1
 * @max 5000
 * @default
 * @text id
 * @desc id
 *
 * @arg x
 * @type number
 * @min 0
 * @max 5000
 * @default 0
 * @text x坐标
 * @desc x坐标
 *
 * @arg y
 * @type number
 * @min 0
 * @max 5000
 * @default 0
 * @text y坐标
 * @desc y坐标
 *
 * @arg width
 * @type number
 * @min 0
 * @max 5000
 * @default 0
 * @text 宽
 * @desc 宽
 *
 * @arg high
 * @type number
 * @min 0
 * @max 5000
 * @default 0
 * @text 高
 * @desc 高
 *
 * @arg background_color
 * @type string
 * @default #000000
 * @text RGB
 * @desc 16进制颜色码(请主动添加'#'号)
 *
 * @arg commonEventId
 * @type common_event
 * @min 1
 * @max 5000
 * @default
 * @text 公共事件id
 * @desc 公共事件id
 *
 * @arg variableId
 * @type variable
 * @min 1
 * @max 5000
 * @default
 * @text 变量id
 * @desc 变量id
 *
 * @arg hidden
 * @type boolean
 * @default false
 * @text 隐藏/显示
 * @desc 血条的隐藏状态, 默认为false(显示)
 *
 * @command hide
 * @text 隐藏
 * @desc 隐藏
 *
 * @arg id
 * @type number
 * @min 1
 * @max 255
 * @default
 * @text ID
 * @desc 该地图内血条的唯一标识
 *
 *
 * @command show
 * @text 显示
 * @desc 显示
 *
 * @arg id
 * @type number
 * @min 1
 * @max 255
 * @default
 * @text ID
 * @desc 该地图内血条的唯一标识
 *
 *
 * @command remove
 * @text 删除
 * @desc 删除
 *
 * @arg id
 * @type number
 * @min 1
 * @max 255
 * @default
 * @text 删除ID
 * @desc 删除该地图内血条的唯一标识
 *
 * @help Ives_variableDisplay.js
 *    待完成:
 *        1.变量图片显示  √
 *        2.变量图片坐标切换  √
 *        3.图片切换场景保存  √
 *        4.删除和隐藏变量图片 √
 *        5.当点击图片时执行绑定的公共事件
 *
 */

(function () {
  "use strict";

  const pluginName = "Ives_variableDisplay";

  PluginManager.registerCommand(pluginName, "variableDisplay", (args) => {
    args = Object.assign({}, args);
    creatVariablesSprite.bind(SceneManager._scene)(args);
  });

  // 初始化$gameSystem._negativeList对象
  var Game_System_initialize = Game_System.prototype.initialize;
  Game_System.prototype.initialize = function () {
    Game_System_initialize.apply(this, arguments);
    this._negativeList = {};
  };

  // 切换场景保存
  var Scene_Map_onMapLoaded = Scene_Map.prototype.onMapLoaded;
  Scene_Map.prototype.onMapLoaded = function () {
    Scene_Map_onMapLoaded.apply(this, arguments);
    let negativeList = $gameSystem._negativeList;
    if (negativeList && negativeList[$gameMap.mapId()]) {
      for (let args of negativeList[$gameMap.mapId()]) {
        args && recover(args);
      }
    }
  };

  // 开始
  function creatVariablesSprite(args) {
    let negativeSprite = SceneManager._scene._negativeSprite;
    let childSprite = isValidSprite(negativeSprite, args.id);
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
    if (!this._negativeSprite) {
      this._negativeSprite = new Sprite_Clickable();
      this.addChild(this._negativeSprite);
    }
    // 创建Sprite_Button
    let negativeChildSprite = new Sprite_Clickable();
    creatChildVariableSprite.bind(negativeChildSprite)(args);
    this._negativeSprite.addChild(negativeChildSprite);
    saveVariableSpriteData.bind($gameSystem)(args);
    this.addChild(this._negativeSprite);
  }

  // 创建图片
  function creatChildVariableSprite(args) {
    this.name = "negative_" + args.id;
    creatBitmap.bind(this)(args);
  }

  // 恢复
  function recover(args) {
    let negativeSprite = SceneManager._scene._negativeSprite;
    let childSprite = isValidSprite(negativeSprite, args.id);
    if (childSprite) {
      refreshVariableSprite.bind(childSprite)(args);
    } else {
      creatVariablesSprite.bind(SceneManager._scene)(args);
    }
  }

  // 当父精灵存在（即相同的id存在）时直接移动和改变颜色
  function refreshVariableSprite(args) {
    if (this) {
      creatBitmap.bind(this)(args);
    }
    saveVariableSpriteData.bind($gameSystem)(args);
  }

  function creatBitmap(args) {
    var { x, y, variableId, background_color, hidden } = args;
    // 宽度高度自定义 textAlign
    var bitmap = new Bitmap(100, 100);
    this.move(Number(x), Number(y));

    bitmap.fillAll(background_color);
    var value = $gameVariables.value(variableId);
    bitmap.drawText(value, 0, 0, 100, 100, "center");
    this.bitmap = bitmap;
    if (String(hidden) === "true") {
      this.hide();
    } else if (String(hidden) === "false") {
      this.show();
    }
  }

  // 保存
  function saveVariableSpriteData(args) {
    let id = args.id;
    this._negativeList[$gameMap.mapId()] = this._negativeList[
      $gameMap.mapId()
    ] || [null];
    if (this._negativeList[$gameMap.mapId()][id]) {
      let keys = Object.keys(args);
      for (let key of keys) {
        this._negativeList[$gameMap.mapId()][id][key] = args[key];
      }
    } else {
      this._negativeList[$gameMap.mapId()][id] = args;
    }
  }

  // 隐藏变量图片
  PluginManager.registerCommand(pluginName, "hide", (args) => {
    args = Object.assign({}, args);
    hideHPSprite.bind(SceneManager._scene._negativeSprite)(args);
  });

  function hideHPSprite(args) {
    args = Object.assign({ hidden: "true" }, args);
    let negativeChildSprite =
      this && this.getChildByName("negative_" + args.id);
    if (negativeChildSprite) {
      negativeChildSprite.hide();
    }
    saveVariableSpriteData.bind($gameSystem)(args);
  }

  // 显示变量图片
  PluginManager.registerCommand(pluginName, "show", (args) => {
    args = Object.assign({ hidden: "false" }, args);
    showHPSprite.bind(SceneManager._scene._negativeSprite)(args);
  });

  function showHPSprite(args) {
    args = Object.assign({ hidden: "false" }, args);
    let negativeChildSprite =
      this && this.getChildByName("negative_" + args.id);
    if (negativeChildSprite) {
      negativeChildSprite.show();
    }
    saveVariableSpriteData.bind($gameSystem)(args);
  }

  // 删除变量图片
  PluginManager.registerCommand(pluginName, "remove", (args) => {
    args = Object.assign({ hidden: "false" }, args);
    removeHPSprite.bind(SceneManager._scene._negativeSprite)(args);
  });

  function removeHPSprite(args) {
    let negativeChildSprite =
      this && this.getChildByName("negative_" + args.id);
    if (negativeChildSprite) {
      this.removeChild(negativeChildSprite);
    }
    let list = $gameSystem._negativeList[$gameMap.mapId()];
    if (list && list[args.id]) {
      delete list[args.id];
    }
  }
})();
