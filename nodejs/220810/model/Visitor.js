const Visitor = ( Sequelize, DataTypes ) => {
    //Sequelize는 model/indexedDB.js에서의 sequelize    
    //DataTypes는 model/indexedDB.js에서의 Sequelize 

    const model = Sequelize.define(
        'visitor', 
        {
            // create ~~ (id int not null auto_increment primary key)
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            // name varchar(10) not null
            name: {
                type: DataTypes.STRING(10),
                allowNull: false,
            },
            //comment  mediumtext
            comment: {
                type: DataTypes.TEXT('medium'),
            }
        },
        {
            tableName: 'visitor',
            freezeTableName: true,
            // charset: 'utf8',
            // collate: 'utf8_general_ci',
            timestamps: false,// true로 지정하게 되면 등록된 시간과 수정된 시간을 갖는 컬럼이 만들어진다.

        }
    );
    return model;
}

module.exports = Visitor;