from mysql.connector import connect, errorcode, Error


def ConnectMySql():
    try:
        mydb = connect(
            host="localhost", user="root", password="root", database="fitnessapp",
        )
        mycursor = mydb.cursor()
        users = [("surekha", "surekha@gmail.com", "9597170515", "12", "female", "123cm", "20kg", "surekha"), ("samana", "samana@gmail.com", "9597120515", "22", "female", "134cm", "40kg", "samana")]
        health = [("123", "120", "122", "120","223","3", "21"),("13", "10", "12", "10","23","23", "121")]
        
        login_create_query = "CREATE TABLE User_Login(id INT primary key AUTO_INCREMENT, Name VARCHAR(100), Email VARCHAR(250) unique, Phone_number VARCHAR(15), Age VARCHAR(10), Gender varchar(20), Height varchar(20), Weight varchar(20), password varchar(100))"
        fitness_create_query = "CREATE TABLE healthdetails(User_id INT , FOREIGN KEY(User_id) REFERENCES User_Login(id), date_and_time DATETIME, Temperature VARCHAR(100), Blood_pressure VARCHAR(250), Respiratory_rate VARCHAR(15), Sugar_level varchar(20), Oxygen_level varchar(20), Pulse varchar(20), Steps varchar(100))"
        
        login_insert_query = "INSERT INTO user_Login(Name, Email, Phone_number, Age, Gender, Height, Weight, password)  VALUES(%s, %s, %s, %s, %s, %s,%s, %s )"
        fitness_insert_query = "INSERT INTO HealthDetails(User_id, date_and_time, Temperature, Blood_pressure, Respiratory_rate, Sugar_level, Oxygen_level, Pulse, Steps) VALUES(%s, NOW(), %s, %s, %s, %s, %s,%s, %s )"
        
        #mycursor = mydb.cursor()
        
        mycursor.execute(login_create_query,)
        mycursor.execute(fitness_create_query,)
        mydb.commit()
        
        for x, user in enumerate(users):
            mycursor.execute(login_insert_query, user)
            mydb.commit()
        #health = [("123", "120", "122", "120","223","3", "21"),("13", "10", "12", "10","23","23", "121")]
        fitness_insert_query = "INSERT INTO HealthDetails(User_id, date_and_time, Temperature, Blood_pressure, Respiratory_rate, Sugar_level, Oxygen_level, Pulse, Steps) VALUES(%s, NOW(), %s, %s, %s, %s, %s,%s, %s )"
        for x in range(1,3):
            for i in range(0,2):
                mycursor.execute(fitness_insert_query, (x,) + health[i])
                mydb.commit()


        select_user_query = "select id from User_Login where Email = %s"
        select_health_query = "select * from HealthDetails where User_id = %s"
        
        search_id = ("surekha@gmail.com",)

        mycursor.execute(select_user_query,search_id)
        myresult = mycursor.fetchall()
        print(myresult)
        for i in myresult:
            print(i[0])

        mycursor.execute(select_health_query,(myresult[0][0],))
        myresult = mycursor.fetchall()
        print(myresult)

        return mydb
    except Error as err:
        if err.errno == errorcode.ER_ACCESS_DENIED_ERROR:
            print("Something is wrong with your user name or password")
            return False
        elif err.errno == errorcode.ER_BAD_DB_ERROR:
            print("Database does not exist")
            return False
        else:
            print(err)
            return False
    

print(ConnectMySql())