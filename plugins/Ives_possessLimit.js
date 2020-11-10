/*:
 * @target MZ
 * @plugindesc 更改持有上限插件
 * @author Ives
 * @version 1.0.0
 *
 * @param itemNumber
 * @type number
 * @min 1
 * @max 99999
 * @default 99
 * @text 物品持有上限
 * @desc 更改物品持有上限,范围[1~99999],默认99
 *
 * @param weaponNumber
 * @type number
 * @min 1
 * @max 99999
 * @default 99
 * @text 武器持有上限
 * @desc 更改武器持有上限,范围[1~99999],默认99
 *
 * @param armorNumber
 * @type number
 * @min 1
 * @max 99999
 * @default 99
 * @text 防具持有上限
 * @desc 更改防具持有上限(,范围[1~99999],默认99
 *
 * @command possessLimit
 * @text 更改物品持有上限
 * @desc 更改物品持有上限
 *
 * @arg  itemNumber
 * @type number
 * @min 1
 * @max 99999
 * @default 99
 * @text 物品持有上限
 * @desc 更改物品持有上限,范围[1~99999],默认99
 *
 * @arg weaponNumber
 * @type number
 * @min 1
 * @max 99999
 * @default 99
 * @text 武器持有上限
 * @desc 更改武器持有上限,范围[1~99999],默认99
 *
 * @arg armorNumber
 * @type number
 * @min 1
 * @max 99999
 * @default 99
 * @text 防具持有上限
 * @desc 更改防具持有上限,范围[1~99999],默认99
 *
 * @help Ives_possessLimit.js
 * 帮助说明:
 *
 */
(function () {
  "use strict";

  const pluginName = "Ives_possessLimit";
  var itemNumber = Number(
    PluginManager.parameters("Ives_possessLimit").itemNumber
  );
  var weaponNumber = Number(
    PluginManager.parameters("Ives_possessLimit").weaponNumber
  );
  var armorNumber = Number(
    PluginManager.parameters("Ives_possessLimit").armorNumber
  );

  PluginManager.registerCommand(pluginName, "possessLimit", (args) => {
    args = Object.assign({}, args);
    itemNumber = Number(args.itemNumber);
    weaponNumber = Number(args.weaponNumber);
    armorNumber = Number(args.armorNumber);
    saveData.bind($gameSystem)(args);
  });

  // 规范 $gameSystem 初始化
  var Game_System_initialize = Game_System.prototype.initialize;
  Game_System.prototype.initialize = function () {
    Game_System_initialize.apply(this, arguments);
    this._possessLimit = new Proxy({}, {
      get: function (target, propKey, receiver) {
        return Reflect.get(target, propKey, receiver);
      },
      set: function (target, propKey, value, receiver) {
        return Reflect.set(target, propKey, value, receiver);
      }
    });
  };

  function saveData(args) {
    if (this) {
      var keys = Object.keys(args);
      for (let key of keys) {
        this._possessLimit[key] = Number(args[key]);
      }
    }
  }

  // ==========================================================================
  /*
  var Game_Party_maxItems = Game_Party.prototype.maxItems;
  Game_Party.prototype.maxItems = function () {
    var itemNumbe = $gameSystem._possessLimit.itemNumber || itemNumbe;
    var weaponNumber = $gameSystem._possessLimit.weaponNumber || weaponNumber;
    var armorNumber = $gameSystem._possessLimit.armorNumber || armorNumber;
    if (DataManager.isItem(arguments[0])) {
      return itemNumber;
    }
    if (DataManager.isWeapon(arguments[0])) {
      return weaponNumber;
    }
    if (DataManager.isArmor(arguments[0])) {
      return armorNumber;
    }
    return Game_Party_maxItems.apply(this, arguments);
  };
  */
  // 上面代码可简化为
  var _Game_Party_maxItems = Game_Party.prototype.maxItems;
  Game_Party.prototype.maxItems = function () {
    if (DataManager.isItem(arguments[0])) {
      return $gameSystem._possessLimit.itemNumber || itemNumber;
    }
    if (DataManager.isWeapon(arguments[0])) {
      return $gameSystem._possessLimit.weaponNumber || weaponNumber;
    }
    if (DataManager.isArmor(arguments[0])) {
      return $gameSystem._possessLimit.armorNumber || armorNumber;
    }
    return _Game_Party_maxItems.apply(this, arguments);
  };

  // ==========================================================================
  /*
  Window_ItemList.prototype.drawItemNumber = function (item, x, y, width) {
    if (this.needsNumber()) {
      $gameSystem._possessLimit = $gameSystem._possessLimit || {};
      var itemNumbe = $gameSystem._possessLimit.itemNumber || itemNumbe;
      var weaponNumber = $gameSystem._possessLimit.weaponNumber || weaponNumber;
      var armorNumber = $gameSystem._possessLimit.armorNumber || armorNumber;
      var textWidth;
      if (DataManager.isItem(arguments[0])) {
        textWidth = "0".padZero(String(itemNumber).length);
      }
      if (DataManager.isWeapon(arguments[0])) {
        textWidth = "0".padZero(String(weaponNumber).length);
      }
      if (DataManager.isArmor(arguments[0])) {
        textWidth = "0".padZero(String(armorNumber).length);
      }
      this.drawText(":", x, y, width - this.textWidth(textWidth), "right");
      this.drawText($gameParty.numItems(item), x, y, width, "right");
    }
  };
  */
  // 上面代码可简化为
  Window_ItemList.prototype.drawItemNumber = function (item, x, y, width) {
    if (this.needsNumber()) {
      var length = String($gameParty.maxItems(item)).length;
      var textWidth = "0".padZero(length);
      this.drawText(":", x, y, width - this.textWidth(textWidth), "right");
      this.drawText($gameParty.numItems(item), x, y, width, "right");
    }
  };
})();
