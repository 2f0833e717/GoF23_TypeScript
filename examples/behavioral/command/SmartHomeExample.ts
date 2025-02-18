/**
 * コマンドパターンの使用例
 * 
 * スマートホームデバイスの制御をコマンドパターンを使用して実装した例です。
 * 各デバイスの操作をコマンドとしてカプセル化し、実行履歴の管理や取り消し機能を提供します。
 */
import { SmartHomeController } from '../../src/behavioral/command/SmartHomeController';
import { SmartLight } from '../../src/behavioral/command/devices/SmartLight';
import { Thermostat } from '../../src/behavioral/command/devices/Thermostat';
import { LightPowerCommand, LightBrightnessCommand } from '../../src/behavioral/command/commands/LightCommands';
import { ThermostatTemperatureCommand, ThermostatModeCommand } from '../../src/behavioral/command/commands/ThermostatCommands';

export function runCommandExample(): void {
    console.log('=== コマンドパターンの実行例 ===\n');

    // デバイスの作成
    const livingRoomLight = new SmartLight('リビングライト');
    const bedroomLight = new SmartLight('寝室ライト');
    const thermostat = new Thermostat('エアコン');

    // コントローラーの作成
    const controller = new SmartHomeController();

    // リビングライトの操作
    console.log('--- リビングライトの操作 ---');
    console.log(controller.executeCommand(new LightPowerCommand(livingRoomLight, true)));
    console.log(controller.executeCommand(new LightBrightnessCommand(livingRoomLight, 80)));
    console.log(livingRoomLight.toString());
    console.log();

    // 寝室ライトの操作
    console.log('--- 寝室ライトの操作 ---');
    console.log(controller.executeCommand(new LightPowerCommand(bedroomLight, true)));
    console.log(controller.executeCommand(new LightBrightnessCommand(bedroomLight, 30)));
    console.log(bedroomLight.toString());
    console.log();

    // エアコンの操作
    console.log('--- エアコンの操作 ---');
    console.log(controller.executeCommand(new ThermostatModeCommand(thermostat, 'cool')));
    console.log(controller.executeCommand(new ThermostatTemperatureCommand(thermostat, 24)));
    console.log(thermostat.toString());
    console.log();

    // 操作の取り消し
    console.log('--- 操作の取り消し ---');
    console.log(controller.undoLastCommand()); // エアコンの温度設定を取り消し
    console.log(controller.undoLastCommand()); // エアコンのモード設定を取り消し
    console.log(thermostat.toString());
    console.log();

    // 取り消した操作のやり直し
    console.log('--- 操作のやり直し ---');
    console.log(controller.redoLastCommand()); // エアコンのモード設定をやり直し
    console.log(controller.redoLastCommand()); // エアコンの温度設定をやり直し
    console.log(thermostat.toString());
    console.log();

    // コマンド履歴の表示
    console.log('--- コマンド履歴 ---');
    controller.getCommandHistory().forEach(command => {
        console.log(`- ${command.getDescription()}`);
    });
} 