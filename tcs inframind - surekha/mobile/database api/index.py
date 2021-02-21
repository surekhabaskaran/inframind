
#from db_config import mysql
import MySqlConnection as connection
from flask import Flask, flash, render_template, request, redirect, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
import os

app = Flask(__name__)

		
@app.route('/add', methods=['POST'])
def add_user():
    conn = connection.ConnectMySql()
    cursor = conn.cursor()
    print(request.args)
    try:
        _name = request.args.get('inputName')
        _email = request.args.get('inputEmail')
        _phonenumber = request.args.get('inputPhonenumber')
        _Age = request.args.get('inputAge')
        _Gender = request.args.get('inputGender')
        _Height = request.args.get('inputHeight')
        _Weight = request.args.get('inputWeight')
        _password = request.args.get('inputpassword')
        # validate the received values
        if request.method=='POST':    
            #do not save password as a plain text
            _hashed_password = generate_password_hash(_password)
            # save edits
            login_insert_query = "INSERT INTO user_Login(Name, Email, Phone_number, Age, Gender, Height, Weight, password)  VALUES(%s, %s, %s, %s, %s, %s,%s, %s )"
            data = (_name, _email,_phonenumber, _Age, _Gender, _Height, _Weight,  _hashed_password)
            #conn = connection.ConnectMySql()
            #cursor = conn.cursor()
            cursor.execute(login_insert_query, data)
           
            conn.commit()
            print("fine")
            user_id = cursor.lastrowid
            
            status = "Success, Your id is" + str(user_id)
            return status
        else:
            return 'Error while adding user'
    except Exception as e:
        print(e)
        return 'exception occured'
        

@app.route('/admin/employee', methods=['GET'])
def get_user():
    conn = connection.ConnectMySql()
    cursor = conn.cursor()
    #print(request.args)
    try:
        # validate the received values
        all_details = []
        if request.method=='GET':    
            user_get_query = "select Name, Email, Phone_number from user_login order by id"
            health_query = "select max(date_and_time), Temperature, Blood_pressure, Respiratory_rate, Sugar_level, Oxygen_level, Pulse, Steps from healthdetails group by User_id order by User_id;"
            #print(cursor.execute(user_get_query,))
            cursor.execute(user_get_query)
            myname= cursor.fetchall()
            cursor.execute(health_query)
            myhealth = cursor.fetchall()
            for i in range(len(myname)):
                data = {
                    "Name":myname[i][0], 
                    "Email":myname[i][1], 
                    "Phone number":myname[i][2],
                    "Date": myhealth[i][0], 
                    "Temperature": myhealth[i][1], 
                    "Blood_pressure" :myhealth[i][2],
                    "Respiratory_rate" :myhealth[i][3],
                    "Sugar_level" :myhealth[i][4],
                    "Oxygen_level" :myhealth[i][5], 
                    "Pulse" :myhealth[i][6],  
                    "Steps" :myhealth[i][7] }
                all_details.append(data)
            
            print(jsonify(all_details))
            print("fetched")
            #user_id = cursor.lastrowid
            #return redirect('/')
            cursor.close() 
            conn.close()
            #return 'User added successfully!'
            '''redirec = "/" + str(user_id)
            print(redirec)
            return redirect(redirec)'''
            return jsonify(all_details)
        else:
            return 'Error while adding user'
    except Exception as e:
        print(e)
        return 'exception occured'

@app.route('/admin/employee/<int:id_user>', methods=['GET'])
def get_user_health(id_user):
    conn = connection.ConnectMySql()
    cursor = conn.cursor()
    all_details=[]
    #print(request.args)
    try:
        # validate the received values
        if request.method=='GET':    
            user_get_query = "select Name, Email, Phone_number, Age, Gender, height, Weight from user_login where id = %s"
            health_query = "select date_and_time, Temperature, Blood_pressure, Respiratory_rate, Sugar_level, Oxygen_level, Pulse, Steps from healthdetails where user_id = %s"
            #print(cursor.execute(user_get_query,))
            cursor.execute(user_get_query,(id_user,))
            myname= cursor.fetchall()
            print(myname)
            cursor.execute(health_query,(id_user,))
            myhealth = cursor.fetchall()
            for name in myname:
                user_data = { "Name":name[0], 
                        "Email":name[1], 
                        "Phone_number":name[2],
                        "Age":name[3],
                        "Gender":name[4],
                        "Height":name[5],
                        "Weight":name[6],
                        }

            print(user_data)
            all_details.append(user_data)

            for i in range(len(myhealth)):
                data = { 
                    "Date": myhealth[i][0], 
                    "Temperature": myhealth[i][1], 
                    "Blood_pressure" :myhealth[i][2],
                    "Respiratory_rate" :myhealth[i][3],
                    "Sugar_level" :myhealth[i][4],
                    "Oxygen_level" :myhealth[i][5], 
                    "Pulse" :myhealth[i][6],  
                    "Steps" :myhealth[i][7] }
                all_details.append(data)
            
            print(all_details)
            #all_details = jsonify(all_details)
            #user_details = jsonify(user_data)
            print("fetched")
            #user_id = cursor.lastrowid
            #return redirect('/')
            cursor.close() 
            conn.close()
            #return 'User added successfully!'
            '''redirec = "/" + str(user_id)
            print(redirec)
            return redirect(redirec)'''
            return jsonify(all_details)
        else:
            return 'Error while adding user'
    except Exception as e:
        print(e)
        return 'exception occured'

    
        
        


if __name__ == "__main__":
    port = int(os.getenv('PORT', 80))
    print("starting on port %d" %(port))
    app.run(port= 80)