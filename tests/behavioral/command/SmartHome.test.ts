/**
 * コマンドパターンのテスト
 * 
 * スマートホームデバイスの制御コマンドとコントローラーの機能をテストします。
 */
import { SmartHomeController } from '../../../src/behavioral/command/SmartHomeController';
import { SmartLight } from '../../../src/behavioral/command/devices/SmartLight';
import { Thermostat } from '../../../src/behavioral/command/devices/Thermostat';
import { LightPowerCommand, LightBrightnessCommand } from '../../../src/behavioral/command/commands/LightCommands';
import { ThermostatTemperatureCommand, ThermostatModeCommand } from '../../../src/behavioral/command/commands/ThermostatCommands';

describe('SmartHome Command Pattern Tests', () => {
    let controller: SmartHomeController;
    let light: SmartLight;
    let thermostat: Thermostat;

    beforeEach(() => {
        controller = new SmartHomeController();
        light = new SmartLight('テストライト');
        thermostat = new Thermostat('テストエアコン');
    });

    describe('SmartLight Commands', () => {
        test('should execute light power commands', () => {
            // 電源をオンにする
            const turnOnResult = controller.executeCommand(new LightPowerCommand(light, true));
            expect(turnOnResult).toContain('オン');
            expect(light.isOn()).toBe(true);

            // 電源をオフにする
            const turnOffResult = controller.executeCommand(new LightPowerCommand(light, false));
            expect(turnOffResult).toContain('オフ');
            expect(light.isOn()).toBe(false);
        });

        test('should execute light brightness commands', () => {
            // ライトをオンにする
            controller.executeCommand(new LightPowerCommand(light, true));

            // 明るさを設定する
            const setBrightnessResult = controller.executeCommand(new LightBrightnessCommand(light, 75));
            expect(setBrightnessResult).toContain('75%');
            expect(light.getBrightness()).toBe(75);
        });

        test('should undo light commands', () => {
            // ライトをオンにして明るさを設定
            controller.executeCommand(new LightPowerCommand(light, true));
            controller.executeCommand(new LightBrightnessCommand(light, 75));

            // 明るさの設定を取り消す
            const undoResult = controller.undoLastCommand();
            expect(undoResult).toContain('明るさ');
            expect(light.getBrightness()).toBe(100); // デフォルトの明るさに戻る
        });
    });

    describe('Thermostat Commands', () => {
        test('should execute thermostat temperature commands', () => {
            // 温度を設定する
            const setTempResult = controller.executeCommand(new ThermostatTemperatureCommand(thermostat, 25));
            expect(setTempResult).toContain('25');
            expect(thermostat.getTemperature()).toBe(25);
        });

        test('should execute thermostat mode commands', () => {
            // モードを設定する
            const setModeResult = controller.executeCommand(new ThermostatModeCommand(thermostat, 'cool'));
            expect(setModeResult).toContain('cool');
            expect(thermostat.getMode()).toBe('cool');
        });

        test('should undo and redo thermostat commands', () => {
            // 温度とモードを設定
            controller.executeCommand(new ThermostatTemperatureCommand(thermostat, 25));
            const lastMode = thermostat.getMode(); // 現在のモードを保存
            controller.executeCommand(new ThermostatModeCommand(thermostat, 'cool'));

            // 設定を取り消す
            controller.undoLastCommand();
            expect(thermostat.getMode()).toBe(lastMode); // 前のモードに戻る

            // 取り消しをやり直す
            controller.redoLastCommand();
            expect(thermostat.getMode()).toBe('cool');
        });
    });

    describe('Command History', () => {
        test('should maintain command history', () => {
            // コマンドを実行
            controller.executeCommand(new LightPowerCommand(light, true));
            controller.executeCommand(new ThermostatTemperatureCommand(thermostat, 25));

            // 履歴を確認
            const history = controller.getCommandHistory();
            expect(history).toHaveLength(2);
            expect(history[0].getDescription()).toContain('電源');
            expect(history[1].getDescription()).toContain('温度');
        });

        test('should clear command history', () => {
            // コマンドを実行
            controller.executeCommand(new LightPowerCommand(light, true));
            controller.executeCommand(new ThermostatTemperatureCommand(thermostat, 25));

            // 履歴をクリア
            controller.clearHistory();
            expect(controller.getCommandHistory()).toHaveLength(0);
            expect(controller.getUndoHistory()).toHaveLength(0);
        });
    });
}); 