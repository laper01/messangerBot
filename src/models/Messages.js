const sqlite3 = require ('sqlite3').verbose();
const dbName = 'later.sqlite';
const db  = new sqlite3.Database(dbName);

db.serialize(()=>{
    const sql = `
    CREATE TABLE IF NOT EXISTS messages 
    (id integer primary key, text TEXT, role TEXT, sessionid TEXT)
    `;
    db.run(sql);
})

class Messages{
    static all(cb){
        db.all('SELECT * FROM messages', cb)
    }
    static find(id, cb){
        db.get('SELECT * FROM messages WHERE id =?', id, cb)
    }
    static create(text, role, sessionid, cb){
        const sql = 'INSERT INTO messages(text, role, sessionid) VALUES(?, ?, ?)';
        db.run(sql, text, role, sessionid, cb);
    }
    static delete(id, cb){
        if(!id) return cb (new Error('please provide id'));
        db.run('DELETE FROM messages WHERE id = ?',id, cb);
    }
}
module.exports = db
module.exports.Messages = Messages;