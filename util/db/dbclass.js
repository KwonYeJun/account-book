import mysql2 from "mysql2";

// class db{
//   constructor(host,user,password,database){
//     this.connect(host,user,password,database);
//   }

//   connect(host,user,password,database){
//     this.connection = mysql2.createConnection({
//       host: host,
//       user: user,
//       password: password,
//       database: database
//     });

//   }
// }

// ! db접속 클래스를 만들어 다른 곳에서 접속 계정 값만 입력을 해주면 접속 할 수 있도록 클래스를 활용해 보았다.
class db {
  // * constructor{}로 초기값을 받아 뿌려 주도록 작성 해보았다.
  constructor(host, user, password, database) {
    this.connect(host, user, password, database);
  }
  connect(host, user, password, database) {
    this.connection = mysql2.createConnection({
      host: host,
      user: user,
      password: password,
      database: database,
    });
 
    this.connection.connect((err) => {
      if (err) {
        console.error("error connecting: " + err.stack);
        return;
      }
      console.log("connected as id " + this.connection.threadId);
    });
  }
  query(sql, values, callback) {
    this.connection.query(sql, values, (error, results, fields) => {
      if (error) {
        console.log(error);
        return callback(error, null);
      }
      callback(null, results);
    });
  }
}

// const dbInstance = new db("localhost", "root", "1234", "testdb");
// // console.log(dbInstance);
// dbInstance.query(
//   "desc new_table",
//   (err, rows) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(rows);
//     }
//   }
// );

export default db;
