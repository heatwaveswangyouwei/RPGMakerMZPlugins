/*:
 * @target MZ
 * @plugindesc 武器/防具属性随机
 * @author Ives
 * @version 1.0.0
 * 
 * @command weapons
 * @text 武器设置
 * @desc 武器属性设置 
 * 
 * @arg  id
 * @type weapon
 * @min 1
 * @max 99999
 * @default 
 * @text 武器id
 * @desc 对应的武器id值
 * 
 * @arg weaponsMhp
 * @text Mhp(生命)
 * @desc 随机增加生命的数值
 * 
 * @arg  max_Mhp
 * @parent weaponsMhp
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text max_Mhp
 * @desc 随机增加生命的最大值
 * 
 * @arg  min_Mhp
 * @parent weaponsMhp
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text min_Mhp
 * @desc 随机增加生命的最小值
 * 
 * @arg weaponsMmp
 * @text Mmp(法力)
 * @desc 随机增加法力的数值
 * 
 * @arg  max_Mmp
 * @parent weaponsMmp
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text max_Mmp
 * @desc 随机增加法力的最大值
 * 
 * @arg  min_Mmp
 * @parent weaponsMmp
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text min_Mmp
 * @desc 随机增加法力的最小值
 * 
 * @arg weaponsAtk
 * @text Atk(物攻)
 * @desc 随机增加物攻的数值
 * 
 * @arg  max_Atk
 * @parent weaponsAtk
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text max_Atk
 * @desc 随机增加物攻的最大值
 * 
 * @arg  min_Atk
 * @parent weaponsAtk
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text min_Atk
 * @desc 随机增加物攻的最小值
 * 
 * @arg weaponsDef
 * @text Def(物抗)
 * @desc 随机增加物抗的数值
 * 
 * @arg  max_Def
 * @parent weaponsDef
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text max_Def
 * @desc 随机增加物抗的最大值
 * 
 * @arg  min_Def
 * @parent weaponsDef
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text min_Def
 * @desc 随机增加物抗的最小值
 * 
 * @arg weaponsMat
 * @text Mat(魔攻)
 * @desc 随机增加魔攻的数值
 * 
 * @arg  max_Mat
 * @parent weaponsMat
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text max_Mat
 * @desc 随机增加魔攻的最大值
 * 
 * @arg  min_Mat
 * @parent weaponsMat
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text min_Mat
 * @desc 随机增加魔攻的最小值
 * 
 * @arg weaponsMdf
 * @text Mdf(魔抗)
 * @desc 随机增加魔抗的数值
 * 
 * @arg  max_Mdf
 * @parent weaponsMdf
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text max_Mdf
 * @desc 随机增加魔抗的最大值
 * 
 * @arg  min_Mdf
 * @parent weaponsMdf
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text min_Mdf
 * @desc 随机增加魔抗的最小值
 * 
 * @arg weaponsAgi
 * @text Agi(敏捷)
 * @desc 随机增加敏捷的数值
 * 
 * @arg  max_Agi
 * @parent weaponsAgi
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text max_Agi
 * @desc 随机增加敏捷的最大值
 * 
 * @arg  min_Agi
 * @parent weaponsAgi
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text min_Agi
 * @desc 随机增加敏捷的最小值
 * 
 * @arg weaponsLuk
 * @text Luk(幸运)
 * @desc 随机增加幸运的数值
 * 
 * @arg  max_Luk
 * @parent weaponsLuk
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text max_Luk
 * @desc 随机增加幸运的最大值
 * 
 * @arg  min_Luk
 * @parent weaponsLuk
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text min_Luk
 * @desc 随机增加幸运的最小值
 * 
 * @command armors
 * @text 防具设置
 * @desc 防具设置 
 * 
 * @arg  id
 * @type armor
 * @min 1
 * @max 9999
 * @default 
 * @text 防具id
 * @desc 对应的防具id值
 * 
 * @arg armorsMhp
 * @text Mhp(生命)
 * @desc 随机增加生命的数值
 * 
 * @arg  max_Mhp
 * @parent armorsMhp
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text max_Mhp
 * @desc 随机增加生命的最大值
 * 
 * @arg  min_Mhp
 * @parent armorsMhp
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text min_Mhp
 * @desc 随机增加生命的最小值
 * 
 * @arg armorsMmp
 * @text Mmp(法力)
 * @desc 随机增加法力的数值
 * 
 * @arg  max_Mmp
 * @parent armorsMmp
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text max_Mmp
 * @desc 随机增加法力的最大值
 * 
 * @arg  min_Mmp
 * @parent armorsMmp
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text min_Mmp
 * @desc 随机增加法力的最小值
 * 
 * @arg armorsAtk
 * @text Atk(物攻)
 * @desc 随机增加物攻的数值
 * 
 * @arg  max_Atk
 * @parent armorsAtk
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text max_Atk
 * @desc 随机增加物攻的最大值
 * 
 * @arg  min_Atk
 * @parent armorsAtk
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text min_Atk
 * @desc 随机增加物攻的最小值
 * 
 * @arg armorsDef
 * @text Def(物抗)
 * @desc 随机增加物抗的数值
 * 
 * @arg  max_Def
 * @parent armorsDef
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text max_Def
 * @desc 随机增加物抗的最大值
 * 
 * @arg  min_Def
 * @parent armorsDef
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text min_Def
 * @desc 随机增加物抗的最小值
 * 
 * @arg armorsMat
 * @text Mat(魔攻)
 * @desc 随机增加魔攻的数值
 * 
 * @arg  max_Mat
 * @parent armorsMat
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text max_Mat
 * @desc 随机增加魔攻的最大值
 * 
 * @arg  min_Mat
 * @parent armorsMat
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text min_Mat
 * @desc 随机增加魔攻的最小值
 * 
 * @arg armorsMdf
 * @text Mdf(魔抗)
 * @desc 随机增加魔抗的数值
 * 
 * @arg  max_Mdf
 * @parent armorsMdf
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text max_Mdf
 * @desc 随机增加魔抗的最大值
 * 
 * @arg  min_Mdf
 * @parent armorsMdf
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text min_Mdf
 * @desc 随机增加魔抗的最小值
 * 
 * @arg armorsAgi
 * @text Agi(敏捷)
 * @desc 随机增加敏捷的数值
 * 
 * @arg  max_Agi
 * @parent armorsAgi
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text max_Agi
 * @desc 随机增加敏捷的最大值
 * 
 * @arg  min_Agi
 * @parent armorsAgi
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text min_Agi
 * @desc 随机增加敏捷的最小值
 * 
 * @arg armorsLuk
 * @text Luk(幸运)
 * @desc 随机增加幸运的数值
 * 
 * @arg  max_Luk
 * @parent armorsLuk
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text max_Luk
 * @desc 随机增加幸运的最大值
 * 
 * @arg  min_Luk
 * @parent armorsLuk
 * @type number
 * @min 0
 * @max 99999999
 * @default 0
 * @text min_Luk
 * @desc 随机增加幸运的最小值
 * 
 * 
 * @help Ives_attributeRandom.js
 * 
 */

(function () {
    "use strict";

    const pluginName = "Ives_attributeRandom";

    // 武器
    PluginManager.registerCommand(pluginName, "weapons", (args) => {
        args = Object.assign({}, args);
        console.log(args);
        weaponsAttributeRandom.bind($dataWeapons)(args);
    });

    function weaponsAttributeRandom(args){
        var params = this[args.id].params;
        var keys = Object.keys(args);
        var i = 0;
        keys.splice(0,1);
        for (let key of keys) {
            var arg = Number(args[key]);
            var n = 0;
            i++;
            for (let param of params) {
                n++;
                if(i === n){
                    var max = Number(param) + arg;
                    var min = Number(param) - arg;
                    var result = Number(Math.round(Math.random()*(max-min)+min));
                    var x=i-1;
                    params[x] = result;
                }else{
                    continue;
                }
            }
        }
    }

    // 防具
    PluginManager.registerCommand(pluginName, "armors", (args) => {
        args = Object.assign({}, args);
        armorsAttributeRandom.bind($dataArmors)(args);
    });

    function armorsAttributeRandom(args){
        var params = this[args.id].params;
        var keys = Object.keys(args);
        var i = 0;
        keys.splice(0,1);
        for (let key of keys) {  
            var arg = Number(args[key]);
            var n = 0;
            i++;
            for (let param of params) {
                n++;
                if(i === n){
                    var max = Number(param) + arg;
                    var min = Number(param) - arg;
                    var result = Number(Math.round(Math.random()*(max-min)+min));
                    var x=i-1;
                    params[x] = result;
                }else{
                    continue;
                }
            }
        }
    }

 })()