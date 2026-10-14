/* 详情页模板渲染自检：直接跑 game.html 里的 innerHTML 模板表达式 */
const fs = require('fs');
const path = require('path');

const dir = __dirname;
const htmlPath = process.argv[2] || path.join(dir, 'game.html');
const html = fs.readFileSync(htmlPath, 'utf8');

// 1. 取出 GAMES / GAME_ORDER
const gamesSrc = fs.readFileSync(path.join(dir, 'games.js'), 'utf8');
const sandbox = {};
const gamesFn = new Function('module', gamesSrc + '\nreturn { GAMES, GAME_ORDER };');
const { GAMES, GAME_ORDER } = gamesFn({});

// 2. 取出模板表达式（detailRoot.innerHTML = ...;）
const a = html.indexOf(".innerHTML = isComing");
if (a < 0) { console.log('!! 未找到 innerHTML 赋值'); process.exit(1); }
const bMark = "// 轮播计数";
const b = html.indexOf(bMark);
if (b < 0) { console.log('!! 未找到 轮播计数 标记'); process.exit(1); }
let expr = html.slice(a + ".innerHTML = ".length, b).trim();
expr = expr.replace(/;\s*$/, '');
// 去掉 isComing 三元里的注释行不影响语法；直接构造函数
let fn;
try {
  fn = new Function('g', 'GAMES', 'GAME_ORDER', 'isComing', 'slides', 'return (' + expr + ');');
} catch (e) {
  console.log('模板语法错误:', e.message);
  process.exit(1);
}

let fail = 0;
for (const id of GAME_ORDER) {
  const g = GAMES[id];
  if (!g) { console.log('缺数据', id); continue; }
  try {
    const out = fn(g, GAMES, GAME_ORDER, !!g.coming, g.gallery || []);
    console.log('OK  ', id.padEnd(10), 'html=' + out.length,
      g.coming ? '(占位页)' : (g.visual ? '(视觉化)' : (g.sellGroups ? '(卖点详解)' : '(普通)')));
  } catch (e) {
    fail++;
    console.log('FAIL', id.padEnd(10), e.message);
  }
}
console.log(fail ? `\n${fail} 个产品渲染失败` : '\n全部产品渲染通过');
