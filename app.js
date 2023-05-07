// Handsontable을 생성하는 함수
// function createHandsontable() {
//   var container = document.getElementById('hot');
//   var hot = new Handsontable(container, {
//       data: [[]], // 초기 데이터
//       rowHeaders: true, // 행 헤더 사용 여부
//       colHeaders: ['날짜', '내용', '지출', '수입'], // 열 헤더
//       contextMenu: true, // 우클릭 메뉴 사용 여부
//       minRows:  21, // 최소 행 개수
//       minCols: colHeaders.length // 최소 열 개수
//   });
//   return hot;
// }var colHeaders = ['날짜', '내용', '지출', '수입'];

var colHeaders = ['날짜', '제품명', '원가', '수입',''];

function createHandsontable() {
    var container = document.getElementById('hot');
    var hot = new Handsontable(container, {
        data: [[]], // 초기 데이터
        rowHeaders: true, // 행 헤더 사용 여부
        colHeaders: colHeaders, // 열 헤더
        contextMenu: true, // 우클릭 메뉴 사용 여부
        minRows:  21, // 최소 행 개수
        minCols: colHeaders.length // 최소 열 개수
    });
    return hot;
}

// SheetJS로부터 데이터를 읽어오는 함수
function readExcelFile(file, callback) {
  var reader = new FileReader();
  reader.onload = function (e) {
    var data = e.target.result;
    var workbook = XLSX.read(data, { type: "binary" });
    var sheet_name_list = workbook.SheetNames;
    var sheet = workbook.Sheets[sheet_name_list[0]];
    var json_data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    callback(json_data);
  };
  reader.readAsBinaryString(file);
}

// 파일 업로드 이벤트 핸들러
function handleFileSelect(evt) {
  var files = evt.target.files;
  if (files.length === 0) {
    return;
  }
  var file = files[0];
  readExcelFile(file, function (data) {
    hot.loadData(data);
  });
}

// 페이지 로드 시 Handsontable 생성
var hot = createHandsontable();

// 파일 업로드 이벤트 등록
var fileInput = document.getElementById("file-input");
fileInput.addEventListener("change", handleFileSelect, false);

// 서버 URL
const SERVER_URL = "http://example.com/save-data";

// 데이터 전송 함수
function sendDataToServer(data) {
  // Ajax 요청 생성
  const xhr = new XMLHttpRequest();

  // POST 메소드, JSON 데이터 전송 설정
  xhr.open("POST", SERVER_URL);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  // 데이터 전송
  xhr.send(JSON.stringify(data));
}
