const { exec } = require("child_process");
const { existsSync } = require("fs");

// カバレッジレポートのパスとURL
const path = "coverage/lcov-report/index.html";
const url = "http://localhost:52330/coverage/lcov-report/index.html";

// ファイルの存在確認
if (!existsSync(path)) {
  console.error("Error: " + path + " does not exist. Please run tests first.");
  process.exit(1);
}

// 環境に応じたブラウザ起動コマンドの選択
const openCommand = process.env.WSL_DISTRO_NAME
  ? "wslview"                                    // WSL環境
  : (process.platform === "win32"
    ? "start"                                    // Windows
    : (process.platform === "darwin"
      ? "open"                                   // macOS
      : "xdg-open"                               // その他のLinux
    )
  );

// ブラウザでURLを開く
exec(`${openCommand} ${url}`, (err) => {
  if (err) {
    console.error("ブラウザでの表示に失敗しました:", err);
    process.exit(1);
  }
  console.log(`カバレッジレポートを ${url} で開きました`);
}); 