// テストのタイムアウト時間をグローバルに設定
jest.setTimeout(30000);

// コンソール出力の制御
const originalConsoleLog = console.log;
console.log = (...args) => {
  if (process.env.DEBUG) {
    originalConsoleLog(...args);
  }
};

// テスト実行前の共通処理
beforeAll(() => {
  // グローバルなセットアップ処理
});

// 各テスト実行前の共通処理
beforeEach(() => {
  jest.clearAllMocks();
  jest.clearAllTimers();
});

// 各テスト実行後の共通処理
afterEach(() => {
  // テスト後のクリーンアップ
});

// すべてのテスト実行後の共通処理
afterAll(() => {
  // グローバルなクリーンアップ処理
  console.log = originalConsoleLog;
}); 