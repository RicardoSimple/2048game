// 历史最高分
const BestScoreKey = '2048BestScore';
// 方格状态和分数
const CellStateKey = '2048CellState';

function Storage() {}

// 存储方格状态和分数
Storage.prototype.setCellState = function({ score, grid }) {
  window.localStorage.setItem(
    CellStateKey,
    JSON.stringify({
      score,
      grid: grid.serialize()
    })
  );
};

// 获取方格信息
Storage.prototype.getCellState = function() {
  const cellState = window.localStorage.getItem(CellStateKey);
  return cellState ? JSON.parse(cellState) : null;
};
//存储最高分
Storage.prototype.setBestScore = function({bestScore}){
  
  window.localStorage.setItem(
    BestScoreKey,JSON.stringify({bestScore})
  );
  
}
//获取最高分
Storage.prototype.getBestScore = function(){
  const bestScore = window.localStorage.getItem(BestScoreKey);
  return bestScore?JSON.parse(bestScore):null;
}